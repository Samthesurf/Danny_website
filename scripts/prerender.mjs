#!/usr/bin/env node
/**
 * Static pre-render (SSG) step for the DACTION Site SPA.
 *
 * Runs AFTER `vite build`:
 *   1. Spins up a Vite SSR instance and renders the real React app for every
 *      route (MemoryRouter at each path), producing the full page body HTML.
 *   2. Wraps it in a complete HTML document with per-route <head> (title, meta
 *      description, keywords, canonical, Open Graph, Twitter cards, JSON-LD).
 *   3. Writes dist/<route>/index.html for each route so crawlers that do not
 *      run JavaScript still get every page's content and metadata - the same
 *      crawlability the portfolio site gets from Next.js SSR.
 *   4. Regenerates dist/sitemap.xml from the same route list.
 *
 * robots.txt and the IndexNow key file live in public/ (static, always copied).
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')

const SITE_URL = 'https://dactioninitiative.com'
const TODAY = new Date().toISOString()

/** Escape a string for use inside an HTML attribute / text node. */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Serialize JSON-LD safely (escape < so it can never terminate the script tag). */
function jsonLdScript(obj) {
  const raw = JSON.stringify(obj)
  const safe = raw.replace(/</g, '\\u003c')
  return `<script type="application/ld+json">${safe}</script>`
}

function abs(url) {
  if (url.startsWith('http')) return url
  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`
}

function buildHead(head) {
  const ogImage = abs(head.ogImage || '/assets/og.png')
  const kw = head.keywords.join(', ')
  return [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" />`,
    `<meta name="keywords" content="${esc(kw)}" />`,
    `<link rel="canonical" href="${abs(head.path)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<meta property="og:type" content="${esc(head.ogType)}" />`,
    `<meta property="og:title" content="${esc(head.title)}" />`,
    `<meta property="og:description" content="${esc(head.description)}" />`,
    `<meta property="og:url" content="${abs(head.path)}" />`,
    `<meta property="og:image" content="${esc(ogImage)}" />`,
    `<meta property="og:site_name" content="DACTION Initiative" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(head.title)}" />`,
    `<meta name="twitter:description" content="${esc(head.description)}" />`,
    `<meta name="twitter:image" content="${esc(ogImage)}" />`,
  ].join('\n    ')
}

async function main() {
  // 1. Read the built entry HTML to reuse the hashed asset tags.
  let templateHtml
  try {
    templateHtml = readFileSync(join(DIST, 'index.html'), 'utf8')
  } catch {
    console.error('[prerender] dist/index.html not found. Run `npm run build` first.')
    process.exit(1)
  }

  const stylesheetTag = (templateHtml.match(/<link rel="stylesheet"[^>]*>/i) || [''])[0]
  const moduleScripts =
    templateHtml.match(/<script[^>]*src="[^"]+\.js"[^>]*><\/script>/gi) || []
  const iconLink = (templateHtml.match(/<link rel="icon"[^>]*>/i) || [''])[0]
  const appleIcon = (templateHtml.match(/<link rel="apple-touch-icon"[^>]*>/i) || [''])[0]

  // 2. Boot Vite SSR to load + transform the app.
  const { createServer } = await import('vite')
  const vite = await createServer({
    root: ROOT,
    logLevel: 'error',
    server: { middlewareMode: true },
    appType: 'custom',
  })
  try {
    const { renderApp } = await vite.ssrLoadModule('/src/seo/ssr-entry.tsx')
    const { getHead, getJsonLd } = await vite.ssrLoadModule('/src/seo/meta.ts')
    const { programs, teamMembers } = await vite.ssrLoadModule('/src/data/site.ts')

    const routes = [
      { path: '/', priority: 1.0, freq: 'weekly' },
      { path: '/about', priority: 0.8, freq: 'monthly' },
      { path: '/programs', priority: 0.8, freq: 'monthly' },
      { path: '/gallery', priority: 0.5, freq: 'monthly' },
      { path: '/team', priority: 0.8, freq: 'monthly' },
      { path: '/partners', priority: 0.7, freq: 'monthly' },
      { path: '/contact', priority: 0.8, freq: 'monthly' },
      ...programs.map((p) => ({
        path: `/programs/${p.slug}`,
        priority: 0.7,
        freq: 'monthly',
      })),
      ...teamMembers.map((m) => ({
        path: `/team/${m.slug}`,
        priority: 0.5,
        freq: 'monthly',
      })),
    ]

    let written = 0
    for (const route of routes) {
      const head = getHead(route.path)
      const body = await renderApp(route.path)
      const jsonLd = jsonLdScript(getJsonLd(route.path))
      const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${iconLink || ''}
    ${appleIcon || ''}
    ${buildHead(head)}
    ${jsonLd}
    ${stylesheetTag}
  </head>
  <body>
    <div id="root">${body}</div>
    ${moduleScripts.join('')}
  </body>
</html>
`
      const outFile =
        route.path === '/' ? 'index.html' : join(route.path.replace(/^\//, ''), 'index.html')
      const outPath = join(DIST, outFile)
      mkdirSync(dirname(outPath), { recursive: true })
      writeFileSync(outPath, html)
      written++
      console.log(`[prerender] rendered ${route.path}`)
    }

    // 3. Sitemap
    const urlTags = routes
      .map(
        (r) => `  <url>
    <loc>${r.path === '/' ? abs('/') : abs(r.path) + '/'}</loc>
    <lastmod>${TODAY.slice(0, 10)}</lastmod>
    <changefreq>${r.freq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
      )
      .join('\n')
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlTags}
</urlset>
`
    writeFileSync(join(DIST, 'sitemap.xml'), sitemap)
    console.log(`[prerender] wrote sitemap.xml (${routes.length} URLs)`)

    // 4. 404 page
    const head404 = getHead('/404')
    const body404 = await renderApp('/definitely-not-a-real-route')
    writeFileSync(
      join(DIST, '404.html'),
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${iconLink || ''}
    ${buildHead(head404)}
    ${jsonLdScript(getJsonLd('/404'))}
    ${stylesheetTag}
  </head>
  <body>
    <div id="root">${body404}</div>
    ${moduleScripts.join('')}
  </body>
</html>
`,
    )
    console.log(`[prerender] wrote 404.html (${written + 1} total pages)`)
  } finally {
    await vite.close()
  }
}

main().catch((err) => {
  console.error('[prerender] failed:', err)
  process.exit(1)
})
