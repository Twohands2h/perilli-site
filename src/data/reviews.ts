// Pagine di revisione riservate per i clienti — /review/[slug]
// NON linkate dal menu, NON in sitemap, noindex/nofollow (metadata + header X-Robots-Tag).
// Lo slug contiene un token casuale: il link è l'unica chiave d'accesso.
// Una pagina per progetto: le nuove versioni si aggiungono in testa a `versions`,
// il link inviato al cliente resta sempre lo stesso.
//
// Modalità confronto (`compare`): tutte le voci di `versions` sono montaggi
// alternativi della stessa consegna. Il cliente le guarda nello stesso player,
// passa dall'una all'altra restando sullo stesso frame e sceglie.

/** Vercel Blob (store pubblico del progetto perilli-site). */
export const MEDIA_BASE = 'https://kbfxwlingzf7x5e3.public.blob.vercel-storage.com'

export type ReviewDownload = {
  label: string // es. 'Master 4K'
  spec: string // es. 'H.264 · 3840×2160 · 25 fps'
  size: string // es. '1,2 GB'
  url: string
}

export type ReviewVersion = {
  id: string // 'v1', 'v2'…
  name: string // 'Prima stesura' — in modalità confronto: etichetta breve, es. 'Senza dito'
  date: string // ISO, es. '2026-10-20'
  duration: string // '2:04'
  stream: string // MP4 1080p ottimizzato per lo streaming (faststart)
  poster: string // frame scelto a mano, non il primo
  downloads: ReviewDownload[]
  /** Solo modalità confronto: cosa distingue questo montaggio, in una frase. */
  summary?: string
}

export type ReviewChapter = {
  title: string
  note: string
  /** Secondi dall'inizio. null = non cliccabile finché non lo compili. */
  time: number | null
}

/** Un punto in cui i montaggi alternativi differiscono. */
export type ReviewDifference = {
  title: string
  /** Secondi dall'inizio (primo e ultimo frame del tratto che cambia). */
  from: number
  to: number
  /** Cosa si vede in ciascuna versione, per id: { V1: '…', V2: '…' } */
  byVersion: Record<string, string>
}

export type Review = {
  slug: string
  project: string
  subtitle: string
  client: string
  fps: number
  versions: ReviewVersion[] // la prima è quella corrente (in confronto: tutte correnti)
  intro: string[]
  chapters: ReviewChapter[]
  /** Titolo sopra i capitoli. Se manca, l'elenco compare senza titolo. */
  chaptersTitle?: string
  /** La pagina si rivolge a un gruppo (agenzia): testi al "voi" invece che al "tu". */
  addressPlural?: boolean
  confidentiality: string
  /** Attiva la modalità confronto tra le versioni. */
  compare?: {
    differences: ReviewDifference[]
  }
  /** Anteprima per mail/WhatsApp. Se manca si usa il poster della versione corrente. */
  ogImage?: string
}

// Stesso file per streaming e download: ?download=1 forza il salvataggio.
const ASP_V3 = `${MEDIA_BASE}/ArtSitePark_v03.mp4`
const AR_V3 = `${MEDIA_BASE}/AR_Leggende_spot15_v3.mp4`

export const reviews: Review[] = [
  {
    slug: 'art-site-park-phd8du',
    project: 'ART SITE PARK',
    subtitle: 'Il mondo dentro',
    client: 'Svicom · Le Fornaci',
    fps: 24,

    versions: [
      {
        id: 'v3',
        name: 'Terza stesura',
        date: '2026-11-03',
        duration: '3:13',
        stream: ASP_V3,
        poster: '/images/review/art-site-park/art-site-park-v3-poster.webp',
        downloads: [
          {
            label: 'Video HD',
            spec: 'MP4 H.264 · 1920×1080 · 24 fps · stereo',
            size: '73 MB',
            url: `${ASP_V3}?download=1`,
          },
        ],
      },
    ],

    intro: [
      'Questa è la terza stesura del film: la struttura, il ritmo della salita e il trattamento di ogni mondo, dal mare all’involucro.',
      'Color, sound design, animazioni e titoli sono ancora in lavorazione. In questa fase ci interessa la direzione: se il viaggio funziona, se i murales restano protagonisti, se il passaggio da un piano all’altro è fluido.',
    ],


    // ⚠️ compila `time` (in secondi) per rendere i capitoli cliccabili
    chapters: [
      { title: 'Mare', note: 'Il cemento comincia a respirare', time: null },
      { title: 'Attraversamento', note: 'Non guardiamo il murale, ci siamo dentro', time: null },
      { title: 'Bosco', note: 'La volpe resta pittura, il bosco prende vita', time: null },
      { title: 'Alberi', note: 'La salita diventa verticale', time: null },
      { title: 'Cielo', note: 'Il film finalmente respira', time: null },
      { title: 'Involucro', note: 'Il mondo custodito dentro Le Fornaci', time: null },
    ],

    confidentiality:
      'Link riservato a una lavorazione non definitiva. Ti chiedo di non diffonderlo fuori dal gruppo di lavoro.',
  },

  // ── Evolve · Mondadori & Alfa Romeo — spot 15″ (link breve: /evolve) ──
  // V1/V2 erano due montaggi a confronto (modalità `compare`): Evolve ha scelto la V2.
  // Dalla V3 si prosegue su una sola linea.
  {
    slug: 'leggende-del-biscione-o397b9',
    project: 'Le Leggende del Biscione',
    subtitle: 'Mondadori & Alfa Romeo · spot 15″',
    client: 'Evolve',
    fps: 24,
    addressPlural: true,

    versions: [
      {
        id: 'V3',
        name: 'Sulle vostre note',
        date: '2026-11-10',
        duration: '0:15',
        stream: AR_V3,
        poster: '/images/review/alfa-romeo-leggende/alfa-romeo-leggende-v3-poster.webp',
        downloads: [
          {
            label: 'Video HD',
            spec: 'MP4 H.264 · 1920×1080 · 24 fps · stereo',
            size: '22 MB',
            url: `${AR_V3}?download=1`,
          },
        ],
      },
    ],

    intro: [
      'Questa è la V3. Riparte dalla V2, il montaggio con il dito che avete scelto, e integra le vostre osservazioni.',
      'I tagli sono gli stessi della V2: le modifiche sono tutte dentro le inquadrature e nel packshot. Le trovate elencate sotto il player, ciascuna con il punto del film in cui vederla.',
    ],

    // Le note di Evolve sulla V2, nell'ordine della loro mail, una per voce. Il timecode porta al punto in cui si vede la modifica.
    chaptersTitle: 'Cosa è cambiato dalla V2',
    chapters: [
      {
        title: 'Mani e unghie',
        note: 'Più curate in tutte le inquadrature con la mano.',
        time: 0.96, // 00:00:23 — primo dito sulla carrozzeria
      },
      {
        title: 'Chiusura della teca',
        note: 'La Duetto si posa sulla pedana e solo dopo entra la mano a chiudere la teca.',
        time: 7.55, // 00:07:13 — inizio del finale
      },
      {
        title: 'Fasci luminosi',
        note: 'Più discreti nel finale: restano una traccia di luce, non sono più protagonisti.',
        time: 8.0, // 00:08:00
      },
      {
        title: 'Proporzione della mano',
        note: 'Ingrandita rispetto alle miniature, per rendere leggibile la scala 1:24.',
        time: 10.0, // 00:10:00 — la mano entra sulla teca
      },
      {
        title: 'Packshot',
        note: 'Logo Alfa Romeo e note legali, dal layout aggiornato.',
        time: 13.25, // 00:13:06 — entra il logo
      },
      {
        title: 'Nota sull’AI',
        note: '«Contenuto modificato con sistemi di Intelligenza Artificiale» in alto a destra, per tutta la durata.',
        time: 0,
      },
    ],

    ogImage: '/images/review/alfa-romeo-leggende/alfa-romeo-leggende-og.jpg',

    confidentiality:
      'Link riservato a una lavorazione non definitiva. Vi chiedo di non diffonderlo fuori dal gruppo di lavoro.',
  },
]

export function getReview(slug: string) {
  return reviews.find((r) => r.slug === slug)
}
