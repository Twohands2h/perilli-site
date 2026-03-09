'use client';

import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';

// ── Context — same interface as original ────────────────────
const ConsentContext = createContext<{
  consented: boolean;
  setConsented: (v: boolean) => void;
}>({
  consented: false,
  setConsented: () => { },
});

export function useConsent() {
  return useContext(ConsentContext);
}

// ── Cookie helpers ─────────────────────────────────────────
const COOKIE_NAME = 'pp_consent';
const COOKIE_DAYS = 180; // 6 months — Garante minimum

function readCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.split('; ').find(c => c.startsWith(`${COOKIE_NAME}=`));
  return match ? match.split('=')[1] : null;
}

function writeCookie(value: string) {
  const expires = new Date(Date.now() + COOKIE_DAYS * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${COOKIE_NAME}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

// ── Provider ───────────────────────────────────────────────
export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consented, setConsentedState] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = readCookie();
    if (stored === 'true') {
      setConsentedState(true);
    }
    setLoaded(true);
  }, []);

  const setConsented = useCallback((value: boolean) => {
    setConsentedState(value);
    writeCookie(value ? 'true' : 'false');
  }, []);

  if (!loaded) return <>{children}</>;

  return (
    <ConsentContext.Provider value={{ consented, setConsented }}>
      {children}
    </ConsentContext.Provider>
  );
}

// ── Banner UI — GDPR Garante compliant ─────────────────────
export default function CookieConsent() {
  const locale = useLocale();
  const isIt = locale === 'it';
  const { setConsented } = useConsent();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    const stored = readCookie();
    if (stored === null) {
      setVisible(true);
    }
  }, []);

  // Listen for reopen from footer button
  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener('pp-show-cookie-banner', handler);
    return () => window.removeEventListener('pp-show-cookie-banner', handler);
  }, []);

  if (!visible) return null;

  const handleAcceptAll = () => {
    setConsented(true);
    setVisible(false);
  };

  const handleRejectAll = () => {
    setConsented(false);
    writeCookie('false');
    setVisible(false);
  };

  const handleSavePreferences = () => {
    if (analyticsChecked) {
      setConsented(true);
    } else {
      setConsented(false);
      writeCookie('false');
    }
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-surface border border-border rounded-lg shadow-2xl p-5 md:p-6 relative">
        {/* X close = reject all (Garante) */}
        <button
          onClick={handleRejectAll}
          className="absolute top-3 right-3 text-text-muted hover:text-text-primary transition-colors p-1"
          aria-label={isIt ? 'Chiudi senza accettare' : 'Close without accepting'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <p className="text-sm text-text-secondary leading-relaxed mb-4 pr-6">
          {isIt
            ? 'Questo sito utilizza cookie tecnici necessari al funzionamento e cookie analytics di terze parti (Google Analytics, Microsoft Clarity) per analizzare il traffico. I cookie analytics vengono attivati solo con il tuo consenso.'
            : 'This site uses necessary technical cookies and third-party analytics cookies (Google Analytics, Microsoft Clarity) to analyze traffic. Analytics cookies are only activated with your consent.'}
          {' '}
          <Link
            href={isIt ? '/privacy' : '/en/privacy'}
            className="text-accent underline underline-offset-2 hover:text-text-primary transition-colors"
          >
            {isIt ? 'Privacy e Cookie Policy' : 'Privacy & Cookie Policy'}
          </Link>
        </p>

        {showDetails && (
          <div className="mb-4 space-y-3 text-sm border-t border-border pt-4">
            <label className="flex items-start gap-3 cursor-not-allowed">
              <input type="checkbox" checked disabled className="w-4 h-4 mt-0.5 rounded accent-accent" />
              <span className="text-text-secondary">
                <strong className="text-text-primary">{isIt ? 'Necessari' : 'Necessary'}</strong>
                {' — '}
                {isIt
                  ? 'Cookie tecnici per il funzionamento del sito e la memorizzazione delle preferenze. Sempre attivi.'
                  : 'Technical cookies for site functionality and storing preferences. Always active.'}
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={analyticsChecked}
                onChange={(e) => setAnalyticsChecked(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded accent-accent cursor-pointer"
              />
              <span className="text-text-secondary">
                <strong className="text-text-primary">Analytics</strong>
                {' — '}
                {isIt
                  ? 'Google Analytics e Microsoft Clarity per statistiche sul traffico e comportamento degli utenti.'
                  : 'Google Analytics and Microsoft Clarity for traffic statistics and user behavior.'}
              </span>
            </label>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button onClick={handleAcceptAll} className="btn-primary text-xs py-2.5 px-5">
            {isIt ? 'Accetta tutti' : 'Accept all'}
          </button>
          <button
            onClick={handleRejectAll}
            className="text-xs font-medium text-text-muted hover:text-text-secondary transition-colors py-2.5 px-4 border border-border rounded-md"
          >
            {isIt ? 'Rifiuta tutti' : 'Reject all'}
          </button>
          {!showDetails ? (
            <button
              onClick={() => setShowDetails(true)}
              className="text-xs font-medium text-accent hover:text-text-primary transition-colors py-2.5 px-4"
            >
              {isIt ? 'Personalizza' : 'Customize'}
            </button>
          ) : (
            <button
              onClick={handleSavePreferences}
              className="text-xs font-medium text-accent hover:text-text-primary transition-colors py-2.5 px-4 border border-accent/30 rounded-md"
            >
              {isIt ? 'Salva preferenze' : 'Save preferences'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}