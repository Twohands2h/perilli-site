import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post Produzione Video Roma | Montaggio, Color Grading, Finishing | Piero Perilli',
  description: 'Post-produzione video professionale a Roma. Montaggio, color grading certificato DaVinci Resolve e finishing per cinema, advertising e brand.',
};

export default function PostProductionPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <ServicePageTemplate
      title="Post Produzione: Montaggio, Color Grading e Finishing"
      subtitle="Post Produzione"
      description="Montaggio narrativo e pubblicitario, color grading professionale con DaVinci Resolve certificato, finishing e delivery. Un workflow integrato che elimina i passaggi di mano tra montatore, colorist e VFX artist."
      ctaLabel={locale === 'it' ? 'Parliamone' : "Let's talk"}
      ctaHref={locale === 'it' ? '/contatti' : '/en/contact'}
    />
  );
}
