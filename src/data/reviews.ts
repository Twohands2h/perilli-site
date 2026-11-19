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
const ASP_V5 = `${MEDIA_BASE}/ArtSitePark_v05.mp4`
const AR_V5 = `${MEDIA_BASE}/AR_Leggende_spot15_v5.mp4`

export const reviews: Review[] = [
  {
    slug: 'art-site-park-phd8du',
    project: 'ART SITE PARK',
    subtitle: 'Il mondo dentro',
    client: 'Svicom · Le Fornaci',
    fps: 24,

    versions: [
      {
        id: 'v5',
        name: 'Quinta stesura',
        date: '2026-11-16',
        duration: '3:07',
        stream: ASP_V5,
        poster: '/images/review/art-site-park/art-site-park-v5-poster.webp',
        downloads: [
          {
            label: 'Video HD',
            spec: 'MP4 H.264 · 1920×1080 · 24 fps · stereo',
            size: '256 MB',
            url: `${ASP_V5}?download=1`,
          },
        ],
      },
    ],

    intro: [
      'Questa è la quinta stesura del film, ormai vicina alla versione definitiva. Rispetto alla precedente il film è più asciutto e il finale è completo: nella ripresa dal drone su Le Fornaci compaiono i quattro animali che accompagnano il viaggio.',
      'In questa fase ci interessa lo sguardo sul film nel suo insieme: se il ritmo regge fino in fondo, se i murales restano protagonisti, se il finale chiude il viaggio.',
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
  // V5 = badge scala 1:24, più luce, pop del prezzo nel packshot.
  {
    slug: 'leggende-del-biscione-o397b9',
    project: 'Le Leggende del Biscione',
    subtitle: 'Mondadori & Alfa Romeo · spot 15″',
    client: 'Evolve',
    fps: 24,
    addressPlural: true,

    versions: [
      {
        id: 'V5',
        name: 'Scala, luce e prezzo',
        date: '2026-11-19',
        duration: '0:15',
        stream: AR_V5,
        poster: '/images/review/alfa-romeo-leggende/alfa-romeo-leggende-v5-poster.webp',
        downloads: [
          {
            label: 'Video HD',
            spec: 'MP4 H.264 · 1920×1080 · 24 fps · stereo',
            size: '22 MB',
            url: `${AR_V5}?download=1`,
          },
        ],
      },
    ],

    intro: [
      'Questa è la V5. Montaggio e finale sono quelli della V4: ho aggiunto l’indicazione della scala, dato più luce allo spot e messo in evidenza il prezzo nel packshot.',
      'Le modifiche sono elencate sotto il player, ciascuna con il punto del film in cui vederla.',
    ],

    // Differenze V4 → V5, verificate a frame: stessi tagli, stesso finale.
    chaptersTitle: 'Cosa è cambiato dalla V4',
    chapters: [
      {
        title: 'Scala 1:24',
        note: 'Il badge «Scala 1:24» entra sui cinque modelli in fila e resta fino al taglio.',
        time: 4.05, // 00:04:01
      },
      {
        title: 'Più luce',
        note: 'Più luce sulle carrozzerie e sui riflessi, soprattutto dai cinque modelli al cofano.',
        time: 2.42, // 00:02:10 — i cinque modelli
      },
      {
        title: 'Prezzo',
        note: 'Il riquadro «Modello + Fascicolo a € 16,99» si ingrandisce con un pop prima di fermarsi nel packshot.',
        time: 13.3, // 00:13:07 — subito prima del pop
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
