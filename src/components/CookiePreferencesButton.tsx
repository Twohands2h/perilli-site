'use client';

import { useLocale } from 'next-intl';

export default function CookiePreferencesButton() {
  const locale = useLocale();
  const isIt = locale === 'it';

  return (
    <button
      onClick={() => window.dispatchEvent(new Event('pp-show-cookie-banner'))}
      className="transition-colors hover:text-text-secondary"
    >
      {isIt ? 'Preferenze Cookie' : 'Cookie Preferences'}
    </button>
  );
}
