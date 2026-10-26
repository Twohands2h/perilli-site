// Pagine di revisione riservate per i clienti — /review/[slug]
// NON linkate dal menu, NON in sitemap, noindex/nofollow (metadata + header X-Robots-Tag).
// Lo slug contiene un token casuale: il link è l'unica chiave d'accesso.
// Una pagina per progetto: le nuove versioni si aggiungono in testa a `versions`,
// il link inviato al cliente resta sempre lo stesso.

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
  name: string // 'Prima stesura'
  date: string // ISO, es. '2026-10-20'
  duration: string // '2:04'
  stream: string // MP4 1080p ottimizzato per lo streaming (faststart)
  poster: string // frame scelto a mano, non il primo
  downloads: ReviewDownload[]
}

export type ReviewChapter = {
  title: string
  note: string
  /** Secondi dall'inizio. null = non cliccabile finché non lo compili. */
  time: number | null
}

export type Review = {
  slug: string
  project: string
  subtitle: string
  client: string
  fps: number
  versions: ReviewVersion[] // la prima è quella corrente
  intro: string[]
  chapters: ReviewChapter[]
  confidentiality: string
}

// Stesso file per streaming e download: ?download=1 forza il salvataggio.
const ASP_V2 = `${MEDIA_BASE}/ArtSitePark_v02.mp4`

export const reviews: Review[] = [
  {
    slug: 'art-site-park-phd8du',
    project: 'ART SITE PARK',
    subtitle: 'Il mondo dentro',
    client: 'Svicom · Le Fornaci',
    fps: 24,

    versions: [
      {
        id: 'v2',
        name: 'Seconda stesura',
        date: '2026-10-26',
        duration: '3:14',
        stream: ASP_V2,
        poster: '/images/review/art-site-park/art-site-park-v2-poster.webp',
        downloads: [
          {
            label: 'Video HD',
            spec: 'MP4 H.264 · 1920×1080 · 24 fps · stereo',
            size: '231 MB',
            url: `${ASP_V2}?download=1`,
          },
        ],
      },
    ],

    intro: [
      'Questa è la seconda stesura del film: la struttura, il ritmo della salita e il trattamento di ogni mondo, dal mare all’involucro.',
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
]

export function getReview(slug: string) {
  return reviews.find((r) => r.slug === slug)
}
