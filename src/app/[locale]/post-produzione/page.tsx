import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post Produzione Video Roma | Montaggio, Color Grading e Finishing | Piero Perilli',
  description: 'Post-produzione video professionale a Roma. Montaggio, color grading certificato DaVinci Resolve, finishing per cinema, TV, documentari e spot pubblicitari.',
};

const contentIT = {
  subtitle: 'POST PRODUZIONE',
  h1: 'Post Produzione Video: Montaggio, Color Grading e Finishing Professionale',
  intro: 'Dal primo assembly al master finale. Montaggio narrativo, color grading, conforming e delivery — tutto in un unico flusso, con un unico interlocutore. Per chi vuole coerenza creativa senza perdere tempo nei passaggi di mano.',
  sections: [
    {
      title: 'Non solo montaggio. Un flusso completo.',
      content: `<p>La post-produzione tradizionale è frammentata: il montatore monta, il colorist colora, il finishing artist rifinisce. Ogni passaggio è un'attesa, un nuovo briefing, un rischio di perdere il filo creativo.</p>
<p>Il mio approccio elimina questa frammentazione. Gestisco montaggio, color grading e finishing in un unico flusso integrato. Mentre monto una sequenza, posso già esplorare la direzione del colore. Se il grading rivela che una scena funziona meglio con un taglio diverso, lo cambio subito. Non aspetto che qualcun altro se ne accorga.</p>
<p>Questo non è un compromesso — è un vantaggio. Per il regista significa avere un partner che ha il controllo dell'intera catena visiva, che vede il progetto nella sua interezza e che può prendere decisioni creative informate in ogni momento.</p>`,
      image: '/images/services/post-1.webp',
      imageAlt: 'Post produzione video professionale - Video musicale Sherol',
    },
    {
      title: 'Montaggio video professionale',
      content: `<p>Il montaggio non è tagliare e incollare — è costruire il ritmo, l'emozione, la struttura narrativa di un progetto. Lavoro su:</p>
<p><strong>Film e cortometraggi:</strong> Montaggio narrativo con attenzione al ritmo emotivo, alla continuità e alla costruzione drammaturgica. Dal primo assembly al final cut.</p>
<p><strong>Documentari:</strong> Strutturazione di materiale grezzo in una narrazione coerente. Lavoro con interviste, footage di archivio, grafiche e voice-over. Tra i progetti recenti: "Breaking: dalla strada alle olimpiadi" per RaiPlay e "Radio Caterina" per History Channel.</p>
<p><strong>Spot pubblicitari:</strong> Montaggio ritmico per campagne advertising. Tempi stretti, precisione al frame, versioni multiple per diversi formati e piattaforme.</p>
<p><strong>Video musicali:</strong> Montaggio creativo guidato dalla musica. Sincronia ritmica, transizioni creative, racconto visivo.</p>`,
    },
    {
      title: 'Color grading certificato DaVinci Resolve',
      content: `<p>Il colore è il linguaggio emotivo dell'immagine. Un grading accurato non si limita a "rendere bello" — definisce l'atmosfera, guida lo sguardo, separa i piani narrativi.</p>
<p>Sono certificato DaVinci Resolve, lo standard professionale per il color grading cinematografico. Lavoro con footage in LOG da tutte le principali camere cinema (ARRI, RED, Sony Venice, Blackmagic) e gestisco workflow HDR quando richiesto.</p>
<p>Il mio processo inizia dal dialogo con il regista o il direttore della fotografia: capiamo insieme la direzione emotiva del progetto, creiamo delle reference, poi sviluppo il look che diventa la firma visiva del film.</p>
<p><strong>Progetti di color grading recenti:</strong></p>
<p>"Non tutto è perduto" — film per il cinema. Color e montaggio.<br>
"A mamma non piace" — film per il cinema. Color grading.<br>
"Breaking: dalla strada alle olimpiadi" — documentario RaiPlay. Color e montaggio.</p>`,
      image: '/images/services/post-2.png',
      imageAlt: 'Color grading per Haute Couture di Sylvio Giardina',
    },
    {
      title: 'Per chi è questo servizio',
      content: `<p><strong>Registi e producer:</strong> Che cercano un partner di post-produzione completo, non un esecutore. Qualcuno che capisca la visione e la traduca in immagini finite con autonomia e competenza.</p>
<p><strong>Agenzie e case di produzione:</strong> Che hanno bisogno di un professionista affidabile per gestire la post di spot, campagne e contenuti branded. Tempi rispettati, qualità garantita.</p>
<p><strong>Produzioni indipendenti:</strong> Che non possono permettersi tre professionisti separati per montaggio, color e finishing — ma non vogliono rinunciare alla qualità professionale.</p>
<p>Di base a Roma, disponibile per progetti in tutta Italia e per produzioni internazionali che girano nel paese.</p>`,
    },
  ],
  tools: ['DaVinci Resolve (certificato)', 'Premiere Pro', 'After Effects', 'Media Encoder', 'Frame.io'],
  ctaHeadline: 'Hai materiale da portare in post?',
  ctaText: 'Raccontami il progetto. Che sia un film, un documentario o uno spot — vediamo insieme come trasformarlo nel suo risultato migliore.',
};

const contentEN = {
  subtitle: 'POST PRODUCTION',
  h1: 'Video Post Production: Editing, Color Grading and Professional Finishing',
  intro: 'From first assembly to final master. Narrative editing, color grading, conforming and delivery — all in a single pipeline, with a single point of contact. For those who want creative coherence without losing time in handoffs.',
  sections: [
    {
      title: 'Not just editing. A complete pipeline.',
      content: `<p>Traditional post-production is fragmented: the editor edits, the colorist grades, the finishing artist finishes. Each step is a wait, a new briefing, a risk of losing the creative thread.</p>
<p>My approach eliminates this fragmentation. I manage editing, color grading and finishing in a single integrated pipeline. While editing a sequence, I can already explore the color direction. If grading reveals that a scene works better with a different cut, I change it immediately. I don't wait for someone else to notice.</p>
<p>This isn't a compromise — it's an advantage. For the director it means having a partner who controls the entire visual chain, who sees the project in its entirety and can make informed creative decisions at every moment.</p>`,
      image: '/images/services/post-1.webp',
      imageAlt: 'Professional video post production - Sherol music video',
    },
    {
      title: 'Professional video editing',
      content: `<p>Editing isn't cutting and pasting — it's building the rhythm, emotion and narrative structure of a project. I work on:</p>
<p><strong>Films and short films:</strong> Narrative editing with attention to emotional rhythm, continuity and dramatic construction. From first assembly to final cut.</p>
<p><strong>Documentaries:</strong> Structuring raw material into coherent narrative. I work with interviews, archive footage, graphics and voice-over. Recent projects include "Breaking: from the street to the Olympics" for RaiPlay and "Radio Caterina" for History Channel.</p>
<p><strong>Commercials:</strong> Rhythmic editing for advertising campaigns. Tight timelines, frame-accurate precision, multiple versions for different formats and platforms.</p>
<p><strong>Music videos:</strong> Creative editing driven by music. Rhythmic synchronization, creative transitions, visual storytelling.</p>`,
    },
    {
      title: 'DaVinci Resolve certified color grading',
      content: `<p>Color is the emotional language of the image. Accurate grading doesn't just "make it look nice" — it defines atmosphere, guides the eye, separates narrative planes.</p>
<p>I'm DaVinci Resolve certified, the professional standard for cinematic color grading. I work with LOG footage from all major cinema cameras (ARRI, RED, Sony Venice, Blackmagic) and manage HDR workflows when required.</p>
<p>My process starts with dialogue with the director or DP: we understand the project's emotional direction together, create references, then I develop the look that becomes the film's visual signature.</p>
<p><strong>Recent color grading projects:</strong></p>
<p>"Non tutto è perduto" — theatrical film. Color and editing.<br>
"A mamma non piace" — theatrical film. Color grading.<br>
"Breaking: from the street to the Olympics" — RaiPlay documentary. Color and editing.</p>`,
      image: '/images/services/post-2.png',
      imageAlt: 'Color grading for Haute Couture by Sylvio Giardina',
    },
    {
      title: 'Who this service is for',
      content: `<p><strong>Directors and producers:</strong> Looking for a complete post-production partner, not an executor. Someone who understands the vision and translates it into finished images with autonomy and competence.</p>
<p><strong>Agencies and production houses:</strong> Who need a reliable professional to manage post for commercials, campaigns and branded content. Timelines met, quality guaranteed.</p>
<p><strong>Independent productions:</strong> Who can't afford three separate professionals for editing, color and finishing — but don't want to sacrifice professional quality.</p>
<p>Based in Rome, available for projects throughout Italy and for international productions shooting in the country.</p>`,
    },
  ],
  tools: ['DaVinci Resolve (certified)', 'Premiere Pro', 'After Effects', 'Media Encoder', 'Frame.io'],
  ctaHeadline: 'Have footage that needs post?',
  ctaText: "Tell me about the project. Whether it's a film, documentary or commercial — let's see together how to transform it into its best result.",
};

export default function PostProduzionePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const content = locale === 'it' ? contentIT : contentEN;
  return <ServicePageTemplate {...content} />;
}