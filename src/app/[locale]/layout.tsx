import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent, { ConsentProvider } from '@/components/CookieConsent';
import { PersonSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { getPageAlternates, getPageOgUrl } from '@/lib/seo';
import '../../app/globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isIt = locale === 'it';

  return {
    title: isIt
      ? 'Piero Perilli | VFX Artist & Post Produzione Video Roma | Effetti Visivi, Motion Graphics, AI'
      : 'Piero Perilli | VFX Artist & Video Post Production Rome | Visual Effects, Motion Graphics, AI',
    description: isIt
      ? 'VFX, motion graphics, color grading e post-produzione video a Roma. Piero Perilli: artigiano digitale con 20+ anni di esperienza per cinema, advertising e brand.'
      : 'VFX, motion graphics, color grading and video post-production in Rome, Italy. Piero Perilli: digital craftsman with 20+ years of experience for cinema, advertising and brands.',
    metadataBase: new URL('https://pieroperilli.com'),
    alternates: getPageAlternates('/', locale),
    openGraph: {
      type: 'website',
      locale: isIt ? 'it_IT' : 'en_US',
      alternateLocale: isIt ? 'en_US' : 'it_IT',
      url: getPageOgUrl('/', locale),
      siteName: 'Piero Perilli — Artigiano Digitale',
      title: isIt
        ? 'Piero Perilli | VFX Artist & Post Produzione Video Roma'
        : 'Piero Perilli | VFX Artist & Video Post Production Rome',
      description: isIt
        ? 'VFX, motion graphics, color grading e post-produzione video a Roma. 20+ anni di artigianato visivo.'
        : 'VFX, motion graphics, color grading and video post-production in Rome. 20+ years of visual craftsmanship.',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: isIt
            ? 'Piero Perilli — VFX Artist e Artigiano Digitale, Roma'
            : 'Piero Perilli — VFX Artist and Digital Craftsman, Rome',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isIt
        ? 'Piero Perilli | VFX Artist & Post Produzione Video Roma'
        : 'Piero Perilli | VFX Artist & Video Post Production Rome',
      description: isIt
        ? 'Artigiano digitale con 20+ anni di esperienza. VFX, motion graphics, color grading per cinema e advertising.'
        : 'Digital craftsman with 20+ years of experience. VFX, motion graphics, color grading for cinema and advertising.',
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-sans bg-background text-text-primary min-h-screen flex flex-col">
        <PersonSchema />
        <LocalBusinessSchema />
        <NextIntlClientProvider messages={messages}>
          <ConsentProvider>
            <Header />
            <main className="flex-1 pt-16 md:pt-20">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </ConsentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
