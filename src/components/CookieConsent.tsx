'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';

// ── Context for consent state ──────────────────────────────
const ConsentContext = createContext<{ consented: boolean; setConsented: (v: boolean) => void }>({
  consented: false,
  setConsented: () => {},
});

export function useConsent() {
  return useContext(ConsentContext);
}

// ── Provider: wraps app, reads/writes cookie ───────────────
export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consented, setConsentedState] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = document.cookie.split('; ').find(c => c.startsWith('pp_consent='));
    if (stored?.split('=')[1] === 'true') {
      setConsentedState(true);
    }
    setLoaded(true);
  }, []);

  const setConsented = (value: boolean) => {
    setConsentedState(value);
    // Cookie expires in 365 days
    const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `pp_consent=${value}; expires=${expires}; path=/; SameSite=Lax`;
  };

  if (!loaded) return <>{children}</>;

  return (
    <ConsentContext.Provider value={{ consented, setConsented }}>
      {children}
    </ConsentContext.Provider>
  );
}

// ── Banner UI ──────────────────────────────────────────────
export default function CookieConsent() {
  const locale = useLocale();
  const isIt = locale === 'it';
  const { consented, setConsented } = useConsent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner only if no consent cookie exists
    const stored = document.cookie.split('; ').find(c => c.startsWith('pp_consent='));
    if (!stored) {
      setVisible(true);
    }
  }, []);

  if (!visible || consented) return null;

  const handleAccept = () => {
    setConsented(true);
    setVisible(false);
  };

  const handleDecline = () => {
    setConsented(false);
    // Set cookie to 'false' so banner doesn't show again for 30 days
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `pp_consent=false; expires=${expires}; path=/; SameSite=Lax`;
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-surface border border-border rounded-lg shadow-2xl p-5 md:p-6">
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {isIt
            ? 'Questo sito utilizza cookie tecnici e contenuti di terze parti (YouTube) per mostrare video. Accettando, acconsenti al caricamento di contenuti esterni.'
            : 'This site uses technical cookies and third-party content (YouTube) to display videos. By accepting, you consent to loading external content.'}
          {' '}
          <Link
            href={isIt ? '/privacy' : '/en/privacy'}
            className="text-accent underline underline-offset-2 hover:text-text-primary transition-colors"
          >
            {isIt ? 'Privacy Policy' : 'Privacy Policy'}
          </Link>
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAccept}
            className="btn-primary text-xs py-2.5 px-5"
          >
            {isIt ? 'Accetta' : 'Accept'}
          </button>
          <button
            onClick={handleDecline}
            className="text-xs font-medium text-text-muted hover:text-text-secondary transition-colors py-2.5 px-4"
          >
            {isIt ? 'Solo necessari' : 'Necessary only'}
          </button>
        </div>
      </div>
    </div>
  );
}
