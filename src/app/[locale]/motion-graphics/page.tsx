import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motion Graphics Roma | Animazioni per Brand e Campagne | Piero Perilli',
  description: 'Motion graphics professionali a Roma per spot, sigle, campagne advertising e contenuti digitali. Animazione 2D, titoli, infografiche animate e visual storytelling.',
};

const contentIT = {
  subtitle: 'MOTION GRAPHICS',
  h1: 'Motion Graphics per Brand, Campagne e Produzioni Digitali',
  intro: 'Animazioni grafiche che comunicano, non che decorano. Titoli, sigle, infografiche animate, visual storytelling per spot e campagne — dal concept all\'animazione finale, senza intermediari.',
  sections: [
    {
      title: 'Muovere le idee. Letteralmente.',
      content: `<p>Le motion graphics sono il punto di incontro tra design grafico e animazione. Non si tratta di far muovere un logo — si tratta di trasformare un messaggio in un'esperienza visiva che cattura l'attenzione e resta in memoria.</p>
<p>Lavoro con agenzie creative, brand e case di produzione per creare animazioni che risolvono problemi concreti di comunicazione: spiegare un prodotto complesso, dare identità visiva a una campagna, aprire un documentario con il tono giusto.</p>
<p>Ogni progetto parte dalla comprensione dell'obiettivo. Chi deve vedere questa animazione? Cosa deve capire? Cosa deve sentire? Da qui si costruisce il concept visivo, si definisce lo stile, si anima. Non il contrario.</p>`,
      image: '/images/services/motion-1.webp',
      imageAlt: 'Motion graphics per la mostra Ipotesi Metaverso',
    },
    {
      title: 'Cosa realizzo',
      content: `<p><strong>Sigle e titoli:</strong> Opening title, lower third, end credits per film, documentari, serie e programmi TV. Il titolo è il primo impatto visivo — deve definire il tono dell'intero progetto.</p>
<p><strong>Animazioni per campagne advertising:</strong> Grafiche animate per spot TV, digital e social. Versioni multiple per diversi formati (16:9, 9:16, 1:1) con tempi di produzione rapidi.</p>
<p><strong>Infografiche animate:</strong> Dati e informazioni complesse trasformati in visualizzazioni chiare e coinvolgenti. Per corporate, formazione, presentazioni e contenuti editoriali.</p>
<p><strong>Visual storytelling:</strong> Narrazioni visive che combinano tipografia, illustrazione e animazione per raccontare storie senza riprese video. Ideale per brand che vogliono comunicare valori e identità.</p>
<p><strong>Contenuti per eventi e installazioni:</strong> Animazioni per proiezioni, schermi LED, installazioni interattive. Tra i progetti: le animazioni per la mostra "Ipotesi Metaverso" — un lavoro che ha richiesto la creazione di ambienti particellari immersivi.</p>`,
    },
    {
      title: 'Il vantaggio del workflow integrato',
      content: `<p>Le motion graphics spesso devono integrarsi con riprese video, VFX e sound design. Nella pipeline tradizionale, il motion designer riceve un briefing, lavora isolato e consegna file che qualcun altro deve integrare.</p>
<p>Nel mio workflow, le motion graphics nascono già integrate con il resto della post-produzione. Se sto montando uno spot e serve un'animazione per un passaggio, la creo direttamente — nessun file da esportare e reimportare, nessun tempo perso in coordinamento.</p>
<p>Questo è particolarmente vantaggioso per le agenzie che lavorano con tempi stretti: un unico professionista che gestisce montaggio, grafiche animate e finishing significa meno mail, meno call di allineamento e un risultato più coerente.</p>`,
      image: '/images/services/motion-2.webp',
      imageAlt: 'Motion graphics particellare per Ipotesi Metaverso',
    },
    {
      title: 'Per chi è questo servizio',
      content: `<p><strong>Agenzie creative e pubblicitarie:</strong> Per campagne che richiedono contenuti animati di qualità, con tempi rapidi e la flessibilità di un professionista che può gestire anche montaggio e post.</p>
<p><strong>Brand e aziende:</strong> Per video prodotto, contenuti corporate, presentazioni animate e comunicazione interna che non sembri "la solita presentazione PowerPoint animata".</p>
<p><strong>Case di produzione e registi:</strong> Per sigle, titoli, grafiche in-video e tutto ciò che serve a dare identità visiva a un progetto cinematografico o televisivo.</p>
<p><strong>Organizzatori di eventi e mostre:</strong> Per contenuti video e animazioni destinati a installazioni, proiezioni e ambienti immersivi.</p>`,
    },
  ],
  tools: ['After Effects', 'Cinema 4D', '3ds Max', 'Illustrator', 'Photoshop', 'DaVinci Resolve Fusion', 'Premiere Pro'],
  ctaHeadline: 'Serve un\'animazione che comunichi davvero?',
  ctaText: 'Descrivimi il progetto. Dalle prime idee alla consegna, ci penso io — un unico interlocutore per tutto il flusso.',
};

const contentEN = {
  subtitle: 'MOTION GRAPHICS',
  h1: 'Motion Graphics for Brands, Campaigns and Digital Productions',
  intro: 'Graphic animations that communicate, not decorate. Titles, openings, animated infographics, visual storytelling for commercials and campaigns — from concept to final animation, with no intermediaries.',
  sections: [
    {
      title: 'Moving ideas. Literally.',
      content: `<p>Motion graphics are where graphic design meets animation. It's not about making a logo move — it's about transforming a message into a visual experience that captures attention and stays in memory.</p>
<p>I work with creative agencies, brands and production houses to create animations that solve concrete communication problems: explaining a complex product, giving visual identity to a campaign, opening a documentary with the right tone.</p>
<p>Every project starts with understanding the goal. Who will see this animation? What should they understand? What should they feel? From there we build the visual concept, define the style, animate. Not the other way around.</p>`,
      image: '/images/services/motion-1.webp',
      imageAlt: 'Motion graphics for the Ipotesi Metaverso exhibition',
    },
    {
      title: 'What I create',
      content: `<p><strong>Opening titles and credits:</strong> Opening titles, lower thirds, end credits for films, documentaries, series and TV programs. The title is the first visual impact — it must set the tone for the entire project.</p>
<p><strong>Advertising campaign animations:</strong> Animated graphics for TV, digital and social commercials. Multiple versions for different formats (16:9, 9:16, 1:1) with fast turnaround times.</p>
<p><strong>Animated infographics:</strong> Complex data and information transformed into clear, engaging visualizations. For corporate, training, presentations and editorial content.</p>
<p><strong>Visual storytelling:</strong> Visual narratives combining typography, illustration and animation to tell stories without video footage. Ideal for brands wanting to communicate values and identity.</p>
<p><strong>Event and installation content:</strong> Animations for projections, LED screens, interactive installations. Projects include animations for the "Ipotesi Metaverso" exhibition — work that required creating immersive particle environments.</p>`,
    },
    {
      title: 'The integrated workflow advantage',
      content: `<p>Motion graphics often need to integrate with video footage, VFX and sound design. In the traditional pipeline, the motion designer receives a brief, works in isolation and delivers files that someone else must integrate.</p>
<p>In my workflow, motion graphics are already integrated with the rest of post-production. If I'm editing a commercial and a transition animation is needed, I create it directly — no files to export and reimport, no time lost in coordination.</p>
<p>This is particularly valuable for agencies working with tight deadlines: a single professional managing editing, animated graphics and finishing means fewer emails, fewer alignment calls and a more coherent result.</p>`,
      image: '/images/services/motion-2.webp',
      imageAlt: 'Particle motion graphics for Ipotesi Metaverso',
    },
    {
      title: 'Who this service is for',
      content: `<p><strong>Creative and advertising agencies:</strong> For campaigns requiring quality animated content, with fast turnaround and the flexibility of a professional who can also handle editing and post.</p>
<p><strong>Brands and companies:</strong> For product videos, corporate content, animated presentations and internal communications that don't look like "the usual animated PowerPoint."</p>
<p><strong>Production houses and directors:</strong> For opening titles, credits, in-video graphics and everything needed to give visual identity to a film or TV project.</p>
<p><strong>Event and exhibition organizers:</strong> For video content and animations for installations, projections and immersive environments.</p>`,
    },
  ],
  tools: ['After Effects', 'Cinema 4D', '3ds Max', 'Illustrator', 'Photoshop', 'DaVinci Resolve Fusion', 'Premiere Pro'],
  ctaHeadline: 'Need animation that actually communicates?',
  ctaText: 'Describe the project to me. From first ideas to delivery, I handle it — a single point of contact for the entire flow.',
};

export default function MotionGraphicsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const content = locale === 'it' ? contentIT : contentEN;
  return <ServicePageTemplate {...content} />;
}