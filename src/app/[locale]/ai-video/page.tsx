import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Video Production Italia | Video Generati con AI Professionale | Piero Perilli',
  description: 'AI video production professionale in Italia. Generazione video con AI (Runway, Veo, Kling) guidata da 20+ anni di esperienza VFX. L\'AI senza esperienza produce rumore — con esperienza produce risultati.',
};

const contentIT = {
  subtitle: 'AI VIDEO PRODUCTION',
  h1: 'AI Video Production: L\'Intelligenza Artificiale Guidata dall\'Esperienza',
  intro: 'L\'AI sta cambiando la produzione video. Ma uno strumento potente in mani inesperte produce risultati mediocri. Integro Runway, Veo, Kling e gli strumenti di generazione video AI nel workflow professionale di chi fa VFX da vent\'anni. Il risultato è diverso.',
  sections: [
    {
      title: 'L\'AI non sostituisce 20 anni di occhio. Li moltiplica.',
      content: `<p>Tutti possono generare un video con l'AI. Pochi sanno quando il risultato è sufficiente, quando serve intervento manuale e come combinare i due. Questa è la differenza tra un video "generato dall'AI" e un video professionale che usa l'AI come strumento.</p>
<p>Lavoro con strumenti di AI generativa dal momento in cui sono diventati utilizzabili professionalmente. Non per curiosità — per necessità. Ho capito subito che questi strumenti avrebbero cambiato il settore, e ho scelto di padroneggiarli piuttosto che subirli.</p>
<p>Il mio vantaggio è il contesto: venti anni di post-produzione significano sapere come deve apparire un'immagine finale, quali artefatti sono accettabili e quali no, come integrare un output AI con riprese reali, come correggere il colore e la coerenza visiva di materiale generato. Questo know-how non si improvvisa.</p>`,
    },
    {
      title: 'Come uso l\'AI nella produzione video',
      content: `<p><strong>Generazione video da prompt e reference:</strong> Creo sequenze video partendo da descrizioni testuali, immagini di riferimento o storyboard. Uso Runway, Veo e Kling selezionando lo strumento più adatto al risultato richiesto.</p>
<p><strong>Workflow ibrido AI + tradizionale:</strong> L'AI genera la base, l'esperienza la perfeziona. Compositing, color grading, ritocco frame-by-frame, integrazione con footage reale — il risultato finale passa attraverso lo stesso processo artigianale di qualsiasi altro mio progetto.</p>
<p><strong>Concept e pre-visualizzazione:</strong> L'AI è eccezionale per esplorare direzioni creative rapidamente. Posso generare decine di varianti visive in ore, non settimane — dando al regista o all'agenzia la possibilità di vedere e scegliere prima di investire nel girato.</p>
<p><strong>Contenuti commerciali AI-generated:</strong> Per brand che vogliono contenuti video d'impatto con budget contenuti, l'AI offre possibilità che fino a un anno fa richiedevano set, crew e giornate di ripresa. Il risultato è professionale perché il processo lo è.</p>
<p><strong>Cortometraggi e serie AI:</strong> Il mercato dei contenuti narrativi AI-generated sta nascendo. Chi ha sia l'esperienza cinematografica tradizionale che la padronanza degli strumenti AI sarà la figura più ricercata. Ci sono già.</p>`,
    },
    {
      title: 'Perché non basta "saper usare l\'AI"',
      content: `<p>Chiunque può scrivere un prompt e ottenere un video. Il problema è che quel video avrà incoerenze visive, artefatti, movimenti innaturali, colori piatti. Per un uso professionale, non basta.</p>
<p>Il mio processo di AI video production include:</p>
<p><strong>Curatela del prompt:</strong> Scrivere un prompt efficace richiede conoscenza tecnica cinematografica — sapere come descrivere un'inquadratura, un movimento di camera, un tipo di luce in termini che l'AI possa interpretare correttamente.</p>
<p><strong>Selezione e iterazione:</strong> Genero decine di varianti, seleziono le migliori, itero sui dettagli. L'occhio allenato riconosce al primo frame se il risultato ha potenziale o va scartato.</p>
<p><strong>Post-produzione dell'output AI:</strong> Color grading, stabilizzazione, correzione artefatti, compositing con elementi reali, sound design. L'output grezzo dell'AI è il punto di partenza, non il prodotto finito.</p>
<p><strong>Coerenza narrativa:</strong> Una sequenza video non è una somma di clip belle — è un racconto. Mantenere coerenza di stile, illuminazione, colore e ritmo tra shot generate dall'AI richiede la stessa competenza che serve nel montaggio tradizionale.</p>`,
    },
    {
      title: 'Per chi è questo servizio',
      content: `<p><strong>Agenzie e brand:</strong> Che vogliono esplorare l'AI video per campagne e contenuti, ma con un professionista che garantisca risultati all'altezza del brand — non esperimenti.</p>
<p><strong>Registi e producer:</strong> Che stanno valutando l'AI per pre-visualizzazione, concept o come strumento di produzione per progetti specifici.</p>
<p><strong>Produzioni AI-native:</strong> Che stanno sviluppando cortometraggi, serie o contenuti narrativi interamente AI-generated e cercano un professionista con esperienza sia tradizionale che AI.</p>
<p><strong>Chi vuole capire prima di investire:</strong> Se non sei sicuro che l'AI possa funzionare per il tuo progetto, parliamone. Posso mostrarti cosa è realistico ottenere oggi e cosa no — senza overselling.</p>`,
    },
  ],
  tools: ['Runway Gen-3', 'Veo 3.1', 'Kling AI', 'Midjourney', 'After Effects', 'DaVinci Resolve', 'Unreal Engine 5', 'ComfyUI'],
  ctaHeadline: 'Vuoi esplorare l\'AI video per il tuo progetto?',
  ctaText: 'Raccontami cosa hai in mente. Ti dico subito se l\'AI è lo strumento giusto e cosa possiamo ottenere realisticamente — senza promesse vuote.',
};

const contentEN = {
  subtitle: 'AI VIDEO PRODUCTION',
  h1: 'AI Video Production: Artificial Intelligence Guided by Experience',
  intro: 'AI is changing video production. But a powerful tool in inexperienced hands produces mediocre results. I integrate Runway, Veo, Kling and AI video generation tools into the professional workflow of someone who\'s been doing VFX for twenty years. The result is different.',
  sections: [
    {
      title: "AI doesn't replace 20 years of trained eye. It multiplies them.",
      content: `<p>Anyone can generate a video with AI. Few know when the result is good enough, when manual work is needed and how to combine both. This is the difference between an "AI-generated video" and a professional video that uses AI as a tool.</p>
<p>I've been working with generative AI tools since they became professionally viable. Not out of curiosity — out of necessity. I understood immediately that these tools would change the industry, and I chose to master them rather than be disrupted by them.</p>
<p>My advantage is context: twenty years of post-production mean knowing how a final image should look, which artifacts are acceptable and which aren't, how to integrate AI output with real footage, how to correct color and visual consistency of generated material. This know-how can't be improvised.</p>`,
    },
    {
      title: 'How I use AI in video production',
      content: `<p><strong>Video generation from prompts and references:</strong> I create video sequences from text descriptions, reference images or storyboards. I use Runway, Veo and Kling, selecting the tool best suited to the required result.</p>
<p><strong>Hybrid AI + traditional workflow:</strong> AI generates the base, experience perfects it. Compositing, color grading, frame-by-frame touch-up, integration with real footage — the final result goes through the same artisan process as any other project of mine.</p>
<p><strong>Concept and pre-visualization:</strong> AI excels at exploring creative directions quickly. I can generate dozens of visual variants in hours, not weeks — giving directors or agencies the ability to see and choose before investing in shooting.</p>
<p><strong>AI-generated commercial content:</strong> For brands wanting impactful video content on contained budgets, AI offers possibilities that a year ago required sets, crew and shooting days. The result is professional because the process is.</p>
<p><strong>AI short films and series:</strong> The market for AI-generated narrative content is emerging. Those with both traditional film experience and AI tool mastery will be the most sought-after professionals. I'm already there.</p>`,
    },
    {
      title: "Why 'knowing how to use AI' isn't enough",
      content: `<p>Anyone can write a prompt and get a video. The problem is that video will have visual inconsistencies, artifacts, unnatural movements, flat colors. For professional use, that's not enough.</p>
<p>My AI video production process includes:</p>
<p><strong>Prompt crafting:</strong> Writing an effective prompt requires cinematographic technical knowledge — knowing how to describe a shot, camera movement, lighting type in terms AI can interpret correctly.</p>
<p><strong>Selection and iteration:</strong> I generate dozens of variants, select the best, iterate on details. A trained eye recognizes from the first frame whether the result has potential or should be discarded.</p>
<p><strong>AI output post-production:</strong> Color grading, stabilization, artifact correction, compositing with real elements, sound design. Raw AI output is the starting point, not the finished product.</p>
<p><strong>Narrative coherence:</strong> A video sequence isn't a sum of beautiful clips — it's a story. Maintaining style, lighting, color and rhythm coherence between AI-generated shots requires the same competence needed in traditional editing.</p>`,
    },
    {
      title: 'Who this service is for',
      content: `<p><strong>Agencies and brands:</strong> Wanting to explore AI video for campaigns and content, but with a professional who ensures results worthy of the brand — not experiments.</p>
<p><strong>Directors and producers:</strong> Evaluating AI for pre-visualization, concept or as a production tool for specific projects.</p>
<p><strong>AI-native productions:</strong> Developing shorts, series or narrative content entirely AI-generated, looking for a professional with both traditional and AI experience.</p>
<p><strong>Those who want to understand before investing:</strong> If you're not sure AI can work for your project, let's talk. I can show you what's realistically achievable today and what isn't — no overselling.</p>`,
    },
  ],
  tools: ['Runway Gen-3', 'Veo 3.1', 'Kling AI', 'Midjourney', 'After Effects', 'DaVinci Resolve', 'Unreal Engine 5', 'ComfyUI'],
  ctaHeadline: 'Want to explore AI video for your project?',
  ctaText: "Tell me what you have in mind. I'll tell you right away if AI is the right tool and what we can realistically achieve — no empty promises.",
};

export default function AIVideoPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const content = locale === 'it' ? contentIT : contentEN;
  return <ServicePageTemplate {...content} />;
}