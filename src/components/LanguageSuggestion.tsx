'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Globe, X } from 'lucide-react';
import { getAltLocaleHref } from '@/lib/routes';

/**
 * Shows a subtle banner suggesting the other language version
 * when the user's browser language doesn't match the current locale.
 * 
 * - Only shows once per session (dismissed = remembered)
 * - No redirect, no SEO impact
 * - Disappears after click or dismiss
 */
export default function LanguageSuggestion() {
  const locale = useLocale();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed
    if (sessionStorage.getItem('lang-suggestion-dismissed')) return;

    // Detect browser language
    const browserLang = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || '';
    const isItalianBrowser = browserLang.startsWith('it');

    // Show suggestion if mismatch
    if (locale === 'it' && !isItalianBrowser) {
      setShow(true);
    } else if (locale === 'en' && isItalianBrowser) {
      setShow(true);
    }
  }, [locale]);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem('lang-suggestion-dismissed', 'true');
  };

  if (!show) return null;

  const altHref = getAltLocaleHref(pathname, locale);
  const isIt = locale === 'it';

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-40 animate-fade-in">
      <div className="bg-surface/95 backdrop-blur-md border border-border/50 rounded-lg px-4 py-3 shadow-lg flex items-center gap-3">
        <Globe size={18} className="text-accent shrink-0" />
        <div className="flex-1 min-w-0">
          <a
            href={altHref}
            onClick={dismiss}
            className="text-sm text-text-primary hover:text-accent transition-colors"
          >
            {isIt
              ? '🇬🇧 View this page in English'
              : '🇮🇹 Vedi questa pagina in italiano'}
          </a>
        </div>
        <button
          onClick={dismiss}
          className="text-text-muted hover:text-text-primary transition-colors shrink-0"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
