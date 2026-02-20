/**
 * Centralized route helper for localized URLs.
 * 
 * Italian routes use Italian slugs (default, no prefix).
 * English routes use English slugs with /en/ prefix.
 * 
 * Usage:
 *   getLocalizedHref('/chi-sono', 'en') → '/en/about'
 *   getLocalizedHref('/chi-sono', 'it') → '/chi-sono'
 *   getLocalizedHref('/portfolio/along-came-ruby', 'en') → '/en/portfolio/along-came-ruby'
 */

// Map of IT slug → EN slug (only pages that differ)
const enPathMap: Record<string, string> = {
  '/chi-sono': '/about',
  '/post-produzione': '/post-production',
  '/animazione-3d': '/3d-animation',
  '/contatti': '/contact',
};

// Reverse map: EN slug → IT slug
const itPathMap: Record<string, string> = Object.fromEntries(
  Object.entries(enPathMap).map(([it, en]) => [en, it])
);

/**
 * Get the localized href for a given IT path and target locale.
 * Always pass the Italian version of the path.
 */
export function getLocalizedHref(itPath: string, locale: string): string {
  if (locale === 'it') return itPath;
  
  // For EN: check if the base path (first segment) has a localized version
  for (const [itSlug, enSlug] of Object.entries(enPathMap)) {
    if (itPath === itSlug || itPath.startsWith(itSlug + '/')) {
      const enPath = itPath.replace(itSlug, enSlug);
      return '/en' + enPath;
    }
  }
  
  // No localized slug — just add /en/ prefix
  return '/en' + itPath;
}

/**
 * Given a pathname (possibly with /en/ prefix and EN slugs),
 * return the canonical IT path.
 * Used by language switch to convert EN URL back to IT URL.
 */
export function toItPath(pathname: string): string {
  // Remove /en prefix
  const path = pathname.replace(/^\/en/, '') || '/';
  
  // Check if any segment is an EN slug and convert back
  for (const [enSlug, itSlug] of Object.entries(itPathMap)) {
    if (path === enSlug || path.startsWith(enSlug + '/')) {
      return path.replace(enSlug, itSlug);
    }
  }
  
  return path;
}

/**
 * Given a pathname (IT slugs, no prefix),
 * return the EN path (with /en/ prefix and EN slugs).
 * Used by language switch.
 */
export function toEnPath(pathname: string): string {
  return getLocalizedHref(pathname, 'en');
}

/**
 * Get the alternate locale href for language switch.
 * Takes current pathname and current locale, returns the path for the other locale.
 */
export function getAltLocaleHref(pathname: string, currentLocale: string): string {
  if (currentLocale === 'it') {
    // IT → EN
    return toEnPath(pathname);
  } else {
    // EN → IT: strip /en, convert EN slugs to IT slugs
    return toItPath(pathname);
  }
}

// Mapping for middleware rewrites: EN slug → IT folder name
export { enPathMap, itPathMap };
