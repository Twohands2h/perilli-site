/**
 * SEO metadata helpers for per-page canonical, alternates, and OG url.
 * 
 * Usage in any page's generateMetadata:
 *   import { getPageAlternates, getPageOgUrl } from '@/lib/seo';
 *   
 *   alternates: getPageAlternates('/vfx', locale),
 *   openGraph: { url: getPageOgUrl('/vfx', locale), ... }
 */

import { getLocalizedHref } from '@/lib/routes';

const BASE_URL = 'https://pieroperilli.com';

/**
 * Generate canonical + hreflang alternates for a specific page.
 * Takes the IT path (e.g. '/vfx', '/chi-sono', '/blog/my-slug') and current locale.
 */
export function getPageAlternates(itPath: string, locale: string) {
  const itUrl = `${BASE_URL}${itPath}`;
  const enUrl = `${BASE_URL}${getLocalizedHref(itPath, 'en')}`;
  const canonicalUrl = locale === 'it' ? itUrl : enUrl;

  return {
    canonical: canonicalUrl,
    languages: {
      'it-IT': itUrl,
      'en': enUrl,
      'x-default': itUrl,
    },
  };
}

/**
 * Get the full OG URL for the current page and locale.
 */
export function getPageOgUrl(itPath: string, locale: string): string {
  return locale === 'it'
    ? `${BASE_URL}${itPath}`
    : `${BASE_URL}${getLocalizedHref(itPath, 'en')}`;
}

/**
 * Get a complete openGraph object for any page.
 * Includes url, image, type, locale — so subpages don't miss OG tags.
 */
export function getPageOpenGraph(itPath: string, locale: string) {
  const isIt = locale === 'it';
  return {
    url: getPageOgUrl(itPath, locale),
    type: 'website' as const,
    locale: isIt ? 'it_IT' : 'en_US',
    alternateLocale: isIt ? 'en_US' : 'it_IT',
    siteName: 'Piero Perilli — Artigiano Digitale',
    images: [
      {
        url: `${BASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: isIt
          ? 'Piero Perilli — VFX Artist e Artigiano Digitale, Roma'
          : 'Piero Perilli — VFX Artist and Digital Craftsman, Rome',
      },
    ],
  };
}
