import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return locale === 'it' ? {
    title: 'Animazione 2D e 3D Roma | Video Prodotto, Character e Ambienti | Piero Perilli',
    description: 'Animazione 2D e 3D professionale a Roma. Character animation, video prodotto 3D, simulazioni particellari, set extension e ambienti digitali per cinema, advertising e brand.',
  } : {
    title: '2D and 3D Animation Rome | Product Video, Character and Environments | Piero Perilli',
    description: 'Professional 2D and 3D animation in Rome. Character animation, 3D product video, particle simulations, set extension and digital environments for cinema, advertising and brands.',
  };
}

const contentIT = {
  sectionLabel: 'ANIMAZIONE',
  h1: 'Animazione 2D e 3D — Video Prodotto, Character e Ambienti Digitali',
  heroSubtitle: 'Dai vita a personaggi, prodotti e ambienti con animazioni fluide e realistiche.',

  introTitle: 'Storie che Prendono Vita.',
  introText: `<p>L'animazione è l'arte di creare l'illusione della vita. Il mio lavoro è trasformare un'idea, un prodotto o un personaggio in una storia che emoziona e comunica, scegliendo lo stile perfetto tra il calore del 2D e la profondità del 3D.</p>
<p>Lavoro in 3D da oltre quindici anni, con un approccio che parte sempre dall'obiettivo comunicativo. Prima di aprire il software, capisco cosa deve raccontare l'animazione, chi la vedrà e in quale contesto. Poi scelgo la tecnica — fotorealismo, stilizzazione, motion design ibrido — e la realizzo.</p>
<p>Il mio background da VFX artist è un vantaggio concreto: so come il 3D si integra con le riprese reali, conosco le esigenze del compositing e posso gestire l'intero flusso dalla modellazione al render finale.</p>`,
  introImage: '/images/services/animazione-3d-spline-guerciotti-product-visualization.jpg',
  introImageAlt: 'Animazione 3D spline per Guerciotti — Piero Perilli Roma',

  servicesTitle: 'Tecnica e creatività per le tue idee',
  services: [
    {
      name: 'Character Animation',
      tag: 'Animazione di Personaggi',
      description: `<p>Do vita a personaggi 2D e 3D, curandone la personalità in ogni movimento ed espressione. Il mio scopo è creare performance credibili che generino empatia e riescano a connettersi emotivamente con il pubblico, trasformando semplici modelli in personaggi memorabili. Lavoro con Character Creator e ZBrush per personaggi realistici o stilizzati.</p>`,
    },
    {
      name: 'Product Visualization',
      tag: 'Visualizzazione di Prodotto',
      description: `<p>Presento il tuo prodotto nel modo più efficace e accattivante. Un esempio è il progetto <a href="/portfolio/guerciotti-60-anni" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">Guerciotti 60 Anni</a>, dove ho animato un telaio in carbonio dalla spline al render fotorealistico. Creo render fotorealistici e animazioni 3D che ne mostrano il design, le caratteristiche e il funzionamento da ogni angolazione — ideali per spot, campagne di marketing, e-commerce e lanci di prodotto. Il prodotto viene modellato partendo da disegni tecnici o foto, texturizzato con materiali realistici, illuminato e animato per mostrarne ogni dettaglio.</p>`,
      image: '/images/services/product-visualization-3d-simulazione-tyflow-guerciotti.jpg',
      imageAlt: 'Product visualization 3D e simulazione tyFlow per Guerciotti',
    },
    {
      name: 'Simulazioni 3D',
      tag: 'Fenomeni Fisici',
      description: `<p>Ricreo fenomeni fisici e processi complessi attraverso simulazioni 3D. Fiamme, fumo, fluidi, distruzioni, sistemi particellari. Uso tyFlow in 3ds Max e Niagara in Unreal Engine per simulazioni fisicamente accurate o stilizzate. Il progetto Guerciotti, ad esempio, ha richiesto spline animate e simulazioni di fiamme che richiamano il processo di saldatura artigianale. Queste simulazioni si integrano naturalmente nel workflow di <a href="/vfx" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">effetti visivi</a> e <a href="/motion-graphics" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">motion graphics</a>.</p>`,
    },
    {
      name: 'Ambienti Digitali',
      tag: 'Set Extension',
      description: `<p>Espando i confini delle tue scenografie fisiche, trasformando un set parziale in un mondo vasto e immersivo. Integro elementi 3D, matte painting fotorealistici e real-time rendering con Unreal Engine per dare alla tua produzione una scala epica e cinematografica, superando i limiti di location e budget.</p>`,
    },
    {
      name: 'Motion Design Ibrido',
      tag: 'Mix 2D & 3D',
      description: `<p>Fondo la fluidità del 2D con la profondità del 3D per creare uno stile visivo unico e di grande impatto. Il mio approccio ibrido mi permette di realizzare animazioni complesse e stratificate, perfette per progetti che cercano di distinguersi con un'estetica innovativa e ricercata.</p>`,
    },
  ],

  approachTitle: 'Un partner creativo per il tuo progetto',
  pillars: [
    {
      number: '1',
      title: 'Dalla Visione alla Realtà, Insieme.',
      text: 'Credo nella collaborazione stretta. Lavoro al tuo fianco in ogni fase — dal concept allo storyboard, fino all\'animazione finale — per garantire che il risultato rispecchi perfettamente la tua visione.',
    },
    {
      number: '2',
      title: 'Lo Stile Giusto per Ogni Storia.',
      text: 'Ogni progetto ha un\'anima diversa. La mia versatilità mi permette di spaziare tra stili e tecniche per trovare il linguaggio visivo più adatto a raccontare la tua storia in modo unico e memorabile.',
    },
    {
      number: '3',
      title: 'Attenzione al Dettaglio Narrativo.',
      text: 'Al di là della tecnica, il mio focus è sempre sulla narrazione. Ogni movimento, espressione o transizione è studiato con l\'obiettivo di servire la storia e creare una connessione emotiva con chi guarda.',
    },
  ],

  tools: ['3ds Max', 'ZBrush', 'Character Creator', 'Unreal Engine 5', 'tyFlow', 'V-Ray', 'Substance Painter', 'After Effects'],

  ctaTitle: 'Hai una storia',
  ctaSubtitle: 'da animare?',
  ctaText: 'Che tu abbia bisogno di un video di prodotto che venda, di un personaggio che emozioni o di una narrazione che catturi l\'attenzione — raccontami il progetto e daremo vita insieme alla tua idea.',
};

const contentEN = {
  sectionLabel: 'ANIMATION',
  h1: '2D and 3D Animation — Product Video, Character and Digital Environments',
  heroSubtitle: 'Bring characters, products and environments to life with fluid, realistic animations.',

  introTitle: 'Stories that Come to Life.',
  introText: `<p>Animation is the art of creating the illusion of life. My job is to transform an idea, a product or a character into a story that moves and communicates, choosing the perfect style between the warmth of 2D and the depth of 3D.</p>
<p>I've been working in 3D for over fifteen years, with an approach that always starts from the communication objective. Before opening any software, I understand what the animation needs to tell, who will see it and in what context. Then I choose the technique — photorealism, stylization, hybrid motion design — and execute it.</p>
<p>My VFX artist background is a concrete advantage: I know how 3D integrates with real footage, understand compositing requirements and can manage the entire flow from modeling to final render.</p>`,
  introImage: '/images/services/animazione-3d-spline-guerciotti-product-visualization.jpg',
  introImageAlt: '3D animation spline for Guerciotti — Piero Perilli Rome',

  servicesTitle: 'Technique and creativity for your ideas',
  services: [
    {
      name: 'Character Animation',
      tag: 'Character Performance',
      description: `<p>I bring 2D and 3D characters to life, crafting their personality into every movement and expression. My goal is to create believable performances that generate empathy and emotionally connect with the audience, transforming simple models into memorable characters. I work with Character Creator and ZBrush for realistic or stylized characters.</p>`,
    },
    {
      name: 'Product Visualization',
      tag: '3D Product Video',
      description: `<p>I present your product in the most effective and captivating way. An example is the <a href="/en/portfolio/guerciotti-60-anni" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">Guerciotti 60 Anni</a> project, where I animated a carbon frame from spline to photorealistic render. I create photorealistic renders and 3D animations showing its design, features and functionality from every angle — ideal for commercials, marketing campaigns, e-commerce and product launches. Products are modeled from technical drawings or photos, textured with realistic materials, lit and animated to show every detail.</p>`,
      image: '/images/services/product-visualization-3d-simulazione-tyflow-guerciotti.jpg',
      imageAlt: '3D product visualization and tyFlow simulation for Guerciotti',
    },
    {
      name: '3D Simulations',
      tag: 'Physical Phenomena',
      description: `<p>I recreate physical phenomena and complex processes through 3D simulations. Fire, smoke, fluids, destruction, particle systems. I use tyFlow in 3ds Max and Niagara in Unreal Engine for physically accurate or stylized simulations. The Guerciotti project, for example, required animated splines and flame simulations evoking the artisanal welding process.</p>`,
    },
    {
      name: 'Digital Environments',
      tag: 'Set Extension',
      description: `<p>I expand the boundaries of your physical sets, transforming a partial set into a vast, immersive world. I integrate 3D elements, photorealistic matte paintings and real-time rendering with Unreal Engine to give your production an epic, cinematic scale, going beyond location and budget limitations.</p>`,
    },
    {
      name: 'Hybrid Motion Design',
      tag: '2D & 3D Mix',
      description: `<p>I blend the fluidity of 2D with the depth of 3D to create a unique, high-impact visual style. My hybrid approach allows me to create complex, layered animations, perfect for projects seeking to stand out with innovative, sophisticated aesthetics.</p>`,
    },
  ],

  approachTitle: 'A creative partner for your project',
  pillars: [
    {
      number: '1',
      title: 'From Vision to Reality, Together.',
      text: 'I believe in close collaboration. I work alongside you at every stage — from concept to storyboard to final animation — ensuring the result perfectly reflects your vision.',
    },
    {
      number: '2',
      title: 'The Right Style for Every Story.',
      text: "Every project has a different soul. My versatility allows me to range across styles and techniques to find the visual language best suited to tell your story in a unique, memorable way.",
    },
    {
      number: '3',
      title: 'Attention to Narrative Detail.',
      text: "Beyond technique, my focus is always on narrative. Every movement, expression or transition is designed to serve the story and create an emotional connection with the viewer.",
    },
  ],

  tools: ['3ds Max', 'ZBrush', 'Character Creator', 'Unreal Engine 5', 'tyFlow', 'V-Ray', 'Substance Painter', 'After Effects'],

  ctaTitle: 'Have a story',
  ctaSubtitle: 'that needs animating?',
  ctaText: "Whether you need a product video that sells, a character that moves people or a narrative that captures attention — tell me about the project and we'll bring your idea to life together.",
};

export default function Animazione3DPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const isIt = locale === 'it';
  const content = isIt ? contentIT : contentEN;
  return (
    <>
      <ServiceSchema
        name={isIt ? 'Animazione 3D e Video Prodotto' : '3D Animation and Product Video'}
        description={isIt
          ? 'Animazione 3D, video prodotto, character animation e ambienti virtuali. Roma, Italia.'
          : '3D animation, product video, character animation and virtual environments. Rome, Italy.'}
        url={isIt ? '/animazione-3d' : '/en/animazione-3d'}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: isIt ? '/' : '/en' },
        { name: isIt ? 'Animazione 3D' : '3D Animation', url: isIt ? '/animazione-3d' : '/en/animazione-3d' },
      ]} />
      <ServicePageTemplate {...content} />
    </>
  );
}