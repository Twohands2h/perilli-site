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
 * Get a partial openGraph object with the correct per-page URL.
 * Merge this into the page's openGraph to override the layout's url.
 */
export function getPageOpenGraph(itPath: string, locale: string) {
  return {
    url: getPageOgUrl(itPath, locale),
  };
}
