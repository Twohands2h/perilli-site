import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Piero Perilli — Lavori Selezionati VFX, Motion, 3D',
  description: 'Portfolio di lavori selezionati: VFX, motion graphics, animazione 3D, color grading e post-produzione per cinema, advertising e brand.',
};

export default function PortfolioPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <section className="section-padding">
      <div className="section-container">
        <p className="section-title">Portfolio</p>
        <h1 className="text-display-sm md:text-display-md font-bold text-text-primary mb-6">
          Lavori selezionati
        </h1>
        <p className="text-text-muted text-sm italic">
          Sistema portfolio con casi studio in fase di sviluppo (Settimana 4).
        </p>
      </div>
    </section>
  );
}
