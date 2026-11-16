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
const ASP_V4 = `${MEDIA_BASE}/ArtSitePark_v04.mp4`
const AR_V4 = `${MEDIA_BASE}/AR_Leggende_spot15_v4.mp4`

export const reviews: Review[] = [
  {
    slug: 'art-site-park-phd8du',
    project: 'ART SITE PARK',
    subtitle: 'Il mondo dentro',
    client: 'Svicom · Le Fornaci',
    fps: 24,

    versions: [
      {
        id: 'v4',
        name: 'Quarta stesura',
        date: '2026-11-11',
        duration: '3:13',
        stream: ASP_V4,
        poster: '/images/review/art-site-park/art-site-park-v4-poster.webp',
        downloads: [
          {
            label: 'Video HD',
            spec: 'MP4 H.264 · 1920×1080 · 24 fps · stereo',
            size: '262 MB',
            url: `${ASP_V4}?download=1`,
          },
        ],
      },
    ],

    intro: [
      'Questa è la quarta stesura del film, ormai vicina alla versione definitiva. Rispetto alla precedente si aggiungono le animazioni, rifinite a mano in post-produzione su ogni mondo, dal mare all’involucro.',
      'Il finale è ancora in lavorazione. In questa fase ci interessa lo sguardo sul film nel suo insieme: se il ritmo regge fino in fondo, se i murales restano protagonisti, se il passaggio da un piano all’altro è fluido.',
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
  // V3 = note dell'agenzia sulla V2. V4 = finale rifatto sul layout aggiornato dell'agenzia.
  {
    slug: 'leggende-del-biscione-o397b9',
    project: 'Le Leggende del Biscione',
    subtitle: 'Mondadori & Alfa Romeo · spot 15″',
    client: 'Evolve',
    fps: 24,
    addressPlural: true,

    versions: [
      {
        id: 'V4',
        name: 'Nuovo finale',
        date: '2026-11-16',
        duration: '0:15',
        stream: AR_V4,
        poster: '/images/review/alfa-romeo-leggende/alfa-romeo-leggende-v4-poster.webp',
        downloads: [
          {
            label: 'Video HD',
            spec: 'MP4 H.264 · 1920×1080 · 24 fps · stereo',
            size: '22 MB',
            url: `${AR_V4}?download=1`,
          },
        ],
      },
    ],

    intro: [
      'Questa è la V4. Il montaggio è quello della V3: cambia il finale, rifatto sul layout aggiornato che mi avete mandato, e si aggiornano le note in sovrimpressione.',
      'Le modifiche sono elencate sotto il player, ciascuna con il punto del film in cui vederla.',
    ],

    // Differenze V3b → V4, verificate a frame: fino a 00:07:16 cambiano solo le sovrimpressioni.
    chaptersTitle: 'Cosa è cambiato dalla V3',
    chapters: [
      {
        title: 'Packshot',
        note: 'Rifatto sul nuovo layout: logo Alfa Romeo Collection, «La prima uscita 1600 Spider Duetto (1966)», prezzo Modello + Fascicolo a € 16,99, rimando a mondadoricollection.it, «In edicola con TV Sorrisi e Canzoni» e note legali reimpaginate.',
        time: 11.34, // 00:11:08 — entrano le grafiche
      },
      {
        title: 'Tempi del finale',
        note: 'Il fascicolo entra prima, mentre la mano chiude la teca.',
        time: 10.84, // 00:10:20 — entra il fascicolo
      },
      {
        title: 'Nota sull’AI e marchio',
        note: 'La nota sull’AI è in maiuscolo, più leggibile anche sulle mani. La nota sul marchio Alfa Romeo passa sul bordo sinistro.',
        time: 6.25, // 00:06:06 — nota sull'AI sopra il dito
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
