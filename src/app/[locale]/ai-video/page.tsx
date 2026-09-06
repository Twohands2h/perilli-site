import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { ServiceSchema, BreadcrumbSchema, FAQSchema, SpeakableSchema } from '@/components/seo/SchemaMarkup';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';
import type { Metadata } from 'next';
import { serviceFAQs } from '@/data/faqs';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return locale === 'it' ? {
    title: 'AI Video Production Italia | Piero Perilli',
    description: 'AI video production in Italia. Generazione video con Runway, Veo e Kling, guidata da 20 anni di esperienza VFX. Workflow ibrido AI + tradizionale.',
    alternates: getPageAlternates('/ai-video', locale),
    openGraph: getPageOpenGraph('/ai-video', locale),
  } : {
    title: 'AI Video Production Italy | Piero Perilli',
    description: 'AI video production in Italy. Video generation with Runway, Veo and Kling, guided by 20 years of VFX experience. Hybrid AI + traditional workflow.',
    alternates: getPageAlternates('/ai-video', locale),
    openGraph: getPageOpenGraph('/ai-video', locale),
  };
}

const contentIT = {
  sectionLabel: 'AI VIDEO',
  h1: "AI Video Production a Roma — L'Intelligenza Artificiale Guidata dall'Esperienza",
  heroSubtitle: 'L\'intelligenza artificiale guidata da 20 anni di occhio artigianale.',

  introTitle: 'L\'AI non Sostituisce l\'Esperienza. La Moltiplica.',
  introText: `<p>Tutti possono generare un video con l'AI. Pochi sanno quando il risultato è sufficiente, quando serve intervento manuale e come combinare i due. Questa è la differenza tra un video "generato dall'AI" e un video professionale che usa l'AI come strumento.</p>
<p>Integro Runway, Veo, Kling, Seedance 2.5 e gli strumenti di generazione video AI nel mio <a href="/vfx" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">workflow VFX</a> e di <a href="/post-produzione" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">post-produzione</a> — lo stesso workflow con cui lavoro su film e spot da vent'anni. L'AI produce la materia prima, l'esperienza la trasforma in un risultato che funziona davvero.</p>
<p>Il mio vantaggio è il contesto. Venti anni di post-produzione significano sapere come deve apparire un'immagine finale, quali artefatti sono accettabili e quali no, come integrare output AI con riprese reali, come mantenere coerenza visiva tra shot generate. Questo know-how non si improvvisa.</p>`,
  introImage: '/images/services/ai-video-production-workflow-professionale-roma.jpg',
  introImageAlt: 'AI video production — workflow professionale con intelligenza artificiale, Roma',
  introVideo: '/videos/showreel-ai.mp4',
  introVideoPoster: '/images/ai-video/showreel-ai-poster.webp',

  servicesTitle: 'Come uso l\'AI nella produzione video',
  services: [
    {
      name: 'Generazione Video',
      tag: 'Da Prompt e Reference',
      description: `<p>Creo sequenze partendo da descrizioni, immagini di riferimento, storyboard o footage esistente. La scelta del modello viene dopo: prima vengono inquadratura, ottica, movimento, luce, continuità e funzione narrativa dello shot.</p>`,
    },
    {
      name: 'Workflow Ibrido',
      tag: 'AI + Tradizionale',
      description: `<p>L'AI genera la base, l'esperienza la perfeziona. Compositing, color grading, ritocco frame-by-frame, integrazione con footage reale — il risultato finale passa attraverso lo stesso processo artigianale di qualsiasi altro mio progetto. Genero decine di varianti, seleziono le migliori, itero sui dettagli. L'occhio allenato riconosce al primo frame se il risultato ha potenziale o va scartato.</p>`,
    },
    {
      name: 'Concept e Pre-visualizzazione',
      tag: 'Rapid Prototyping',
      description: `<p>L'AI è eccezionale per esplorare direzioni creative rapidamente. Posso generare decine di varianti visive in ore, non settimane — dando al regista o all'agenzia la possibilità di vedere e scegliere prima di investire nel girato. Per chi deve presentare un'idea a un cliente, questo cambia tutto.</p>`,
    },
    {
      name: 'Contenuti Commerciali AI',
      tag: 'Brand & Advertising',
      description: `<p>Per brand che vogliono contenuti video d'impatto con budget contenuti, l'AI offre possibilità che fino a un anno fa richiedevano set, crew e giornate di ripresa. Il risultato è professionale perché il processo lo è — non è un video "generato dall'AI", è un video prodotto professionalmente che usa l'AI come uno dei tanti strumenti.</p>`,
    },
    {
      name: 'Cortometraggi e Serie AI',
      tag: 'Contenuti Narrativi',
      description: `<p>Il mercato dei contenuti narrativi AI-generated sta nascendo. Chi ha sia l'esperienza cinematografica tradizionale — montaggio, ritmo, racconto — che la padronanza degli strumenti AI sarà la figura più ricercata. Non è futuro: è adesso. E ci sono già.</p>`,
    },
  ],

  approachTitle: 'Perché non basta "saper usare l\'AI"',
  pillars: [
    {
      number: '1',
      title: 'L\'Occhio Prima dello Strumento.',
      text: 'Chiunque può scrivere un prompt e ottenere un video. Il problema è che quel video avrà incoerenze visive, artefatti, movimenti innaturali. Venti anni di post-produzione mi permettono di vedere al primo frame cosa funziona e cosa no — e di intervenire con gli strumenti giusti.',
    },
    {
      number: '2',
      title: 'Post-produzione dell\'Output AI.',
      text: 'L\'output grezzo dell\'AI è il punto di partenza, non il prodotto finito. Color grading, stabilizzazione, correzione artefatti, compositing con elementi reali, sound design — tutto passa per lo stesso processo artigianale che applico a qualsiasi progetto.',
    },
    {
      number: '3',
      title: 'Coerenza Narrativa.',
      text: 'Una sequenza video non è una somma di clip belle — è un racconto. Mantenere coerenza di stile, illuminazione, colore e ritmo tra shot generate dall\'AI richiede la stessa competenza che serve nel montaggio tradizionale. Forse di più.',
    },
  ],

  highlight: {
    label: 'IL METODO',
    title: 'Mi sono costruito lo strumento che non esisteva',
    text: `<p>Quel registro non lo tengo a mano. Su una produzione con centinaia di clip, reference e versioni, tenerlo a mano significa perdere la relazione fra ciò che è stato generato e ciò che è stato approvato.</p>
<p>Per questo ho costruito <strong class="text-text-primary">Rewake</strong>, un film memory system per l'AI filmmaking: scene, shot, take, prompt e decisioni restano collegati in un unico sistema, e il progetto rimane leggibile nel tempo — anche a distanza di mesi.</p>
<p>Per chi mi affida un progetto AI significa una cosa concreta: produzione ordinata, coerenza tra le shot, versioni sotto controllo. È la mentalità dell'artigiano: se lo strumento non esiste, te lo costruisci.</p>`,
    logo: '/images/services/rewake-logo.webp',
    logoAlt: 'Rewake — Your Film Memory',
    image: '/images/services/rewake-film-memory-system-ai-filmmaking.webp',
    imageAlt: 'Workspace di Rewake: storyboard, reference del personaggio, prompt e output video collegati in un unico sistema',
    linkText: 'Scopri Rewake',
    linkUrl: 'https://rewake.studio?utm_source=pieroperilli.com&utm_medium=referral&utm_campaign=ai-video',
    linkEvent: 'rewake_click',
  },

  // ---- BLOCCHI NUOVI ----------------------------------------------------
  //
  // BREAKDOWN: il video di questa pagina è INDIPENDENTE da quello di
  // /selected-work. Per cambiarlo basta sostituire `video` e `poster` qui
  // sotto. Stringa vuota in `video` = sezione non renderizzata, nessun
  // player rotto. Ricordati di farlo in ENTRAMBE le lingue.

  breakdown: {
    title: 'Breakdown',
    text: 'Cosa c\'era prima, cosa è stato generato, cosa è stato compositato. La parte che non si vede è quella che decide se un\'inquadratura regge dentro un montaggio.',
    video: '/videos/breakdown-ai.mp4',
    poster: '/images/ai-video/breakdown-ai-poster.webp',
  },

  identity: {
    title: 'Tenuta dell\'identità',
    text: 'Stesso soggetto attraverso angoli, focali e schemi di luce diversi.',
    caption: 'La coerenza di un volto non si valuta su una singola immagine ma attraverso una sequenza. Per persone reali lavoro solo su asset autorizzati e sulla pipeline concordata con la produzione.',
    // Array vuoto = sezione non renderizzata. Componente pronto, nessun placeholder.
    images: [] as string[],
  },

  method: {
    title: 'Come lavoro',
    items: [
      { label: 'Look development', text: 'Prima di produrre una sequenza definisco uno o più shot target: composizione, ottica, luce, movimento, texture e continuità con le inquadrature adiacenti. Si approva il linguaggio visivo prima di scalare la produzione.' },
      { label: 'Produzione per famiglie di shot', text: 'Gli shot non vengono trattati come clip isolate. Li raggruppo per personaggio, ambiente, schema luce o problema tecnico, così reference e decisioni restano coerenti.' },
      { label: 'Tracciabilità', text: 'Ogni inquadratura mantiene il proprio storico di reference, prompt, versioni e decisioni approvate.' },
      { label: 'VFX e finishing', text: 'L\'output generativo è materiale di partenza. Compositing, cleanup, integrazione con live action, color match e finishing vengono trattati come qualunque altro shot di post-produzione.' },
      { label: 'Delivery', text: 'Consegna nel formato concordato con la pipeline del progetto, più viewing copy. Il formato di conform viene scelto per preservare il lavoro successivo di compositing, colore e finalizzazione, non per attribuire alla sorgente generativa informazioni che non possiede.' },
      { label: 'Round', text: 'Note consolidate da un solo referente. Una variazione sullo stesso shot è una nota; un cambio di angolo, ambiente o costume è una rigenerazione, e si tratta come inquadratura nuova. Il numero di round inclusi si definisce a preventivo.' },
    ],
  },

  tools: ['Runway', 'Veo', 'Kling', 'Seedance', 'ComfyUI', 'Rewake', 'Nuke', 'After Effects', 'DaVinci Resolve', 'Unreal Engine'],

  recentWorkTitle: 'Progetti AI Video',
  recentWork: [
    { title: 'Roche — Jingle Milano Cortina', link: '/portfolio/roche-jingle-ai' },
    { title: 'Doppelganger — Campagna AI', link: '/portfolio/doppelganger' },
    { title: '📖 Leggi: Come scelgo tra AI e VFX tradizionale per ogni shot', link: '/blog/ai-vs-vfx-tradizionale-come-scegliere' },
    { title: '📖 Leggi: Come un VFX artist usa l\'AI nel 2026', link: '/blog/come-vfx-artist-usa-ai-workflow-2026' },
  ],

  ctaTitle: 'Vuoi esplorare l\'AI video',
  ctaSubtitle: 'per il tuo progetto?',
  ctaText: 'Raccontami cosa hai in mente. Ti dico subito se l\'AI è lo strumento giusto e cosa possiamo ottenere realisticamente — senza promesse vuote, senza hype.',
};

const contentEN = {
  sectionLabel: 'AI VIDEO',
  h1: 'AI Video Production in Rome — Artificial Intelligence Guided by 20 Years of Experience',
  heroSubtitle: 'Artificial intelligence guided by 20 years of artisan eye.',

  introTitle: "AI Doesn't Replace Experience. It Multiplies It.",
  introText: `<p>Anyone can generate a video with AI. Few know when the result is good enough, when manual work is needed and how to combine both. This is the difference between an "AI-generated video" and a professional video that uses AI as a tool.</p>
<p>I integrate Runway, Veo, Kling, Seedance 2.5 and AI video generation tools into my <a href="/en/vfx" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">VFX</a> and <a href="/en/post-production" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">post-production</a> workflow — the same workflow I've used on films and commercials for twenty years. AI produces the raw material, experience transforms it into a result that actually works.</p>
<p>My advantage is context. Twenty years of post-production mean knowing how a final image should look, which artifacts are acceptable and which aren't, how to integrate AI output with real footage, how to maintain visual coherence between generated shots. This know-how can't be improvised.</p>`,
  introImage: '/images/services/ai-video-production-workflow-professionale-roma.jpg',
  introImageAlt: 'AI video production — professional workflow with artificial intelligence, Rome Italy',
  introVideo: '/videos/showreel-ai.mp4',
  introVideoPoster: '/images/ai-video/showreel-ai-poster.webp',

  servicesTitle: 'How I use AI in video production',
  services: [
    {
      name: 'Video Generation',
      tag: 'From Prompts & References',
      description: `<p>I build sequences from descriptions, reference images, storyboards or existing footage. The choice of model comes afterwards: framing, lens, movement, light, continuity and the narrative function of the shot come first.</p>`,
    },
    {
      name: 'Hybrid Workflow',
      tag: 'AI + Traditional',
      description: `<p>AI generates the base, experience perfects it. Compositing, color grading, frame-by-frame touch-up, integration with real footage — the final result goes through the same artisan process as any other project. I generate dozens of variants, select the best, iterate on details. A trained eye recognizes from the first frame whether the result has potential or should be discarded.</p>`,
    },
    {
      name: 'Concept & Pre-visualization',
      tag: 'Rapid Prototyping',
      description: `<p>AI excels at exploring creative directions quickly. I can generate dozens of visual variants in hours, not weeks — giving directors or agencies the ability to see and choose before investing in shooting. For anyone who needs to present an idea to a client, this changes everything.</p>`,
    },
    {
      name: 'AI Commercial Content',
      tag: 'Brand & Advertising',
      description: `<p>For brands wanting impactful video content on contained budgets, AI offers possibilities that a year ago required sets, crew and shooting days. The result is professional because the process is — it's not an "AI-generated video," it's a professionally produced video that uses AI as one of many tools.</p>`,
    },
    {
      name: 'AI Short Films & Series',
      tag: 'Narrative Content',
      description: `<p>The market for AI-generated narrative content is emerging. Those with both traditional film experience — editing, rhythm, storytelling — and AI tool mastery will be the most sought-after professionals. This isn't the future: it's now. And I'm already here.</p>`,
    },
  ],

  approachTitle: "Why 'knowing AI' isn't enough",
  pillars: [
    {
      number: '1',
      title: 'The Eye Before the Tool.',
      text: "Anyone can write a prompt and get a video. The problem is that video will have visual inconsistencies, artifacts, unnatural movements. Twenty years of post-production let me see from the first frame what works and what doesn't — and intervene with the right tools.",
    },
    {
      number: '2',
      title: 'Post-producing AI Output.',
      text: "Raw AI output is the starting point, not the finished product. Color grading, stabilization, artifact correction, compositing with real elements, sound design — everything goes through the same artisan process I apply to any project.",
    },
    {
      number: '3',
      title: 'Narrative Coherence.',
      text: "A video sequence isn't a sum of beautiful clips — it's a story. Maintaining style, lighting, color and rhythm coherence between AI-generated shots requires the same competence needed in traditional editing. Perhaps more.",
    },
  ],

  highlight: {
    label: 'THE METHOD',
    title: "I built the tool that didn't exist",
    text: `<p>I don't keep that record by hand. On a production with hundreds of clips, references and versions, keeping it by hand means losing the link between what was generated and what was approved.</p>
<p>That's why I built <strong class="text-text-primary">Rewake</strong>, a film memory system for AI filmmaking: scenes, shots, takes, prompts and decisions stay connected in one system, and the project stays readable over time — even months later.</p>
<p>For anyone who brings me an AI project, this means something concrete: organized production, consistency across shots, versions under control. It's the craftsman's mindset: if the tool doesn't exist, you build it.</p>`,
    logo: '/images/services/rewake-logo.webp',
    logoAlt: 'Rewake — Your Film Memory',
    image: '/images/services/rewake-film-memory-system-ai-filmmaking.webp',
    imageAlt: 'Rewake workspace: storyboard, character reference, prompt and video output connected in one system',
    linkText: 'Discover Rewake',
    linkUrl: 'https://rewake.studio?utm_source=pieroperilli.com&utm_medium=referral&utm_campaign=ai-video',
    linkEvent: 'rewake_click',
  },

  // ---- NEW BLOCKS -------------------------------------------------------
  //
  // BREAKDOWN: il video di questa pagina è INDIPENDENTE da quello di
  // /selected-work. Per cambiarlo basta sostituire `video` e `poster` qui
  // sotto. Stringa vuota in `video` = sezione non renderizzata, nessun
  // player rotto. Ricordati di farlo in ENTRAMBE le lingue.

  breakdown: {
    title: 'Breakdown',
    text: 'What was there, what was generated, what was composited. The part you do not usually see is the part that decides whether a shot holds inside a cut.',
    video: '/videos/breakdown-ai.mp4',
    poster: '/images/ai-video/breakdown-ai-poster.webp',
  },

  identity: {
    title: 'Identity consistency',
    text: 'The same subject across different angles, lenses and lighting setups.',
    caption: 'Identity consistency is not judged on a single image but across a sequence. For real people I work only from authorised assets and within the pipeline agreed with production.',
    images: [] as string[],
  },

  method: {
    title: 'How I work',
    items: [
      { label: 'Look development', text: 'Before producing a sequence I define one or more target shots: composition, lens, light, movement, texture and continuity with the adjacent shots. The visual language is approved before production scales.' },
      { label: 'Production by shot families', text: 'Shots are not treated as isolated clips. I group them by character, environment, lighting setup or technical problem, so references and decisions stay consistent.' },
      { label: 'Traceability', text: 'Every shot keeps its own history of references, prompts, versions and approved decisions.' },
      { label: 'VFX and finishing', text: 'Generative output is starting material. Compositing, cleanup, live-action integration, colour match and finishing are treated like any other post-production shot.' },
      { label: 'Delivery', text: 'Delivery in the format agreed with the project pipeline, plus a viewing copy. The conform format is chosen to preserve the compositing, colour and finishing work that follows, not to attribute information to the generative source that it does not have.' },
      { label: 'Rounds', text: 'Notes consolidated through a single contact. A variation on the same shot is a note; a change of angle, environment or wardrobe is a regeneration, and is treated as a new shot. The number of rounds included is set in the quote.' },
    ],
  },

  tools: ['Runway', 'Veo', 'Kling', 'Seedance', 'ComfyUI', 'Rewake', 'Nuke', 'After Effects', 'DaVinci Resolve', 'Unreal Engine'],

  recentWorkTitle: 'AI Video Projects',
  recentWork: [
    { title: 'Roche — Milano Cortina jingle', link: '/en/portfolio/roche-jingle-ai' },
    { title: 'Doppelganger — AI campaign', link: '/en/portfolio/doppelganger' },
    { title: '📖 Read: How I choose between AI and traditional VFX for every shot', link: '/en/blog/ai-vs-traditional-vfx-how-to-choose' },
    { title: '📖 Read: How a VFX artist uses AI in 2026', link: '/en/blog/how-vfx-artist-uses-ai-workflow-2026' },
  ],

  ctaTitle: 'Want to explore AI video',
  ctaSubtitle: 'for your project?',
  ctaText: "Tell me what you have in mind. I'll tell you right away if AI is the right tool and what we can realistically achieve — no empty promises, no hype.",
};

export default function AIVideoPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const isIt = locale === 'it';
  const content = isIt ? contentIT : contentEN;
  return (
    <>
      <ServiceSchema
        name={isIt ? 'AI Video Production Professionale' : 'Professional AI Video Production'}
        description={isIt
          ? 'Produzione video con AI generativa guidata da 20 anni di esperienza VFX. Workflow ibrido AI + tradizionale. Italia.'
          : 'AI-powered video production guided by 20 years of VFX experience. Hybrid AI + traditional workflow. Italy.'}
        url={isIt ? '/ai-video' : '/en/ai-video'}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: isIt ? '/' : '/en' },
        { name: 'AI Video', url: isIt ? '/ai-video' : '/en/ai-video' },
      ]} />
      <FAQSchema faqs={serviceFAQs['ai-video'][isIt ? 'it' : 'en']} />
      <SpeakableSchema url={isIt ? '/ai-video' : '/en/ai-video'} />
      <ServicePageTemplate {...content} faqs={serviceFAQs['ai-video'][isIt ? 'it' : 'en']} faqTitle={isIt ? 'Domande frequenti sull\'AI video production' : 'Frequently asked questions about AI video production'} />
    </>
  );
}