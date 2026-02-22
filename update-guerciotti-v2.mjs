import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zygggq8k',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const update = {
  // ── TESTI RIVISTI — più incisivi, processo tecnico corretto ──

  briefingIt: `Video di lancio per la Guerciotti Sixty: telaio in carbonio Mitsubishi T65, design aerodinamico estremo con avantreno completamente integrato. Edizione limitata a 60 esemplari per il 60° anniversario del marchio milanese.\n\nIl brief: raccontare la nascita di questo telaio — dalle materie prime al prodotto finito — attraverso un'animazione 3D che ne esaltasse la precisione costruttiva e l'innovazione tecnica.`,

  briefingEn: `Launch video for the Guerciotti Sixty: Mitsubishi T65 carbon frame, extreme aerodynamic design with fully integrated front end. Limited edition of 60 units for the 60th anniversary of the Milan-based brand.\n\nThe brief: tell the story of this frame's creation — from raw materials to finished product — through 3D animation highlighting its construction precision and technical innovation.`,

  challengeIt: `Il telaio Sixty ha un design complesso — l'avantreno è un blocco unico dove forcella, tubo sterzo e manubrio si fondono — e ogni dettaglio andava reso con fedeltà assoluta.\n\nLa sfida: simulare in modo credibile il processo di costruzione del carbonio, dalla fibra grezza alla saldatura. Non un rendering che gira, ma un racconto visivo che facesse percepire il valore di ogni passaggio.`,

  challengeEn: `The Sixty frame has a complex design — the front end is a single integrated unit where fork, head tube and handlebar merge — and every detail had to be rendered with absolute fidelity.\n\nThe challenge: credibly simulate the carbon construction process, from raw fiber to welding. Not a spinning render, but a visual narrative conveying the value of every single step.`,

  solutionIt: `Partendo dal modello CAD fornito da Guerciotti, ho eseguito il remesh completo della geometria per renderla compatibile con l'animazione 3D: ricostruzione della topologia, UV mapping e texturing in 3ds Max.\n\nLe spline del telaio sono state animate con tyFlow — fili intrecciati che crescono e prendono forma davanti allo spettatore. Per la sequenza di saldatura, simulazioni di fiamme e particelle in Unreal Engine 5.6.\n\nIl video procede dalle materie prime al prodotto finito: fibra grezza, spline che si intrecciano, saldatura, fino alla Sixty completa con illuminazione cinematografica. Color grading in DaVinci Resolve. Editing e sound design di Nicolas Vanegas Sanchez.\n\nDurata del progetto: 3-4 settimane.`,

  solutionEn: `Starting from the CAD model provided by Guerciotti, I performed a complete geometry remesh for 3D animation compatibility: topology reconstruction, UV mapping and texturing in 3ds Max.\n\nFrame splines were animated with tyFlow — interwoven threads growing and taking shape before the viewer. For the welding sequence, flame and particle simulations in Unreal Engine 5.6.\n\nThe video progresses from raw materials to finished product: raw fiber, interweaving splines, welding, to the complete Sixty with cinematic lighting. Color grading in DaVinci Resolve. Editing and sound design by Nicolas Vanegas Sanchez.\n\nProject duration: 3-4 weeks.`,

  resultIt: `Un video che unisce precisione tecnica e racconto emotivo — esattamente quello che serve a un brand con sessant'anni di storia per comunicare il proprio DNA senza retorica.\n\nUtilizzato per il lancio ufficiale del prodotto e la comunicazione sui canali del brand.`,

  resultEn: `A video combining technical precision and emotional storytelling — exactly what a brand with sixty years of history needs to communicate its DNA without rhetoric.\n\nUsed for the official product launch and communication across the brand's channels.`,

  // ── CONTENT BLOCKS — alt text SEO, gallery a 3 colonne ──

  contentBlocks: [
    {
      _type: 'videoBlock',
      _key: 'vimeo01',
      embedId: '1018292404',
      platform: 'vimeo',
      title: 'Guerciotti Sixty — Video Animazione 3D Prodotto',
    },
    {
      _type: 'textBlock',
      _key: 'txt01',
      textIt: `Dal modello CAD al prodotto finito: remesh della geometria, UV mapping, animazione procedurale in tyFlow e rendering real-time in Unreal Engine 5.6. Ogni fase della costruzione del telaio è stata animata per raccontare il valore di ogni singolo passaggio produttivo.`,
      textEn: `From CAD model to finished product: geometry remesh, UV mapping, procedural animation in tyFlow and real-time rendering in Unreal Engine 5.6. Every phase of the frame construction was animated to convey the value of each production step.`,
    },
    {
      _type: 'imageBlock',
      _key: 'img01',
      imageUrl: '/images/portfolio/animazione-3d-spline-telaio-guerciotti-dettaglio.jpg',
      altIt: 'Animazione 3D spline tyFlow — costruzione telaio carbonio Guerciotti Sixty',
      altEn: '3D spline animation tyFlow — Guerciotti Sixty carbon frame construction process',
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
          altIt: 'Render 3D finale telaio Guerciotti Sixty — product visualization carbonio',
          altEn: 'Final 3D render Guerciotti Sixty frame — carbon product visualization',
        },
        {
          _type: 'object',
          _key: 'gimg02',
          imageUrl: '/images/portfolio/animazione-3d-guerciotti-60-anni-thumb.webp',
          altIt: 'Animazione 3D telaio carbonio Guerciotti Sixty — 60° anniversario',
          altEn: '3D animation Guerciotti Sixty carbon frame — 60th anniversary',
        },
        {
          _type: 'object',
          _key: 'gimg03',
          imageUrl: '/images/portfolio/video-prodotto-3d-guerciotti-telaio-carbonio.webp',
          altIt: 'Render 3D prodotto Guerciotti Sixty — telaio carbonio Mitsubishi T65',
          altEn: 'Product 3D render Guerciotti Sixty — Mitsubishi T65 carbon frame',
        },
      ],
      columns: 3,
    },
    {
      _type: 'textBlock',
      _key: 'txt02',
      textIt: `Software: 3ds Max (remesh, UV mapping, animazione), tyFlow (simulazioni procedurali — spline, fibre, particelle), Unreal Engine 5.6 (rendering real-time, illuminazione, simulazione saldatura), DaVinci Resolve (color grading e finishing).\n\nEditing e sound design: Nicolas Vanegas Sanchez.`,
      textEn: `Software: 3ds Max (remesh, UV mapping, animation), tyFlow (procedural simulations — splines, fibers, particles), Unreal Engine 5.6 (real-time rendering, lighting, welding simulation), DaVinci Resolve (color grading and finishing).\n\nEditing and sound design: Nicolas Vanegas Sanchez.`,
    },
  ],
};

async function main() {
  if (!process.env.SANITY_TOKEN) {
    console.error('❌ Missing SANITY_TOKEN');
    process.exit(1);
  }

  try {
    await client
      .patch('project-guerciotti-60-anni')
      .set(update)
      .commit();

    console.log('✅ Guerciotti updated — testi, alt text, gallery 3 col');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

main();
