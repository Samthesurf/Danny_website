/**
 * JSON-LD structured data for DACTION Initiative.
 *
 * Built as a single @graph of cross-linked entities so search engines and LLMs
 * can triangulate the organization ("Daction", "DACTION Initiative") and the
 * founder ("Daniel Olajuyigbe") to one canonical identity - the same pattern
 * used on the portfolio site.
 */
import { SITE, absoluteUrl } from './site-config'

const orgId = `${SITE.url}/#organization`
const founderId = `${SITE.url}/#founder`
const websiteId = `${SITE.url}/#website`

/** Organization + founder Person + WebSite, cross-linked via @id. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NGO',
        '@id': orgId,
        name: SITE.name,
        alternateName: SITE.alternateNames,
        url: SITE.url,
        email: `mailto:${SITE.email}`,
        slogan: SITE.tagline,
        description: SITE.longDescription,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address,
          addressLocality: SITE.location.city,
          addressCountry: SITE.location.countryCode,
        },
        location: {
          '@type': 'Place',
          name: SITE.location.city,
        },
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/assets/logo.png'),
        },
        sameAs: [
          SITE.social.instagram,
          SITE.social.linkedinCompany,
          SITE.social.captainPlanetProfile,
        ],
        founder: { '@id': founderId },
      },
      {
        '@type': 'Person',
        '@id': founderId,
        name: SITE.founder.name,
        jobTitle: SITE.founder.role,
        url: SITE.social.founderLinkedin,
        description:
          'Founder and Executive Director of DACTION Initiative, a youth-led environmental nonprofit in Nigeria. Graduated with First Class Honours in Aeronautical and Astronautical Engineering from Afe Babalola University. Serves on the Captain Planet Foundation Planeteer Alliance Wisdom Council.',
        sameAs: [SITE.social.founderLinkedin, SITE.social.captainPlanetProfile],
        worksFor: { '@id': orgId },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Afe Babalola University' },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE.url,
        name: SITE.name,
        description: SITE.shortDescription,
        inLanguage: 'en',
        publisher: { '@id': orgId },
      },
    ],
  }
}

/** Per-page JSON-LD: Organization + founder + a WebPage for the current route. */
export function pageJsonLd(path: string, name: string, description: string) {
  const canonical = absoluteUrl(path)
  const org = organizationJsonLd()['@graph'] as Record<string, unknown>[]
  const webPage = {
    '@type': 'AboutPage' as string,
    '@id': `${canonical}#webpage`,
    url: canonical,
    name,
    description,
    inLanguage: 'en',
    isPartOf: { '@id': websiteId },
    about: { '@id': orgId },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl(SITE.ogImage),
    },
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [...org, webPage],
  }
}
