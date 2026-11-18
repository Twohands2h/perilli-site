import localFont from 'next/font/local'

// Serif dei titoli del film (Cormorant Garamond, SIL OFL — licenza in src/fonts/cormorant-garamond).
// File locali: nessuna dipendenza npm, nessuna chiamata a Google Fonts.
// Caricato solo dalle pagine che lo importano.
export const filmSerif = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/cormorant-garamond-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/cormorant-garamond-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: '../../fonts/cormorant-garamond/cormorant-garamond-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/cormorant-garamond-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})
