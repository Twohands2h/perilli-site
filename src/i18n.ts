import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['it', 'en'] as const;
export const defaultLocale = 'it' as const;

export type Locale = (typeof locales)[number];

// Route mappings for localized URLs
export const pathnames = {
  '/': '/',
  '/chi-sono': {
    it: '/chi-sono',
    en: '/about',
  },
  '/vfx': '/vfx',
  '/motion-graphics': '/motion-graphics',
  '/animazione-3d': {
    it: '/animazione-3d',
    en: '/3d-animation',
  },
  '/post-produzione': {
    it: '/post-produzione',
    en: '/post-production',
  },
  '/ai-video': '/ai-video',
  '/portfolio': '/portfolio',
  '/blog': '/blog',
  '/contatti': {
    it: '/contatti',
    en: '/contact',
  },
  '/privacy': '/privacy',
} as const;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});