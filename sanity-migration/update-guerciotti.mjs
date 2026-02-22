import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zygggq8k',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const updatedProject = {
  // Case study texts
  briefingIt: `Video di lancio per il telaio in carbonio Guerciotti Sixty, realizzato per il 60° anniversario del marchio milanese. Guerciotti — la "Stella di Milano" del ciclismo — ha celebrato sessant'anni di storia con una bicicletta fuori dagli schemi: telaio in fibra di carbonio Mitsubishi T65, design aerodinamico estremo e un avantreno completamente integrato. Edizione limitata a 60 esemplari, ciascuno con il nome dell'acquirente inciso.\n\nIl brief: raccontare in un video la nascita di questo telaio — dalle materie prime al prodotto finito — attraverso un'animazione 3D che ne esaltasse la precisione costruttiva e l'innovazione tecnica.`,

  briefingEn: `Launch video for the Guerciotti Sixty carbon frame, created for the 60th anniversary of the Milan-based brand. Guerciotti — Milan's "Star" of cycling — celebrated sixty years of history with a groundbreaking bicycle: Mitsubishi T65 carbon fiber frame, extreme aerodynamic design and a fully integrated front end. Limited edition of 60 units, each engraved with the buyer's name.\n\nThe brief: tell the story of this frame's birth in a video — from raw materials to finished product — through 3D animation that highlights its construction precision and technical innovation.`,

  challengeIt: `Dare vita a un telaio di alta gamma attraverso l'animazione 3D, raccontando sia l'artigianalità del processo produttivo che la tecnologia del prodotto finito. Il telaio Sixty ha un design complesso — l'avantreno è un blocco unico dove forcella, tubo sterzo e manubrio si fondono — e ogni dettaglio andava reso con fedeltà assoluta.\n\nLa sfida tecnica: simulare in modo credibile il processo di costruzione del carbonio, dalla fibra grezza alla saldatura, fino al prodotto finito. Non un semplice "rendering che gira": un racconto visivo che facesse percepire il valore di ogni singolo passaggio.`,

  challengeEn: `Bringing a high-end frame to life through 3D animation, telling the story of both the craftsmanship of the production process and the technology of the finished product. The Sixty frame has a complex design — the front end is a single integrated unit where fork, head tube and handlebar merge — and every detail had to be rendered with absolute fidelity.\n\nThe technical challenge: credibly simulating the carbon construction process, from raw fiber to welding, to the finished product. Not a simple "spinning render": a visual narrative that conveys the value of every single step.`,

  solutionIt: `Ho modellato il telaio in 3ds Max partendo dai disegni tecnici originali forniti da Guerciotti, ricostruendo ogni curva e ogni giunzione con precisione millimetrica. Le spline del telaio sono state animate come se si costruissero davanti agli occhi dello spettatore — fili intrecciati che crescono e prendono forma, generati con tyFlow.\n\nPer la sequenza di saldatura ho utilizzato Unreal Engine 5.6: simulazioni di fiamme e particelle che richiamano il processo artigianale di lavorazione del carbonio. La scelta di combinare tyFlow per le animazioni procedurali e Unreal Engine per il rendering in tempo reale ha permesso di ottenere un livello di dettaglio e realismo difficile da raggiungere con un singolo strumento.\n\nIl video procede dalle materie prime al prodotto finito — fibra di carbonio, spline che si intrecciano, saldatura, fino alla Sixty completa, fotografata in ogni angolo con illuminazione cinematografica. Il color grading finale in DaVinci Resolve ha dato al video il tono caldo e materico che il brand richiedeva.\n\nEditing e sound design a cura di Nicolas Vanegas Sanchez.\n\nDurata del progetto: circa 3-4 settimane dalla modellazione alla consegna.`,

  solutionEn: `I modeled the frame in 3ds Max from original technical drawings provided by Guerciotti, reconstructing every curve and junction with millimeter precision. The frame splines were animated as if building before the viewer's eyes — interwoven threads growing and taking shape, generated with tyFlow.\n\nFor the welding sequence I used Unreal Engine 5.6: flame and particle simulations evoking the artisanal carbon processing. The choice of combining tyFlow for procedural animations and Unreal Engine for real-time rendering achieved a level of detail and realism difficult to reach with a single tool.\n\nThe video progresses from raw materials to finished product — carbon fiber, interweaving splines, welding, to the complete Sixty, shot from every angle with cinematic lighting. Final color grading in DaVinci Resolve gave the video the warm, tactile tone the brand required.\n\nEditing and sound design by Nicolas Vanegas Sanchez.\n\nProject duration: approximately 3-4 weeks from modeling to delivery.`,

  resultIt: `Un video che unisce precisione tecnica e racconto emotivo — esattamente quello che serve a un brand con sessant'anni di storia che vuole comunicare il proprio DNA senza retorica. La Guerciotti Sixty non è solo un telaio: è la sintesi di sei decenni di sapere artigianale milanese, e il video doveva restituire questo peso.\n\nIl risultato è stato utilizzato per il lancio ufficiale del prodotto e la comunicazione sui canali del brand.`,

  resultEn: `A video that combines technical precision and emotional storytelling — exactly what a brand with sixty years of history needs to communicate its DNA without rhetoric. The Guerciotti Sixty isn't just a frame: it's the synthesis of six decades of Milanese craftsmanship, and the video had to convey that weight.\n\nThe result was used for the official product launch and communication across the brand's channels.`,

  // Updated tools
  tools: ['3ds Max', 'tyFlow', 'Unreal Engine 5.6', 'DaVinci Resolve'],

  // Updated content blocks — Vimeo instead of YouTube + new text blocks
  contentBlocks: [
    {
      _type: 'videoBlock',
      _key: 'vimeo01',
      embedId: '1018292404',
      platform: 'vimeo',
      title: 'Guerciotti 60 Anni — Launch Video',
    },
    {
      _type: 'textBlock',
      _key: 'txt01',
      textIt: `Il telaio è stato ricostruito in 3ds Max dai disegni tecnici originali. Ogni fase del processo produttivo — dalla fibra grezza ai fili intrecciati, dalle fiamme di saldatura al prodotto finito — è stata animata per raccontare il valore di ogni singolo passaggio. Le simulazioni procedurali in tyFlow e il rendering in Unreal Engine 5.6 hanno permesso di ottenere un realismo che un approccio tradizionale avrebbe richiesto il doppio del tempo.`,
      textEn: `The frame was rebuilt in 3ds Max from original technical drawings. Every phase of the production process — from raw fiber to interwoven threads, from welding flames to finished product — was animated to convey the value of each single step. Procedural simulations in tyFlow and rendering in Unreal Engine 5.6 achieved a realism that a traditional approach would have required twice the time.`,
    },
    {
      _type: 'imageBlock',
      _key: 'img01',
      imageUrl: '/images/portfolio/animazione-3d-spline-telaio-guerciotti-dettaglio.jpg',
      altIt: 'Animazione 3D spline tyFlow — processo di costruzione telaio Guerciotti Sixty',
      altEn: '3D animation tyFlow splines — Guerciotti Sixty frame construction process',
      fullWidth: true,
    },
    {
      _type: 'galleryBlock',
      _key: 'gal01',
      images: [
        {
          _type: 'object',
          _key: 'gimg01',
          imageUrl: '/images/portfolio/product-visualization-3d-guerciotti-render-finale.webp',
          altIt: 'Product visualization 3D — render finale telaio Guerciotti Sixty',
          altEn: '3D product visualization — Guerciotti Sixty frame final render',
        },
        {
          _type: 'object',
          _key: 'gimg02',
          imageUrl: '/images/portfolio/animazione-3d-guerciotti-60-anni-thumb.webp',
          altIt: 'Animazione 3D telaio in carbonio Guerciotti 60 anni',
          altEn: '3D animation Guerciotti 60 years carbon frame',
        },
      ],
      columns: 2,
    },
    {
      _type: 'imageBlock',
      _key: 'img02',
      imageUrl: '/images/portfolio/video-prodotto-3d-guerciotti-telaio-carbonio.webp',
      altIt: 'Render 3D telaio in carbonio Guerciotti Sixty — product visualization',
      altEn: 'Guerciotti Sixty carbon frame 3D render — product visualization',
      fullWidth: true,
    },
    {
      _type: 'textBlock',
      _key: 'txt02',
      textIt: `Software: 3ds Max (modellazione e animazione), tyFlow (simulazioni procedurali — spline, fibre, particelle), Unreal Engine 5.6 (rendering real-time, illuminazione, simulazione saldatura), DaVinci Resolve (color grading e finishing). Editing e sound design: Nicolas Vanegas Sanchez.`,
      textEn: `Software: 3ds Max (modeling and animation), tyFlow (procedural simulations — splines, fibers, particles), Unreal Engine 5.6 (real-time rendering, lighting, welding simulation), DaVinci Resolve (color grading and finishing). Editing and sound design: Nicolas Vanegas Sanchez.`,
    },
  ],
};

async function main() {
  console.log('🚀 Updating Guerciotti project on Sanity...\n');

  if (!process.env.SANITY_TOKEN) {
    console.error('❌ Missing SANITY_TOKEN');
    process.exit(1);
  }

  try {
    await client
      .patch('project-guerciotti-60-anni')
      .set(updatedProject)
      .commit();

    console.log('✅ Guerciotti project updated successfully!');
    console.log('\nVerifica su: https://perilli-site.sanity.studio');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

main();
