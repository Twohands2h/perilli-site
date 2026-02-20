import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animazione 3D Prodotto Roma | Character e Ambienti | Piero Perilli',
  description: 'Animazione 3D professionale: prodotto, character animation, ambienti e visualizzazione. Dal briefing al render finale.',
};

export default function Animation3DPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <ServicePageTemplate
      title="Animazione 3D: Prodotto, Character e Ambienti"
      subtitle="Animazione 3D"
      description="Prodotto 3D, character animation, ambienti e visualizzazione architettonica. Dal briefing iniziale alla consegna del render finale, con un workflow che integra modellazione, texturing, lighting, animazione e compositing."
      ctaLabel={locale === 'it' ? 'Parliamone' : "Let's talk"}
      ctaHref={locale === 'it' ? '/contatti' : '/en/contact'}
    />
  );
}
