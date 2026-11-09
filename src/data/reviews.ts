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
const AR_V1 = `${MEDIA_BASE}/AR_Leggende_spot15_v1.mp4`
const AR_V2 = `${MEDIA_BASE}/AR_Leggende_spot15_v2.mp4`

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
  {
    slug: 'leggende-del-biscione-o397b9',
    project: 'Le Leggende del Biscione',
    subtitle: 'Mondadori & Alfa Romeo · spot 15″',
    client: 'Evolve',
    fps: 24,

    versions: [
      {
        id: 'V1',
        name: 'Senza dito',
        summary:
          'Le prime auto si presentano da sole. La mano entra al quinto secondo, sulla portiera della Duetto: c’è più attesa prima di capire che sono miniature.',
        date: '2026-11-09',
        duration: '0:15',
        stream: AR_V1,
        poster: '/images/review/alfa-romeo-leggende/alfa-romeo-leggende-v1-poster.webp',
        downloads: [
          {
            label: 'Video HD',
            spec: 'MP4 H.264 · 1920×1080 · 24 fps · stereo',
            size: '22 MB',
            url: `${AR_V1}?download=1`,
          },
        ],
      },
      {
        id: 'V2',
        name: 'Con il dito',
        summary:
          'Un dito sfiora la carrozzeria già dal secondo taglio, come nello storyboard: la scala delle miniature si legge subito.',
        date: '2026-11-09',
        duration: '0:15',
        stream: AR_V2,
        poster: '/images/review/alfa-romeo-leggende/alfa-romeo-leggende-v2-poster.webp',
        downloads: [
          {
            label: 'Video HD',
            spec: 'MP4 H.264 · 1920×1080 · 24 fps · stereo',
            size: '22 MB',
            url: `${AR_V2}?download=1`,
          },
        ],
      },
    ],

    compare: {
      // Verificato a frame (24 fps): fuori da questi due tratti i montaggi sono identici,
      // audio compreso.
      differences: [
        {
          title: 'Tagli 2 e 3 · i primi dettagli di carrozzeria',
          from: 0.96, // 00:00:23
          to: 2.41, // 00:02:09
          byVersion: {
            V1: 'Nessuna mano in campo: le carrozzerie si mostrano da sole.',
            V2: 'Un dito sfiora la carrozzeria in entrambi i tagli.',
          },
        },
        {
          title: 'Taglio 5 · le parti apribili',
          from: 5.13, // 00:05:03
          to: 6.12, // 00:06:02
          byVersion: {
            V1: 'La mano apre la portiera della Duetto. È la prima volta che entra in campo.',
            V2: 'La Giulia GTAm con la portiera già aperta, senza mano. La mano torna nel taglio dopo, sul cofano.',
          },
        },
      ],
    },

    intro: [
      'Due montaggi dello spot da 15″ per il lancio in edicola. Musica, voce ed endboard sono identici: cambiano due momenti, meno di tre secondi in tutto.',
      'La differenza è quando lo spettatore scopre che sta guardando delle miniature. Nella V1 lo scopre più tardi, e l’attesa dura più a lungo. Nella V2 lo capisce dal primo dettaglio, grazie al dito che sfiora la carrozzeria.',
      'Sono due modi di raccontare la stessa sorpresa. La scelta la lascio a voi.',
    ],

    chapters: [],

    ogImage: '/images/review/alfa-romeo-leggende/alfa-romeo-leggende-og.jpg',

    confidentiality:
      'Link riservato a una lavorazione non definitiva. Vi chiedo di non diffonderlo fuori dal gruppo di lavoro.',
  },
]

export function getReview(slug: string) {
  return reviews.find((r) => r.slug === slug)
}
