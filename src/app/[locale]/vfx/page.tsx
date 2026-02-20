import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Effetti Visivi Professionali Roma | VFX per Cinema e Spot | Piero Perilli',
  description: 'Compositing, green screen, set extension, tracking e clean-up professionale a Roma. VFX per cinema, advertising e digital con 20+ anni di esperienza.',
};

export default function VFXPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <ServicePageTemplate
      title="Effetti Visivi (VFX) per Cinema, Advertising e Digital"
      subtitle="VFX"
      description="Compositing, green screen, set extension, camera tracking, clean-up e rotoscoping. 20+ anni di esperienza su film, spot pubblicitari e contenuti digitali. Un flusso integrato che unisce VFX, color grading e finishing in un unico workflow."
      ctaLabel={locale === 'it' ? 'Parliamone' : "Let's talk"}
      ctaHref={locale === 'it' ? '/contatti' : '/en/contact'}
    />
  );
}
