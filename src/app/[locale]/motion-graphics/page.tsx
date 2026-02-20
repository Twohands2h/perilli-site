import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motion Graphics Roma | Animazioni per Brand e Campagne | Piero Perilli',
  description: 'Motion graphics professionali per brand, campagne pubblicitarie e titoli. Dal concept all\'animazione finale con workflow integrato.',
};

export default function MotionGraphicsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <ServicePageTemplate
      title="Motion Graphics per Brand, Campagne e Digital"
      subtitle="Motion Graphics"
      description="Animazioni per brand, campagne pubblicitarie, titolazioni e contenuti social. Dal concept creativo all'animazione finale, passando per storyboard e styleframe. Un workflow che integra motion design, compositing e color in un flusso unico."
      ctaLabel={locale === 'it' ? 'Parliamone' : "Let's talk"}
      ctaHref={locale === 'it' ? '/contatti' : '/en/contact'}
    />
  );
}
