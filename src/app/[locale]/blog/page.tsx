import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Piero Perilli — VFX, Motion Graphics, AI e Post Produzione',
  description: 'Articoli su VFX, motion graphics, AI video production, color grading e post-produzione. Breakdown, tutorial e trend del settore.',
};

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <section className="section-padding">
      <div className="section-container">
        <p className="section-title">Blog</p>
        <h1 className="text-display-sm md:text-display-md font-bold text-text-primary mb-6">
          Risorse
        </h1>
        <p className="text-text-muted text-sm italic">
          Blog in fase di setup (Settimana 6).
        </p>
      </div>
    </section>
  );
}
