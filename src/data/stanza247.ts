// STANZA 247 — pagina del cortometraggio: /stanza-247 · /en/stanza-247
// Pagina pubblica e indicizzata: presentazione del film per festival, stampa e sito.
//
// Tutto ciò che cambia nel tempo sta qui: trailer, durata, selezioni, testi.
// Regola: campo vuoto ('' o []) = elemento non mostrato. Nessun player rotto,
// nessuna riga vuota nella scheda tecnica.

/** Vercel Blob (store pubblico del progetto perilli-site), lo stesso delle review. */
export const MEDIA_BASE = 'https://kbfxwlingzf7x5e3.public.blob.vercel-storage.com'

const IMG = '/images/films/stanza-247'

export const stanza247Media = {
  trailer: {
    // H.264 2048×858 · 24 fps · faststart (da Stanza247_v10.mov).
    // Vuoto = la pagina mostra il fotogramma con "Trailer in arrivo".
    src: '/videos/stanza-247-trailer.mp4',
    poster: `${IMG}/stanza-247-trailer-poster.webp`, // fotogramma dello specchio (Stanza247__07)
    duration: '0:41',
    uploadDate: '2026-11-18', // serve ai dati strutturati del video
  },
  /** Durata in formato ISO 8601 per i dati strutturati (in scheda tecnica: 7'39"). */
  runtime: { iso: 'PT7M39S' },
  hero: `${IMG}/stanza-247-still-00.webp`,
  closing: `${IMG}/stanza-247-still-10.webp`,
  locandina: `${IMG}/stanza-247-locandina.webp`,
  locandinaDownload: `${IMG}/stanza-247-locandina.jpg`,
  og: `${IMG}/stanza-247-og.jpg`,
  // Ordine della galleria = ordine del film. Ritmo: intera, coppia, intera, coppia…
  stills: [
    `${IMG}/stanza-247-still-01.webp`,
    `${IMG}/stanza-247-still-02.webp`,
    `${IMG}/stanza-247-still-03.webp`,
    `${IMG}/stanza-247-still-04.webp`,
    `${IMG}/stanza-247-still-05.webp`,
    `${IMG}/stanza-247-still-06.webp`,
    `${IMG}/stanza-247-still-07.webp`,
    `${IMG}/stanza-247-still-08.webp`,
    `${IMG}/stanza-247-still-09.webp`,
  ],
}

/** Selezioni e premi. Vuoto = sezione nascosta. Il più recente in testa. */
export type Selection = { festival: string; detail: string; year: string }
export const stanza247Selections: Selection[] = [
  // { festival: 'Nome Festival', detail: 'Selezione ufficiale · Concorso cortometraggi', year: '2027' },
]

// Scheda tecnica: [1] genere alimenta anche i dati strutturati (Movie); la durata ISO sta in stanza247Media.runtime.
type Spec = { label: string; value: string }

export type Stanza247Copy = {
  meta: { title: string; description: string; ogAlt: string }
  hero: {
    tagline: string
    creditLabel: string
    trailerCta: string
    festivalCta: string
  }
  trailer: { label: string; play: string; comingSoon: string; videoLabel: string }
  logline: string
  synopsis: { label: string; paragraphs: string[] }
  stills: { label: string; alt: string[]; open: string; close: string; prev: string; next: string }
  director: { label: string; lead: string; paragraphs: string[]; signature: string }
  method: {
    label: string
    title: string
    steps: { title: string; body: string }[]
    rewake: { before: string; link: string; after: string }
  }
  specs: { label: string; items: Spec[] }
  selections: { label: string }
  press: {
    label: string
    title: string
    body: string
    screenerCta: string
    screenerSubject: string
    screenerBody: string
    posterCta: string
    contactLabel: string
    posterAlt: string
  }
}

const it: Stanza247Copy = {
  meta: {
    title: 'Stanza 247 — Cortometraggio di Piero Perilli',
    description:
      'Thriller psicologico scritto e diretto da Piero Perilli. Un uomo solo, una stanza di motel, una notte: e qualcuno, forse, là fuori. Trailer, sinossi e note di regia.',
    ogAlt: 'Stanza 247 — cortometraggio scritto e diretto da Piero Perilli',
  },
  hero: {
    tagline: 'La minaccia è più vicina di quanto lui pensi.',
    creditLabel: 'Scritto e diretto da',
    trailerCta: 'Guarda il trailer',
    festivalCta: 'Festival e stampa',
  },
  trailer: {
    label: 'Trailer',
    play: 'Guarda il trailer',
    comingSoon: 'Trailer in arrivo',
    videoLabel: 'Stanza 247 — trailer',
  },
  logline:
    'Un uomo solo, una stanza di motel, una notte. La certezza, sempre più forte, che qualcuno là fuori lo stia osservando.',
  synopsis: {
    label: 'Sinossi',
    paragraphs: [
      'Un uomo arriva in un motel isolato, lungo una strada americana. Entra precipitosamente nella stanza 247, chiude il chiavistello e controlla che nessuno lo abbia seguito.',
      'Fuori sembra non esserci nessuno. Eppure, nel silenzio della stanza, ogni rumore diventa un segnale, ogni ombra una possibile presenza. L’uomo sorveglia la porta, scruta attraverso la veneziana, cerca di distinguere ciò che accade realmente da ciò che teme.',
      'La certezza di essere inseguito lascia spazio a un dubbio ancora più inquietante.',
    ],
  },
  stills: {
    label: 'Fotogrammi',
    alt: [
      'Di profilo, l’uomo accostato allo spioncino della porta della stanza 247',
      'L’uomo seduto sul letto, in controluce sulla carta da parati, con un quadro di paesaggio alle spalle',
      'L’uomo seduto a terra sotto la finestra, accanto al condizionatore, guarda verso l’alto',
      'Primissimo piano degli occhi, illuminati da una luce fredda',
      'Il volto dell’uomo, rigato dalle ombre della veneziana, mentre guarda fuori',
      'L’uomo davanti allo specchio del bagno, con tagli sul viso',
      'Il riflesso dell’uomo nello specchio appannato, lo sguardo verso qualcosa fuori campo',
      'Di notte, in luce blu, l’uomo spia dalla veneziana',
      'Il volto sudato dell’uomo, frontale, nella stanza in penombra',
    ],
    open: 'Apri il fotogramma',
    close: 'Chiudi',
    prev: 'Fotogramma precedente',
    next: 'Fotogramma successivo',
  },
  director: {
    label: 'Note di regia',
    lead:
      'Stanza 247 nasce come lavoro personale, con una domanda precisa: si può dirigere l’intelligenza artificiale, invece di limitarsi a montare quello che genera?',
    paragraphs: [
      'Con l’AI è facile fare il contrario: generare molto, scegliere il meglio e scoprire il film al montaggio. Io volevo partire da dove parte ogni film, una sceneggiatura e una shot list. Ogni inquadratura aveva già un taglio, una luce, un’azione e una durata prima di essere generata. Il lavoro era ottenere quell’inquadratura, non una qualsiasi che funzionasse.',
      'Ho scelto apposta un soggetto minimo: un uomo, una stanza, una notte. Con un solo personaggio e una sola location ogni incoerenza si vede. Il volto deve restare lo stesso da un’inquadratura all’altra, la luce deve cambiare con le ore, la stanza deve restare quella stanza, anche quando smette di esserlo.',
      'Il risultato, per me, non è un esperimento tecnico. È una storia che volevo raccontare, e l’AI è stata il mezzo con cui girarla.',
    ],
    signature: 'Piero Perilli',
  },
  method: {
    label: 'Metodo',
    title: 'Dalla pagina all’inquadratura',
    steps: [
      {
        title: 'Sceneggiatura',
        body: 'Scritta in italiano e in inglese, chiusa prima di qualsiasi generazione.',
      },
      {
        title: 'Shot list',
        body: 'Ogni inquadratura decisa a tavolino: taglio, ottica, movimento, luce, durata.',
      },
      {
        title: 'Project bible',
        body: 'Reference del personaggio e della location, palette e regole di continuità, raccolte in un playbook di produzione.',
      },
      {
        title: 'Generazione',
        body: 'Un’inquadratura alla volta, verificata contro la shot list. Si rigenera finché non è quella scritta.',
      },
      {
        title: 'Post-produzione',
        body: 'Montaggio, color e suono: il finishing di un film, non di una sequenza di clip.',
      },
    ],
    rewake: {
      before: 'Scene, inquadrature, take, prompt e decisioni sono rimasti collegati per tutta la lavorazione in ',
      link: 'Rewake',
      after: ', il sistema che ho costruito per organizzare i film in AI.',
    },
  },
  specs: {
    label: 'Scheda tecnica',
    items: [
      { label: 'Titolo', value: 'Stanza 247' },
      { label: 'Genere', value: 'Thriller psicologico' },
      { label: 'Durata', value: '7\'39"' },
      { label: 'Anno', value: '2026' },
      { label: 'Paese', value: 'Italia' },
      { label: 'Lingua', value: '' }, // ⚠️ es. "Senza dialoghi" / "Inglese, sottotitoli in italiano"
      { label: 'Formato', value: '2.39:1 · Colore · Digitale' },
      { label: 'Tecnica', value: 'Generato con AI da sceneggiatura e shot list originali' },
      { label: 'Scritto e diretto da', value: 'Piero Perilli' },
      { label: 'Sviluppato con', value: 'Rewake' },
    ],
  },
  selections: { label: 'Selezioni' },
  press: {
    label: 'Festival e stampa',
    title: 'Per festival, programmatori e stampa',
    body: 'Il film completo è disponibile in visione privata, su richiesta. Per screener, materiali stampa o informazioni sulla lavorazione, scrivimi.',
    screenerCta: 'Richiedi lo screener',
    screenerSubject: 'Stanza 247 — richiesta screener',
    screenerBody: 'Buongiorno,\n\nvorrei visionare Stanza 247.\n\nFestival / testata:\nNome e ruolo:\n\nGrazie.',
    posterCta: 'Scarica la locandina',
    contactLabel: 'Contatti',
    posterAlt: 'Locandina di Stanza 247: l’uomo seduto sul letto della stanza del motel, sotto il titolo l’insegna MOTEL di notte',
  },
}

const en: Stanza247Copy = {
  meta: {
    title: 'Stanza 247 — A short film by Piero Perilli',
    description:
      'A psychological thriller written and directed by Piero Perilli. One man, one motel room, one night — and someone, maybe, out there. Trailer, synopsis and director’s note.',
    ogAlt: 'Stanza 247 — a short film written and directed by Piero Perilli',
  },
  hero: {
    tagline: 'The threat is closer than he thinks.',
    creditLabel: 'Written and directed by',
    trailerCta: 'Watch the trailer',
    festivalCta: 'Festivals & press',
  },
  trailer: {
    label: 'Trailer',
    play: 'Watch the trailer',
    comingSoon: 'Trailer coming soon',
    videoLabel: 'Stanza 247 — trailer',
  },
  logline:
    'One man, one motel room, one night. The growing certainty that someone out there is watching him.',
  synopsis: {
    label: 'Synopsis',
    paragraphs: [
      'A man arrives at an isolated motel along an American road. He rushes into Room 247, slides the bolt and checks that no one has followed him.',
      'Outside, there seems to be no one. And yet, in the silence of the room, every sound becomes a signal, every shadow a possible presence. The man watches the door, peers through the blinds, tries to tell what is really happening from what he fears.',
      'The certainty of being hunted gives way to an even more unsettling doubt.',
    ],
  },
  stills: {
    label: 'Stills',
    alt: [
      'In profile, the man presses close to the peephole of the door of Room 247',
      'The man sitting on the bed, against the wallpaper, a landscape painting behind him',
      'The man sitting on the floor under the window, next to the air conditioner, looking up',
      'Extreme close-up of the eyes, lit by cold light',
      'The man’s face, striped by the shadows of the blinds, looking outside',
      'The man in front of the bathroom mirror, cuts on his face',
      'The man’s reflection in the fogged mirror, looking at something off screen',
      'At night, in blue light, the man peers through the blinds',
      'The man’s sweating face, head-on, in the half-dark room',
    ],
    open: 'Open still',
    close: 'Close',
    prev: 'Previous still',
    next: 'Next still',
  },
  director: {
    label: 'Director’s note',
    lead:
      'Stanza 247 began as a personal project with one precise question: can you direct artificial intelligence, instead of just editing whatever it generates?',
    paragraphs: [
      'With AI it’s easy to do the opposite: generate a lot, keep the best, and discover the film in the edit. I wanted to start where every film starts — a screenplay and a shot list. Every shot already had its framing, its light, its action and its length before it was generated. The job was to get that shot, not any shot that happened to work.',
      'I chose a deliberately minimal story: one man, one room, one night. With a single character and a single location, every inconsistency shows. The face has to stay the same from shot to shot, the light has to change with the hours, the room has to remain that room — even when it stops being one.',
      'To me the result isn’t a technical experiment. It’s a story I wanted to tell, and AI was the means to shoot it.',
    ],
    signature: 'Piero Perilli',
  },
  method: {
    label: 'Method',
    title: 'From the page to the shot',
    steps: [
      {
        title: 'Screenplay',
        body: 'Written in Italian and English, locked before any generation.',
      },
      {
        title: 'Shot list',
        body: 'Every shot decided on paper: framing, lens, movement, light, length.',
      },
      {
        title: 'Project bible',
        body: 'Character and location references, palette and continuity rules, gathered in a production playbook.',
      },
      {
        title: 'Generation',
        body: 'One shot at a time, checked against the shot list. Regenerated until it matches what was written.',
      },
      {
        title: 'Post-production',
        body: 'Editing, color and sound: the finishing of a film, not of a string of clips.',
      },
    ],
    rewake: {
      before: 'Scenes, shots, takes, prompts and decisions stayed connected throughout production in ',
      link: 'Rewake',
      after: ', the system I built to organize AI films.',
    },
  },
  specs: {
    label: 'Technical details',
    items: [
      { label: 'Title', value: 'Stanza 247' },
      { label: 'Genre', value: 'Psychological thriller' },
      { label: 'Running time', value: '7\'39"' },
      { label: 'Year', value: '2026' },
      { label: 'Country', value: 'Italy' },
      { label: 'Language', value: '' }, // ⚠️ e.g. "No dialogue" / "English, Italian subtitles"
      { label: 'Format', value: '2.39:1 · Color · Digital' },
      { label: 'Technique', value: 'AI-generated from an original screenplay and shot list' },
      { label: 'Written and directed by', value: 'Piero Perilli' },
      { label: 'Developed by', value: 'Rewake' },
    ],
  },
  selections: { label: 'Selections' },
  press: {
    label: 'Festivals & press',
    title: 'For festivals, programmers and press',
    body: 'The full film is available for private viewing on request. For a screener, press materials or anything about how it was made, get in touch.',
    screenerCta: 'Request a screener',
    screenerSubject: 'Stanza 247 — screener request',
    screenerBody: 'Hello,\n\nI would like to view Stanza 247.\n\nFestival / outlet:\nName and role:\n\nThank you.',
    posterCta: 'Download the poster',
    contactLabel: 'Contact',
    posterAlt: 'Stanza 247 poster: the man sitting on the bed of the motel room; below the title, the MOTEL sign at night',
  },
}

export const getStanza247Copy = (locale: string): Stanza247Copy => (locale === 'en' ? en : it)

/** Scheda nel portfolio (/portfolio): porta alla pagina del film, non a un case study. */
export const stanza247PortfolioCard = {
  key: 'stanza-247',
  href: { it: '/stanza-247', en: '/en/stanza-247' },
  thumbnail: `${IMG}/stanza-247-still-00.webp`,
  thumbnailAlt: {
    it: 'Stanza 247 — l’uomo seduto sul letto della stanza del motel',
    en: 'Stanza 247 — the man sitting on the bed of the motel room',
  },
  category: 'ai',
  categoryLabel: { it: 'AI Video · Film originale', en: 'AI Video · Original film' },
  title: { it: 'Stanza 247', en: 'Stanza 247' },
  meta: { it: 'Cortometraggio · scritto e diretto da Piero Perilli — 2026', en: 'Short film · written and directed by Piero Perilli — 2026' },
  /** Posizione nella griglia (0 = primo). 1 = subito dopo il primo progetto. */
  position: 1,
}
