// src/app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/_vercel/',
          '/studio/',
          '/crm/',
          '/garanzia/',
          '/grazie',
          '/en/thank-you',
        ],
      },
    ],
    sitemap: 'https://pieroperilli.com/sitemap.xml',
    host: 'https://pieroperilli.com',
  };
}