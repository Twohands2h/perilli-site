import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi Sono | Piero Perilli — Artigiano Digitale, VFX Artist, Roma',
  description: '20+ anni di post-produzione professionale. Dalla precisione dell\'orologiaio alla padronanza dei pixel. Film, spot, brand di primo livello e ora AI.',
};

export default function ChiSonoPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <article>
      <section className="section-padding">
        <div className="section-container max-w-text">
          <p className="section-title">Chi Sono</p>
          <h1 className="text-display-sm md:text-display-md font-bold text-text-primary mb-6">
            Dalla precisione degli ingranaggi alla padronanza dei pixel.
          </h1>
          <p className="text-text-muted text-sm italic">
            Contenuto completo in fase di scrittura (Settimana 5).
          </p>
        </div>
      </section>
    </article>
  );
}
