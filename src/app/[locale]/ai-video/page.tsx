import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Video Production Italia | Generazione Video AI Professionale | Piero Perilli',
  description: 'AI video production professionale in Italia. Video generati con AI (Runway, Veo, Kling) integrati nel workflow di un VFX artist con 20+ anni di esperienza.',
};

export default function AIVideoPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <ServicePageTemplate
      title="AI Video Production: L'Intelligenza Artificiale Guidata dall'Esperienza"
      subtitle="AI Video"
      description="Video generati con intelligenza artificiale (Runway, Veo, Kling), integrati nel workflow professionale di chi fa VFX da oltre 20 anni. L'AI senza esperienza produce rumore. L'AI con 20 anni di occhio produce risultati che funzionano."
      ctaLabel={locale === 'it' ? 'Parliamone' : "Let's talk"}
      ctaHref={locale === 'it' ? '/contatti' : '/en/contact'}
    />
  );
}
