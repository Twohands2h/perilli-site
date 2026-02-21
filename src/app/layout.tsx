// Root layout wraps non-locale pages (404, etc.)
// The [locale]/layout.tsx handles locale-specific pages with full metadata.

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
