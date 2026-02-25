'use client';

import { useEffect } from 'react';
import { useConsent } from './CookieConsent';

// ── GA4 Measurement ID ──────────────────────────────────────
// Replace with your actual Measurement ID from GA4
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// ── Microsoft Clarity Project ID ────────────────────────────
// Replace with your actual Clarity project ID
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'XXXXXXXXXX';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
  }
}

export default function AnalyticsScripts() {
  const { consented } = useConsent();

  useEffect(() => {
    if (!consented) return;
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return; // Skip if placeholder

    // Avoid double-loading
    if (document.getElementById('ga4-script')) return;

    // ── Google Analytics 4 ────────────────────────────────
    const gaScript = document.createElement('script');
    gaScript.id = 'ga4-script';
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    gaScript.async = true;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
    });
  }, [consented]);

  useEffect(() => {
    if (!consented) return;
    if (CLARITY_PROJECT_ID === 'XXXXXXXXXX') return; // Skip if placeholder

    // Avoid double-loading
    if (document.getElementById('clarity-script')) return;

    // ── Microsoft Clarity ─────────────────────────────────
    const clarityScript = document.createElement('script');
    clarityScript.id = 'clarity-script';
    clarityScript.textContent = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window,document,"clarity","script","${CLARITY_PROJECT_ID}");
    `;
    document.head.appendChild(clarityScript);
  }, [consented]);

  return null;
}

// ── Helper: track GA4 custom events ───────────────────────
// Usage: trackEvent('form_submit', { form_name: 'contact' })
export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}
