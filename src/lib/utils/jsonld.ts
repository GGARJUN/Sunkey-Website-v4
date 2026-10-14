/**
 * JSON-LD structured data generators.
 * Each function returns a plain object — inject as a <script type="application/ld+json">
 * via Next.js metadata.other or as an inline <script> in the page component.
 */

const SITE_URL  = 'https://sunkeydesignsystems.com'
const ORG_NAME  = 'Sunkey Design Systems'
const ORG_URL   = SITE_URL
const AREA_SERVED = [
  { '@type': 'Country',   name: 'United States' },
  { '@type': 'Continent', name: 'Europe'        },
]

/* ── Organization (used as provider on all pages) ── */
export const orgSchema = {
  '@type':      'Organization',
  '@id':        `${ORG_URL}/#organization`,
  name:         ORG_NAME,
  url:          ORG_URL,
  logo:         `${SITE_URL}/images/sunkey-logo.png`,
  address: {
    '@type':           'PostalAddress',
    addressLocality:   'Chennai',
    addressRegion:     'Tamil Nadu',
    addressCountry:    'IN',
  },
  contactPoint: {
    '@type':       'ContactPoint',
    email:         'info@sunkeydesignsystems.com',
    contactType:   'sales',
    areaServed:    ['US', 'GB', 'DE', 'NL', 'SE'],
    availableLanguage: 'English',
  },
  sameAs: ['https://linkedin.com/company/sunkey-design-systems'],
}

/* ── Homepage ── */
export function homePageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type':       'WebSite',
        '@id':         `${SITE_URL}/#website`,
        url:           SITE_URL,
        name:          ORG_NAME,
        publisher:     { '@id': `${ORG_URL}/#organization` },
      },
      {
        ...orgSchema,
        '@context': 'https://schema.org',
      },
    ],
  }
}

/* ── Service page ── */
export function servicePageJsonLd({
  slug,
  name,
  description,
}: {
  slug:        string
  name:        string
  description: string
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type':       'Service',
        '@id':         `${SITE_URL}/services/${slug}/#service`,
        name:          `${name} — ${ORG_NAME}`,
        description,
        serviceType:   name,
        provider:      { '@id': `${ORG_URL}/#organization` },
        areaServed:    AREA_SERVED,
        url:           `${SITE_URL}/services/${slug}`,
      },
      {
        '@type':     'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',     item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
          { '@type': 'ListItem', position: 3, name,             item: `${SITE_URL}/services/${slug}` },
        ],
      },
    ],
  }
}

/* ── Industry page ── */
export function industryPageJsonLd({
  slug,
  name,
  description,
}: {
  slug:        string
  name:        string
  description: string
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type':       'WebPage',
        '@id':         `${SITE_URL}/industries/${slug}/#webpage`,
        url:           `${SITE_URL}/industries/${slug}`,
        name:          `${name} Electronics Engineering — ${ORG_NAME}`,
        description,
        isPartOf:      { '@id': `${SITE_URL}/#website` },
        about: {
          '@type': 'Thing',
          name,
        },
        provider: { '@id': `${ORG_URL}/#organization` },
      },
      {
        '@type':     'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',       item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE_URL}/industries` },
          { '@type': 'ListItem', position: 3, name,               item: `${SITE_URL}/industries/${slug}` },
        ],
      },
    ],
  }
}
