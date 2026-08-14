#!/usr/bin/env node
/**
 * Post-build script: notify Bing/IndexNow about the sitemap on every deploy.
 * Runs automatically after `npm run deploy` via the "postdeploy" hook.
 * Reads the full URL list from the live sitemap so every page is covered.
 * Best-effort: a failure must never block a deploy.
 */
const SITE_URL = 'https://dactioninitiative.com'
const INDEXNOW_KEY = '3339cc3c57c13129b2dc284e6fd3f312'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL, { redirect: 'follow' })
  if (!res.ok) throw new Error(`sitemap request failed: HTTP ${res.status}`)
  const xml = await res.text()
  const urls = []
  const re = /<loc>([^<]+)<\/loc>/g
  let m
  while ((m = re.exec(xml)) !== null) {
    const u = m[1].trim()
    try { if (new URL(u).hostname === new URL(SITE_URL).hostname) urls.push(u) } catch {}
  }
  return urls
}

async function main() {
  let urls
  try { urls = await fetchSitemapUrls() } catch (err) {
    console.error(`[indexnow] could not read sitemap: ${err.message}`)
    process.exitCode = 1
    return
  }
  if (urls.length === 0) { console.log('[indexnow] no URLs, skipping.'); return }

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  })
  if (res.ok) {
    console.log(`[indexnow] submitted ${urls.length} URL(s) - HTTP ${res.status} OK`)
  } else {
    const detail = await res.text().catch(() => '')
    console.error(`[indexnow] IndexNow failed - HTTP ${res.status} ${detail}`)
  }
}

main()
