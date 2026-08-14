/**
 * Per-route metadata for DACTION Initiative. Single source of truth for titles,
 * descriptions, keywords, canonical URLs, and Open Graph per page. Mirrors the
 * portfolio site's generateMetadata but framework-free so the static pre-render
 * script can call it directly.
 */
import { SITE } from './site-config'
import { pageJsonLd } from './jsonld'
import { programs, teamMembers } from '../data/site'

export interface RouteHead {
  path: string
  title: string
  description: string
  keywords: string[]
  ogType: 'website' | 'article'
  ogImage?: string
}

/** The shared keyword pool baked into every page (org identity terms). */
const BASE_KEYWORDS = [
  ...SITE.alternateNames,
  'Youth-led environmental nonprofit',
  'Environmental nonprofit Nigeria',
  'Lekki Lagos environmental organization',
  'Clean energy Nigeria',
  'Youth climate action',
  'Nigeria tree planting',
  'Beach cleanup Lagos',
  'Daniel Olajuyigbe',
]

function make(path: string, p: Partial<RouteHead>): RouteHead {
  return {
    path,
    title: '',
    description: SITE.shortDescription,
    ogType: 'website',
    ogImage: SITE.ogImage,
    ...p,
    keywords: [...BASE_KEYWORDS, ...(p.keywords ?? [])],
  }
}

const programBySlug = new Map(programs.map((p) => [p.slug, p]))
const memberBySlug = new Map(teamMembers.map((m) => [m.slug, m]))

export function getHead(path: string): RouteHead {
  const clean = path === '/' ? '/' : path.replace(/\/+$/, '') || '/'
  const suffix = ` | ${SITE.name}`
  const canonicalPath = clean === '/' ? '/' : `${clean}/`

  // program detail
  if (clean.startsWith('/programs/')) {
    const slug = clean.split('/programs/')[1]
    const prog = slug ? programBySlug.get(slug) : undefined
    if (prog) {
      return make(canonicalPath, {
        title: `${prog.title}${suffix}`,
        description: prog.blurb,
        ogType: 'article',
        ogImage: prog.hero ?? prog.image ?? SITE.ogImage,
        keywords: [
          prog.title,
          prog.tag,
          prog.location,
          prog.focus,
          'DACTION program',
          'DACTION campaign',
        ],
      })
    }
  }

  // team detail
  if (clean.startsWith('/team/')) {
    const slug = clean.split('/team/')[1]
    const member = slug ? memberBySlug.get(slug) : undefined
    if (member) {
      return make(canonicalPath, {
        title: `${member.name} - ${member.role}${suffix}`,
        description: `${member.name} is ${member.role.toLowerCase()} at ${SITE.name}. ${member.blurb}`,
        ogType: 'article',
        ogImage: member.headshot ?? SITE.ogImage,
        keywords: [member.name, `${member.role} ${SITE.name}`, 'DACTION team'],
      })
    }
  }

  switch (clean) {
    case '/':
      return make(canonicalPath, {
        title: `${SITE.name} | Youth-Led Environmental Action, Nigeria`,
        description: SITE.shortDescription,
      })
    case '/about':
      return make(canonicalPath, {
        title: `About ${SITE.name}${suffix}`,
        description: `${SITE.name} - history, mission, and impact of a youth-led environmental nonprofit in Lekki, Lagos, Nigeria. Founded by Daniel Olajuyigbe in 2022.`,
        keywords: ['About DACTION', 'DACTION history', 'DACTION mission'],
      })
    case '/programs':
      return make(canonicalPath, {
        title: `Programs & Campaigns${suffix}`,
        description: `${SITE.name}'s programs: beach cleanups, tree planting, school recycling education, and a hydrogen energy summit across Nigeria.`,
        keywords: ['DACTION programs', 'DACTION campaigns', 'youth climate programs Nigeria'],
      })
    case '/gallery':
      return make(canonicalPath, {
        title: `Gallery${suffix}`,
        description: `Photos from ${SITE.name} programs and cleanup campaigns across Nigeria.`,
        keywords: ['DACTION photos', 'DACTION gallery', 'environmental campaign photos'],
      })
    case '/team':
      return make(canonicalPath, {
        title: `Team${suffix}`,
        description: `Meet the ${SITE.name} team - youth leaders running environmental programs across Nigeria, led by founder Daniel Olajuyigbe.`,
        keywords: ['DACTION team', 'DACTION volunteers', 'Daniel Olajuyigbe'],
      })
    case '/partners':
      return make(canonicalPath, {
        title: `Partners & Recognition${suffix}`,
        description: `The funders and partners behind ${SITE.name}: Captain Planet Foundation, ThinkOcean, and RESWAYE.`,
        keywords: ['DACTION partners', 'Captain Planet Foundation Nigeria', 'DACTION funding'],
      })
    case '/contact':
      return make(canonicalPath, {
        title: `Contact ${SITE.name}${suffix}`,
        description: `Get in touch with ${SITE.name}, a youth-led environmental nonprofit based in Lekki, Lagos, Nigeria.`,
        keywords: ['Contact DACTION', 'DACTION email', 'partner with DACTION'],
      })
    default:
      return make('/404', {
        title: `Page not found${suffix}`,
        description: SITE.shortDescription,
      })
  }
}

/** Convenience: returns the JSON-LD block for a route as a JS object. */
export function getJsonLd(path: string) {
  const head = getHead(path)
  return pageJsonLd(head.path, head.title, head.description)
}
