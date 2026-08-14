/**
 * Centralized site configuration - single source of truth for the DACTION
 * Initiative's public identity. Mirrors the portfolio site's `site-config.ts`
 * so SEO/GEO surfaces (metadata, JSON-LD, sitemap, robots, llms.txt, Open Graph)
 * all read from one place. Change this file to migrate domains or update brand.
 *
 * NOTE: SEO terms the site is being tuned for ("Daction", "Daction Initiative",
 * "Daniel Olajuyigbe") are encoded here and in ./meta.ts + ./jsonld.ts so they
 * appear in titles, descriptions, structured data, and llms.txt consistently.
 */

export const SITE = {
  url: 'https://dactioninitiative.com',
  name: 'DACTION Initiative',
  // Alternate names / search variants. "Daction" (lowercase, single word) is a
  // common misspelling that should still resolve to the org.
  alternateNames: [
    'DACTION Initiative',
    'Daction',
    'Daction Initiative',
    'DACTION Initiative Nigeria',
    'DACTION Initiative Lekki',
    'DACTION nonprofit',
    'DACTION Lagos',
    'Daction environmental initiative',
  ],
  tagline: 'Youth-led environmental action, from Lekki, Lagos, Nigeria.',
  shortDescription:
    'DACTION Initiative is a youth-led environmental nonprofit based in Lekki, Lagos, Nigeria, running conservation, clean energy, and community education programs across Nigeria.',
  longDescription:
    'DACTION Initiative is a youth-led environmental nonprofit founded in 2022 by Daniel Olajuyigbe and based in Lekki, Lagos, Nigeria. It runs hands-on conservation, clean energy, and community education programs - including beach cleanups, tree planting, school recycling education, and a hydrogen energy summit - across Lagos, Ondo, and Ogun States. DACTION is a five-time internationally funded organization, backed by the Captain Planet Foundation and ThinkOcean, with delivery partner RESWAYE.',
  founder: {
    name: 'Daniel Olajuyigbe',
    role: 'Founder & Executive Director',
  },
  email: 'dactioninitiative@gmail.com',
  address: 'Chevy View Estate, Chevron Drive, Lekki, Lagos, Nigeria.',
  location: {
    country: 'Nigeria',
    countryCode: 'NG',
    city: 'Lekki, Lagos, Nigeria',
  },
  social: {
    instagram: 'https://www.instagram.com/daction_initiative/',
    linkedinCompany: 'https://www.linkedin.com/company/daction-initiative',
    founderLinkedin: 'https://www.linkedin.com/in/daniel-olajuyigbe/',
    captainPlanetProfile:
      'https://captainplanetfoundation.org/about/our-people/daniel-olajuyigbe/',
  },
  ogImage: '/assets/og.png',
} as const

export type SiteConfig = typeof SITE

/** Resolve a site-relative path to an absolute URL. */
export const absoluteUrl = (path = '/') => {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}
