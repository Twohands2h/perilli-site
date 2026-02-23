export type ProjectCategory = 'vfx' | 'motion' | 'animation' | 'post' | 'ai';

// Content blocks for rich project pages (Behance-style)
export type ContentBlock =
    | { type: 'text'; textIt: string; textEn: string }
    | { type: 'image'; src: string; alt: { it: string; en: string }; fullWidth?: boolean }
    | { type: 'gallery'; images: { src: string; alt: { it: string; en: string } }[]; columns?: 2 | 3 | 4 }
    | { type: 'video'; embedId: string; platform: 'youtube' | 'vimeo'; title?: string }
    | { type: 'video-mp4'; url: string; poster?: string; title?: string }
    | { type: 'video-loop'; url: string; poster?: string; title?: string }
    | { type: 'video-loop-gallery'; videos: { url: string; title?: string }[]; columns?: number; title?: string };

export interface Project {
    slug: string;
    titleIt: string;
    titleEn: string;
    category: ProjectCategory;
    categoryLabel: { it: string; en: string };
    client: string;
    year: string;
    role: string;
    thumbnail: string;
    thumbnailVideo?: string; // MP4 for animated preview on hover
    thumbnailAlt: { it: string; en: string };
    heroImage: string;
    heroAlt?: { it: string; en: string };
    images: { src: string; alt: { it: string; en: string } }[];
    tools: string[];
    // Case study content
    briefingIt: string;
    briefingEn: string;
    challengeIt: string;
    challengeEn: string;
    solutionIt: string;
    solutionEn: string;
    resultIt: string;
    resultEn: string;
    // Video (legacy single video)
    videoEmbed?: string;
    videoType?: 'youtube' | 'vimeo' | 'mp4';
    videoUrl?: string;
    // Rich content blocks — if present, rendered after case study text
    contentBlocks?: ContentBlock[];
    // External links
    imdbLink?: string;
}

export const projects: Project[] = [
    {
        slug: 'along-came-ruby',
        titleIt: 'Along Came Ruby',
        titleEn: 'Along Came Ruby',
        category: 'vfx',
        categoryLabel: { it: `VFX`, en: `VFX` },
        client: 'Riccardo Suriano (regista)',
        year: '2024',
        role: 'VFX Artist',
        thumbnail: '/images/portfolio/vfx-cortometraggio-along-came-ruby-thumb.webp',
        thumbnailAlt: { it: `VFX per il cortometraggio Along Came Ruby`, en: `VFX for Along Came Ruby short film` },
        heroImage: '/images/portfolio/along-came-ruby-cover-cortometraggio.webp',
        heroAlt: { it: 'Along Came Ruby \u2014 cortometraggio sci-fi diretto da Riccardo Suriano', en: 'Along Came Ruby \u2014 sci-fi short film directed by Riccardo Suriano' },
        images: [
            { src: '/images/portfolio/along-came-ruby-vfx-effetti-energia-fulmini.webp', alt: { it: 'VFX effetti energia e fulmini \u2014 Along Came Ruby', en: 'VFX energy and lightning effects \u2014 Along Came Ruby' } },
            { src: '/images/portfolio/along-came-ruby-vfx-portale-spazio-temporale.webp', alt: { it: 'VFX portale spazio-temporale \u2014 Along Came Ruby', en: 'VFX space-time portal \u2014 Along Came Ruby' } },
        ],
        tools: ['After Effects', 'Mocha Pro', '3ds Max', 'DaVinci Resolve'],
        briefingIt: 'Un cortometraggio drammatico/sci-fi diretto da Riccardo Suriano, con Alexandra Boulas e Liz Kastner. In un mondo post-apocalittico, Ruby intraprende un viaggio alla ricerca del fratello Henry, incontrando una donna enigmatica che custodisce segreti del passato.',
        briefingEn: 'A drama/sci-fi short film directed by Riccardo Suriano, starring Alexandra Boulas and Liz Kastner. In a post-apocalyptic world, Ruby embarks on a journey to find her brother Henry, encountering an enigmatic woman who holds secrets of the past.',
        challengeIt: 'La sfida principale era creare l\u2019effetto visivo che illustra la comunicazione tra presente e futuro attraverso lo spazio-tempo. Questo elemento narrativo chiave doveva essere credibile, emotivamente potente e integrato perfettamente con le riprese live in ambienti naturali.',
        challengeEn: 'The main challenge was creating the visual effect illustrating communication between present and future through space-time. This key narrative element needed to be credible, emotionally powerful and seamlessly integrated with live footage in natural environments.',
        solutionIt: 'Ho sviluppato un sistema di particelle e distorsioni luminose che evocano il passaggio dimensionale, combinando <a href="/vfx">compositing multilayer</a> con elementi 3D. Ogni shot \u00E8 stata lavorata frame-by-frame per garantire un\u2019integrazione fotorealistica con l\u2019atmosfera distopica del film.\n\nRegia: Riccardo Suriano.',
        solutionEn: 'I developed a system of particles and light distortions evoking dimensional passage, combining multilayer <a href="/en/vfx">compositing</a> with 3D elements. Every shot was worked frame-by-frame to ensure photorealistic integration with the film\u2019s dystopian atmosphere.\n\nDirected by Riccardo Suriano.',
        resultIt: 'Gli effetti visivi hanno dato vita alla visione del regista, trasformando location reali in un mondo post-apocalittico credibile. Il cortometraggio ha completato la post-produzione ed \u00E8 in fase di distribuzione festival. Leggi il <a href="/blog/breakdown-vfx-along-came-ruby">breakdown VFX completo</a> di questo progetto.',
        resultEn: 'The visual effects brought the director\u2019s vision to life, transforming real locations into a credible post-apocalyptic world. The short film has completed post-production and is in festival distribution. Read the <a href="/en/blog/vfx-breakdown-along-came-ruby">complete VFX breakdown</a> of this project.',
        imdbLink: 'https://pro.imdb.com/title/tt28106482/',
        contentBlocks: [
            { type: 'text', textIt: 'VFX breakdown: il processo di creazione degli effetti visivi per Along Came Ruby, dalla previsualizzazione al compositing finale.', textEn: 'VFX breakdown: the visual effects creation process for Along Came Ruby, from previsualization to final compositing.' },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/along-came-ruby-vfx-effetti-energia-fulmini.webp', alt: { it: 'VFX effetti energia e fulmini \u2014 compositing Along Came Ruby', en: 'VFX energy and lightning effects \u2014 Along Came Ruby compositing' } },
                    { src: '/images/portfolio/along-came-ruby-vfx-portale-spazio-temporale.webp', alt: { it: 'VFX portale spazio-temporale \u2014 compositing Along Came Ruby', en: 'VFX space-time portal \u2014 Along Came Ruby compositing' } },
                ], columns: 2
            },
            { type: 'video-mp4', url: '/videos/portfolio/along-came-ruby-vfx-breakdown.mp4', title: 'VFX Breakdown \u2014 Along Came Ruby' },
            { type: 'text', textIt: 'Software: After Effects per il compositing multilayer, Mocha Pro per il tracking, 3ds Max per gli elementi 3D, DaVinci Resolve per il color grading finale.\n\nRegia: Riccardo Suriano. Cast: Alexandra Boulas, Liz Kastner.\n\nLeggi il <a href="/blog/breakdown-vfx-along-came-ruby">breakdown VFX completo</a> sul blog.', textEn: 'Software: After Effects for multilayer compositing, Mocha Pro for tracking, 3ds Max for 3D elements, DaVinci Resolve for final color grading.\n\nDirected by Riccardo Suriano. Cast: Alexandra Boulas, Liz Kastner.\n\nRead the <a href="/en/blog/vfx-breakdown-along-came-ruby">complete VFX breakdown</a> on the blog.' },
        ],
    },
    {
        slug: 'guerciotti-60-anni',
        titleIt: 'Guerciotti 60 Anni',
        titleEn: 'Guerciotti 60 Years',
        category: 'animation',
        categoryLabel: { it: `Animazione 3D`, en: `3D Animation` },
        client: 'Guerciotti',
        year: '2024',
        role: '3D Animator / VFX',
        thumbnail: '/images/portfolio/guerciotti-sixty-telaio-carbonio-hero.webp',
        thumbnailAlt: { it: `Animazione 3D telaio carbonio Guerciotti Sixty — video prodotto`, en: `3D animation Guerciotti Sixty carbon frame — product video` },
        heroImage: '/images/portfolio/guerciotti-sixty-telaio-carbonio-hero.webp',
        images: [
            { src: '/images/portfolio/guerciotti-sixty-saldatura-tubo-carbonio-simulazione.webp', alt: { it: 'Simulazione saldatura tubo carbonio Guerciotti Sixty', en: 'Carbon tube welding simulation Guerciotti Sixty' } },
            { src: '/images/portfolio/guerciotti-sixty-telaio-completo-render-3d.webp', alt: { it: 'Render 3D telaio completo Guerciotti Sixty', en: 'Complete frame 3D render Guerciotti Sixty' } },
            { src: '/images/portfolio/guerciotti-sixty-avantreno-integrato-render-3d.webp', alt: { it: 'Render 3D avantreno integrato Guerciotti Sixty', en: '3D render integrated front end Guerciotti Sixty' } },
        ],
        tools: ['3ds Max', 'tyFlow', 'Unreal Engine 5.6', 'DaVinci Resolve'],
        briefingIt: 'Video di lancio per la Guerciotti Sixty: telaio in carbonio Mitsubishi T65, design aerodinamico estremo con avantreno completamente integrato. Edizione limitata a 60 esemplari per il 60\u00B0 anniversario del marchio milanese.\n\nIl brief: raccontare la nascita di questo telaio \u2014 dalle materie prime al prodotto finito \u2014 attraverso un\u2019<a href="/animazione-3d">animazione 3D</a> che ne esaltasse la precisione costruttiva e l\u2019innovazione tecnica.',
        briefingEn: 'Launch video for the Guerciotti Sixty: Mitsubishi T65 carbon frame, extreme aerodynamic design with fully integrated front end. Limited edition of 60 units for the 60th anniversary of the Milan-based brand.\n\nThe brief: tell the story of this frame\u2019s creation \u2014 from raw materials to finished product \u2014 through <a href="/en/3d-animation">3D animation</a> highlighting its construction precision and technical innovation.',
        challengeIt: 'Il telaio Sixty ha un design complesso \u2014 l\u2019avantreno \u00E8 un blocco unico dove forcella, tubo sterzo e manubrio si fondono \u2014 e ogni dettaglio andava reso con fedelt\u00E0 assoluta.\n\nLa sfida: simulare in modo credibile il processo di costruzione del carbonio, dalla fibra grezza alla saldatura. Non un rendering che gira, ma un racconto visivo che facesse percepire il valore di ogni passaggio.',
        challengeEn: 'The Sixty frame has a complex design \u2014 the front end is a single integrated unit where fork, head tube and handlebar merge \u2014 and every detail had to be rendered with absolute fidelity.\n\nThe challenge: credibly simulate the carbon construction process, from raw fiber to welding. Not a spinning render, but a visual narrative conveying the value of every single step.',
        solutionIt: 'Partendo dal modello CAD fornito da Guerciotti, ho eseguito il remesh completo della geometria per renderla compatibile con l\u2019animazione 3D: ricostruzione della topologia, UV mapping e texturing in 3ds Max.\n\nLe spline del telaio sono state animate con tyFlow \u2014 fili intrecciati che crescono e prendono forma davanti allo spettatore. Per la sequenza di saldatura, simulazioni di fiamme e particelle in Unreal Engine 5.6.\n\nIl video procede dalle materie prime al prodotto finito: fibra grezza, spline che si intrecciano, saldatura, fino alla Sixty completa con illuminazione cinematografica. Color grading in DaVinci Resolve. Editing e sound design di Nicolas Vanegas Sanchez.\n\nDurata del progetto: 3-4 settimane.',
        solutionEn: 'Starting from the CAD model provided by Guerciotti, I performed a complete geometry remesh for 3D animation compatibility: topology reconstruction, UV mapping and texturing in 3ds Max.\n\nFrame splines were animated with tyFlow \u2014 interwoven threads growing and taking shape before the viewer. For the welding sequence, flame and particle simulations in Unreal Engine 5.6.\n\nThe video progresses from raw materials to finished product: raw fiber, interweaving splines, welding, to the complete Sixty with cinematic lighting. Color grading in DaVinci Resolve. Editing and sound design by Nicolas Vanegas Sanchez.\n\nProject duration: 3-4 weeks.',
        resultIt: 'Un video che unisce precisione tecnica e racconto emotivo \u2014 esattamente quello che serve a un brand con sessant\u2019anni di storia per comunicare il proprio DNA senza retorica.\n\nUtilizzato per il lancio ufficiale del prodotto e la comunicazione sui canali del brand.',
        resultEn: 'A video combining technical precision and emotional storytelling \u2014 exactly what a brand with sixty years of history needs to communicate its DNA without rhetoric.\n\nUsed for the official product launch and communication across the brand\u2019s channels.',
        contentBlocks: [
            { type: 'video', embedId: '1018292404', platform: 'vimeo', title: 'Guerciotti 60 Anni \u2014 Video Animazione 3D Prodotto' },
            { type: 'image', src: '/images/portfolio/guerciotti-sixty-saldatura-tubo-carbonio-simulazione.webp', alt: { it: 'Simulazione saldatura tubo carbonio Guerciotti Sixty \u2014 Unreal Engine 5.6', en: 'Carbon tube welding simulation Guerciotti Sixty \u2014 Unreal Engine 5.6' }, fullWidth: true },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/guerciotti-sixty-dettaglio-sterzo-render-3d.webp', alt: { it: 'Render 3D serie sterzo Guerciotti Sixty \u2014 dettaglio componenti', en: '3D render Guerciotti Sixty headset \u2014 component detail' } },
                    { src: '/images/portfolio/guerciotti-sixty-giunzione-telaio-carbonio-dettaglio.webp', alt: { it: 'Dettaglio giunzione telaio carbonio Guerciotti Sixty', en: 'Carbon frame junction detail Guerciotti Sixty' } },
                    { src: '/images/portfolio/guerciotti-sixty-forcellino-posteriore-render-3d.webp', alt: { it: 'Render 3D forcellino posteriore Guerciotti Sixty', en: '3D render Guerciotti Sixty rear dropout' } },
                ], columns: 3
            },
            { type: 'text', textIt: 'Dal modello CAD al prodotto finito: remesh della geometria, UV mapping, animazione procedurale in tyFlow e rendering real-time in Unreal Engine 5.6. Ogni fase della costruzione del telaio \u00E8 stata animata per raccontare il valore di ogni singolo passaggio produttivo.', textEn: 'From CAD model to finished product: geometry remesh, UV mapping, procedural animation in tyFlow and real-time rendering in Unreal Engine 5.6. Every phase of the frame construction was animated to convey the value of each production step.' },
            { type: 'image', src: '/images/portfolio/guerciotti-sixty-fibra-carbonio-tyflow-simulazione.webp', alt: { it: 'Simulazione fibra carbonio tyFlow \u2014 processo costruttivo telaio Guerciotti Sixty', en: 'Carbon fiber tyFlow simulation \u2014 Guerciotti Sixty frame construction process' }, fullWidth: true },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/guerciotti-sixty-telaio-completo-render-3d.webp', alt: { it: 'Render 3D telaio completo Guerciotti Sixty \u2014 product visualization', en: 'Complete frame 3D render Guerciotti Sixty \u2014 product visualization' } },
                    { src: '/images/portfolio/guerciotti-sixty-foderi-posteriori-dettaglio.webp', alt: { it: 'Render 3D foderi posteriori Guerciotti Sixty \u2014 dettaglio telaio', en: '3D render Guerciotti Sixty rear stays \u2014 frame detail' } },
                    { src: '/images/portfolio/guerciotti-sixty-spline-fibre-saldatura-tyflow.webp', alt: { it: 'Simulazione spline e fibre tyFlow \u2014 saldatura telaio Guerciotti Sixty', en: 'tyFlow spline and fiber simulation \u2014 Guerciotti Sixty frame welding' } },
                ], columns: 3
            },
            { type: 'text', textIt: 'Software: 3ds Max (remesh, UV mapping, animazione), tyFlow (simulazioni procedurali \u2014 spline, fibre, particelle), Unreal Engine 5.6 (rendering real-time, illuminazione, simulazione saldatura), DaVinci Resolve (color grading e finishing).\n\nEditing e sound design: Nicolas Vanegas Sanchez.', textEn: 'Software: 3ds Max (remesh, UV mapping, animation), tyFlow (procedural simulations \u2014 splines, fibers, particles), Unreal Engine 5.6 (real-time rendering, lighting, welding simulation), DaVinci Resolve (color grading and finishing).\n\nEditing and sound design: Nicolas Vanegas Sanchez.' },
            { type: 'image', src: '/images/portfolio/guerciotti-sixty-avantreno-integrato-render-3d.webp', alt: { it: 'Render 3D avantreno integrato Guerciotti Sixty \u2014 illuminazione cinematografica', en: '3D render integrated front end Guerciotti Sixty \u2014 cinematic lighting' }, fullWidth: true },
        ],
    },
    {
        slug: 'ipotesi-metaverso',
        titleIt: 'Ipotesi Metaverso',
        titleEn: 'Ipotesi Metaverso',
        category: 'motion',
        categoryLabel: { it: `Motion Graphics`, en: `Motion Graphics` },
        client: 'Palazzo Cipolla, Roma',
        year: '2023',
        role: 'Motion Designer',
        thumbnail: '/images/portfolio/ipotesi-metaverso-iride-particellare-stardust.webp',
        thumbnailAlt: { it: `Animazione particellare iride — video installazione Ipotesi Metaverso`, en: `Particle iris animation — Ipotesi Metaverso video installation` },
        heroImage: '/images/portfolio/ipotesi-metaverso-iride-particellare-stardust.webp',
        heroAlt: { it: 'Animazione particellare iride \u2014 video installazione Ipotesi Metaverso Palazzo Cipolla Roma', en: 'Particle iris animation \u2014 video installation Ipotesi Metaverso Palazzo Cipolla Rome' },
        images: [
            { src: '/images/portfolio/ipotesi-metaverso-vortice-particellare-pink.webp', alt: { it: 'Vortice particellare \u2014 animazione logo Ipotesi Metaverso', en: 'Particle vortex \u2014 Ipotesi Metaverso logo animation' } },
            { src: '/images/portfolio/ipotesi-metaverso-portale-particellare-ring.webp', alt: { it: 'Portale particellare \u2014 motion graphics mostra arte Roma', en: 'Particle portal \u2014 motion graphics art exhibition Rome' } },
            { src: '/images/portfolio/ipotesi-metaverso-onde-luminose-motion.webp', alt: { it: 'Onde luminose \u2014 animazione particelle After Effects Stardust', en: 'Light waves \u2014 particle animation After Effects Stardust' } },
        ],
        tools: ['After Effects', 'Stardust'],
        briefingIt: 'Palazzo Cipolla, Via del Corso, Roma. Da aprile a luglio 2023, il palazzo ottocentesco ospita Ipotesi Metaverso \u2014 una delle prime mostre internazionali a esplorare il concetto di metaverso tra arte, tecnologia e filosofia digitale.\n\nIl brief iniziale: animare il logo della mostra.',
        briefingEn: 'Palazzo Cipolla, Via del Corso, Rome. From April to July 2023, the 19th-century palazzo hosted Ipotesi Metaverso \u2014 one of the first international exhibitions exploring the metaverse concept through art, technology and digital philosophy.\n\nThe initial brief: animate the exhibition logo.',
        challengeIt: 'Il progetto della mostra e le opere esposte mi hanno ispirato al punto da andare oltre il brief. Invece di una sola animazione del logo, ho immaginato quattro variazioni \u2014 quattro interpretazioni visive del concetto di metaverso, pensate come video installazioni autonome.\n\nLa sfida: creare sistemi particellari complessi in loop continuo, visivamente ipnotici e tecnicamente impeccabili per la proiezione su schermi di grande formato.',
        challengeEn: 'The exhibition project and the artworks on display inspired me to go beyond the brief. Instead of a single logo animation, I envisioned four variations \u2014 four visual interpretations of the metaverse concept, designed as standalone video installations.\n\nThe challenge: creating complex particle systems in continuous loops, visually hypnotic and technically flawless for large-format screen projection.',
        solutionIt: 'Ho progettato quattro animazioni in <a href="/motion-graphics">After Effects con Stardust</a>, costruendo sistemi particellari che simulano vortici, portali, onde di energia e strutture organiche in trasformazione. Ogni variazione esplora un aspetto diverso del tema \u2014 dal cosmico al microscopico \u2014 mantenendo coerenza visiva con il logo e l\u2019identit\u00E0 della mostra.\n\nOgni animazione \u00E8 stata ottimizzata come loop seamless per la riproduzione continua su schermi di grande formato.\n\nMusiche originali composte da Marco ‘Korben’ del Bene.',
        solutionEn: 'I designed four animations in <a href="/en/motion-graphics">After Effects with Stardust</a>, building particle systems that simulate vortexes, portals, energy waves and transforming organic structures. Each variation explores a different aspect of the theme \u2014 from cosmic to microscopic \u2014 while maintaining visual coherence with the logo and exhibition identity.\n\nEach animation was optimized as a seamless loop for continuous playback on large-format screens.\n\nOriginal music composed by Marco ‘Korben’ del Bene.',
        resultIt: 'La galleria ha scelto di esporre tutti e quattro i video in loop all\u2019ingresso della mostra, come se fossero parte dell\u2019esposizione stessa. Da un brief per un\u2019animazione logo a quattro installazioni video che accolgono i visitatori \u2014 il tipo di risultato che nasce quando un progetto ti ispira al punto da spingerti oltre.',
        resultEn: 'The gallery chose to display all four looping videos at the exhibition entrance, as if they were part of the show itself. From a logo animation brief to four video installations welcoming visitors \u2014 the kind of result that happens when a project inspires you to push beyond.',
        contentBlocks: [
            { type: 'image', src: '/images/portfolio/ipotesi-metaverso-poster-mostra-palazzo-cipolla.webp', alt: { it: 'Poster mostra Ipotesi Metaverso \u2014 Palazzo Cipolla Roma 2023', en: 'Ipotesi Metaverso exhibition poster \u2014 Palazzo Cipolla Rome 2023' }, fullWidth: true },
            { type: 'text', textIt: 'Quattro interpretazioni visive del concetto di metaverso, pensate come video installazioni. Sistemi particellari complessi costruiti in After Effects con Stardust \u2014 vortici, portali, onde di energia e strutture organiche in loop continuo.', textEn: 'Four visual interpretations of the metaverse concept, designed as video installations. Complex particle systems built in After Effects with Stardust \u2014 vortexes, portals, energy waves and organic structures in continuous loops.' },
            {
                type: 'gallery', images: [
                    { src: '/videos/portfolio/ipotesi-metaverso-logo-particle.mp4', alt: { it: 'Animazione logo particellare Ipotesi Metaverso \u2014 vortice', en: 'Particle logo animation Ipotesi Metaverso \u2014 vortex' } },
                    { src: '/videos/portfolio/ipotesi-metaverso-logo-lego.mp4', alt: { it: 'Animazione logo Ipotesi Metaverso \u2014 struttura modulare', en: 'Logo animation Ipotesi Metaverso \u2014 modular structure' } },
                    { src: '/videos/portfolio/ipotesi-metaverso-logo-ring.mp4', alt: { it: 'Animazione logo Ipotesi Metaverso \u2014 portale anello', en: 'Logo animation Ipotesi Metaverso \u2014 ring portal' } },
                    { src: '/videos/portfolio/ipotesi-metaverso-logo-phone.mp4', alt: { it: 'Animazione logo Ipotesi Metaverso \u2014 onde digitali', en: 'Logo animation Ipotesi Metaverso \u2014 digital waves' } },
                ], columns: 4
            },
            { type: 'image', src: '/images/portfolio/ipotesi-metaverso-cascata-particelle-luminose.webp', alt: { it: 'Cascata di particelle luminose \u2014 dettaglio animazione After Effects Stardust', en: 'Luminous particle cascade \u2014 After Effects Stardust animation detail' }, fullWidth: true },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/ipotesi-metaverso-vortice-particellare-pink.webp', alt: { it: 'Vortice particellare rosa \u2014 motion graphics mostra arte', en: 'Pink particle vortex \u2014 motion graphics art exhibition' } },
                    { src: '/images/portfolio/ipotesi-metaverso-portale-particellare-ring.webp', alt: { it: 'Portale particellare anello \u2014 animazione logo Stardust', en: 'Ring particle portal \u2014 Stardust logo animation' } },
                    { src: '/images/portfolio/ipotesi-metaverso-onde-luminose-motion.webp', alt: { it: 'Onde luminose motion graphics \u2014 Ipotesi Metaverso installazione', en: 'Light waves motion graphics \u2014 Ipotesi Metaverso installation' } },
                ], columns: 3
            },
            { type: 'text', textIt: 'Software: After Effects con Stardust per i sistemi particellari. Ogni animazione \u00E8 stata progettata come loop seamless per la riproduzione continua su schermi di grande formato all\u2019ingresso di Palazzo Cipolla.\n\nCompositore: Marco ‘Korben’ del Bene.', textEn: 'Software: After Effects with Stardust for particle systems. Each animation was designed as a seamless loop for continuous playback on large-format screens at the entrance of Palazzo Cipolla.\n\nComposer: Marco ‘Korben’ del Bene.' },
        ],
    },
    {
        slug: 'radio-caterina',
        titleIt: 'Radio Caterina',
        titleEn: 'Radio Caterina',
        category: 'post',
        categoryLabel: { it: `Post Produzione`, en: `Post Production` },
        client: 'History Channel / David Orlandelli',
        year: '2024',
        role: 'Montaggio, Color Grading, Animazioni',
        thumbnail: '/images/portfolio/radio-caterina-documentario-history-channel.webp',
        thumbnailAlt: { it: `Post-produzione documentario Radio Caterina \u2014 History Channel`, en: `Post-production Radio Caterina documentary \u2014 History Channel` },
        heroImage: '/images/portfolio/radio-caterina-documentario-history-channel.webp',
        heroAlt: { it: 'Radio Caterina \u2014 docufilm per History Channel diretto da David Orlandelli', en: 'Radio Caterina \u2014 History Channel documentary directed by David Orlandelli' },
        images: [
            { src: '/images/portfolio/radio-caterina-award-portugal-indie-film-festival.webp', alt: { it: 'Award Winner Portugal Indie Film Festival 2025 \u2014 Radio Caterina', en: 'Award Winner Portugal Indie Film Festival 2025 \u2014 Radio Caterina' } },
            { src: '/images/portfolio/radio-caterina-finalist-arff-berlin-best-documentary.webp', alt: { it: 'Finalist ARFF Berlin Best Documentary 2024 \u2014 Radio Caterina', en: 'Finalist ARFF Berlin Best Documentary 2024 \u2014 Radio Caterina' } },
        ],
        tools: ['DaVinci Resolve', 'After Effects', 'Premiere Pro'],
        briefingIt: '8 settembre 1943: il Maresciallo Badoglio annuncia l\u2019armistizio. I soldati italiani che rifiutano di proseguire la guerra a fianco della Germania nazista vengono deportati nei campi di prigionia in Germania. All\u2019interno dello Stalag XB di Sandbostel, un gruppo di ufficiali riesce a costruire una radio clandestina \u2014 Radio Caterina. Un docufilm per History Channel, diretto da David Orlandelli.',
        briefingEn: 'September 8, 1943: Marshal Badoglio announces the armistice. Italian soldiers who refuse to continue fighting alongside Nazi Germany are deported to prison camps in Germany. Inside Stalag XB in Sandbostel, a group of officers manages to build a clandestine radio \u2014 Radio Caterina. A documentary for History Channel, directed by David Orlandelli.',
        challengeIt: 'Gestire l\u2019intero flusso di <a href="/post-produzione">post-produzione</a> di un documentario broadcast, interamente da Roma: montaggio narrativo da materiale eterogeneo (interviste, materiale d\u2019archivio storico, footage originale girato nei luoghi della storia), color grading coerente su fonti visivamente molto diverse tra loro, e animazioni grafiche che accompagnassero la narrazione senza appesantirla.',
        challengeEn: 'Managing the entire <a href="/en/post-production">post-production</a> pipeline for a broadcast documentary, entirely from Rome: narrative editing from heterogeneous material (interviews, historical archive footage, original footage shot at the actual locations), coherent color grading across visually very different sources, and graphic animations that supported the narrative without weighing it down.',
        solutionIt: 'Workflow integrato montaggio-color-grafica in DaVinci Resolve, con passaggi in After Effects per le animazioni pi\u00F9 complesse. Il vantaggio di gestire tutto in un unico flusso ha permesso iterazioni rapide con la produzione e coerenza stilistica su tutto il documentario.\n\nRegia: David Orlandelli. Produzione: David Orlandelli e History Channel, in collaborazione con MM Productions.',
        solutionEn: 'Integrated editing-color-graphics workflow in DaVinci Resolve, with After Effects passes for more complex animations. The advantage of managing everything in a single pipeline allowed rapid iterations with production and stylistic coherence across the entire documentary.\n\nDirected by David Orlandelli. Produced by David Orlandelli and History Channel, in collaboration with MM Productions.',
        resultIt: 'Documentario completato e trasmesso su History Channel. Vincitore al Portugal Indie Film Festival 2025 (Best Documentary), finalista all\u2019ARFF Berlin 2024 (Best Documentary Feature). Il workflow integrato ha permesso di ottimizzare i tempi di post-produzione mantenendo la qualit\u00E0 broadcast richiesta.',
        resultEn: 'Documentary completed and broadcast on History Channel. Winner at Portugal Indie Film Festival 2025 (Best Documentary), finalist at ARFF Berlin 2024 (Best Documentary Feature). The integrated workflow optimized post-production timelines while maintaining required broadcast quality.',
        imdbLink: 'https://www.imdb.com/it/title/tt29257837/',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/radio-caterina-trailer-documentario.mp4', title: 'Trailer \u2014 Radio Caterina' },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/radio-caterina-award-portugal-indie-film-festival.webp', alt: { it: 'Award Winner \u2014 Portugal Indie Film Festival 2025', en: 'Award Winner \u2014 Portugal Indie Film Festival 2025' } },
                    { src: '/images/portfolio/radio-caterina-finalist-arff-berlin-best-documentary.webp', alt: { it: 'Finalist ARFF Berlin \u2014 Best Documentary 2024', en: 'Finalist ARFF Berlin \u2014 Best Documentary 2024' } },
                ], columns: 2
            },
            { type: 'text', textIt: 'Software: DaVinci Resolve per montaggio e color grading, After Effects per le animazioni grafiche, Premiere Pro per il conform.\n\nRegia: David Orlandelli. Produzione: History Channel / MM Productions.\n\n<a href="https://www.radiocaterinamovie.com/" target="_blank" rel="noopener">Sito ufficiale del film</a> \u2014 <a href="https://www.imdb.com/it/title/tt29257837/">IMDB</a>', textEn: 'Software: DaVinci Resolve for editing and color grading, After Effects for graphic animations, Premiere Pro for conform.\n\nDirected by David Orlandelli. Produced by History Channel / MM Productions.\n\n<a href="https://www.radiocaterinamovie.com/" target="_blank" rel="noopener">Official film website</a> \u2014 <a href="https://www.imdb.com/it/title/tt29257837/">IMDB</a>' },
        ],
    },
    {
        slug: 'breaking-olimpiadi',
        titleIt: 'Breaking: dalla strada alle Olimpiadi',
        titleEn: 'Breaking: from the street to the Olympics',
        category: 'post',
        categoryLabel: { it: `Post Produzione`, en: `Post Production` },
        client: 'RaiPlay / Fabrizio Silvestri',
        year: '2024',
        role: 'Montaggio e Color Grading',
        thumbnail: '/images/portfolio/breaking-olimpiadi-documentario-raiplay.webp',
        thumbnailAlt: { it: `Post-produzione documentario Breaking \u2014 RaiPlay`, en: `Post-production Breaking documentary \u2014 RaiPlay` },
        heroImage: '/images/portfolio/breaking-olimpiadi-documentario-raiplay.webp',
        heroAlt: { it: 'Breaking: dalla strada alle Olimpiadi \u2014 documentario RaiPlay diretto da Fabrizio Silvestri', en: 'Breaking: from the street to the Olympics \u2014 RaiPlay documentary directed by Fabrizio Silvestri' },
        images: [],
        tools: ['DaVinci Resolve', 'Premiere Pro'],
        briefingIt: 'L\u2019evoluzione della breakdance dalla sua origine nelle strade fino a diventare disciplina olimpica riconosciuta a livello internazionale. Attraverso i protagonisti della scena nazionale, il documentario offre uno sguardo approfondito sulla cultura, la storia e l\u2019impatto sociale di questa forma d\u2019arte. 52 minuti, per RAI Documentari / RaiPlay. Regia di Fabrizio Silvestri.',
        briefingEn: 'The evolution of breakdancing from its street origins to becoming an internationally recognized Olympic discipline. Through the protagonists of the Italian scene, the documentary offers an in-depth look at the culture, history and social impact of this art form. 52 minutes, for RAI Documentari / RaiPlay. Directed by Fabrizio Silvestri.',
        challengeIt: 'Raccontare un viaggio dalla strada alla competizione olimpica mantenendo l\u2019energia e il ritmo della cultura breaking. Il materiale comprendeva footage di gare internazionali, interviste ai protagonisti, archivio storico e riprese originali \u2014 fonti visivamente molto diverse da armonizzare in un racconto fluido di 52 minuti. Tutta la <a href="/post-produzione">post-produzione</a> gestita da Roma.',
        challengeEn: 'Telling a journey from street to Olympic competition while maintaining the energy and rhythm of breaking culture. Material included international competition footage, interviews with protagonists, historical archive and original shoots \u2014 visually diverse sources to harmonize into a fluid 52-minute narrative. All <a href="/en/post-production">post-production</a> managed from Rome.',
        solutionIt: 'Montaggio narrativo ritmico che segue l\u2019energia della danza, con un color grading che distingue le epoche (archivio vs contemporaneo) mantenendo coerenza emotiva. Il workflow integrato ha permesso di sincronizzare ritmo del montaggio e look cromatico in tempo reale, senza passaggi di mano tra montatore e colorist.\n\nRegia: Fabrizio Silvestri.',
        solutionEn: 'Rhythmic narrative editing following the energy of dance, with color grading distinguishing eras (archive vs contemporary) while maintaining emotional coherence. The integrated workflow allowed synchronizing editing rhythm and chromatic look in real time, with no handoffs between editor and colorist.\n\nDirected by Fabrizio Silvestri.',
        resultIt: 'Documentario di 52 minuti disponibile su <a href="https://www.raiplay.it/programmi/breakingdallastradaalleolimpiadi" target="_blank" rel="noopener">RaiPlay</a>. Il progetto ha dimostrato come il workflow integrato montaggio-color sia particolarmente efficace per documentari con materiale eterogeneo e ritmo narrativo complesso.',
        resultEn: 'A 52-minute documentary available on <a href="https://www.raiplay.it/programmi/breakingdallastradaalleolimpiadi" target="_blank" rel="noopener">RaiPlay</a>. The project demonstrated how the integrated editing-color workflow is particularly effective for documentaries with heterogeneous material and complex narrative rhythm.',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/breaking-olimpiadi-trailer-documentario.mp4', title: 'Trailer \u2014 Breaking: dalla strada alle Olimpiadi' },
            { type: 'text', textIt: 'Software: DaVinci Resolve per montaggio e color grading, Premiere Pro per il conform e l\u2019export broadcast.\n\nRegia: Fabrizio Silvestri. Produzione: RAI Documentari.\n\n<a href="https://www.raiplay.it/programmi/breakingdallastradaalleolimpiadi" target="_blank" rel="noopener">Guarda su RaiPlay</a>', textEn: 'Software: DaVinci Resolve for editing and color grading, Premiere Pro for conform and broadcast export.\n\nDirected by Fabrizio Silvestri. Produced by RAI Documentari.\n\n<a href="https://www.raiplay.it/programmi/breakingdallastradaalleolimpiadi" target="_blank" rel="noopener">Watch on RaiPlay</a>' },
        ],
    },
    {
        slug: 'doppelganger',
        titleIt: 'Doppelganger',
        titleEn: 'Doppelganger',
        category: 'vfx',
        categoryLabel: { it: `VFX`, en: `VFX` },
        client: 'Doppelg\u00E4nger',
        year: '2023',
        role: 'Compositing Foto/Video, VFX, AI',
        thumbnail: '/images/portfolio/doppelganger-scacchi-compositing-finale.webp',
        thumbnailAlt: { it: `Compositing fotografico campagna Doppelg\u00E4nger \u2014 scena scacchi`, en: `Photo compositing Doppelg\u00E4nger campaign \u2014 chess scene` },
        heroImage: '/images/portfolio/doppelganger-scacchi-compositing-finale.webp',
        heroAlt: { it: 'Compositing fotografico scena scacchi \u2014 campagna Doppelg\u00E4nger', en: 'Photo compositing chess scene \u2014 Doppelg\u00E4nger campaign' },
        images: [
            { src: '/images/portfolio/doppelganger-campagna-completa-15-compositing.webp', alt: { it: 'Campagna completa Doppelg\u00E4nger \u2014 15 compositing fotografici', en: 'Complete Doppelg\u00E4nger campaign \u2014 15 photo composites' } },
            { src: '/images/portfolio/doppelganger-scacchi-before-after-compositing.webp', alt: { it: 'Before/after compositing scena scacchi Doppelg\u00E4nger', en: 'Before/after compositing chess scene Doppelg\u00E4nger' } },
        ],
        tools: ['After Effects', 'Photoshop', 'AI', 'Premiere Pro', 'DaVinci Resolve'],
        briefingIt: 'Doppelg\u00E4nger, brand di moda, ha commissionato la creazione di una campagna visiva completa: compositing fotografico per 15 immagini di campagna e compositing video per 8 loop animati. Ogni scena racconta una micro-storia onirica e surreale, fuori dagli schemi della comunicazione fashion tradizionale.',
        briefingEn: 'Doppelg\u00E4nger, a fashion brand, commissioned the creation of a complete visual campaign: photo compositing for 15 campaign images and video compositing for 8 animated loops. Each scene tells a surreal, dreamlike micro-story, breaking away from traditional fashion communication.',
        challengeIt: 'Partendo da uno shooting fotografico e video in studio, ogni scena doveva essere trasformata in un mondo a s\u00E9 \u2014 ambienti completamente costruiti in compositing intorno ai soggetti reali. Il lavoro richiedeva coerenza visiva tra 15 foto e 8 video, mantenendo uno stile onirico e cinematografico.\n\nPer gli sfondi e alcuni elementi di compositing mi sono avvalso dell\u2019AI generativa, agli albori di questa tecnologia \u2014 un approccio pionieristico che ha permesso di creare ambienti impossibili da realizzare in studio.',
        challengeEn: 'Starting from a photo and video studio shoot, each scene needed to be transformed into a world of its own \u2014 environments entirely built through compositing around real subjects. The work required visual coherence across 15 photos and 8 videos, maintaining a dreamlike, cinematic style.\n\nFor backgrounds and some compositing elements I used generative AI, in the early days of this technology \u2014 a pioneering approach that allowed creating environments impossible to build in studio.',
        solutionIt: 'Ogni immagine nasce dallo stesso processo: scatto in studio con attori e modelli, estrazione dei soggetti, costruzione dell\u2019ambiente in <a href="/vfx">compositing</a> (Photoshop + After Effects) con elementi generati tramite AI e dipinti manualmente. Per i video, lo stesso approccio applicato al movimento: loop seamless con animazione degli ambienti, particelle e sottili effetti atmosferici.\n\nColor grading unificato in DaVinci Resolve per garantire coerenza cromatica sull\u2019intera campagna.',
        solutionEn: 'Each image follows the same process: studio shoot with actors and models, subject extraction, environment construction through <a href="/en/vfx">compositing</a> (Photoshop + After Effects) with AI-generated and hand-painted elements. For videos, the same approach applied to motion: seamless loops with animated environments, particles and subtle atmospheric effects.\n\nUnified color grading in DaVinci Resolve to ensure chromatic coherence across the entire campaign.\n\nVideo and photography (footage): Nicolas Vanegas Sanchez.',
        resultIt: 'Una campagna di 15 compositing fotografici e 8 video loop che ha definito l\u2019identit\u00E0 visiva della stagione Doppelg\u00E4nger \u2014 un universo onirico e surreale costruito interamente in post-produzione, dove ogni scena \u00E8 un piccolo mondo a s\u00E9.',
        resultEn: 'A campaign of 15 photo composites and 8 video loops that defined the Doppelg\u00E4nger seasonal visual identity \u2014 a dreamlike, surreal universe built entirely in post-production, where each scene is a little world of its own.',
        contentBlocks: [
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/doppelganger-scena-museo-compositing.webp', alt: { it: 'Compositing scena museo \u2014 campagna Doppelg\u00E4nger', en: 'Museum scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/images/portfolio/doppelganger-scena-scacchi-compositing.webp', alt: { it: 'Compositing scena scacchi \u2014 campagna Doppelg\u00E4nger', en: 'Chess scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/images/portfolio/doppelganger-scena-garage-compositing.webp', alt: { it: 'Compositing scena garage \u2014 campagna Doppelg\u00E4nger', en: 'Garage scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                ], columns: 3
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/doppelganger-scena-matrimonio-compositing.webp', alt: { it: 'Compositing scena matrimonio \u2014 campagna Doppelg\u00E4nger', en: 'Wedding scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/images/portfolio/doppelganger-scena-cinema-compositing.webp', alt: { it: 'Compositing scena cinema \u2014 campagna Doppelg\u00E4nger', en: 'Cinema scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/images/portfolio/doppelganger-scena-bar-compositing.webp', alt: { it: 'Compositing scena bar \u2014 campagna Doppelg\u00E4nger', en: 'Bar scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                ], columns: 3
            },
            { type: 'text', textIt: 'Otto video loop della campagna. Ogni scena \u00E8 costruita in compositing partendo dallo shooting in studio: estrazione soggetti, costruzione ambiente, animazione elementi, color grading unificato.', textEn: 'Eight campaign video loops. Each scene is built through compositing from the studio shoot: subject extraction, environment construction, element animation, unified color grading.' },
            {
                type: 'gallery', images: [
                    { src: '/videos/portfolio/doppelganger-compositing-scacchi-loop.mp4', alt: { it: 'Video compositing scena scacchi \u2014 campagna Doppelg\u00E4nger', en: 'Video compositing chess scene \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/videos/portfolio/doppelganger-compositing-museo-loop.mp4', alt: { it: 'Video compositing scena museo \u2014 campagna Doppelg\u00E4nger', en: 'Video compositing museum scene \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/videos/portfolio/doppelganger-compositing-bar-loop.mp4', alt: { it: 'Video compositing scena bar \u2014 campagna Doppelg\u00E4nger', en: 'Video compositing bar scene \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/videos/portfolio/doppelganger-compositing-teatro-loop.mp4', alt: { it: 'Video compositing scena teatro \u2014 campagna Doppelg\u00E4nger', en: 'Video compositing theater scene \u2014 Doppelg\u00E4nger campaign' } },
                ], columns: 4
            },
            {
                type: 'gallery', images: [
                    { src: '/videos/portfolio/doppelganger-compositing-vigile-loop.mp4', alt: { it: 'Video compositing scena vigile \u2014 campagna Doppelg\u00E4nger', en: 'Video compositing traffic cop scene \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/videos/portfolio/doppelganger-compositing-bagno-loop.mp4', alt: { it: 'Video compositing scena bagno \u2014 campagna Doppelg\u00E4nger', en: 'Video compositing bathroom scene \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/videos/portfolio/doppelganger-compositing-stazione-loop.mp4', alt: { it: 'Video compositing scena stazione \u2014 campagna Doppelg\u00E4nger', en: 'Video compositing station scene \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/videos/portfolio/doppelganger-compositing-tv-loop.mp4', alt: { it: 'Video compositing scena TV \u2014 campagna Doppelg\u00E4nger', en: 'Video compositing TV scene \u2014 Doppelg\u00E4nger campaign' } },
                ], columns: 4
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/doppelganger-scena-specchio-compositing.webp', alt: { it: 'Compositing scena specchio \u2014 campagna Doppelg\u00E4nger', en: 'Mirror scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/images/portfolio/doppelganger-scena-teatro-compositing.webp', alt: { it: 'Compositing scena teatro \u2014 campagna Doppelg\u00E4nger', en: 'Theater scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/images/portfolio/doppelganger-scena-salone-compositing.webp', alt: { it: 'Compositing scena salone \u2014 campagna Doppelg\u00E4nger', en: 'Drawing room scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                ], columns: 3
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/doppelganger-scena-tv-compositing.webp', alt: { it: 'Compositing scena TV \u2014 campagna Doppelg\u00E4nger', en: 'TV scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/images/portfolio/doppelganger-scena-bagno-compositing.webp', alt: { it: 'Compositing scena bagno \u2014 campagna Doppelg\u00E4nger', en: 'Bathroom scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                    { src: '/images/portfolio/doppelganger-scena-ufficio-compositing.webp', alt: { it: 'Compositing scena ufficio \u2014 campagna Doppelg\u00E4nger', en: 'Office scene compositing \u2014 Doppelg\u00E4nger campaign' } },
                ], columns: 3
            },
            { type: 'text', textIt: 'Il processo creativo: dalla richiesta del cliente allo scatto in studio, fino al compositing finale. Ogni elemento dell\u2019ambiente \u00E8 costruito intorno ai soggetti reali \u2014 sfondi AI, elementi dipinti, atmosfere e luci ricreate in post-produzione.', textEn: 'The creative process: from client request to studio shoot, to final compositing. Every environment element is built around real subjects \u2014 AI backgrounds, hand-painted elements, atmospheres and lighting recreated in post-production.' },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/doppelganger-scacchi-reference-cliente.webp', alt: { it: 'Reference richiesta cliente \u2014 scena scacchi Doppelg\u00E4nger', en: 'Client reference request \u2014 chess scene Doppelg\u00E4nger' } },
                    { src: '/images/portfolio/doppelganger-scacchi-before-after-compositing.webp', alt: { it: 'Before/after compositing scena scacchi \u2014 studio vs risultato finale', en: 'Before/after compositing chess scene \u2014 studio vs final result' } },
                    { src: '/images/portfolio/doppelganger-scacchi-set-fotografico-bts.webp', alt: { it: 'Scatto in studio set fotografico \u2014 scena scacchi Doppelg\u00E4nger', en: 'Studio shoot behind the scenes \u2014 chess scene Doppelg\u00E4nger' } },
                ], columns: 3
            },
            { type: 'text', textIt: 'Making of: due video che mostrano il processo di compositing dalla ripresa in studio al risultato finale.', textEn: 'Making of: two videos showing the compositing process from studio shoot to final result.' },
            { type: 'video-mp4', url: '/videos/portfolio/doppelganger-bts-scacchi-making-of.mp4', title: 'Making of \u2014 Scena Scacchi' },
            { type: 'video-mp4', url: '/videos/portfolio/doppelganger-bts-vigile-making-of.mp4', title: 'Making of \u2014 Scena Vigile' },
            { type: 'image', src: '/images/portfolio/doppelganger-compositing-stazione-hero.webp', alt: { it: 'Compositing scena stazione \u2014 campagna Doppelg\u00E4nger', en: 'Compositing station scene \u2014 Doppelg\u00E4nger campaign' }, fullWidth: true },
            { type: 'text', textIt: 'Software: After Effects e Photoshop per il compositing, AI generativa per sfondi e elementi ambientali, Premiere Pro per il montaggio, DaVinci Resolve per il color grading unificato.\n\nVideo e foto (girato): Nicolas Vanegas Sanchez.', textEn: 'Software: After Effects and Photoshop for compositing, generative AI for backgrounds and environmental elements, Premiere Pro for editing, DaVinci Resolve for unified color grading.\n\nVideo and photography (footage): Nicolas Vanegas Sanchez.' },
        ],
    },
    // ──────────────────── VFX / CINEMA ────────────────────

    {
        slug: 'i-am-curious-johnny',
        titleIt: 'I Am Curious Johnny',
        titleEn: 'I Am Curious Johnny',
        category: 'vfx',
        categoryLabel: { it: `VFX`, en: `VFX` },
        client: 'Julien Temple (regista)',
        year: '2023',
        role: 'VFX Artist \u2014 Character Animation',
        thumbnail: '/images/portfolio/i-am-curious-johnny-documentario-hero.webp',
        thumbnailAlt: { it: `VFX animazione personaggio Mr. Limo \u2014 I Am Curious Johnny`, en: `VFX character animation Mr. Limo \u2014 I Am Curious Johnny` },
        heroImage: '/images/portfolio/i-am-curious-johnny-documentario-hero.webp',
        heroAlt: { it: 'I Am Curious Johnny \u2014 documentario di Julien Temple, in onda su Prime Video', en: 'I Am Curious Johnny \u2014 documentary by Julien Temple, streaming on Prime Video' },
        images: [
            { src: '/images/portfolio/i-am-curious-johnny-mr-limo-espressioni-lipsync.webp', alt: { it: 'Studio espressioni e lipsync Mr. Limo \u2014 I Am Curious Johnny', en: 'Expression and lipsync study Mr. Limo \u2014 I Am Curious Johnny' } },
            { src: '/images/portfolio/i-am-curious-johnny-pigozzi-museo.webp', alt: { it: 'Pigozzi al museo \u2014 scena dal documentario I Am Curious Johnny', en: 'Pigozzi at the museum \u2014 scene from I Am Curious Johnny documentary' } },
        ],
        tools: ['After Effects', 'Mocha Pro', 'Photoshop'],
        briefingIt: 'Documentario di Julien Temple su Jean Pigozzi, in onda su Prime Video. Pigozzi \u00E8 accompagnato da Mr. Limo, un pupazzo a grandezza naturale con un volto fisso. La richiesta del regista: farlo parlare e reagire in modo credibile in ogni scena, come fosse un personaggio vivo.',
        briefingEn: 'Documentary by Julien Temple about Jean Pigozzi, streaming on Prime Video. Pigozzi is accompanied by Mr. Limo, a life-size plastic puppet with a fixed face. The director\u2019s request: make it speak and react believably in every scene, as if it were a living character.',
        challengeIt: 'Il volto del pupazzo era rigido e inespressivo \u2014 un unico pezzo di plastica. Lavorando da Roma, per ogni scena dovevo rimuovere il volto originale, ricostruirlo digitalmente e animarlo con movimenti labiali e espressioni credibili, mantenendo coerenza visiva con il materiale fisico. Il tutto in decine di scene con inquadrature, luci e angolazioni diverse.',
        challengeEn: 'The puppet\u2019s face was rigid and expressionless \u2014 a single piece of plastic. Working remotely from Rome, for every scene I had to remove the original face, rebuild it digitally and animate it with believable lip movements and expressions, maintaining visual coherence with the physical material. All across dozens of scenes with different framing, lighting and angles.',
        solutionIt: 'Ho sviluppato uno studio completo del personaggio: fonemi per il lipsync, espressioni facciali, varianti con e senza denti. Sottoposto a Julien Temple per approvazione. Una volta validato il look, ho lavorato scena per scena: rotoscoping del volto originale, ricostruzione digitale, animazione labiale sincronizzata con il dialogo e <a href="/vfx">compositing</a> fotorealistico per integrare il volto animato nel girato.',
        solutionEn: 'I developed a complete character study: phonemes for lipsync, facial expressions, variants with and without teeth. Submitted to Julien Temple for approval. Once the look was validated, I worked scene by scene: rotoscoping the original face, digital reconstruction, lip-sync animation matched to dialogue and photorealistic <a href="/en/vfx">compositing</a> to integrate the animated face into the footage.',
        resultIt: 'Un pupazzo che parla e recita in modo naturale in ogni scena del documentario, senza che lo spettatore percepisca l\u2019intervento digitale. Il processo di validazione iniziale con il regista ha evitato revisioni e garantito coerenza su tutte le scene. Il film \u00E8 disponibile su <a href="https://www.primevideo.com/-/it/detail/I-Am-Curious-Johnny/0R68GPJN6AC0HDNJ3498QHBU89" target="_blank" rel="noopener">Prime Video</a>.',
        resultEn: 'A puppet that speaks and acts naturally in every scene of the documentary, without the viewer perceiving the digital intervention. The initial validation process with the director avoided revisions and ensured consistency across all scenes. The film is available on <a href="https://www.primevideo.com/-/it/detail/I-Am-Curious-Johnny/0R68GPJN6AC0HDNJ3498QHBU89" target="_blank" rel="noopener">Prime Video</a>.',
        imdbLink: 'https://www.imdb.com/it/title/tt35450650/',
        contentBlocks: [
            { type: 'text', textIt: 'Il processo: studio del personaggio, rimozione del volto originale e animazione frame-by-frame integrata nel girato.', textEn: 'The process: character study, original face removal and frame-by-frame animation integrated into the footage.' },
            { type: 'image', src: '/images/portfolio/i-am-curious-johnny-mr-limo-espressioni-lipsync.webp', alt: { it: 'Studio fonemi, espressioni facciali e lipsync \u2014 Mr. Limo', en: 'Phoneme study, facial expressions and lipsync \u2014 Mr. Limo' }, fullWidth: true },
            { type: 'video-mp4', url: '/videos/portfolio/i-am-curious-johnny-vfx-rimozione-volto.mp4', title: 'Rimozione volto e integrazione animazione \u2014 Mr. Limo' },
            { type: 'video-mp4', url: '/videos/portfolio/i-am-curious-johnny-animazione-lipsync.mp4', title: 'Test animazione lipsync \u2014 Mr. Limo' },
            { type: 'text', textIt: 'Software: After Effects per compositing e animazione, Mocha Pro per il tracking del volto, Photoshop per la ricostruzione digitale dei fonemi e delle espressioni.\n\nRegia: Julien Temple. In onda su <a href="https://www.primevideo.com/-/it/detail/I-Am-Curious-Johnny/0R68GPJN6AC0HDNJ3498QHBU89" target="_blank" rel="noopener">Prime Video</a> \u2014 <a href="https://www.imdb.com/it/title/tt35450650/">IMDB</a>', textEn: 'Software: After Effects for compositing and animation, Mocha Pro for face tracking, Photoshop for digital reconstruction of phonemes and expressions.\n\nDirected by Julien Temple. Streaming on <a href="https://www.primevideo.com/-/it/detail/I-Am-Curious-Johnny/0R68GPJN6AC0HDNJ3498QHBU89" target="_blank" rel="noopener">Prime Video</a> \u2014 <a href="https://www.imdb.com/it/title/tt35450650/">IMDB</a>' },
        ],
    },
    {
        slug: 'roche-jingle-ai',
        titleIt: 'Roche \u2014 Jingle AI Milano Cortina',
        titleEn: 'Roche \u2014 AI Jingle Milano Cortina',
        category: 'ai',
        categoryLabel: { it: 'AI Video', en: 'AI Video' },
        client: 'Roche',
        year: '2025',
        role: 'AI Video Producer, Editor',
        thumbnail: '/images/portfolio/roche-jingle-ai-hero.webp',
        thumbnailAlt: { it: 'AI video production per Roche \u2014 jingle olimpico', en: 'AI video production for Roche \u2014 Olympic jingle' },
        heroImage: '/images/portfolio/roche-jingle-ai-hero.webp',
        heroAlt: { it: 'Roche Jingle AI \u2014 ritratto generato con AI per evento aziendale olimpico', en: 'Roche AI Jingle \u2014 AI-generated portrait for Olympic corporate event' },
        images: [
            { src: '/images/portfolio/roche-jingle-ai-relatrice-montagne.webp', alt: { it: 'Relatrice Roche \u2014 ritratto AI con montagne innevate', en: 'Roche speaker \u2014 AI portrait with snowy mountains' } },
            { src: '/images/portfolio/roche-jingle-ai-relatore-bandiere.webp', alt: { it: 'Relatore Roche \u2014 ritratto AI con bandiere italiane', en: 'Roche speaker \u2014 AI portrait with Italian flags' } },
            { src: '/images/portfolio/roche-jingle-ai-relatrice-sorriso.webp', alt: { it: 'Relatrice Roche \u2014 ritratto AI primo piano', en: 'Roche speaker \u2014 AI close-up portrait' } },
        ],
        tools: ['Veo', 'Higgsfield', 'Runway', 'Nano Banana', 'After Effects', 'DaVinci Resolve'],
        briefingIt: 'Realizzazione di jingle video per un evento annuale Roche \u2014 presentazione dei relatori sul palco in stile Milano Cortina 2026. Il materiale di partenza: solo foto dei dipendenti. Il risultato richiesto: video dinamici e coinvolgenti che trasformano ogni relatore in un atleta olimpico. Progetto realizzato da Roma.',
        briefingEn: 'Creation of video jingles for an annual Roche event \u2014 speaker introductions on stage in Milano Cortina 2026 style. Starting material: only employee photos. Required result: dynamic, engaging videos transforming each speaker into an Olympic athlete. Project developed from Rome.',
        challengeIt: 'Trasformare semplici foto dei dipendenti in video credibili e spettacolari in stile olimpico. Con un approccio tradizionale sarebbe stato impossibile nei tempi e nel budget. L\u2019AI era l\u2019unica strada \u2014 ma serviva l\u2019occhio per guidarla e l\u2019esperienza per selezionare e correggere.',
        challengeEn: 'Transforming simple employee photos into believable, spectacular Olympic-style videos. With a traditional approach it would have been impossible within time and budget. AI was the only path \u2014 but the eye to guide it and the experience to select and correct were essential.',
        solutionIt: 'Ho utilizzato un mix di strumenti di <a href="/ai-video" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">generazione video e immagini AI</a>: Nano Banana per i ritratti, Veo e Higgsfield per la generazione video, Runway per le animazioni. Ogni relatore \u00E8 stato trasformato in un atleta olimpico \u2014 sciatore, saltatore, giocatore di hockey \u2014 con ambientazioni invernali realistiche e divise della nazionale italiana. L\u2019esperienza <a href="/vfx" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">VFX</a> \u00E8 stata fondamentale per selezionare gli output migliori tra decine di generazioni, correggere artefatti e montare il tutto con il giusto ritmo.',
        solutionEn: 'I used a mix of <a href="/en/ai-video" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">AI video and image generation</a> tools: Nano Banana for portraits, Veo and Higgsfield for video generation, Runway for animations. Each speaker was transformed into an Olympic athlete \u2014 skier, ski jumper, hockey player \u2014 with realistic winter settings and Italian national team uniforms. <a href="/en/vfx" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">VFX</a> experience was essential for selecting the best outputs from dozens of generations, correcting artifacts and editing everything with the right rhythm.',
        resultIt: 'Jingle che hanno centrato l\u2019obiettivo \u2014 spettacolari, divertenti, realizzati in tempi e budget impossibili senza AI. L\u2019esempio perfetto del mio approccio: l\u2019AI produce la materia prima, l\u2019esperienza seleziona e rifinisce.',
        resultEn: 'Jingles that hit the mark \u2014 spectacular, fun, delivered within timelines and budgets impossible without AI. The perfect example of my approach: AI produces the raw material, experience selects and refines.',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/roche-jingle-olimpiadi-ai.mp4', title: 'Roche \u2014 Jingle AI Milano Cortina (compilation)' },
            {
                type: 'video-loop-gallery', videos: [
                    { url: '/videos/portfolio/roche-jingle-hockey-ai.mp4' },
                    { url: '/videos/portfolio/roche-jingle-skijump-ai.mp4' },
                ], columns: 2
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/roche-jingle-ai-relatrice-montagne.webp', alt: { it: 'Relatrice Roche con montagne innevate', en: 'Roche speaker with snowy mountains' } },
                    { src: '/images/portfolio/roche-jingle-ai-relatore-bandiere.webp', alt: { it: 'Relatore Roche con bandiere italiane', en: 'Roche speaker with Italian flags' } },
                ], columns: 2
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/roche-jingle-ai-sciatore-slalom.webp', alt: { it: 'Sciatore slalom AI \u2014 Roche jingle olimpico', en: 'AI slalom skier \u2014 Roche Olympic jingle' } },
                    { src: '/images/portfolio/roche-jingle-ai-snowboard-halfpipe.webp', alt: { it: 'Snowboarder halfpipe AI \u2014 Roche jingle olimpico', en: 'AI halfpipe snowboarder \u2014 Roche Olympic jingle' } },
                ], columns: 2
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/roche-jingle-ai-slittino-olimpiadi.webp', alt: { it: 'Slittino olimpico AI \u2014 Roche jingle', en: 'AI Olympic luge \u2014 Roche jingle' } },
                    { src: '/images/portfolio/roche-jingle-ai-dettaglio-guanto.webp', alt: { it: 'Dettaglio guanto \u2014 realismo AI generativa', en: 'Glove detail \u2014 generative AI realism' } },
                ], columns: 2
            },
            { type: 'text', textIt: 'Software: Veo e Higgsfield per la generazione video AI, Runway per le animazioni, Nano Banana per i ritratti. After Effects per il compositing e il montaggio, DaVinci Resolve per il color grading finale.\n\nCliente: Roche.', textEn: 'Software: Veo and Higgsfield for AI video generation, Runway for animations, Nano Banana for portraits. After Effects for compositing and editing, DaVinci Resolve for final color grading.\n\nClient: Roche.' },
        ],
    },
    {
        slug: 'isole',
        titleIt: `Isole`,
        titleEn: `Isole`,
        category: 'post',
        categoryLabel: { it: `Post Produzione`, en: `Post Production` },
        client: 'Valerio de Berardinis (regista)',
        year: '2023',
        role: 'Editor / Colorist / VFX Artist',
        thumbnail: '/images/portfolio/post-produzione-isole-thumb.jpg',
        thumbnailAlt: { it: `Post produzione cortometraggio Isole`, en: `Post production for Isole short film` },
        heroImage: '/images/portfolio/post-produzione-isole-hero.jpg',
        images: [],
        tools: ['DaVinci Resolve', 'After Effects', 'Mocha Pro'],
        briefingIt: `Cortometraggio diretto da Valerio de Berardinis che racconta la storia della femmina accabadora — una figura della tradizione sarda: la donna che poneva fine alle sofferenze dei malati terminali nei piccoli paesi isolati della Sardegna. Un atto considerato pietoso, non criminale, dalla comunità.`,
        briefingEn: `Short film directed by Valerio de Berardinis telling the story of the femmina accabadora — a figure from Sardinian tradition: the woman who ended the suffering of terminally ill people in isolated Sardinian villages. An act considered merciful, not criminal, by the community.`,
        challengeIt: `Un racconto che si muove tra passato arcaico e presente, tra rituale e intimità domestica. Il montaggio doveva costruire la tensione narrativa senza mai cadere nel macabro. Il color grading doveva separare visivamente i due piani temporali mantenendo un'atmosfera sospesa e rispettosa del tema.`,
        challengeEn: `A story moving between archaic past and present, between ritual and domestic intimacy. The editing had to build narrative tension without ever falling into the macabre. Color grading had to visually separate the two time planes while maintaining a suspended atmosphere respectful of the subject.`,
        solutionIt: `Ho gestito l'intera <a href="/post-produzione">post-produzione</a>: montaggio, color grading in DaVinci Resolve e piccoli interventi VFX. Il grading gioca su palette desaturate e terre per il passato, con toni leggermente più freddi per il presente. Il montaggio alterna ritmi lenti e contemplativi a tagli più secchi nei momenti di tensione.`,
        solutionEn: `I managed the entire <a href="/en/post-production">post-production</a>: editing, color grading in DaVinci Resolve and small VFX interventions. The grading plays on desaturated, earthy palettes for the past, with slightly cooler tones for the present. The editing alternates slow, contemplative rhythms with sharper cuts in moments of tension.`,
        resultIt: `Un cortometraggio che tratta un tema delicato con rispetto e potenza visiva — dove montaggio e colore lavorano insieme per guidare lo spettatore in una storia che interroga il confine tra pietà e violenza.`,
        resultEn: `A short film that handles a delicate subject with respect and visual power — where editing and color work together to guide the viewer through a story questioning the boundary between mercy and violence.`,
    },

    // ──────────────────── ANIMAZIONE 3D / 2D / PRODOTTO ────────────────────

    // =========================================================================
    // FRANGIAMORE — Sostituisce black-hole-tale in projects.ts
    // Immagini: public/images/portfolio/frangiamore/
    // =========================================================================
    {
        slug: 'frangiamore',
        titleIt: 'Frangiamore',
        titleEn: 'Frangiamore',
        category: 'post',
        categoryLabel: { it: 'Post Produzione', en: 'Post Production' },
        client: 'Sylvio Giardina',
        year: '2020',
        role: 'Cinematografia, Color Correction, VFX',
        thumbnail: '/images/portfolio/frangiamore/frangiamore-sylvio-giardina-hero.webp',
        thumbnailAlt: { it: 'Frangiamore — fashion film per Sylvio Giardina Haute Couture, Roma', en: 'Frangiamore — fashion film for Sylvio Giardina Haute Couture, Rome' },
        heroImage: '/images/portfolio/frangiamore/frangiamore-sylvio-giardina-hero.webp',
        heroAlt: { it: 'Frangiamore — fashion film Sylvio Giardina, Scala del Vignola Roma', en: 'Frangiamore — Sylvio Giardina fashion film, Scala del Vignola Rome' },
        images: [
            { src: '/images/portfolio/frangiamore/frangiamore-tulle-scalinata-campidoglio.webp', alt: { it: 'Abito in tulle bianco sulla scalinata del Campidoglio — Frangiamore', en: 'White tulle gown on the Campidoglio staircase — Frangiamore' } },
            { src: '/images/portfolio/frangiamore/frangiamore-pantheon-roma.webp', alt: { it: 'Modella davanti al Pantheon — Frangiamore Sylvio Giardina', en: 'Model in front of the Pantheon — Frangiamore Sylvio Giardina' } },
        ],
        tools: ['DaVinci Resolve', 'After Effects'],
        briefingIt: 'Il couturier Sylvio Giardina — formatosi all\'Accademia di Costume e Moda con apprendistato da Gattinoni — voleva un cortometraggio che celebrasse il dialogo tra le sue collezioni di alta moda e le bellezze architettoniche di Roma. Il progetto è stato patrocinato dal Comune di Roma e presentato in Campidoglio alla presenza della Sindaca Virginia Raggi.',
        briefingEn: 'Couturier Sylvio Giardina — trained at the Accademia di Costume e Moda with an apprenticeship at Gattinoni — wanted a short film celebrating the dialogue between his haute couture collections and Rome\'s architectural beauty. The project was sponsored by the City of Rome and premiered at the Campidoglio in the presence of Mayor Virginia Raggi.',
        challengeIt: 'Girare in location monumentali romane (Campidoglio, Pantheon, Villa Torlonia) con tempi strettissimi e luce naturale, costruendo un look cinematografico che esaltasse contemporaneamente i dettagli sartoriali degli abiti e la grandiosità delle architetture. Tre collezioni diverse — Vertigo, Monocromo e Dark Celebration — con palette cromatiche distinte da armonizzare in un unico racconto visivo.',
        challengeEn: 'Shooting in monumental Roman locations (Campidoglio, Pantheon, Villa Torlonia) within very tight timeframes using natural light, building a cinematic look that simultaneously enhanced the sartorial details of the garments and the grandeur of the architecture. Three different collections — Vertigo, Monocromo and Dark Celebration — with distinct color palettes to harmonize into a single visual narrative.',
        solutionIt: 'Ho curato cinematografia, <a href="/post-produzione">color correction</a> e VFX. Riprese all\'alba e al tramonto per catturare la luce migliore nelle location a disponibilità limitata. La color correction ha costruito tre atmosfere distinte per le tre collezioni — il bianco puro del tulle, il nero misterioso e il rosso fuoco — mantenendo coerenza narrativa attraverso le transizioni. Interventi VFX mirati per le dissolvenze evocative tra passato e presente che caratterizzano il film.',
        solutionEn: 'I handled cinematography, <a href="/en/post-production">color correction</a> and VFX. Shooting at dawn and dusk to capture optimal light in locations with limited availability. The color correction built three distinct atmospheres for the three collections — pure white tulle, mysterious black and fiery red — maintaining narrative coherence through transitions. Targeted VFX work for the evocative dissolves between past and present that characterize the film.',
        resultIt: 'Un fashion film presentato ufficialmente nella Sala della Protomoteca in Campidoglio il 14 settembre 2020. Copertura stampa su ANSA, Adnkronos e testate di settore. Un esempio di come cinematografia e <a href="/post-produzione">post-produzione</a> possono elevare la moda a racconto cinematografico.',
        resultEn: 'A fashion film officially premiered at the Sala della Protomoteca in the Campidoglio on September 14, 2020. Press coverage on ANSA, Adnkronos and industry publications. An example of how cinematography and <a href="/en/post-production">post-production</a> can elevate fashion into cinematic storytelling.',
        videoUrl: 'https://youtu.be/mowfqwBd_Tc',
        imdbLink: 'https://www.imdb.com/title/tt13472468/',
        contentBlocks: [
            {
                type: 'text',
                textIt: 'Un cortometraggio che nasce come dichiarazione d\'amore per Roma e per l\'alta moda. Sylvio Giardina ha selezionato capi dalle collezioni Vertigo, Monocromo e Dark Celebration del suo archivio storico per creare un dialogo visivo tra artigianato sartoriale e architettura monumentale.\n\nIl titolo "Frangiamore" è un omaggio alla madre dello stilista — il suo cognome da nubile. Un gesto intimo che racconta quanto la passione per la moda sia radicata nella storia personale.',
                textEn: 'A short film conceived as a love letter to Rome and haute couture. Sylvio Giardina selected pieces from his archive\'s Vertigo, Monocromo and Dark Celebration collections to create a visual dialogue between sartorial craftsmanship and monumental architecture.\n\nThe title "Frangiamore" is a tribute to the designer\'s mother — her maiden name. An intimate gesture revealing how deeply the passion for fashion is rooted in personal history.'
            },
            {
                type: 'image',
                src: '/images/portfolio/frangiamore/frangiamore-tulle-scalinata-campidoglio.webp',
                alt: { it: 'Abito in tulle bianco sulla scalinata del Campidoglio — Frangiamore Sylvio Giardina', en: 'White tulle gown on the Campidoglio staircase — Frangiamore Sylvio Giardina' },
                fullWidth: false
            },
            {
                type: 'text',
                textIt: 'Il mio ruolo è stato quello di direttore della fotografia, colorist e VFX artist. Ho curato l\'intero look cinematografico del film — dalla scelta dell\'illuminazione naturale nelle location romane alla color correction finale, costruendo una palette che esaltasse i tre colori dominanti delle collezioni: il bianco puro del tulle, il nero misterioso e il rosso fuoco.\n\nLe riprese si sono svolte all\'alba e al tramonto per catturare la luce migliore nei luoghi monumentali, lavorando con tempi strettissimi in location a disponibilità limitata.',
                textEn: 'My role encompassed director of photography, colorist and VFX artist. I shaped the entire cinematic look of the film — from leveraging natural light across Rome\'s monumental locations to the final color correction, building a palette that enhanced the three dominant collection colors: pure white tulle, mysterious black and fiery red.\n\nShooting took place at dawn and dusk to capture optimal light in the monumental locations, working within very tight windows of availability.'
            },
            {
                type: 'gallery',
                columns: 2,
                images: [
                    {
                        src: '/images/portfolio/frangiamore/frangiamore-pantheon-roma.webp',
                        alt: { it: 'Modella davanti al portone del Pantheon — Frangiamore cinematografia Piero Perilli', en: 'Model in front of the Pantheon entrance — Frangiamore cinematography by Piero Perilli' }
                    },
                    {
                        src: '/images/portfolio/frangiamore/frangiamore-palazzo-conservatori-roma.webp',
                        alt: { it: 'Abito haute couture nel Cortile dei Musei Capitolini — Frangiamore Sylvio Giardina', en: 'Haute couture gown in the Capitoline Museums courtyard — Frangiamore Sylvio Giardina' }
                    }
                ]
            },
            {
                type: 'text',
                textIt: 'Roma stessa diventa protagonista: Piazza del Campidoglio, la Scala del Vignola, il Cortile di Palazzo dei Conservatori, Piazza della Rotonda al Pantheon e Villa Torlonia. Ogni location è stata scelta per creare un contrappunto architettonico con gli abiti — le geometrie rinascimentali dei palazzi che dialogano con le strutture architettoniche dei capi in tulle e goffrature.\n\nIl cortometraggio si chiude con un omaggio alle sarte della Maison: mani artigiane che custodiscono il patrimonio dell\'alta moda italiana. Un tema che sento profondamente vicino — l\'artigianato come valore, la precisione del fare.',
                textEn: 'Rome itself becomes a protagonist: Piazza del Campidoglio, the Scala del Vignola, the Palazzo dei Conservatori courtyard, Piazza della Rotonda at the Pantheon and Villa Torlonia. Each location was chosen to create an architectural counterpoint with the garments — Renaissance geometries in dialogue with the architectural structures of the tulle and goffré pieces.\n\nThe film closes with a tribute to the Maison\'s seamstresses: artisan hands preserving Italy\'s haute couture heritage. A theme that resonates deeply with me — craftsmanship as value, the precision of making.'
            },
            {
                type: 'image',
                src: '/images/portfolio/frangiamore/frangiamore-haute-couture-roma.webp',
                alt: { it: 'Abito haute couture Sylvio Giardina con frammenti del Colosso di Costantino — Frangiamore Roma', en: 'Sylvio Giardina haute couture gown with fragments of the Colossus of Constantine — Frangiamore Rome' },
                fullWidth: false
            },
            {
                type: 'video',
                url: 'https://youtu.be/mowfqwBd_Tc',
                titleIt: 'Frangiamore — Cortometraggio completo',
                titleEn: 'Frangiamore — Full Short Film'
            },
            {
                type: 'text',
                textIt: '**Crediti**\nRegia: Riccardo Suriano\nCinematografia: Piero Perilli\nArt Director: Tania Alineri\nStylist: Valeria J. Marchetti\nModella: Serena Archetti\nHairstylist: Alessandro Messina\nMake-up: Antonia Pappalardo\n\nPresentato in Campidoglio, Roma — 14 Settembre 2020\n<a href="https://www.imdb.com/title/tt13472468/" target="_blank" rel="noopener">IMDB</a>',
                textEn: '**Credits**\nDirector: Riccardo Suriano\nCinematography: Piero Perilli\nArt Director: Tania Alineri\nStylist: Valeria J. Marchetti\nModel: Serena Archetti\nHairstylist: Alessandro Messina\nMake-up: Antonia Pappalardo\n\nPremiered at Campidoglio, Rome — September 14, 2020\n<a href="https://www.imdb.com/title/tt13472468/" target="_blank" rel="noopener">IMDB</a>'
            }
        ],
    },
    {
        slug: 'stalking-spot',
        titleIt: 'Stalking',
        titleEn: 'Stalking',
        category: 'vfx',
        categoryLabel: { it: 'VFX', en: 'VFX' },
        client: 'Ministero delle Pari Opportunit\u00E0 / Paolo Scarf\u00F2',
        year: '2022',
        role: 'VFX, Animazione 3D, Compositing',
        thumbnail: '/images/portfolio/stalking-spot-ministero-pari-opportunita.webp',
        thumbnailAlt: { it: 'Spot Stalking \u2014 Ministero delle Pari Opportunit\u00E0', en: 'Stalking PSA \u2014 Italian Ministry of Equal Opportunities' },
        heroImage: '/images/portfolio/stalking-spot-ministero-pari-opportunita.webp',
        heroAlt: { it: 'Stalking \u2014 spot per il Ministero delle Pari Opportunit\u00E0, regia Paolo Scarf\u00F2', en: 'Stalking \u2014 PSA for the Italian Ministry of Equal Opportunities, directed by Paolo Scarf\u00F2' },
        images: [],
        tools: ['3ds Max', 'After Effects', 'DaVinci Resolve'],
        briefingIt: 'Spot televisivo per il Ministero delle Pari Opportunit\u00E0, trasmesso sulle principali emittenti italiane. Regia di Paolo Scarf\u00F2. Il concept creativo: una gabbia 3D che imprigiona la vittima, visualizzazione metaforica della condizione di chi subisce stalking.',
        briefingEn: 'Television commercial for the Italian Ministry of Equal Opportunities, broadcast on major Italian networks. Directed by Paolo Scarf\u00F2. The creative concept: a 3D cage imprisoning the victim, a metaphorical visualization of the condition of stalking victims.',
        challengeIt: 'Integrare un elemento 3D \u2014 la gabbia \u2014 in scene girate con attori, con movimenti di camera e azioni complesse. La gabbia doveva sembrare fisicamente presente nella scena, con ombre, riflessi e interazione con la luce ambiente. Tutto il lavoro di <a href="/vfx">VFX e compositing</a> gestito da Roma.',
        challengeEn: 'Integrating a 3D element \u2014 the cage \u2014 into scenes shot with actors, with camera movements and complex actions. The cage had to feel physically present in the scene, with shadows, reflections and interaction with ambient light. All <a href="/en/vfx">VFX and compositing</a> work managed from Rome.',
        solutionIt: 'Modellazione e animazione della gabbia in 3ds Max, matching della camera del girato per un inserimento preciso. Compositing in After Effects con keying, ombre proiettate sugli attori e correzione colore per integrare il 3D con il girato reale. Color grading finale in DaVinci Resolve.\n\nRegia: Paolo Scarf\u00F2.',
        solutionEn: 'Cage modeling and animation in 3ds Max, camera matching from footage for precise insertion. Compositing in After Effects with keying, shadows projected onto actors and color correction to integrate 3D with real footage. Final color grading in DaVinci Resolve.\n\nDirected by Paolo Scarf\u00F2.',
        resultIt: 'Spot trasmesso sulle maggiori emittenti televisive italiane per il Ministero delle Pari Opportunit\u00E0. La metafora visiva della gabbia funziona a livello emotivo \u2014 lo spettatore sente la costrizione senza bisogno di parole.',
        resultEn: 'Commercial broadcast on major Italian television networks for the Ministry of Equal Opportunities. The visual metaphor of the cage works on an emotional level \u2014 the viewer feels the constraint without needing words.',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/stalking-spot-ministero-pari-opportunita.mp4', title: 'Spot Stalking \u2014 Ministero delle Pari Opportunit\u00E0' },
            { type: 'text', textIt: 'Software: 3ds Max per modellazione e animazione 3D, After Effects per compositing e integrazione, DaVinci Resolve per il color grading.\n\nRegia: Paolo Scarf\u00F2. Committente: Ministero delle Pari Opportunit\u00E0.', textEn: 'Software: 3ds Max for 3D modeling and animation, After Effects for compositing and integration, DaVinci Resolve for color grading.\n\nDirected by Paolo Scarf\u00F2. Client: Italian Ministry of Equal Opportunities.' },
        ],
    },
    {
        slug: 'wonder-alba',
        titleIt: 'Wonder Alba',
        titleEn: 'Wonder Alba',
        category: 'animation',
        categoryLabel: { it: `Animazione 3D`, en: `3D Animation` },
        client: 'Medlogix / Alba 4D',
        year: '2024',
        role: '3D Character Design, Animation, AI Integration',
        thumbnail: '/images/portfolio/wonder-alba-avatar-3d-hero.webp',
        thumbnailAlt: { it: 'Wonder Alba \u2014 avatar 3D conversazionale per Medlogix', en: 'Wonder Alba \u2014 3D conversational avatar for Medlogix' },
        heroImage: '/images/portfolio/wonder-alba-avatar-3d-hero.webp',
        heroAlt: { it: 'Wonder Alba \u2014 avatar 3D interattivo con AI conversazionale per Medlogix / Alba 4D', en: 'Wonder Alba \u2014 interactive 3D avatar with conversational AI for Medlogix / Alba 4D' },
        images: [
            { src: '/images/portfolio/wonder-alba-dettaglio-occhi-fotorealismo.webp', alt: { it: 'Dettaglio occhi Wonder Alba \u2014 fotorealismo 3D', en: 'Wonder Alba eyes detail \u2014 3D photorealism' } },
            { src: '/images/portfolio/wonder-alba-costume-scifi-bianco.webp', alt: { it: 'Costume Sci-Fi bianco \u2014 Wonder Alba', en: 'White Sci-Fi costume \u2014 Wonder Alba' } },
        ],
        tools: ['Character Creator', '3ds Max', 'Unreal Engine 5', 'Convai', 'NVIDIA'],
        briefingIt: 'Medlogix aveva bisogno di un personaggio per la promozione della macchina diagnostica Alba 4D (ipertermia di precisione). Non un semplice personaggio animato: un avatar interattivo capace di comunicare con il pubblico, rispondere a domande e seguire le linee guida aziendali. Progetto realizzato da Roma.',
        briefingEn: 'Medlogix needed a character to promote their Alba 4D diagnostic machine (precision hyperthermia). Not a simple animated character: an interactive avatar capable of communicating with the public, answering questions and following corporate guidelines. Project developed from Rome.',
        challengeIt: 'Progettare un personaggio 3D fotorealistico che funzionasse in tre modalit\u00E0: animazione pre-renderizzata per video promozionali, animazione in tempo reale via motion capture, e avatar AI autonomo capace di ascoltare, comprendere e rispondere vocalmente nel rispetto delle linee guida aziendali.',
        challengeEn: 'Designing a photorealistic 3D character that could work in three modes: pre-rendered animation for promotional videos, real-time animation via motion capture, and autonomous AI avatar capable of listening, understanding and responding vocally while respecting corporate guidelines.',
        solutionIt: 'Ho realizzato Wonder Alba in Character Creator e 3ds Max, ottimizzandola per Unreal Engine 5. Studio completo del personaggio: tre varianti di costume (Wonder Woman, Sci-Fi, anni 80), espressioni facciali fotorealistiche, super-poteri ispirati alla tecnologia Alba 4D. Il personaggio \u00E8 stato animato per i video promozionali, predisposto per motion capture in tempo reale, e infine integrato con <a href="/ai-video">intelligenza artificiale conversazionale</a> tramite Convai e NVIDIA: Wonder Alba ascolta, comprende e risponde in autonomia.',
        solutionEn: 'I created Wonder Alba in Character Creator and 3ds Max, optimizing her for Unreal Engine 5. Complete character study: three costume variants (Wonder Woman, Sci-Fi, 80s), photorealistic facial expressions, super-powers inspired by Alba 4D technology. The character was animated for promotional videos, prepared for real-time motion capture, and finally integrated with <a href="/en/ai-video">conversational AI</a> via Convai and NVIDIA: Wonder Alba listens, understands and responds autonomously.',
        resultIt: 'Un personaggio che si \u00E8 evoluto da mascotte animata a vero avatar AI interattivo. Esperienza ultra-realistica con emozioni autentiche, movimenti naturali e lipsync automatico. Un esempio concreto di come <a href="/animazione-3d">animazione 3D</a>, motion capture e intelligenza artificiale convergono in un unico prodotto.',
        resultEn: 'A character that evolved from animated mascot to full interactive AI avatar. Ultra-realistic experience with authentic emotions, natural movements and automatic lipsync. A concrete example of how <a href="/en/3d-animation">3D animation</a>, motion capture and artificial intelligence converge into a single product.',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/wonder-alba-espressioni-facciali-3d.mp4', title: 'Espressioni facciali \u2014 fotorealismo e dettaglio' },
            { type: 'image', src: '/images/portfolio/wonder-alba-dettaglio-occhi-fotorealismo.webp', alt: { it: 'Dettaglio occhi Wonder Alba \u2014 fotorealismo 3D', en: 'Wonder Alba eyes detail \u2014 3D photorealism' }, fullWidth: true },
            { type: 'text', textIt: 'Esperienza ultra-realistica. Emozioni autentiche, azione senza limiti. Alba si muove e agisce in modo naturale, con una gamma completa di movimenti ed espressioni facciali. Pu\u00F2 essere animata in tempo reale con motion capture facciale e lipsync automatico.', textEn: 'Ultra-realistic experience. Authentic emotions, limitless action. Alba moves and acts naturally, with a full range of movements and facial expressions. She can be animated in real time with facial motion capture and automatic lipsync.' },
            { type: 'video-mp4', url: '/videos/portfolio/wonder-alba-turnaround-3d.mp4', title: 'Turnaround 3D \u2014 Wonder Alba Sci-Fi' },
            { type: 'image', src: '/images/portfolio/wonder-alba-costume-scifi-bianco.webp', alt: { it: 'Costume Sci-Fi bianco \u2014 Wonder Alba', en: 'White Sci-Fi costume \u2014 Wonder Alba' }, fullWidth: true },
            { type: 'image', src: '/images/portfolio/wonder-alba-super-poteri-vfx.webp', alt: { it: 'Super poteri Wonder Alba \u2014 Multi Beam e Precision Hyperthermia', en: 'Wonder Alba super powers \u2014 Multi Beam and Precision Hyperthermia' }, fullWidth: true },
            { type: 'video-mp4', url: '/videos/portfolio/wonder-alba-animazione-voce-avatar.mp4', title: 'Test animazione con voce \u2014 Wonder Alba parla' },
            { type: 'image', src: '/images/portfolio/wonder-alba-avatar-conversazionale-ai.webp', alt: { it: 'Avatar conversazionale AI \u2014 parla con Wonder Alba', en: 'AI conversational avatar \u2014 talk to Wonder Alba' }, fullWidth: true },
            { type: 'text', textIt: 'La chicca del progetto: Wonder Alba \u00E8 un avatar AI conversazionale. Ascolta, comprende e risponde vocalmente seguendo le linee guida aziendali di Medlogix. Integrazione con Convai e NVIDIA per l\u2019intelligenza artificiale conversazionale in tempo reale.\n\nSoftware: Character Creator per il personaggio, 3ds Max per modellazione e animazione, Unreal Engine 5 per il rendering in tempo reale, Convai e NVIDIA per l\u2019AI conversazionale.\n\n<a href="https://connector.eagle3dstreaming.com/v5/Piero/WonderAlbaDesktop/mic" target="_blank" rel="noopener">Prova la demo: parla con Wonder Alba</a>', textEn: 'The project highlight: Wonder Alba is a conversational AI avatar. She listens, understands and responds vocally following Medlogix corporate guidelines. Integration with Convai and NVIDIA for real-time conversational artificial intelligence.\n\nSoftware: Character Creator for the character, 3ds Max for modeling and animation, Unreal Engine 5 for real-time rendering, Convai and NVIDIA for conversational AI.\n\n<a href="https://connector.eagle3dstreaming.com/v5/Piero/WonderAlbaDesktop/mic" target="_blank" rel="noopener">Try the demo: talk to Wonder Alba</a>' },
        ],
    },
    {
        slug: 'jor',
        titleIt: 'JOR \u2014 Collezione Liaison',
        titleEn: 'JOR \u2014 Liaison Collection',
        category: 'animation',
        categoryLabel: { it: 'Animazione 3D', en: '3D Animation' },
        client: 'JOR (gioielli)',
        year: '2024',
        role: '3D Artist, Animator, Color Grading',
        thumbnail: '/images/portfolio/jor-liaison-colosseo-anelli-3d.webp',
        thumbnailAlt: { it: 'Animazione 3D gioielli JOR Collezione Liaison', en: '3D animation JOR jewelry Liaison Collection' },
        heroImage: '/images/portfolio/jor-liaison-colosseo-anelli-3d.webp',
        heroAlt: { it: 'JOR Collezione Liaison \u2014 animazione 3D gioielli con Colosseo e statue classiche', en: 'JOR Liaison Collection \u2014 3D jewelry animation with Colosseum and classical statues' },
        images: [
            { src: '/images/portfolio/jor-liaison-anello-colonna-3d.webp', alt: { it: 'Anello JOR su colonna romana \u2014 rendering 3D', en: 'JOR ring on Roman column \u2014 3D rendering' } },
            { src: '/images/portfolio/jor-liaison-collezione-anelli-diamanti.webp', alt: { it: 'Collezione anelli JOR Liaison con diamanti \u2014 animazione 3D', en: 'JOR Liaison ring collection with diamonds \u2014 3D animation' } },
        ],
        tools: ['Unreal Engine 5', '3ds Max', 'DaVinci Resolve'],
        briefingIt: 'Spot per il brand di gioielli JOR, Collezione Liaison. Il concept: un mondo onirico ispirato alla Roma classica dove gli anelli con diamanti sono protagonisti, presentati tra Colosseo, statue e colonne in un ambiente surreale che ne esalta la preziosit\u00E0. Progetto realizzato da Roma.',
        briefingEn: 'Commercial for jewelry brand JOR, Liaison Collection. The concept: a dreamlike world inspired by classical Rome where diamond rings take center stage, presented among the Colosseum, statues and columns in a surreal environment that enhances their preciousness. Project developed from Rome.',
        challengeIt: 'Costruire un intero mondo 3D fotorealistico e onirico in Unreal Engine, dove ogni dettaglio \u2014 luce, materiali, riflessi sull\u2019acqua, marmo \u2014 doveva comunicare lusso e artigiaralit\u00E0. I gioielli dovevano essere protagonisti senza sembrare un catalogo: ogni anello con diamanti doveva risplendere con riflessi fisicamente accurati.',
        challengeEn: 'Building an entire photorealistic, dreamlike 3D world in Unreal Engine, where every detail \u2014 light, materials, water reflections, marble \u2014 had to communicate luxury and craftsmanship. The jewelry had to be the protagonist without feeling like a catalog: every diamond ring had to shine with physically accurate reflections.',
        solutionIt: 'Ho realizzato in Unreal Engine 5 il mondo onirico dello spot \u2014 il Colosseo, statue classiche, colonne e superfici d\u2019acqua riflettente con illuminazione cinematografica. I gioielli sono stati modellati in 3ds Max dai disegni tecnici originali con materiali fisicamente accurati (metalli, diamanti, riflessi). Movimenti di camera che guidano lo sguardo dal panorama al dettaglio del singolo anello. Color grading finale in DaVinci Resolve. <a href="/animazione-3d">Scopri i miei servizi di animazione 3D</a>.',
        solutionEn: 'I built the spot\u2019s dreamlike world in Unreal Engine 5 \u2014 the Colosseum, classical statues, columns and reflective water surfaces with cinematic lighting. Jewelry was modeled in 3ds Max from original technical drawings with physically accurate materials (metals, diamonds, reflections). Camera movements guide the eye from panorama to individual ring detail. Final color grading in DaVinci Resolve. <a href="/en/3d-animation">Discover my 3D animation services</a>.',
        resultIt: 'Uno spot che presenta i gioielli JOR Liaison come oggetti da desiderare \u2014 immersi in un mondo che non esiste ma che sembra tangibile. Ogni anello brilla con la stessa intensit\u00E0 che avrebbe in una vetrina reale.',
        resultEn: 'A commercial that presents JOR Liaison jewelry as objects of desire \u2014 immersed in a world that doesn\u2019t exist but feels tangible. Every ring shines with the same intensity it would have in a real display.',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/jor-collezione-liaison-animazione-3d.mp4', title: 'Spot JOR \u2014 Collezione Liaison' },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/jor-liaison-anello-colonna-3d.webp', alt: { it: 'Anello su colonna romana \u2014 JOR Liaison', en: 'Ring on Roman column \u2014 JOR Liaison' } },
                    { src: '/images/portfolio/jor-liaison-vista-anello-colosseo.webp', alt: { it: 'Vista attraverso l\u2019anello \u2014 Colosseo JOR Liaison', en: 'View through the ring \u2014 Colosseum JOR Liaison' } },
                ], columns: 2
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/jor-liaison-collezione-anelli-diamanti.webp', alt: { it: 'Collezione anelli diamanti JOR Liaison', en: 'JOR Liaison diamond ring collection' } },
                    { src: '/images/portfolio/jor-liaison-statua-tramonto-anelli.webp', alt: { it: 'Statua e anelli al tramonto \u2014 JOR Liaison', en: 'Statue and rings at sunset \u2014 JOR Liaison' } },
                ], columns: 2
            },
            { type: 'image', src: '/images/portfolio/jor-liaison-statua-mare-anelli.webp', alt: { it: 'Statua con anelli JOR Liaison \u2014 controluce sul mare', en: 'Statue with JOR Liaison rings \u2014 backlit over the sea' }, fullWidth: true },
            { type: 'text', textIt: 'Software: Unreal Engine 5 per ambiente e rendering in tempo reale, 3ds Max per modellazione gioielli dai disegni tecnici, DaVinci Resolve per il color grading finale.', textEn: 'Software: Unreal Engine 5 for environment and real-time rendering, 3ds Max for jewelry modeling from technical drawings, DaVinci Resolve for final color grading.' },
        ],
    },

    // ──────────────────── MOTION GRAPHICS ────────────────────

    {
        slug: 'om-olivia-mariotti',
        titleIt: 'OM Floating',
        titleEn: 'OM Floating',
        category: 'vfx',
        categoryLabel: { it: 'VFX', en: 'VFX' },
        client: 'OM / Prospero Di Veroli',
        year: '2018',
        role: 'VFX, Compositing',
        thumbnail: '/images/portfolio/om-floating-ufficio-meduse-compositing.webp',
        thumbnailAlt: { it: 'VFX compositing meduse \u2014 OM Floating', en: 'VFX jellyfish compositing \u2014 OM Floating' },
        heroImage: '/images/portfolio/om-floating-ufficio-meduse-compositing.webp',
        heroAlt: { it: 'OM Floating \u2014 meduse in compositing negli uffici OM, art direction Prospero Di Veroli', en: 'OM Floating \u2014 jellyfish compositing in OM offices, art direction by Prospero Di Veroli' },
        images: [
            { src: '/images/portfolio/om-floating-medusa-ufficio-vetro.webp', alt: { it: 'Medusa bioluminescente in compositing \u2014 ufficio OM', en: 'Bioluminescent jellyfish compositing \u2014 OM office' } },
            { src: '/images/portfolio/om-floating-meduse-vetrata-esterno.webp', alt: { it: 'Meduse in compositing viste dall\u2019esterno \u2014 OM Floating', en: 'Jellyfish compositing seen from outside \u2014 OM Floating' } },
        ],
        tools: ['After Effects', 'Photoshop', 'DaVinci Resolve'],
        briefingIt: 'Video per raccontare la transizione societaria dalla precedente societ\u00E0 alla nuova \u201COM\u201D. Art direction di Prospero Di Veroli. Il concept: inserire meduse bioluminescenti in compositing nelle immagini reali degli uffici di OM \u2014 creature che fluttuano nello spazio come metafora della trasformazione e del nuovo inizio. Progetto realizzato da Roma.',
        briefingEn: 'Video to narrate the corporate transition from the previous company to the new \u201COM\u201D. Art direction by Prospero Di Veroli. The concept: inserting bioluminescent jellyfish through compositing into real images of OM offices \u2014 creatures floating in space as a metaphor for transformation and new beginnings. Project developed from Rome.',
        challengeIt: 'Integrare meduse 3D bioluminescenti in fotografie reali degli uffici OM in modo credibile. Le meduse dovevano sembrare fisicamente presenti nello spazio: luce coerente con l\u2019ambiente, riflessi sui vetri, interazione con le superfici. Il tutto mantenendo un\u2019atmosfera onirica e surreale.',
        challengeEn: 'Integrating bioluminescent 3D jellyfish into real photographs of OM offices believably. The jellyfish had to feel physically present in the space: lighting coherent with the environment, reflections on glass, interaction with surfaces. All while maintaining a dreamlike, surreal atmosphere.',
        solutionIt: 'Ho creato le meduse in 3D e le ho integrate scena per scena nelle immagini degli uffici attraverso <a href="/vfx">compositing</a> in After Effects. Ogni medusa ha luce propria che interagisce con l\u2019ambiente circostante \u2014 riflessi sui vetri delle pareti, alone luminoso sulle superfici, ombre coerenti. Color grading in DaVinci Resolve per uniformare il look cinematografico blu-verde che trasforma l\u2019ufficio in un acquario.',
        solutionEn: 'I created the jellyfish in 3D and integrated them scene by scene into the office images through <a href="/en/vfx">compositing</a> in After Effects. Each jellyfish emits its own light that interacts with the surrounding environment \u2014 reflections on glass walls, luminous halos on surfaces, coherent shadows. Color grading in DaVinci Resolve to unify the cinematic blue-green look that transforms the office into an aquarium.',
        resultIt: 'Un video dove le meduse fluttuano naturalmente negli spazi di OM, trasformando un ufficio reale in un ambiente surreale e poetico. La metafora visiva della transizione societaria \u00E8 immediata: qualcosa di nuovo e luminoso abita uno spazio familiare.',
        resultEn: 'A video where jellyfish float naturally through OM spaces, transforming a real office into a surreal, poetic environment. The visual metaphor for corporate transition is immediate: something new and luminous inhabits a familiar space.',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/om-floating-meduse-compositing.mp4', title: 'OM Floating \u2014 meduse in compositing' },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/om-floating-medusa-ufficio-vetro.webp', alt: { it: 'Medusa nell\u2019ufficio OM \u2014 compositing su vetro', en: 'Jellyfish in OM office \u2014 compositing on glass' } },
                    { src: '/images/portfolio/om-floating-medusa-specchio-obl\u00F2.webp', alt: { it: 'Medusa vista dall\u2019obl\u00F2 \u2014 OM Floating', en: 'Jellyfish seen through porthole \u2014 OM Floating' } },
                ], columns: 2
            },
            { type: 'image', src: '/images/portfolio/om-floating-meduse-vetrata-esterno.webp', alt: { it: 'Meduse visibili dall\u2019esterno attraverso la vetrata \u2014 OM Floating', en: 'Jellyfish visible from outside through glass wall \u2014 OM Floating' }, fullWidth: true },
            { type: 'text', textIt: 'Software: After Effects per il compositing e l\u2019integrazione delle meduse 3D, Photoshop per la preparazione degli ambienti, DaVinci Resolve per il color grading.\n\nArt direction: Prospero Di Veroli.', textEn: 'Software: After Effects for compositing and 3D jellyfish integration, Photoshop for environment preparation, DaVinci Resolve for color grading.\n\nArt direction: Prospero Di Veroli.' },
        ],
    },
    {
        slug: 'pmi',
        titleIt: 'Abbiamo Cura di Te \u2014 PMI',
        titleEn: 'Abbiamo Cura di Te \u2014 PMI',
        category: 'motion',
        categoryLabel: { it: 'Motion Graphics', en: 'Motion Graphics' },
        client: 'PMI',
        year: '2022',
        role: 'Motion Designer, Animator',
        thumbnail: '/images/portfolio/pmi-abbiamo-cura-di-te-animazione.webp',
        thumbnailAlt: { it: 'Motion graphics per PMI \u2014 Abbiamo Cura di Te', en: 'Motion graphics for PMI \u2014 We Take Care of You' },
        heroImage: '/images/portfolio/pmi-abbiamo-cura-di-te-animazione.webp',
        heroAlt: { it: 'Abbiamo Cura di Te \u2014 animazione a tratto continuo per PMI', en: 'Abbiamo Cura di Te \u2014 continuous line animation for PMI' },
        images: [
            { src: '/images/portfolio/pmi-animazione-albero-tratto.webp', alt: { it: 'Albero disegnato a tratto continuo \u2014 PMI', en: 'Tree drawn with continuous line \u2014 PMI' } },
            { src: '/images/portfolio/pmi-animazione-famiglia-mela.webp', alt: { it: 'Famiglia con mela \u2014 animazione PMI', en: 'Family with apple \u2014 PMI animation' } },
        ],
        tools: ['After Effects', 'Illustrator'],
        briefingIt: 'Video animato per PMI. Il concept: un unico tratto continuo che disegna una storia di due minuti, raccontando la missione e i valori di PMI attraverso un\u2019animazione fluida e ininterrotta. Progetto realizzato da Roma.',
        briefingEn: 'Animated video for PMI. The concept: a single continuous line that draws a two-minute story, telling PMI\u2019s mission and values through a fluid, uninterrupted animation. Project developed from Rome.',
        challengeIt: 'Realizzare un\u2019animazione dove un unico tratto si trasforma continuamente per due minuti senza interruzioni \u2014 ogni transizione doveva essere naturale, ogni elemento doveva nascere dal precedente. Zero tagli, zero stacchi. Il risultato doveva comunicare cura e attenzione attraverso la delicatezza del segno.',
        challengeEn: 'Creating an animation where a single stroke continuously transforms for two minutes without breaks \u2014 every transition had to be natural, every element had to be born from the previous one. Zero cuts, zero breaks. The result had to communicate care and attention through the delicacy of the line.',
        solutionIt: 'Ho progettato l\u2019intero storyboard come un\u2019unica linea narrativa, poi animato in After Effects frame per frame le transizioni tra un soggetto e l\u2019altro. Il tratto continuo guida lo spettatore attraverso la storia di PMI \u2014 dalla cura della persona alla visione aziendale \u2014 in un flusso visivo ipnotico. Tocchi di acquerello aggiungono emozione senza interrompere la linea. <a href="/motion-graphics">Scopri i miei servizi di motion graphics</a>.',
        solutionEn: 'I designed the entire storyboard as a single narrative line, then animated the transitions between subjects frame by frame in After Effects. The continuous stroke guides the viewer through PMI\u2019s story \u2014 from personal care to corporate vision \u2014 in a hypnotic visual flow. Watercolor touches add emotion without interrupting the line. <a href="/en/motion-graphics">Discover my motion graphics services</a>.',
        resultIt: 'Un video dove il medium \u00E8 il messaggio: la continuit\u00E0 del tratto comunica la continuit\u00E0 della cura. Due minuti senza un solo stacco visivo.',
        resultEn: 'A video where the medium is the message: the continuity of the stroke communicates the continuity of care. Two minutes without a single visual break.',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/pmi-abbiamo-cura-di-te-spot.mp4', title: 'Abbiamo Cura di Te \u2014 spot PMI' },
            {
                type: 'video-loop-gallery', videos: [
                    { url: '/videos/portfolio/pmi-animazione-tratto-profilo.mp4' },
                    { url: '/videos/portfolio/pmi-animazione-tratto-mani.mp4' },
                ], columns: 2
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/pmi-animazione-annaffiatoio.webp', alt: { it: 'Annaffiatoio e piantina \u2014 animazione a tratto continuo PMI', en: 'Watering can and seedling \u2014 continuous line animation PMI' } },
                    { src: '/images/portfolio/pmi-animazione-bambino-fiore.webp', alt: { it: 'Bambino che annusa un fiore \u2014 animazione PMI', en: 'Child smelling a flower \u2014 PMI animation' } },
                ], columns: 2
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/pmi-animazione-famiglia-mela.webp', alt: { it: 'Famiglia con mela \u2014 animazione PMI', en: 'Family with apple \u2014 PMI animation' } },
                    { src: '/images/portfolio/pmi-animazione-albero-tratto.webp', alt: { it: 'Albero con nuvole \u2014 animazione a tratto continuo PMI', en: 'Tree with clouds \u2014 continuous line animation PMI' } },
                ], columns: 2
            },
            { type: 'text', textIt: 'Software: After Effects per l\u2019animazione frame per frame, Illustrator per il design del tratto continuo e degli elementi illustrativi.', textEn: 'Software: After Effects for frame-by-frame animation, Illustrator for continuous line design and illustrative elements.' },
        ],
    },
    {
        slug: 'klinamen-orion',
        titleIt: 'Klinamen \u2014 Orion',
        titleEn: 'Klinamen \u2014 Orion',
        category: 'animation',
        categoryLabel: { it: 'Animazione 3D', en: '3D Animation' },
        client: 'Orion / Luigi Rascaglia',
        year: '2023',
        role: '3D Animator, Motion Designer, Compositing',
        thumbnail: '/images/portfolio/klinamen-orion-sfera-3d-hero.webp',
        thumbnailAlt: { it: 'Animazione 3D Klinamen per Orion Business & Health Complex', en: '3D animation Klinamen for Orion Business & Health Complex' },
        heroImage: '/images/portfolio/klinamen-orion-sfera-3d-hero.webp',
        heroAlt: { it: 'Klinamen \u2014 sfera 3D per Orion Business & Health Complex, art direction Luigi Rascaglia', en: 'Klinamen \u2014 3D sphere for Orion Business & Health Complex, art direction by Luigi Rascaglia' },
        images: [
            { src: '/images/portfolio/klinamen-orion-esplosione-particelle.webp', alt: { it: 'Esplosione particellare 3D \u2014 Klinamen Orion', en: 'Particle explosion 3D \u2014 Klinamen Orion' } },
            { src: '/images/portfolio/klinamen-orion-complesso-notturno.webp', alt: { it: 'Orion Business & Health Complex \u2014 rendering notturno', en: 'Orion Business & Health Complex \u2014 night rendering' } },
        ],
        tools: ['After Effects', 'Element 3D', '3ds Max', 'DaVinci Resolve'],
        briefingIt: 'Video per il racconto della realizzazione di un polo multifunzionale a San Paolo del Brasile per Orion. Art direction di Luigi Rascaglia. Il video non racconta direttamente il progetto architettonico \u2014 racconta la nascita di un nuovo mondo. Progetto realizzato da Roma.',
        briefingEn: 'Video for the story of a multifunctional hub being built in S\u00E3o Paulo, Brazil for Orion. Art direction by Luigi Rascaglia. The video doesn\u2019t directly tell the architectural project\u2019s story \u2014 it tells the birth of a new world. Project developed from Rome.',
        challengeIt: 'Il brief richiedeva un approccio poetico, non didascalico. Il video doveva sembrare raccontare tutt\u2019altro \u2014 un nucleo che esplode, un mondo che nasce \u2014 per poi rivelare il collegamento con il progetto architettonico. La sfida era bilanciare astrazione e messaggio commerciale.',
        challengeEn: 'The brief required a poetic, not literal approach. The video had to seem to tell something entirely different \u2014 a nucleus exploding, a world being born \u2014 before revealing the connection to the architectural project. The challenge was balancing abstraction with commercial message.',
        solutionIt: 'Ho realizzato il video in After Effects con Element 3D e <a href="/animazione-3d">3ds Max</a>: un\u2019esplosione particellare che si trasforma progressivamente nel polo multifunzionale. Il nucleo iniziale \u00E8 pura energia astratta \u2014 particelle, luce, materia in formazione \u2014 che si organizza e prende forma architettonica. Il racconto visivo procede dal caos alla struttura, dal sogno alla realt\u00E0.',
        solutionEn: 'I created the video in After Effects with Element 3D and <a href="/en/3d-animation">3ds Max</a>: a particle explosion that progressively transforms into the multifunctional hub. The initial nucleus is pure abstract energy \u2014 particles, light, matter in formation \u2014 organizing and taking architectural form. The visual narrative proceeds from chaos to structure, from dream to reality.',
        resultIt: 'Un video dove lo spettatore entra nel racconto senza sapere dove lo porter\u00E0 \u2014 e alla fine scopre che quel caos iniziale era la genesi di un progetto architettonico reale: l\u2019Orion Business & Health Complex.',
        resultEn: 'A video where the viewer enters the narrative without knowing where it leads \u2014 and in the end discovers that initial chaos was the genesis of a real architectural project: the Orion Business & Health Complex.',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/klinamen-orion-animazione-3d.mp4', title: 'Klinamen \u2014 Orion Business & Health Complex' },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/klinamen-orion-esplosione-particelle.webp', alt: { it: 'Esplosione particellare \u2014 nascita del nucleo', en: 'Particle explosion \u2014 nucleus birth' } },
                    { src: '/images/portfolio/klinamen-orion-detriti-luce.webp', alt: { it: 'Detriti e luce \u2014 materia in formazione', en: 'Debris and light \u2014 matter forming' } },
                ], columns: 2
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/klinamen-orion-esplosione-closeup.webp', alt: { it: 'Esplosione closeup \u2014 energia astratta', en: 'Explosion closeup \u2014 abstract energy' } },
                    { src: '/images/portfolio/klinamen-orion-citta-notturna-3d.webp', alt: { it: 'Citt\u00E0 notturna 3D \u2014 Orion Complex', en: 'Night city 3D \u2014 Orion Complex' } },
                ], columns: 2
            },
            { type: 'image', src: '/images/portfolio/klinamen-orion-complesso-notturno.webp', alt: { it: 'Orion Business & Health Complex \u2014 rendering finale', en: 'Orion Business & Health Complex \u2014 final rendering' }, fullWidth: true },
            { type: 'text', textIt: 'Software: After Effects con Element 3D per compositing e animazione particellare, 3ds Max per la modellazione architettonica, DaVinci Resolve per il color grading.\n\nArt direction: Luigi Rascaglia.', textEn: 'Software: After Effects with Element 3D for compositing and particle animation, 3ds Max for architectural modeling, DaVinci Resolve for color grading.\n\nArt direction: Luigi Rascaglia.' },
        ],
    },

    // ──────────────────── POST PRODUZIONE / COLOR ────────────────────

    {
        slug: 'pleiadi',
        titleIt: 'Pleiadi',
        titleEn: 'Pleiadi',
        category: 'post',
        categoryLabel: { it: 'Post Produzione', en: 'Post Production' },
        client: 'Marco "Korben" del Bene',
        year: '2019',
        role: 'Regia, Montaggio, Color Grading, VFX',
        thumbnail: '/images/portfolio/pleiadi-videoclip-hero.webp',
        thumbnailAlt: { it: 'Videoclip Pleiadi \u2014 Marco Korben del Bene', en: 'Pleiadi music video \u2014 Marco Korben del Bene' },
        heroImage: '/images/portfolio/pleiadi-videoclip-hero.webp',
        heroAlt: { it: 'Pleiadi \u2014 videoclip musicale, regia e post produzione Piero Perilli', en: 'Pleiadi \u2014 music video, directed and post produced by Piero Perilli' },
        images: [
            { src: '/images/portfolio/pleiadi-cantante-primo-piano.webp', alt: { it: 'Primo piano cantante \u2014 videoclip Pleiadi', en: 'Singer close-up \u2014 Pleiadi music video' } },
            { src: '/images/portfolio/pleiadi-bassista-live.webp', alt: { it: 'Bassista live \u2014 videoclip Pleiadi', en: 'Bassist live \u2014 Pleiadi music video' } },
        ],
        tools: ['DaVinci Resolve', 'After Effects'],
        briefingIt: 'Videoclip musicale per il brano Pleiadi di Marco \u201CKorben\u201D del Bene. Su questo progetto ho avuto il ruolo pi\u00F9 completo: regia, montaggio, color grading e interventi VFX. Progetto realizzato da Roma.',
        briefingEn: 'Music video for the song Pleiadi by Marco \u201CKorben\u201D del Bene. On this project I had the most complete role: directing, editing, color grading and VFX work. Project developed from Rome.',
        challengeIt: 'Gestire l\u2019intero processo creativo \u2014 dalla visione registica alla consegna finale \u2014 mantenendo coerenza tra le scelte di regia, il ritmo del montaggio e la palette cromatica del grading. Tutto doveva servire la musica e l\u2019artista.',
        challengeEn: 'Managing the entire creative process \u2014 from directorial vision to final delivery \u2014 maintaining coherence between directing choices, editing rhythm and grading\u2019s color palette. Everything had to serve the music and the artist.',
        solutionIt: 'Avendo il controllo su regia, <a href="/post-produzione">montaggio e color grading</a>, ho potuto costruire il video come un\u2019unica visione dall\u2019inizio alla fine. Il grading supporta la narrazione emotiva del brano, il montaggio segue il ritmo musicale, e i <a href="/vfx">VFX</a> aggiungono momenti di magia visiva dove la musica lo richiede.',
        solutionEn: 'Having control over directing, <a href="/en/post-production">editing and color grading</a>, I could build the video as a single vision from start to finish. The grading supports the song\u2019s emotional narrative, the editing follows the musical rhythm, and <a href="/en/vfx">VFX</a> add moments of visual magic where the music demands it.',
        resultIt: 'Un videoclip dove ogni elemento tecnico \u00E8 al servizio della musica \u2014 il vantaggio concreto del workflow integrato applicato a un progetto creativo completo.',
        resultEn: 'A music video where every technical element serves the music \u2014 the concrete advantage of an integrated workflow applied to a complete creative project.',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/pleiadi-videoclip-musicale.mp4', title: 'Pleiadi \u2014 Marco \u201CKorben\u201D del Bene' },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/pleiadi-cantante-primo-piano.webp', alt: { it: 'Primo piano cantante \u2014 Pleiadi', en: 'Singer close-up \u2014 Pleiadi' } },
                    { src: '/images/portfolio/pleiadi-fender-jazz-bass.webp', alt: { it: 'Fender Jazz Bass \u2014 Pleiadi', en: 'Fender Jazz Bass \u2014 Pleiadi' } },
                ], columns: 2
            },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/pleiadi-cantante-microfono.webp', alt: { it: 'Cantante al microfono \u2014 Pleiadi', en: 'Singer at microphone \u2014 Pleiadi' } },
                    { src: '/images/portfolio/pleiadi-bassista-live.webp', alt: { it: 'Bassista live \u2014 Pleiadi', en: 'Bassist live \u2014 Pleiadi' } },
                ], columns: 2
            },
            { type: 'text', textIt: 'Software: DaVinci Resolve per montaggio e color grading, After Effects per gli interventi VFX.\n\nArtista: Marco \u201CKorben\u201D del Bene.', textEn: 'Software: DaVinci Resolve for editing and color grading, After Effects for VFX work.\n\nArtist: Marco \u201CKorben\u201D del Bene.' },
        ],
    },
    {
        slug: 'bonus-idrico-acea',
        titleIt: 'Bonus Idrico \u2014 Acea Acqua',
        titleEn: 'Bonus Idrico \u2014 Acea Acqua',
        category: 'motion',
        categoryLabel: { it: 'Motion Graphics', en: 'Motion Graphics' },
        client: 'Acea Acqua',
        year: '2022',
        role: 'Motion Designer, 2.5D Animator',
        thumbnail: '/images/portfolio/acea-acqua-bonus-idrico-hero.webp',
        thumbnailAlt: { it: 'Animazione 2.5D per Acea Acqua \u2014 Bonus Idrico', en: '2.5D animation for Acea Acqua \u2014 Water Bonus' },
        heroImage: '/images/portfolio/acea-acqua-bonus-idrico-hero.webp',
        heroAlt: { it: 'Bonus Idrico Acea Acqua \u2014 animazione 2.5D con goccia mascotte', en: 'Acea Acqua Water Bonus \u2014 2.5D animation with water drop mascot' },
        images: [
            { src: '/images/portfolio/acea-bonus-idrico-nuclei-familiari.webp', alt: { it: 'Nuclei familiari \u2014 animazione Bonus Idrico Acea', en: 'Family households \u2014 Acea Water Bonus animation' } },
            { src: '/images/portfolio/acea-bonus-idrico-nazionale.webp', alt: { it: 'Bonus Idrico Nazionale \u2014 animazione Acea', en: 'National Water Bonus \u2014 Acea animation' } },
        ],
        tools: ['After Effects', 'Illustrator'],
        briefingIt: 'Spot istituzionale per Acea Acqua sulla comunicazione del Bonus Idrico. L\u2019approccio scelto: un\u2019animazione 2.5D con una goccia d\u2019acqua animata come mascotte che racconta e guida lo spettatore attraverso il video. Progetto realizzato da Roma.',
        briefingEn: 'Institutional spot for Acea Acqua on the Water Bonus communication. The chosen approach: a 2.5D animation with an animated water drop mascot that narrates and guides the viewer through the video. Project developed from Rome.',
        challengeIt: 'Trasformare un argomento tecnico-burocratico in un racconto visivo accessibile e piacevole, mantenendo la seriet\u00E0 istituzionale di Acea. La goccia animata doveva avere personalit\u00E0 e espressivit\u00E0 pur restando coerente con il brand.',
        challengeEn: 'Transforming a technical-bureaucratic topic into an accessible and pleasant visual story, while maintaining Acea\u2019s institutional seriousness. The animated drop needed personality and expressiveness while remaining brand-coherent.',
        solutionIt: 'Ho realizzato l\u2019animazione in 2.5D in After Effects \u2014 una tecnica che d\u00E0 alle illustrazioni 2D le sembianze del 3D attraverso profondit\u00E0, ombre e movimenti su pi\u00F9 piani. La goccia d\u2019acqua \u00E8 il personaggio che racconta il video: guida lo spettatore attraverso i passaggi del bonus idrico con <a href="/motion-graphics">transizioni fluide e tipografia animata</a>.',
        solutionEn: 'I created the animation in 2.5D in After Effects \u2014 a technique that gives 2D illustrations a 3D appearance through depth, shadows and multi-plane movements. The water drop is the character narrating the video: it guides the viewer through the water bonus steps with <a href="/en/motion-graphics">fluid transitions and animated typography</a>.',
        resultIt: 'Uno spot dove un tema complesso diventa semplice da capire \u2014 la forza della motion graphics applicata alla comunicazione istituzionale.',
        resultEn: 'A spot where a complex topic becomes simple to understand \u2014 the power of motion graphics applied to institutional communication.',
        contentBlocks: [
            { type: 'video-mp4', url: '/videos/portfolio/acea-bonus-idrico-animazione.mp4', title: 'Bonus Idrico \u2014 Acea Acqua' },
            {
                type: 'gallery', images: [
                    { src: '/images/portfolio/acea-bonus-idrico-nuclei-familiari.webp', alt: { it: 'Nuclei familiari \u2014 Bonus Idrico Acea', en: 'Family households \u2014 Acea Water Bonus' } },
                    { src: '/images/portfolio/acea-bonus-idrico-nazionale.webp', alt: { it: 'Bonus Idrico Nazionale e Integrativo', en: 'National and Supplementary Water Bonus' } },
                ], columns: 2
            },
            { type: 'image', src: '/images/portfolio/acea-acqua-logo-goccia.webp', alt: { it: 'Logo Acea Acqua con goccia mascotte animata', en: 'Acea Acqua logo with animated water drop mascot' }, fullWidth: true },
            { type: 'text', textIt: 'Software: After Effects per l\u2019animazione 2.5D e il compositing, Illustrator per le illustrazioni e il design dei personaggi.\n\nCliente: Acea Acqua.', textEn: 'Software: After Effects for 2.5D animation and compositing, Illustrator for illustrations and character design.\n\nClient: Acea Acqua.' },
        ],
    },
    {
        slug: 'floverr',
        titleIt: `Floverr`,
        titleEn: `Floverr`,
        category: 'vfx',
        categoryLabel: { it: `VFX`, en: `VFX` },
        client: 'Anita Udeep (regista)',
        year: '2023',
        role: 'VFX Supervisor / VFX Artist',
        thumbnail: '/images/portfolio/vfx-floverr-film-thumb.jpg',
        thumbnailAlt: { it: `VFX per il film Floverr`, en: `VFX for the film Floverr` },
        heroImage: '/images/portfolio/vfx-floverr-film-hero.jpg',
        images: [],
        tools: ['After Effects', 'Mocha Pro', '3ds Max', 'Photoshop'],
        briefingIt: `Film diretto da Anita Udeep, costruito interamente su flashback della protagonista visualizzati come un videogioco. Serviva un HUD di gioco completo e ogni tipo di effetto visivo — dal green screen alla pulizia del set.`,
        briefingEn: `Film directed by Anita Udeep, built entirely on the protagonist's flashbacks visualized as a video game. A complete game HUD was needed along with every type of visual effect — from green screen to set cleanup.`,
        challengeIt: `Il film richiedeva una gamma completa di competenze VFX in un singolo progetto: creazione dell'interfaccia HUD del videogioco, compositing green screen, rimozione cavi di sicurezza, pulizia ed estensione set, grafica animata e tracking con inserimento di elementi 3D. Ogni tecnica doveva convivere nello stesso linguaggio visivo coerente.`,
        challengeEn: `The film required a complete range of VFX skills in a single project: video game HUD interface creation, green screen compositing, safety wire removal, set cleanup and extension, animated graphics and tracking with 3D element insertion. Every technique had to coexist within the same coherent visual language.`,
        solutionIt: `Ho progettato e animato l'HUD del videogioco da zero, integrandolo nelle scene con <a href="/motion-graphics">motion graphics</a> e tracking. Per le scene dal vivo: compositing green screen, <a href="/vfx">rimozione cavi</a>, estensione digitale degli ambienti e inserimento di elementi CG tracciati in camera. Un progetto che ha richiesto l'intero spettro del mio <a href="/post-produzione">workflow integrato</a>.`,
        solutionEn: `I designed and animated the video game HUD from scratch, integrating it into scenes with <a href="/en/motion-graphics">motion graphics</a> and tracking. For live-action scenes: green screen compositing, <a href="/en/vfx">wire removal</a>, digital set extension and insertion of camera-tracked CG elements. A project that required the full spectrum of my <a href="/en/post-production">integrated workflow</a>.`,
        resultIt: `Un film dove il confine tra mondo reale e videogioco si dissolve in modo credibile — con effetti visivi che spaziano dal fotorealistico alla grafica stilizzata, tutti integrati in un unico linguaggio visivo.`,
        resultEn: `A film where the boundary between real world and video game dissolves believably — with visual effects spanning from photorealistic to stylized graphics, all integrated into a single visual language.`,
    },
    {
        slug: 'non-tutto-e-perduto',
        titleIt: `Non Tutto è Perduto`,
        titleEn: `Non Tutto è Perduto`,
        category: 'post',
        categoryLabel: { it: `Post Produzione`, en: `Post Production` },
        client: 'Produzione indipendente',
        year: '2023',
        role: 'Editor / Colorist',
        thumbnail: '/images/portfolio/post-produzione-non-tutto-e-perduto-thumb.jpg',
        thumbnailAlt: { it: `Post produzione film Non Tutto è Perduto`, en: `Post production for Non Tutto è Perduto film` },
        heroImage: '/images/portfolio/post-produzione-non-tutto-e-perduto-hero.jpg',
        images: [],
        tools: ['DaVinci Resolve', 'Premiere Pro'],
        briefingIt: `Film indipendente che richiedeva montaggio completo e color grading cinematografico.`,
        briefingEn: `Independent film requiring complete editing and cinematic color grading.`,
        challengeIt: `Costruire il ritmo narrativo di un lungometraggio e definirne l'identità visiva attraverso il colore — un lavoro che richiede resistenza, visione d'insieme e attenzione ossessiva alla coerenza scena per scena.`,
        challengeEn: `Building the narrative rhythm of a feature film and defining its visual identity through color — work that requires endurance, overall vision and obsessive attention to scene-by-scene coherence.`,
        solutionIt: `Ho lavorato al <a href="/post-produzione">montaggio</a> costruendo la struttura narrativa in stretta collaborazione con il regista, poi ho applicato il color grading in DaVinci Resolve — definendo una palette cinematografica coerente che supporta il tono emotivo di ogni atto del film.`,
        solutionEn: `I worked on <a href="/en/post-production">editing</a> building the narrative structure in close collaboration with the director, then applied color grading in DaVinci Resolve — defining a coherent cinematic palette that supports the emotional tone of each act of the film.`,
        resultIt: `Un film dove montaggio e colore raccontano quanto le immagini — ogni taglio e ogni sfumatura cromatica è una scelta narrativa.`,
        resultEn: `A film where editing and color tell as much as the images — every cut and every chromatic nuance is a narrative choice.`,
    },

    // ──────────────────── BRAND / ADVERTISING ────────────────────

    {
        slug: 'gucci-kids',
        titleIt: `Gucci Kids`,
        titleEn: `Gucci Kids`,
        category: 'post',
        categoryLabel: { it: `Post Produzione`, en: `Post Production` },
        client: 'Gucci',
        year: '2021',
        role: 'Compositor / Editor / Colorist',
        thumbnail: '/images/portfolio/post-produzione-gucci-kids-thumb.jpg',
        thumbnailAlt: { it: `Post produzione video Gucci Kids`, en: `Post production Gucci Kids video` },
        heroImage: '/images/portfolio/post-produzione-gucci-kids-hero.jpg',
        images: [],
        tools: ['After Effects', 'DaVinci Resolve', 'Premiere Pro'],
        briefingIt: `Video per la linea Gucci Kids, girato interamente in green screen. Il mio ruolo: compositing completo delle scene, montaggio e color grading.`,
        briefingEn: `Video for the Gucci Kids line, shot entirely on green screen. My role: complete scene compositing, editing and color grading.`,
        challengeIt: `Lavorare su un brand del calibro di Gucci significa zero margine di errore. Il compositing green screen doveva essere impeccabile, il montaggio doveva riflettere l'estetica del brand e il color grading doveva essere coerente con l'identità visiva Gucci.`,
        challengeEn: `Working on a brand of Gucci's caliber means zero margin for error. The green screen compositing had to be impeccable, the editing had to reflect the brand's aesthetic and the color grading had to be consistent with Gucci's visual identity.`,
        solutionIt: `<a href="/vfx">Compositing green screen</a> in After Effects con attenzione maniacale ai bordi, ai capelli e ai riflessi — elementi critici quando il soggetto sono bambini in movimento. <a href="/post-produzione">Montaggio e color grading</a> in DaVinci Resolve, con una palette che rispetta il DNA visivo di Gucci.`,
        solutionEn: `<a href="/en/vfx">Green screen compositing</a> in After Effects with obsessive attention to edges, hair and reflections — critical elements when the subjects are children in motion. <a href="/en/post-production">Editing and color grading</a> in DaVinci Resolve, with a palette respecting Gucci's visual DNA.`,
        resultIt: `Un video che soddisfa gli standard qualitativi di uno dei brand più esigenti al mondo — dove il compositing è invisibile e l'estetica parla il linguaggio Gucci.`,
        resultEn: `A video meeting the quality standards of one of the world's most demanding brands — where compositing is invisible and the aesthetic speaks the Gucci language.`,
    },
    {
        slug: 'save-the-children',
        titleIt: `Save the Children`,
        titleEn: `Save the Children`,
        category: 'post',
        categoryLabel: { it: `Post Produzione`, en: `Post Production` },
        client: 'Save the Children',
        year: '2022',
        role: 'Editor / Colorist',
        thumbnail: '/images/portfolio/post-produzione-save-the-children-thumb.jpg',
        thumbnailAlt: { it: `Post produzione spot Save the Children`, en: `Post production Save the Children spot` },
        heroImage: '/images/portfolio/post-produzione-save-the-children-hero.jpg',
        images: [],
        tools: ['DaVinci Resolve', 'Premiere Pro'],
        briefingIt: `Spot per Save the Children. Montaggio e color grading per un video che doveva emozionare e spingere all'azione — ogni frame al servizio del messaggio.`,
        briefingEn: `Spot for Save the Children. Editing and color grading for a video that had to move and push to action — every frame serving the message.`,
        challengeIt: `Uno spot sociale deve trovare il bilanciamento tra impatto emotivo e rispetto. Il montaggio non può manipolare — deve far sentire. Il color grading deve supportare l'emozione senza risultare artificioso.`,
        challengeEn: `A social spot must find the balance between emotional impact and respect. The editing can't manipulate — it must make you feel. The color grading must support the emotion without feeling artificial.`,
        solutionIt: `<a href="/post-produzione">Montaggio e color grading</a> focalizzati sull'essenziale: ritmo che costruisce progressivamente l'emozione, palette cromatica naturale che non distrae dal contenuto umano. Nessun effetto — solo le immagini, nel giusto ordine, con il giusto colore.`,
        solutionEn: `<a href="/en/post-production">Editing and color grading</a> focused on the essential: rhythm that progressively builds emotion, natural color palette that doesn't distract from the human content. No effects — just images, in the right order, with the right color.`,
        resultIt: `Uno spot che fa il suo lavoro: emoziona, informa e spinge all'azione. Quando la post-produzione è invisibile, il messaggio arriva diretto.`,
        resultEn: `A spot that does its job: moves, informs and drives to action. When post-production is invisible, the message arrives directly.`,
    },
    {
        slug: 'babingtons',
        titleIt: `Babingtons`,
        titleEn: `Babingtons`,
        category: 'motion',
        categoryLabel: { it: `Motion Graphics`, en: `Motion Graphics` },
        client: 'Babingtons',
        year: '2021',
        role: 'Motion Designer',
        thumbnail: '/images/portfolio/motion-graphics-babingtons-thumb.jpg',
        thumbnailAlt: { it: `Motion graphics per Babingtons`, en: `Motion graphics for Babingtons` },
        heroImage: '/images/portfolio/motion-graphics-babingtons-hero.jpg',
        images: [],
        tools: ['After Effects', 'Photoshop'],
        briefingIt: `Video in motion graphics per Babingtons, la storica sala da tè di Piazza di Spagna a Roma. Comunicare l'eleganza e la tradizione del brand attraverso un linguaggio visivo contemporaneo.`,
        briefingEn: `Motion graphics video for Babingtons, the historic tearoom in Piazza di Spagna, Rome. Communicating the brand's elegance and tradition through a contemporary visual language.`,
        challengeIt: `Bilanciare la tradizione centenaria del brand con un linguaggio visivo moderno e dinamico, senza perdere l'eleganza che contraddistingue Babingtons.`,
        challengeEn: `Balancing the brand's century-old tradition with a modern, dynamic visual language, without losing the elegance that distinguishes Babingtons.`,
        solutionIt: `Ho sviluppato <a href="/motion-graphics">motion graphics</a> che fondono elementi classici del brand — tipografia elegante, palette raffinata — con transizioni e animazioni contemporanee. Il ritmo è misurato e sofisticato, come l'esperienza Babingtons.`,
        solutionEn: `I developed <a href="/en/motion-graphics">motion graphics</a> blending classic brand elements — elegant typography, refined palette — with contemporary transitions and animations. The rhythm is measured and sophisticated, like the Babingtons experience.`,
        resultIt: `Un video che parla il linguaggio di un brand storico romano con gli strumenti visivi del presente.`,
        resultEn: `A video that speaks the language of a historic Roman brand with the visual tools of the present.`,
    },
    {
        slug: 'vetrya',
        titleIt: `Vetrya`,
        titleEn: `Vetrya`,
        category: 'post',
        categoryLabel: { it: `Post Produzione`, en: `Post Production` },
        client: 'Vetrya',
        year: '2021',
        role: 'Editor / Colorist',
        thumbnail: '/images/portfolio/post-produzione-vetrya-thumb.jpg',
        thumbnailAlt: { it: `Post produzione video Vetrya`, en: `Post production Vetrya video` },
        heroImage: '/images/portfolio/post-produzione-vetrya-hero.jpg',
        images: [],
        tools: ['DaVinci Resolve', 'Premiere Pro'],
        briefingIt: `Video corporate per Vetrya, azienda tecnologica italiana. Montaggio e color grading per un racconto aziendale che doveva comunicare innovazione senza retorica.`,
        briefingEn: `Corporate video for Vetrya, an Italian tech company. Editing and color grading for a corporate story that had to communicate innovation without rhetoric.`,
        challengeIt: `I video corporate rischiano sempre di essere generici. La sfida: costruire un racconto con ritmo, personalità e un grading che distingua Vetrya dalla massa di video aziendali tutti uguali.`,
        challengeEn: `Corporate videos always risk being generic. The challenge: building a story with rhythm, personality and a grade that distinguishes Vetrya from the mass of identical corporate videos.`,
        solutionIt: `<a href="/post-produzione">Montaggio</a> con ritmo dinamico e tagli precisi che mantengono alta l'attenzione. Color grading in DaVinci Resolve con toni che comunicano tecnologia e visione — senza cadere nel blu generico del "corporate tech".`,
        solutionEn: `<a href="/en/post-production">Editing</a> with dynamic rhythm and precise cuts that maintain attention. Color grading in DaVinci Resolve with tones communicating technology and vision — without falling into the generic blue of "corporate tech."`,
        resultIt: `Un video corporate che non sembra un video corporate — perché ha personalità, ritmo e un'identità visiva propria.`,
        resultEn: `A corporate video that doesn't feel like a corporate video — because it has personality, rhythm and its own visual identity.`,
    },

    // ──────────────────── AI VIDEO ────────────────────


];

export const categories = [
    { key: 'all', labelIt: 'Tutti', labelEn: 'All' },
    { key: 'vfx', labelIt: 'VFX', labelEn: 'VFX' },
    { key: 'motion', labelIt: 'Motion Graphics', labelEn: 'Motion Graphics' },
    { key: 'animation', labelIt: 'Animazione', labelEn: 'Animation' },
    { key: 'post', labelIt: 'Post Produzione', labelEn: 'Post Production' },
    { key: 'ai', labelIt: 'AI Video', labelEn: 'AI Video' },
] as const;

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

/**
 * Get related projects: same category first, then others.
 * Excludes the current project. Returns up to `count` projects.
 */
export function getRelatedProjects(currentSlug: string, count: number = 3): Project[] {
    const current = getProject(currentSlug);
    if (!current) return projects.filter(p => p.slug !== currentSlug).slice(0, count);

    const sameCategory = projects.filter(p => p.slug !== currentSlug && p.category === current.category);
    const otherCategory = projects.filter(p => p.slug !== currentSlug && p.category !== current.category);

    return [...sameCategory, ...otherCategory].slice(0, count);
}