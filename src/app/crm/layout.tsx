// src/app/crm/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM — Piero Perilli',
  robots: { index: false, follow: false },
}

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body style={{ margin: 0, padding: 0, background: '#1a1a1a', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
