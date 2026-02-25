'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { CheckCircle, ArrowLeft, Calendar, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '@/components/AnalyticsScripts';

export default function ThankYouContent() {
  const locale = useLocale();
  const isIt = locale === 'it';

  useEffect(() => {
    // Fire GA4 conversion event
    trackEvent('form_submit', {
      form_name: 'contact',
      page_location: window.location.href,
    });
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="section-container max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle size={64} className="text-accent mx-auto mb-6" strokeWidth={1.5} />
          <h1
            className="font-bold text-text-primary mb-4"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', lineHeight: '1.1' }}
          >
            {isIt ? 'Messaggio ricevuto!' : 'Message received!'}
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            {isIt
              ? 'Grazie per avermi scritto. Leggo personalmente ogni messaggio e rispondo entro 24 ore.'
              : 'Thank you for reaching out. I personally read every message and reply within 24 hours.'}
          </p>
        </div>

        {/* Quick actions */}
        <div className="mt-10 p-6 md:p-8 bg-surface rounded-lg border border-border">
          <p className="text-sm text-text-muted uppercase tracking-wider font-medium mb-4">
            {isIt ? 'Nel frattempo' : 'In the meantime'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://calendly.com/pieroperilli-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <Calendar size={16} />
              {isIt ? 'Prenota una call' : 'Book a call'}
            </a>
            <a
              href="https://wa.me/393920187759"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Back to site */}
        <div className="mt-8">
          <Link
            href={isIt ? '/' : '/en'}
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            {isIt ? 'Torna alla homepage' : 'Back to homepage'}
          </Link>
        </div>
      </div>
    </section>
  );
}
