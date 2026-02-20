import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref,
}: ServicePageProps) {
  return (
    <article>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="section-container">
          <p className="section-title">{subtitle}</p>
          <h1 className="text-display-sm md:text-display-md font-bold text-text-primary mb-6">
            {title}
          </h1>
          <div className="max-w-text">
            <p className="text-text-secondary leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Video showreel placeholder */}
      <section className="section-padding border-b border-border">
        <div className="section-container">
          <div className="aspect-video bg-surface-light rounded-lg border border-border flex items-center justify-center">
            <span className="text-text-muted text-sm">Video showreel di servizio</span>
          </div>
        </div>
      </section>

      {/* Content area — will be filled with 800+ words SEO content in Settimana 3 */}
      <section className="section-padding border-b border-border">
        <div className="section-container max-w-text">
          <p className="text-text-muted text-sm italic">
            Contenuto SEO in fase di scrittura (Settimana 3).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="section-container text-center">
          <h2 className="text-display-sm font-bold text-text-primary mb-4">
            Hai un progetto in mente?
          </h2>
          <Link href={ctaHref} className="btn-primary">
            {ctaLabel}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
