'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Mail, Phone, MapPin, Calendar, MessageCircle, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContattiPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isIt = locale === 'it';

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback: open mailto
        const subject = encodeURIComponent(`Nuovo contatto da ${formData.name}`);
        const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.open(`mailto:info@pieroperilli.com?subject=${subject}&body=${body}`, '_self');
        setStatus('sent');
      }
    } catch {
      // Fallback: open mailto
      const subject = encodeURIComponent(`Nuovo contatto da ${formData.name}`);
      const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.open(`mailto:info@pieroperilli.com?subject=${subject}&body=${body}`, '_self');
      setStatus('sent');
    }
  };

  return (
    <section className="pt-24 pb-10 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left — Form */}
          <div>
            <p className="section-title">{t('title')}</p>
            <h1
              className="font-bold text-text-primary mb-3"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', lineHeight: '1.1' }}
            >
              {t('subtitle')}
            </h1>

            {status === 'sent' ? (
              <div className="mt-8 p-6 bg-surface rounded border border-accent/30 text-center">
                <CheckCircle size={32} className="text-accent mx-auto mb-3" />
                <p className="text-text-primary font-medium mb-1">
                  {isIt ? 'Messaggio inviato!' : 'Message sent!'}
                </p>
                <p className="text-text-secondary text-sm">
                  {isIt ? 'Rispondo personalmente entro 24 ore.' : 'I personally reply within 24 hours.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 md:mt-8 space-y-4 md:space-y-5">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
                    {t('nameLabel')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
                    {t('messageLabel')}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('messagePlaceholder')}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-error">
                    <AlertCircle size={14} />
                    {isIt ? 'Errore nell\'invio. Riprova o scrivi a info@pieroperilli.com' : 'Send error. Try again or write to info@pieroperilli.com'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending'
                    ? (isIt ? 'Invio in corso...' : 'Sending...')
                    : t('send')
                  }
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right — Contact options */}
          <div className="space-y-6 md:space-y-8 lg:pt-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary mb-4">
                {t('orCall')}
              </h3>
              <div className="space-y-3 md:space-y-4">
                <a
                  href="https://calendly.com/pieroperilli-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-surface rounded border border-border transition-all duration-300 hover:border-accent/30"
                >
                  <Calendar size={18} className="text-accent shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {isIt ? 'Prenota una call' : 'Book a call'}
                    </p>
                    <p className="text-xs text-text-muted">
                      {isIt ? '30 minuti, gratuita' : '30 minutes, free'}
                    </p>
                  </div>
                </a>
                <a
                  href="https://wa.me/393920187759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-surface rounded border border-border transition-all duration-300 hover:border-accent/30"
                >
                  <MessageCircle size={18} className="text-accent shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">WhatsApp</p>
                    <p className="text-xs text-text-muted">
                      {isIt ? 'Risposta rapida' : 'Quick reply'}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="divider" />

            <div className="space-y-3">
              <a
                href="mailto:info@pieroperilli.com"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Mail size={14} className="shrink-0" /> info@pieroperilli.com
              </a>
              <a
                href="tel:+393920187759"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Phone size={14} className="shrink-0" /> +39 392 018 7759
              </a>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="shrink-0" /> Roma / Venezia, Italia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}