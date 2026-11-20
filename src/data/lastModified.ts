// Date reali di modifica delle pagine che non hanno una data propria (pagine statiche e case study).
// Quando si cambia una di queste pagine in modo sostanziale, aggiornare qui la data (AAAA-MM-GG):
// finisce nel lastmod della sitemap e, entro un giorno dal deploy, IndexNow avvisa Bing.
// Gli articoli del blog non vanno qui: usano già date / dateModified in posts.ts.
// Chiave: il percorso italiano (per i case study: /portfolio/<slug>, vale anche per la versione EN).
export const pageLastModified: Record<string, string> = {
  '/vfx': '2026-11-20',
  '/stanza-247': '2026-11-18',
  '/portfolio/vecchio-amaro-del-capo': '2026-11-17',
};
