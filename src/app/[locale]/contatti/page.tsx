'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Calendar, MessageCircle } from 'lucide-react';

export default function ContattiPage() {
  const t = useTranslations('contact');

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="section-title">{t('title')}</p>
            <h1 className="text-display-sm font-bold text-text-primary mb-3">
              {t('subtitle')}
            </h1>
            <form className="mt-8 space-y-5">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
                  {t('nameLabel')}
                </label>
                <input type="text" required className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
                  {t('emailLabel')}
                </label>
                <input type="email" required className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
                  {t('messageLabel')}
                </label>
                <textarea rows={5} required placeholder={t('messagePlaceholder')} className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                {t('send')}
              </button>
            </form>
          </div>
          <div className="space-y-8 lg:pt-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary mb-4">
                {t('orCall')}
              </h3>
              <div className="space-y-4">
                <a href="https://calendly.com/pieroperilli-info/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-surface rounded border border-border transition-all duration-300 hover:border-accent/30">
                  <Calendar size={18} className="text-accent" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Prenota una call</p>
                    <p className="text-xs text-text-muted">30 minuti, gratuita</p>
                  </div>
                </a>
                <a href="https://wa.me/393920187759" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-surface rounded border border-border transition-all duration-300 hover:border-accent/30">
                  <MessageCircle size={18} className="text-accent" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">WhatsApp</p>
                    <p className="text-xs text-text-muted">Risposta rapida</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="divider" />
            <div className="space-y-3">
              <a href="mailto:info@pieroperilli.com" className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors">
                <Mail size={14} /> info@pieroperilli.com
              </a>
              <a href="tel:+393920187759" className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors">
                <Phone size={14} /> +39 392 018 7759
              </a>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} /> Roma / Venezia, Italia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
