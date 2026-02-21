// Root layout — pass-through for next-intl.
// html/body tags are in [locale]/layout.tsx.
// This is the recommended pattern for next-intl with App Router.

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
