// Pagina riservata /luxvide — testi IT/EN
// Fonte: "pagina-luxvide-testi-e-specifica.md" (settembre 2026)
// NON linkata dal menu, NON in sitemap, noindex/nofollow.

// ⚠️ DA COMPILARE prima di condividere il link
export const luxvideContacts = {
  phone: '', // es. '+39 333 0000000'
  phoneHref: '', // es. 'tel:+393330000000'
  email: 'info@pieroperilli.com',
  calendly: '', // es. 'https://calendly.com/pieroperilli/30min'
  imdb: '', // es. 'https://www.imdb.com/name/nmXXXXXXX/'
} as const

export type LuxvideMedia = {
  src: string
  poster: string
  caption?: string
}

// ⚠️ Poster scelti a mano, non il primo frame.
export const luxvideMedia = {
  showreel: {
    src: '/videos/luxvide-showreel.mp4',
    poster: '/images/luxvide/luxvide-showreel-poster.webp',
  },
  breakdown: {
    src: '/videos/luxvide-breakdown.mp4',
    poster: '/images/luxvide/luxvide-breakdown-poster.webp',
  },
  // Griglia comparativa: stesso volto, cinque inquadrature.
  identity: [
    '/images/luxvide/tenuta-identita-01.webp',
    '/images/luxvide/tenuta-identita-02.webp',
    '/images/luxvide/tenuta-identita-03.webp',
    '/images/luxvide/tenuta-identita-04.webp',
    '/images/luxvide/tenuta-identita-05.webp',
  ],
} as const

type Work = {
  kicker: string
  title: string
  body: string[]
}

type Method = {
  label: string
  body: string[]
}

export type LuxvideCopy = {
  meta: { title: string; description: string; ogTitle: string }
  langLabel: string
  opening: { title: string; subtitle: string; reelCaption: string }
  breakdown: { title: string; body: string }
  identity: { title: string; body: string; caption: string }
  works: { title: string; items: Work[] }
  method: { title: string; items: Method[] }
  development: { title: string; body: string[] }
  about: { title: string; body: string[]; contactsLabel: string }
}

export const luxvideIt: LuxvideCopy = {
  meta: {
    title: 'Piero Perilli — VFX e produzione generativa',
    description:
      'Vent’anni di post-produzione. Modelli generativi dentro pipeline di produzione, con le regole di consegna, tracciabilità e gestione colore di qualunque altro reparto.',
    ogTitle: 'Piero Perilli — VFX e produzione generativa',
  },
  langLabel: 'English',

  opening: {
    title:
      'Vengo dal VFX. La generazione è una sorgente di materiale, non un metodo.',
    subtitle:
      'Vent’anni di post-produzione, compositing e correzione colore. Integro modelli generativi dentro pipeline di produzione, con le stesse regole di consegna, tracciabilità e gestione colore di qualunque altro reparto.',
    reelCaption: 'Showreel — lavori generativi consegnati, 2025–2026.',
  },

  breakdown: {
    title: 'Breakdown',
    body: 'Cosa c’era prima, cosa è stato generato, cosa è stato composito. La parte del lavoro che di solito non si vede è quella che determina se un’inquadratura regge dentro un montaggio.',
  },

  identity: {
    title: 'Tenuta dell’identità',
    body: 'Stesso volto su cinque inquadrature, angoli e schemi di luce diversi.',
    caption:
      'Il soggetto è un volto generato, non una persona reale. Dal febbraio 2026 i modelli video bloccano a livello di modello i riferimenti a volti reali non autorizzati, e i test si impostano di conseguenza. Per una persona reale il percorso è diverso: registrazione dell’asset autorizzato presso il provider, oppure pipeline locale. In entrambi i casi serve un consenso specifico all’elaborazione generativa, distinto dalla liberatoria d’immagine ordinaria.',
  },

  works: {
    title: 'Lavori',
    items: [
      {
        kicker: 'Persone reali, solo fotografie come sorgente',
        title: 'Roche · Jingle Milano Cortina (2025)',
        body: [
          'Da fotografie di dipendenti a sequenze video in cui quelle stesse persone restano riconoscibili in un contesto completamente nuovo.',
          'Il problema non era generare: era tenere l’identità attraverso inquadrature diverse, e scartare. Su ogni volto sono state prodotte decine di generazioni e ne è sopravvissuta una. Il lavoro sta nella selezione e nella correzione, non nel prompt.',
        ],
      },
      {
        kicker: 'Personaggi rigenerati da riferimenti di attori reali',
        title: 'L’Agorà Perduta',
        body: [
          'Ricostruzione di personaggi a partire da immagini di riferimento di attori reali, mantenendo i tratti riconoscibili attraverso variazioni di posa, luce e inquadratura.',
        ],
      },
      {
        kicker: 'Generativo dentro una pipeline VFX tradizionale',
        title: 'Vecchio Amaro del Capo · CAFFO 1915',
        body: [
          'Scena di banchetto sul mare in golden hour. Compositing di bottiglia e bicchiere, VFX del liquido, rigenerazione di riprese drone, animazione della folla.',
          'Il caso in cui il generativo non sostituisce la lavorazione: la alimenta. Ogni elemento è stato trattato come un livello, con il suo controllo e la sua correzione.',
        ],
      },
    ],
  },

  method: {
    title: 'Come lavoro',
    items: [
      {
        label: 'Pipeline sdoppiata',
        body: [
          'I contenuti che riguardano l’identità di una persona reale non passano da account consumer. Vanno su pipeline locale o su contratto che escluda l’addestramento sui dati caricati. Tutto il resto — ambienti, elementi, plate — può stare sui motori hosted.',
        ],
      },
      {
        label: 'Tracciabilità',
        body: [
          'Ogni inquadratura tiene un registro: modello, versione, seed, riferimenti utilizzati, data, consenso applicabile. Serve alla produzione per l’assicurabilità dell’opera e per gli obblighi di trasparenza in vigore dall’agosto 2026.',
        ],
      },
      {
        label: 'Colore',
        body: [
          'Il generativo non ha latitudine di correzione. Il look si decide prima della generazione, non dopo: lavoro sul riferimento delle scene adiacenti già finalizzate.',
          'Il livello di match non lo cuocio nei pixel. Lo consegno come CDL separato, insieme all’inquadratura senza match e a un render di riferimento marcato reference only. Se in finalizzazione il colore della sequenza si sposta, l’inquadratura si sposta con essa come qualunque altra, invece di diventare l’unica che va rigenerata.',
        ],
      },
      {
        label: 'Consegna',
        body: [
          'Nel formato di conform del progetto — ProRes 4444, DPX o EXR — nello spazio colore di lavorazione, al frame rate e alla risoluzione di progetto, più copia di visione compressa.',
          'Il materiale generativo nasce a 8 bit 4:2:0. Non consegno in 4444 per dichiarare una profondità che la sorgente non ha, ma perché da lì in poi ogni passaggio ne ha bisogno: la croma piena conserva il lavoro di compositing, il match colore e la output transform hanno bisogno di più di 8 bit per essere scritti senza banding, e una consegna all-intra evita un ulteriore ciclo di ricodifica lossy dentro la catena di finalizzazione.',
        ],
      },
      {
        label: 'Round',
        body: [
          'Note consolidate da un solo referente. Due round inclusi per inquadratura. Una variazione sullo stesso shot è una nota; un cambio di angolo, ambiente o costume è una rigenerazione, e si tratta come inquadratura nuova.',
        ],
      },
    ],
  },

  development: {
    title: 'Sviluppo e documentazione',
    body: [
      'Stanza 247 — thriller psicologico, in sviluppo. Sceneggiatura in italiano e inglese, shot list, project bible, playbook di produzione generativa.',
      'Documentazione di una lavorazione AI perché sia ripetibile da altri e verificabile a posteriori: quali riferimenti, quali vincoli, quali decisioni e in che ordine. È la parte che rende una produzione generativa un processo invece che una serie di tentativi fortunati.',
    ],
  },

  about: {
    title: 'Chi',
    body: [
      'Piero Perilli — VFX artist, motion designer e post-produzione. Roma.',
      'Vent’anni di lavorazioni tra pubblicità, documentario e fiction. Certificato DaVinci Resolve.',
    ],
    contactsLabel: 'Contatti',
  },
}

export const luxvideEn: LuxvideCopy = {
  meta: {
    title: 'Piero Perilli — VFX and generative production',
    description:
      'Twenty years in post-production. Generative models inside production pipelines, under the same rules of delivery, traceability and colour management as any other department.',
    ogTitle: 'Piero Perilli — VFX and generative production',
  },
  langLabel: 'Italiano',

  opening: {
    title: 'I come from VFX. Generation is a source of material, not a method.',
    subtitle:
      'Twenty years in post-production, compositing and colour. I bring generative models into production pipelines under the same rules of delivery, traceability and colour management as any other department.',
    reelCaption: 'Showreel — delivered generative work, 2025–2026.',
  },

  breakdown: {
    title: 'Breakdown',
    body: 'What was there, what was generated, what was composited. The part of the work you don’t usually see is the part that decides whether a shot holds inside a cut.',
  },

  identity: {
    title: 'Identity consistency',
    body: 'The same face across five shots, different angles and lighting setups.',
    caption:
      'The subject is a generated face, not a real person. Since February 2026 video models block unauthorised real-face references at the model layer, and tests are built accordingly. For a real person the route is different: authorised asset registration with the provider, or a local pipeline. Either way it requires consent specific to generative processing, separate from an ordinary likeness release.',
  },

  works: {
    title: 'Work',
    items: [
      {
        kicker: 'Real people, photographs as the only source',
        title: 'Roche · Milano Cortina Jingle (2025)',
        body: [
          'From employee photographs to video sequences in which those same people remain recognisable in an entirely new context.',
          'The problem wasn’t generating — it was holding the identity across different shots, and discarding. Dozens of generations were produced per face and one survived. The work is in the selection and the correction, not the prompt.',
        ],
      },
      {
        kicker: 'Characters rebuilt from real actor references',
        title: 'L’Agorà Perduta',
        body: [
          'Character reconstruction from reference images of real actors, holding recognisable features across changes of pose, light and framing.',
        ],
      },
      {
        kicker: 'Generative inside a conventional VFX pipeline',
        title: 'Vecchio Amaro del Capo · CAFFO 1915',
        body: [
          'Golden-hour seaside banquet. Bottle and glass compositing, liquid VFX, drone footage regeneration, crowd animation.',
          'The case where generation doesn’t replace the work — it feeds it. Every element treated as a layer, with its own control and its own correction.',
        ],
      },
    ],
  },

  method: {
    title: 'How I work',
    items: [
      {
        label: 'Split pipeline',
        body: [
          'Anything involving a real person’s identity does not go through consumer accounts. It runs on a local pipeline, or under an agreement that excludes training on uploaded data. Everything else — environments, elements, plates — can sit on hosted engines.',
        ],
      },
      {
        label: 'Traceability',
        body: [
          'Every shot carries a record: model, version, seed, references used, date, applicable consent. Production needs it for insurability and for the transparency obligations in force since August 2026.',
        ],
      },
      {
        label: 'Colour',
        body: [
          'Generated material has no grading latitude. The look is decided before generation, not after: I work against the reference of the adjacent finished scenes.',
          'The match layer is not baked into the pixels. It is delivered as a separate CDL, alongside the unmatched shot and a reference render marked reference only. If the sequence grade moves in the DI, the shot moves with it like any other, instead of being the one that has to be regenerated.',
        ],
      },
      {
        label: 'Delivery',
        body: [
          'In the project’s conform format — ProRes 4444, DPX or EXR — in the working colour space, at project frame rate and resolution, plus a compressed viewing copy.',
          'Generative material originates as 8-bit 4:2:0. I don’t deliver 4444 to claim a depth the source doesn’t have, but because everything downstream needs it: full chroma preserves the compositing work, the colour match and the output transform need more than 8 bits to be written without banding, and an all-intra delivery avoids one more lossy re-encode inside the finishing chain.',
        ],
      },
      {
        label: 'Rounds',
        body: [
          'Notes consolidated through a single contact. Two rounds included per shot. A variation on the same shot is a note; a change of angle, environment or wardrobe is a regeneration, and is treated as a new shot.',
        ],
      },
    ],
  },

  development: {
    title: 'Development and documentation',
    body: [
      'Stanza 247 — psychological thriller, in development. Screenplay in Italian and English, shot list, project bible, generative production playbook.',
      'Documentation of an AI production so that it is repeatable by others and auditable afterwards: which references, which constraints, which decisions and in what order. It’s what makes a generative production a process rather than a run of lucky attempts.',
    ],
  },

  about: {
    title: 'About',
    body: [
      'Piero Perilli — VFX artist, motion designer, post-production. Rome.',
      'Twenty years across advertising, documentary and scripted work. DaVinci Resolve certified.',
    ],
    contactsLabel: 'Contact',
  },
}

export function getLuxvideCopy(locale: string): LuxvideCopy {
  return locale === 'en' ? luxvideEn : luxvideIt
}
