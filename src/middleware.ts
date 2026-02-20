import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

// EN slug → IT folder name (what Next.js actually has on disk)
const enToItRewrites: Record<string, string> = {
  '/en/about': '/en/chi-sono',
  '/en/post-production': '/en/post-produzione',
  '/en/3d-animation': '/en/animazione-3d',
  '/en/contact': '/en/contatti',
};

// Old EN URLs (IT slugs with /en/) → new EN URLs (EN slugs)
const redirects: Record<string, string> = {
  '/en/chi-sono': '/en/about',
  '/en/post-produzione': '/en/post-production',
  '/en/animazione-3d': '/en/3d-animation',
  '/en/contatti': '/en/contact',
};

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false,
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Redirect old EN URLs to new localized ones (301)
  if (redirects[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = redirects[pathname];
    return NextResponse.redirect(url, 301);
  }

  // 2. Rewrite new EN URLs to actual folder structure
  if (enToItRewrites[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = enToItRewrites[pathname];
    return NextResponse.rewrite(url);
  }

  // 3. Default next-intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
