import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import ThankYouContent from './ThankYouContent';

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
    title: isIt ? 'Grazie! | Piero Perilli' : 'Thank You! | Piero Perilli',
    description: isIt
      ? 'Messaggio ricevuto. Rispondo personalmente entro 24 ore.'
      : 'Message received. I personally reply within 24 hours.',
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function GraziePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <ThankYouContent />;
}
