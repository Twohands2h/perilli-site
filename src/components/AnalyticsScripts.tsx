'use client';

import { useEffect } from 'react';
import { useConsent } from './CookieConsent';

// ── GA4 Measurement ID ──────────────────────────────────────
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// ── Microsoft Clarity Project ID ────────────────────────────
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'XXXXXXXXXX';

// ── Dove si misura ──────────────────────────────────────────
// Solo sul dominio di produzione: niente dati da localhost né dalle anteprime Vercel.
const PRODUCTION_HOST = 'pieroperilli.com';
// Aree private: mai misurate.
const PRIVATE_PATH = /^\/(en\/)?(crm|studio)(\/|$)/;
// Per escludere il proprio browser: aprire una volta https://pieroperilli.com/?pp_noga=1
// (per riattivare: ?pp_noga=0). Vale per quel browser, finché non si cancellano i dati del sito.
const OPT_OUT_KEY = 'pp_noga';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
  }
}

function isPrivatePath(): boolean {
  return PRIVATE_PATH.test(window.location.pathname);
}

function trackingAllowed(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.location.hostname !== PRODUCTION_HOST) return false;
  if (isPrivatePath()) return false;
  try {
    const flag = new URLSearchParams(window.location.search).get(OPT_OUT_KEY);
    if (flag === '1') localStorage.setItem(OPT_OUT_KEY, '1');
    if (flag === '0') localStorage.removeItem(OPT_OUT_KEY);
    if (localStorage.getItem(OPT_OUT_KEY) === '1') return false;
  } catch {
    // storage non disponibile: si misura normalmente
  }
  return true;
}

// Link che sono un contatto diretto. Il form contatti è contato dal server (vedi /api/contact).
function contactMethod(href: string): string | null {
  if (href.startsWith('mailto:')) return 'email';
  if (href.startsWith('tel:')) return 'phone';
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href)) return 'whatsapp';
  if (/^https?:\/\/(www\.)?calendly\.com\//i.test(href)) return 'calendly';
  return null;
}

function videoParams(video: HTMLVideoElement): Record<string, string> {
  const src = video.currentSrc || video.getAttribute('src') || '';
  const path = src.startsWith(window.location.origin) ? src.slice(window.location.origin.length) : src;
  const file = decodeURIComponent((path.split('/').pop() || '').split('?')[0]);
  return {
    video_title: video.dataset.title || video.getAttribute('aria-label') || file || document.title,
    video_url: path.slice(0, 200),
    video_provider: 'html5',
  };
}

export default function AnalyticsScripts() {
  const { consented } = useConsent();

  // ── Google Analytics 4 ────────────────────────────────────
  useEffect(() => {
    if (!consented) {
      // Consenso revocato dopo il caricamento: GA smette di usare i cookie
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', { analytics_storage: 'denied' });
      }
      return;
    }
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return; // ID non configurato
    if (!trackingAllowed()) return;

    if (document.getElementById('ga4-script')) {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    // Il banner chiede il consenso solo per le statistiche: niente cookie pubblicitari
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const gaScript = document.createElement('script');
    gaScript.id = 'ga4-script';
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    gaScript.async = true;
    document.head.appendChild(gaScript);
  }, [consented]);

  // ── Contatti diretti e video ──────────────────────────────
  // Un solo ascoltatore per tutto il sito: ogni link email, telefono, WhatsApp o Calendly
  // diventa un evento contact_click, senza toccare i singoli componenti.
  useEffect(() => {
    if (!consented || !trackingAllowed()) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link || isPrivatePath()) return;
      // I link con un evento dedicato (TrackedLink) restano solo con il loro evento
      if (link.dataset.gaEvent) return;
      const method = contactMethod(link.getAttribute('href') || '');
      if (method) trackEvent('contact_click', { contact_method: method });
    };

    // Solo i player con i controlli: i loop decorativi in autoplay non contano
    const userVideo = (e: Event): HTMLVideoElement | null => {
      const v = e.target;
      return v instanceof HTMLVideoElement && v.controls && !isPrivatePath() ? v : null;
    };
    const onPlay = (e: Event) => {
      const v = userVideo(e);
      if (!v || v.dataset.gaStarted) return;
      v.dataset.gaStarted = '1';
      trackEvent('video_start', videoParams(v));
    };
    const onTimeUpdate = (e: Event) => {
      const v = userVideo(e);
      if (!v || !v.duration || !isFinite(v.duration)) return;
      const percent = (v.currentTime / v.duration) * 100;
      for (const mark of [25, 50, 75]) {
        const key = `gaP${mark}` as const;
        if (percent >= mark && !v.dataset[key]) {
          v.dataset[key] = '1';
          trackEvent('video_progress', { ...videoParams(v), video_percent: mark });
        }
      }
    };
    const onEnded = (e: Event) => {
      const v = userVideo(e);
      if (!v || v.dataset.gaCompleted) return;
      v.dataset.gaCompleted = '1';
      trackEvent('video_complete', videoParams(v));
    };

    document.addEventListener('click', onClick, true);
    // Gli eventi dei video non risalgono il DOM: si ascoltano in fase di cattura
    document.addEventListener('play', onPlay, true);
    document.addEventListener('timeupdate', onTimeUpdate, true);
    document.addEventListener('ended', onEnded, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('play', onPlay, true);
      document.removeEventListener('timeupdate', onTimeUpdate, true);
      document.removeEventListener('ended', onEnded, true);
    };
  }, [consented]);

  // ── Microsoft Clarity ─────────────────────────────────────
  useEffect(() => {
    if (!consented) return;
    if (CLARITY_PROJECT_ID === 'XXXXXXXXXX') return; // ID non configurato
    if (!trackingAllowed()) return;
    if (document.getElementById('clarity-script')) return;

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

// ── Helper: eventi GA4 personalizzati ───────────────────────
// Uso: trackEvent('film_trailer_play', { film: 'stanza-247' })
export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}
