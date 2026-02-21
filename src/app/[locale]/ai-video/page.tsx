import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return locale === 'it' ? {
    title: 'AI Video Production Italia | Video Generati con AI Professionale | Piero Perilli',
    description: 'AI video production e generazione video con intelligenza artificiale in Italia. Workflow con Runway, Veo e Kling guidata da 20 anni di esperienza VFX. Workflow ibrido AI + post-produzione tradizionale per risultati professionali.',
    alternates: getPageAlternates('/ai-video', locale),
    openGraph: getPageOpenGraph('/ai-video', locale),
  } : {
    title: 'AI Video Production Italy | Professional AI-Generated Video | Piero Perilli',
    description: 'AI video production and AI-assisted video generation in Italy. Runway, Veo and Kling workflow guided by 20 years of VFX experience. Hybrid AI + traditional post-production for professional results.',
    alternates: getPageAlternates('/ai-video', locale),
    openGraph: getPageOpenGraph('/ai-video', locale),
  };
}

const contentIT = {
  sectionLabel: 'AI VIDEO',
  h1: "AI Video Production — L'Intelligenza Artificiale Guidata dall'Esperienza",
  heroSubtitle: 'L\'intelligenza artificiale guidata da 20 anni di occhio artigianale.',

  introTitle: 'L\'AI non Sostituisce l\'Esperienza. La Moltiplica.',
  introText: `<p>Tutti possono generare un video con l'AI. Pochi sanno quando il risultato è sufficiente, quando serve intervento manuale e come combinare i due. Questa è la differenza tra un video "generato dall'AI" e un video professionale che usa l'AI come strumento.</p>
<p>Integro Runway, Veo, Kling e gli strumenti di generazione video AI nel mio <a href="/vfx" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">workflow VFX</a> e di <a href="/post-produzione" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">post-produzione</a> — lo stesso workflow con cui lavoro su film e spot da vent'anni. L'AI produce la materia prima, l'esperienza la trasforma in un risultato che funziona davvero.</p>
<p>Il mio vantaggio è il contesto. Venti anni di post-produzione significano sapere come deve apparire un'immagine finale, quali artefatti sono accettabili e quali no, come integrare output AI con riprese reali, come mantenere coerenza visiva tra shot generate. Questo know-how non si improvvisa.</p>`,
  introImage: '/images/services/ai-video-production-workflow-professionale-roma.jpg',
  introImageAlt: 'AI video production — workflow professionale con intelligenza artificiale, Roma',

  servicesTitle: 'Come uso l\'AI nella produzione video',
  services: [
    {
      name: 'Generazione Video',
      tag: 'Da Prompt e Reference',
      description: `<p>Creo sequenze video partendo da descrizioni testuali, immagini di riferimento o storyboard. Seleziono lo strumento più adatto al risultato richiesto — Runway per il controllo, Veo per la qualità cinematografica, Kling per le scene dinamiche. Scrivere un prompt efficace richiede conoscenza cinematografica: sapere come descrivere un'inquadratura, un movimento di camera, un tipo di luce in termini che l'AI interpreta correttamente.</p>`,
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

  tools: ['Runway Gen-3', 'Veo 3.1', 'Kling AI', 'Midjourney', 'ComfyUI', 'After Effects', 'DaVinci Resolve', 'Unreal Engine 5'],

  ctaTitle: 'Vuoi esplorare l\'AI video',
  ctaSubtitle: 'per il tuo progetto?',
  ctaText: 'Raccontami cosa hai in mente. Ti dico subito se l\'AI è lo strumento giusto e cosa possiamo ottenere realisticamente — senza promesse vuote, senza hype.',
};

const contentEN = {
  sectionLabel: 'AI VIDEO',
  h1: 'AI Video Production — Artificial Intelligence Guided by 20 Years of Experience',
  heroSubtitle: 'Artificial intelligence guided by 20 years of artisan eye.',

  introTitle: "AI Doesn't Replace Experience. It Multiplies It.",
  introText: `<p>Anyone can generate a video with AI. Few know when the result is good enough, when manual work is needed and how to combine both. This is the difference between an "AI-generated video" and a professional video that uses AI as a tool.</p>
<p>I integrate Runway, Veo, Kling and AI video generation tools into my <a href="/en/vfx" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">VFX</a> and <a href="/en/post-production" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">post-production</a> workflow — the same workflow I've used on films and commercials for twenty years. AI produces the raw material, experience transforms it into a result that actually works.</p>
<p>My advantage is context. Twenty years of post-production mean knowing how a final image should look, which artifacts are acceptable and which aren't, how to integrate AI output with real footage, how to maintain visual coherence between generated shots. This know-how can't be improvised.</p>`,
  introImage: '/images/services/ai-video-production-workflow-professionale-roma.jpg',
  introImageAlt: 'AI video production — professional workflow with artificial intelligence, Rome Italy',

  servicesTitle: 'How I use AI in video production',
  services: [
    {
      name: 'Video Generation',
      tag: 'From Prompts & References',
      description: `<p>I create video sequences from text descriptions, reference images or storyboards. I select the tool best suited to the required result — Runway for control, Veo for cinematic quality, Kling for dynamic scenes. Writing an effective prompt requires cinematographic knowledge: knowing how to describe a shot, camera movement, lighting type in terms AI can interpret correctly.</p>`,
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

  tools: ['Runway Gen-3', 'Veo 3.1', 'Kling AI', 'Midjourney', 'ComfyUI', 'After Effects', 'DaVinci Resolve', 'Unreal Engine 5'],

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
      <ServicePageTemplate {...content} />
    </>
  );
}