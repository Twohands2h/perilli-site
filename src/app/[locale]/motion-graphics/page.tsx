import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motion Graphics Roma | Animazioni per Brand, Spot e Campagne | Piero Perilli',
  description: 'Motion graphics professionali a Roma per spot, sigle, campagne advertising e contenuti digitali. Animazione 2D/3D, titoli, infografiche animate, loghi e visual storytelling.',
};

const contentIT = {
  sectionLabel: 'MOTION GRAPHICS',
  h1: 'Motion Graphics',
  heroSubtitle: 'Animazioni grafiche dinamiche per brand, spot e contenuti digitali.',

  introTitle: 'Grafiche in Movimento che Danno Voce al Tuo Brand.',
  introText: `<p>Il mio lavoro è catturare l'attenzione e trasformare messaggi complessi in storie animate chiare e coinvolgenti. Aiuto agenzie e brand a comunicare con impatto attraverso animazioni 2D e 3D per spot pubblicitari, campagne social media e contenuti digitali, dando vita a idee, dati e identità visive.</p>
<p>Ogni progetto parte dalla comprensione dell'obiettivo. Chi deve vedere questa animazione? Cosa deve capire? Cosa deve sentire? Da qui si costruisce il concept visivo, si definisce lo stile, si anima. Non il contrario.</p>`,
  introImage: '/images/services/motion-graphics-mostra-ipotesi-metaverso-roma.webp',
  introImageAlt: 'Motion graphics per la mostra Ipotesi Metaverso — Piero Perilli Roma',

  servicesTitle: 'Le mie soluzioni per la tua comunicazione',
  services: [
    {
      name: 'Animazioni',
      tag: '2D, 3D e Particellari',
      description: `<p>Do vita alle tue idee attraverso un'ampia gamma di stili di animazione, creando composizioni visive che integrano effetti particellari e grafiche in movimento. Il mio obiettivo è scegliere il linguaggio visivo perfetto per comunicare il tuo messaggio con energia e impatto.</p>`,
      image: '/images/services/animazione-particellare-motion-graphics-eventi-roma.webp',
      imageAlt: 'Animazione particellare e motion graphics per eventi',
    },
    {
      name: 'Infografiche Animate',
      tag: 'Data Visualization',
      description: `<p>Trasformo dati e statistiche complesse in contenuti visivi dinamici e facili da capire. Progetto infografiche animate per presentazioni, social media e corporate — con l'obiettivo di rendere i numeri interessanti e comprensibili.</p>`,
    },
    {
      name: 'Titoli e Sigle',
      tag: 'Opening & Credits',
      description: `<p>Progetto e animo titoli, sigle e lower third per dare un tocco professionale e coerente ai tuoi video. Il titolo è il primo impatto visivo — deve definire il tono dell'intero progetto, creando grafiche animate eleganti e leggibili che rafforzino la tua brand identity.</p>`,
    },
    {
      name: 'Loghi Animati',
      tag: 'Brand Identity',
      description: `<p>Do vita al tuo logo, trasformandolo da un'immagine statica a un'animazione memorabile. Perfetti per intro e outro video, con l'obiettivo di rafforzare la tua brand identity e catturare l'attenzione fin dal primo istante.</p>`,
    },
    {
      name: 'Elementi UI Animati',
      tag: 'UX Motion',
      description: `<p>Animo interfacce utente per rendere l'esperienza utente più intuitiva e piacevole attraverso microinterazioni fluide, mostrando il funzionamento del tuo prodotto digitale in modo chiaro e dinamico.</p>`,
    },
  ],

  approachTitle: 'Il mio approccio: creatività e metodo',
  pillars: [
    {
      number: '1',
      title: 'Collaborazione Diretta.',
      text: 'Lavorerai direttamente con me, dal briefing iniziale alla consegna. Garantendo una comunicazione fluida e un\'aderenza totale alla tua visione creativa e ai tuoi obiettivi di business.',
    },
    {
      number: '2',
      title: 'Design su Misura.',
      text: 'Non uso template. Ogni animazione è progettata da zero per rispecchiare l\'identità unica del tuo brand e per parlare il linguaggio del tuo pubblico.',
    },
    {
      number: '3',
      title: 'Processo Trasparente.',
      text: 'Ti guido attraverso ogni fase del progetto. Dallo storyboard al design, fino all\'animazione finale — il mio obiettivo è darti un controllo chiaro sul processo e assicurare un risultato che superi le aspettative.',
    },
  ],

  tools: ['After Effects', 'Cinema 4D', '3ds Max', 'Illustrator', 'Photoshop', 'DaVinci Resolve Fusion', 'Premiere Pro'],

  ctaTitle: 'Pronto a dare voce',
  ctaSubtitle: 'al tuo design?',
  ctaText: 'Che tu sia un\'agenzia in cerca di un partner affidabile o un\'azienda che vuole potenziare il proprio marketing, raccontami il tuo progetto e troviamo insieme la soluzione visiva perfetta.',
};

const contentEN = {
  sectionLabel: 'MOTION GRAPHICS',
  h1: 'Motion Graphics',
  heroSubtitle: 'Dynamic graphic animations for brands, commercials and digital content.',

  introTitle: 'Graphics in Motion that Give Voice to Your Brand.',
  introText: `<p>My job is to capture attention and transform complex messages into clear, engaging animated stories. I help agencies and brands communicate with impact through 2D and 3D animations for commercials, social media campaigns and digital content, bringing ideas, data and visual identities to life.</p>
<p>Every project starts from understanding the goal. Who will see this animation? What should they understand? What should they feel? From there we build the visual concept, define the style, animate. Not the other way around.</p>`,
  introImage: '/images/services/motion-graphics-mostra-ipotesi-metaverso-roma.webp',
  introImageAlt: 'Motion graphics for the Ipotesi Metaverso exhibition — Piero Perilli Rome',

  servicesTitle: 'My solutions for your communication',
  services: [
    {
      name: 'Animations',
      tag: '2D, 3D & Particle',
      description: `<p>I bring your ideas to life through a wide range of animation styles, creating visual compositions integrating particle effects and graphics in motion. My goal is to choose the perfect visual language to communicate your message with energy and impact.</p>`,
      image: '/images/services/animazione-particellare-motion-graphics-eventi-roma.webp',
      imageAlt: 'Particle animation and motion graphics for events',
    },
    {
      name: 'Animated Infographics',
      tag: 'Data Visualization',
      description: `<p>I transform complex data and statistics into dynamic, easy-to-understand visual content. I design animated infographics for presentations, social media and corporate — making numbers interesting and comprehensible.</p>`,
    },
    {
      name: 'Titles & Opening Sequences',
      tag: 'Opening & Credits',
      description: `<p>I design and animate titles, opening sequences and lower thirds to give a professional, coherent touch to your videos. The title is the first visual impact — it must set the tone for the entire project, creating elegant, readable animated graphics that strengthen your brand identity.</p>`,
    },
    {
      name: 'Animated Logos',
      tag: 'Brand Identity',
      description: `<p>I bring your logo to life, transforming it from a static image to a memorable animation. Perfect for video intros and outros, with the goal of strengthening your brand identity and capturing attention from the first moment.</p>`,
    },
    {
      name: 'Animated UI Elements',
      tag: 'UX Motion',
      description: `<p>I animate user interfaces to make the user experience more intuitive and enjoyable through fluid micro-interactions, showing your digital product's functionality in a clear and dynamic way.</p>`,
    },
  ],

  approachTitle: 'My approach: creativity and method',
  pillars: [
    {
      number: '1',
      title: 'Direct Collaboration.',
      text: "You'll work directly with me, from initial briefing to delivery. Ensuring fluid communication and total adherence to your creative vision and business objectives.",
    },
    {
      number: '2',
      title: 'Custom Design.',
      text: "I don't use templates. Every animation is designed from scratch to reflect your brand's unique identity and speak your audience's language.",
    },
    {
      number: '3',
      title: 'Transparent Process.',
      text: "I guide you through every phase of the project. From storyboard to design to final animation — my goal is to give you clear control over the process and ensure a result that exceeds expectations.",
    },
  ],

  tools: ['After Effects', 'Cinema 4D', '3ds Max', 'Illustrator', 'Photoshop', 'DaVinci Resolve Fusion', 'Premiere Pro'],

  ctaTitle: 'Ready to give voice',
  ctaSubtitle: 'to your design?',
  ctaText: "Whether you're an agency looking for a reliable partner or a company wanting to enhance your marketing, tell me about your project and let's find the perfect visual solution together.",
};

export default function MotionGraphicsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const content = locale === 'it' ? contentIT : contentEN;
  return <ServicePageTemplate {...content} />;
}