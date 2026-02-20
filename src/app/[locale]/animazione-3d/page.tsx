import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animazione 3D Roma | Video Prodotto, Character e Ambienti 3D | Piero Perilli',
  description: 'Animazione 3D professionale a Roma. Video prodotto, character animation, ambienti 3D e render fotorealistici per advertising, cinema e brand con 3ds Max, ZBrush e Unreal Engine.',
};

const contentIT = {
  subtitle: 'ANIMAZIONE 3D',
  h1: 'Animazione 3D: Prodotto, Character e Ambienti su Misura',
  intro: 'Modellazione, texturing, animazione e rendering 3D per dare forma a ciò che non esiste ancora. Dal prodotto fotorealistico al character stylized, dall\'ambiente architetturale alla simulazione particellare — con lo stesso occhio artigianale che guida tutto il mio lavoro.',
  sections: [
    {
      title: 'Il 3D al servizio della comunicazione',
      content: `<p>L'animazione 3D non è un esercizio tecnico — è uno strumento di comunicazione. Un video prodotto in 3D mostra dettagli che una ripresa video non può catturare. Un character animato racconta storie in modi che il live action non permette. Un ambiente digitale crea contesti impossibili da costruire fisicamente.</p>
<p>Lavoro in 3D da oltre quindici anni, con un approccio che parte sempre dall'obiettivo comunicativo. Prima di aprire il software, capisco cosa deve raccontare l'animazione, chi la vedrà e in quale contesto. Poi scelgo la tecnica più adatta — fotorealismo, stilizzazione, motion design 3D — e la realizzo.</p>
<p>Il mio background da VFX artist è un vantaggio concreto: so come il 3D si integra con le riprese reali, conosco le esigenze del compositing e posso gestire l'intero flusso dalla modellazione al render finale senza dipendere da altri.</p>`,
      image: '/images/services/3d-1.jpg',
      imageAlt: 'Animazione 3D spline per Guerciotti',
    },
    {
      title: 'Cosa realizzo',
      content: `<p><strong>Video prodotto 3D:</strong> Animazioni fotorealistiche di prodotti per e-commerce, campagne advertising e presentazioni. Il prodotto viene modellato in 3D partendo da disegni tecnici o foto, texturizzato con materiali realistici, illuminato e animato per mostrarne ogni dettaglio. Ideale per lanci di prodotto dove il campione fisico non è ancora disponibile.</p>
<p><strong>Character animation:</strong> Creazione e animazione di personaggi 3D — dal character design al rigging, dall'animazione al rendering. Lavoro con Character Creator e ZBrush per personaggi realistici o stilizzati.</p>
<p><strong>Ambienti e set extension:</strong> Creazione di ambienti 3D completi o estensione di set reali con elementi digitali. Architetture, paesaggi, interni — per cinema, advertising e visualizzazione architettonica.</p>
<p><strong>Simulazioni e particelle:</strong> Fiamme, fumo, fluidi, distruzioni, sistemi particellari. Uso tyFlow in 3ds Max e Niagara in Unreal Engine per simulazioni fisicamente accurate o stilizzate. Il progetto Guerciotti, ad esempio, ha richiesto la creazione di spline animate e simulazioni di fiamme integrate con il prodotto 3D.</p>
<p><strong>Rendering real-time:</strong> Con Unreal Engine 5, posso creare visualizzazioni interattive e render in tempo reale per presentazioni, configuratori di prodotto e contenuti che richiedono iterazioni rapide.</p>`,
    },
    {
      title: 'Il progetto Guerciotti: un esempio concreto',
      content: `<p>Guerciotti ha celebrato 60 anni di storia nella produzione di biciclette. Il progetto richiedeva un video che raccontasse l'artigianalità e la passione del brand attraverso animazioni 3D.</p>
<p>Ho modellato il telaio della bicicletta in 3ds Max partendo dai disegni tecnici originali. Le spline del telaio sono state animate come se si costruissero davanti agli occhi dello spettatore, con simulazioni di fiamme e particelle create con tyFlow che richiamano il processo di saldatura artigianale.</p>
<p>Il risultato è un video che unisce precisione tecnica e racconto emotivo — esattamente quello che serve a un brand che vuole comunicare il proprio DNA.</p>`,
      image: '/images/services/3d-2.jpg',
      imageAlt: 'Animazione 3D con tyflow e fiamme per Guerciotti 60 anni',
    },
    {
      title: 'Per chi è questo servizio',
      content: `<p><strong>Brand e aziende:</strong> Per video prodotto 3D, configuratori, animazioni di lancio e contenuti che mostrano il prodotto in modi impossibili con la fotografia tradizionale.</p>
<p><strong>Agenzie creative:</strong> Per campagne che richiedono elementi 3D — dalla CG pura all'integrazione con riprese live.</p>
<p><strong>Produzioni cinematografiche:</strong> Per set extension, creature, ambienti digitali e tutto ciò che non si può (o non conviene) costruire fisicamente.</p>
<p><strong>Architetti e studi di design:</strong> Per visualizzazioni architettoniche, flythrough animati e presentazioni di progetto che vanno oltre il render statico.</p>`,
    },
  ],
  tools: ['3ds Max', 'ZBrush', 'Character Creator', 'Unreal Engine 5', 'tyFlow', 'V-Ray', 'Substance Painter', 'After Effects'],
  ctaHeadline: 'Serve dare forma a qualcosa che non esiste ancora?',
  ctaText: 'Descrivimi il progetto — dal prodotto al personaggio, dall\'ambiente alla simulazione. Troviamo insieme la soluzione migliore.',
};

const contentEN = {
  subtitle: '3D ANIMATION',
  h1: '3D Animation: Product, Character and Custom Environments',
  intro: '3D modeling, texturing, animation and rendering to give shape to what doesn\'t exist yet. From photorealistic products to stylized characters, from architectural environments to particle simulations — with the same artisan eye that guides all my work.',
  sections: [
    {
      title: '3D in service of communication',
      content: `<p>3D animation isn't a technical exercise — it's a communication tool. A 3D product video shows details that video footage can't capture. An animated character tells stories in ways live action doesn't allow. A digital environment creates contexts impossible to build physically.</p>
<p>I've been working in 3D for over fifteen years, with an approach that always starts from the communication objective. Before opening any software, I understand what the animation needs to tell, who will see it and in what context. Then I choose the most suitable technique — photorealism, stylization, 3D motion design — and execute it.</p>
<p>My VFX artist background is a concrete advantage: I know how 3D integrates with real footage, understand compositing requirements and can manage the entire flow from modeling to final render without depending on others.</p>`,
      image: '/images/services/3d-1.jpg',
      imageAlt: '3D animation spline for Guerciotti',
    },
    {
      title: 'What I create',
      content: `<p><strong>3D product videos:</strong> Photorealistic product animations for e-commerce, advertising campaigns and presentations. Products are modeled in 3D from technical drawings or photos, textured with realistic materials, lit and animated to show every detail. Ideal for product launches where physical samples aren't yet available.</p>
<p><strong>Character animation:</strong> Creation and animation of 3D characters — from character design to rigging, animation to rendering. I work with Character Creator and ZBrush for realistic or stylized characters.</p>
<p><strong>Environments and set extension:</strong> Creation of complete 3D environments or extension of real sets with digital elements. Architecture, landscapes, interiors — for cinema, advertising and architectural visualization.</p>
<p><strong>Simulations and particles:</strong> Fire, smoke, fluids, destruction, particle systems. I use tyFlow in 3ds Max and Niagara in Unreal Engine for physically accurate or stylized simulations. The Guerciotti project, for example, required animated splines and flame simulations integrated with the 3D product.</p>
<p><strong>Real-time rendering:</strong> With Unreal Engine 5, I can create interactive visualizations and real-time renders for presentations, product configurators and content requiring rapid iterations.</p>`,
    },
    {
      title: 'The Guerciotti project: a concrete example',
      content: `<p>Guerciotti celebrated 60 years of bicycle production history. The project required a video that told the story of the brand's craftsmanship and passion through 3D animations.</p>
<p>I modeled the bicycle frame in 3ds Max from original technical drawings. The frame splines were animated as if building before the viewer's eyes, with flame and particle simulations created with tyFlow that evoke the artisanal welding process.</p>
<p>The result is a video that combines technical precision and emotional storytelling — exactly what a brand needs to communicate its DNA.</p>`,
      image: '/images/services/3d-2.jpg',
      imageAlt: '3D animation with tyflow and flames for Guerciotti 60 years',
    },
    {
      title: 'Who this service is for',
      content: `<p><strong>Brands and companies:</strong> For 3D product videos, configurators, launch animations and content showing products in ways impossible with traditional photography.</p>
<p><strong>Creative agencies:</strong> For campaigns requiring 3D elements — from pure CG to integration with live footage.</p>
<p><strong>Film productions:</strong> For set extension, creatures, digital environments and everything that can't (or shouldn't) be built physically.</p>
<p><strong>Architects and design studios:</strong> For architectural visualizations, animated flythroughs and project presentations that go beyond static renders.</p>`,
    },
  ],
  tools: ['3ds Max', 'ZBrush', 'Character Creator', 'Unreal Engine 5', 'tyFlow', 'V-Ray', 'Substance Painter', 'After Effects'],
  ctaHeadline: 'Need to give shape to something that doesn\'t exist yet?',
  ctaText: 'Describe the project — from product to character, environment to simulation. Let\'s find the best solution together.',
};

export default function Animazione3DPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const content = locale === 'it' ? contentIT : contentEN;
  return <ServicePageTemplate {...content} />;
}