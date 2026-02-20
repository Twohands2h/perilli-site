// Root layout is intentionally minimal.
// html/body tags are in [locale]/layout.tsx
// This file just passes children through.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
