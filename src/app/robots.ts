import type { MetadataRoute } from 'next';

const BASE_URL = 'https://pieroperilli.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // Allow più specifici del Disallow: Google applica la regola
        // con il percorso più lungo, quindi CSS/JS e immagini ottimizzate
        // restano accessibili mentre il resto di /_next/ resta bloccato.
        allow: ['/', '/_next/static/', '/_next/image'],
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
    host: BASE_URL,
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
