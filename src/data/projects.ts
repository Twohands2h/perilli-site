export type ProjectCategory = 'vfx' | 'motion' | 'animation' | 'post' | 'ai';

// Content blocks for rich project pages (Behance-style)
export type ContentBlock =
    | { type: 'text'; textIt: string; textEn: string }
    | { type: 'image'; src: string; alt: { it: string; en: string }; fullWidth?: boolean }
    | { type: 'gallery'; images: { src: string; alt: { it: string; en: string } }[]; columns?: 2 | 3 | 4 }
    | { type: 'video'; embedId: string; platform: 'youtube' | 'vimeo'; title?: string }
    | { type: 'video-mp4'; url: string; poster?: string; title?: string }
    | { type: 'video-loop'; url: string; poster?: string; title?: string };

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

    {
        slug: 'black-hole-tale',
        titleIt: `Black Hole Tale`,
        titleEn: `Black Hole Tale`,
        category: 'animation',
        categoryLabel: { it: `Animazione 2D`, en: `2D Animation` },
        client: 'Andrea Casta',
        year: '2023',
        role: 'Animator / Editor',
        thumbnail: '/images/portfolio/animazione-2d-black-hole-tale-thumb.jpg',
        thumbnailAlt: { it: `Animazione 2D per Black Hole Tale di Andrea Casta`, en: `2D animation for Andrea Casta's Black Hole Tale` },
        heroImage: '/images/portfolio/animazione-2d-black-hole-tale-hero.jpg',
        images: [],
        tools: ['After Effects', 'Photoshop', 'DaVinci Resolve'],
        briefingIt: `Video musicale per il violinista Andrea Casta. Il concept: dare vita alle illustrazioni di un artista attraverso l'animazione 2D, montandole insieme a riprese dal vero del musicista.`,
        briefingEn: `Music video for violinist Andrea Casta. The concept: bring an artist's illustrations to life through 2D animation, editing them together with live-action footage of the musician.`,
        challengeIt: `Animare illustrazioni statiche mantenendo lo stile originale dell'illustratore, creando transizioni fluide tra il mondo animato e le riprese dal vero. Il ritmo dell'animazione doveva seguire la musica senza mai sembrare un semplice slideshow.`,
        challengeEn: `Animating static illustrations while maintaining the illustrator's original style, creating fluid transitions between the animated world and live-action footage. The animation rhythm had to follow the music without ever feeling like a simple slideshow.`,
        solutionIt: `Ho separato ogni illustrazione in layer animabili, creando movimenti di camera, parallasse e transizioni organiche che danno profondità alle immagini piatte. Il <a href="/motion-graphics">montaggio</a> alterna le sequenze animate alle riprese dal vero, costruendo un flusso narrativo guidato dalla musica.`,
        solutionEn: `I separated each illustration into animatable layers, creating camera movements, parallax and organic transitions that give depth to flat images. The <a href="/en/motion-graphics">editing</a> alternates animated sequences with live-action footage, building a narrative flow driven by the music.`,
        resultIt: `Un video musicale che fonde due mondi visivi in un racconto unico — dove le illustrazioni prendono vita e dialogano con la performance dal vivo.`,
        resultEn: `A music video that merges two visual worlds into a unique narrative — where illustrations come to life and dialogue with live performance.`,
    },
    {
        slug: 'stalking-spot',
        titleIt: `Stalking`,
        titleEn: `Stalking`,
        category: 'animation',
        categoryLabel: { it: `Animazione 3D`, en: `3D Animation` },
        client: 'Spot di sensibilizzazione',
        year: '2022',
        role: '3D Animator / Compositor',
        thumbnail: '/images/portfolio/animazione-3d-stalking-spot-thumb.jpg',
        thumbnailAlt: { it: `Animazione 3D per spot Stalking`, en: `3D animation for Stalking PSA spot` },
        heroImage: '/images/portfolio/animazione-3d-stalking-spot-hero.jpg',
        images: [],
        tools: ['3ds Max', 'After Effects', 'DaVinci Resolve'],
        briefingIt: `Spot di sensibilizzazione sul tema dello stalking. Il concept creativo: una gabbia 3D che imprigiona la vittima, visualizzazione metaforica della condizione di chi subisce persecuzione.`,
        briefingEn: `Awareness spot on the subject of stalking. The creative concept: a 3D cage imprisoning the victim, a metaphorical visualization of the condition of those who suffer persecution.`,
        challengeIt: `Integrare un elemento 3D — la gabbia — in scene girate in green screen, con movimenti di camera e attori in azione. La gabbia doveva sembrare fisicamente presente nella scena, con ombre, riflessi e interazione con la luce ambiente.`,
        challengeEn: `Integrating a 3D element — the cage — into green screen scenes, with camera movements and actors in action. The cage had to feel physically present in the scene, with shadows, reflections and interaction with ambient light.`,
        solutionIt: `Ho modellato e animato la gabbia in 3ds Max, matchando la camera del girato per un inserimento preciso. Compositing in After Effects con <a href="/vfx">green screen keying</a>, ombre proiettate sugli attori e correzione colore per integrare il 3D con il girato reale.`,
        solutionEn: `I modeled and animated the cage in 3ds Max, matching the footage camera for precise insertion. Compositing in After Effects with <a href="/en/vfx">green screen keying</a>, shadows projected onto actors and color correction to integrate 3D with real footage.`,
        resultIt: `Uno spot dove la metafora visiva della gabbia funziona a livello emotivo — lo spettatore sente la costrizione senza bisogno di parole.`,
        resultEn: `A spot where the visual metaphor of the cage works on an emotional level — the viewer feels the constraint without needing words.`,
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
            { type: 'video-mp4', url: '/videos/portfolio/wonder-alba-animazione-voce-avatar.mp4', title: 'Test animazione con voce \u2014 Wonder Alba parla' },
            { type: 'image', src: '/images/portfolio/wonder-alba-avatar-conversazionale-ai.webp', alt: { it: 'Avatar conversazionale AI \u2014 parla con Wonder Alba', en: 'AI conversational avatar \u2014 talk to Wonder Alba' }, fullWidth: true },
            { type: 'text', textIt: 'La chicca del progetto: Wonder Alba \u00E8 un avatar AI conversazionale. Ascolta, comprende e risponde vocalmente seguendo le linee guida aziendali di Medlogix. Integrazione con Convai e NVIDIA per l\u2019intelligenza artificiale conversazionale in tempo reale.\n\nSoftware: Character Creator per il personaggio, 3ds Max per modellazione e animazione, Unreal Engine 5 per il rendering in tempo reale, Convai e NVIDIA per l\u2019AI conversazionale.\n\n<a href="https://connector.eagle3dstreaming.com/v5/Piero/WonderAlbaDesktop/mic" target="_blank" rel="noopener">Prova la demo: parla con Wonder Alba</a>', textEn: 'The project highlight: Wonder Alba is a conversational AI avatar. She listens, understands and responds vocally following Medlogix corporate guidelines. Integration with Convai and NVIDIA for real-time conversational artificial intelligence.\n\nSoftware: Character Creator for the character, 3ds Max for modeling and animation, Unreal Engine 5 for real-time rendering, Convai and NVIDIA for conversational AI.\n\n<a href="https://connector.eagle3dstreaming.com/v5/Piero/WonderAlbaDesktop/mic" target="_blank" rel="noopener">Try the demo: talk to Wonder Alba</a>' },
        ],
    },
    {
        slug: 'jor',
        titleIt: `JOR`,
        titleEn: `JOR`,
        category: 'animation',
        categoryLabel: { it: `Animazione 3D`, en: `3D Animation` },
        client: 'JOR (gioielli)',
        year: '2024',
        role: '3D Artist / Animator',
        thumbnail: '/images/portfolio/animazione-3d-jor-gioielli-thumb.jpg',
        thumbnailAlt: { it: `Animazione 3D per JOR gioielli`, en: `3D animation for JOR jewelry` },
        heroImage: '/images/portfolio/animazione-3d-jor-gioielli-hero.jpg',
        images: [],
        tools: ['Unreal Engine 5', '3ds Max', 'DaVinci Resolve'],
        briefingIt: `Spot per il brand di gioielli JOR. Il concept: un mondo onirico dove i gioielli sono protagonisti assoluti, presentati in un ambiente surreale che ne esalta la preziosità.`,
        briefingEn: `Commercial for jewelry brand JOR. The concept: a dreamlike world where jewelry takes center stage, presented in a surreal environment that enhances its preciousness.`,
        challengeIt: `Costruire un intero mondo 3D fotorealistico e onirico in Unreal Engine, dove ogni dettaglio — luce, materiali, riflessi — doveva comunicare lusso e artigianalità. I gioielli dovevano essere protagonisti senza sembrare un catalogo.`,
        challengeEn: `Building an entire photorealistic, dreamlike 3D world in Unreal Engine, where every detail — light, materials, reflections — had to communicate luxury and craftsmanship. The jewelry had to be the protagonist without feeling like a catalog.`,
        solutionIt: `Ho realizzato in Unreal Engine 5 il mondo onirico dello spot — ambienti surreali con illuminazione cinematografica, materiali fisicamente accurati per i gioielli (metalli, pietre, riflessi) e movimenti di camera che guidano lo sguardo. La <a href="/animazione-3d">modellazione 3D</a> dei gioielli è stata fatta dai disegni tecnici originali per garantire fedeltà assoluta al prodotto reale.`,
        solutionEn: `I built the spot's dreamlike world in Unreal Engine 5 — surreal environments with cinematic lighting, physically accurate materials for the jewelry (metals, stones, reflections) and camera movements that guide the viewer's eye. <a href="/en/3d-animation">3D modeling</a> of the jewelry was done from original technical drawings to guarantee absolute fidelity to the real product.`,
        resultIt: `Uno spot che presenta i gioielli JOR come oggetti da desiderare — immersi in un mondo che non esiste ma che sembra tangibile.`,
        resultEn: `A commercial that presents JOR jewelry as objects of desire — immersed in a world that doesn't exist but feels tangible.`,
    },

    // ──────────────────── MOTION GRAPHICS ────────────────────

    {
        slug: 'om-olivia-mariotti',
        titleIt: `OM — Olivia Mariotti`,
        titleEn: `OM — Olivia Mariotti`,
        category: 'motion',
        categoryLabel: { it: `Motion Graphics`, en: `Motion Graphics` },
        client: 'Olivia Mariotti',
        year: '2023',
        role: 'Motion Designer',
        thumbnail: '/images/portfolio/motion-graphics-om-olivia-mariotti-thumb.jpg',
        thumbnailAlt: { it: `Motion graphics per OM di Olivia Mariotti`, en: `Motion graphics for OM by Olivia Mariotti` },
        heroImage: '/images/portfolio/motion-graphics-om-olivia-mariotti-hero.jpg',
        images: [],
        tools: ['After Effects', 'Photoshop', 'DaVinci Resolve'],
        briefingIt: `Breve video di presentazione per il brand OM di Olivia Mariotti. L'obiettivo: comunicare l'identità del marchio in modo visivo, elegante e immediato.`,
        briefingEn: `Short presentation video for Olivia Mariotti's OM brand. The goal: communicate the brand identity in a visual, elegant and immediate way.`,
        challengeIt: `Creare un video breve che catturi l'essenza del brand partendo da immagini dal vero, arricchendole con motion graphics che aggiungano dinamismo senza sovrastare il contenuto fotografico.`,
        challengeEn: `Creating a short video that captures the brand's essence starting from live-action images, enriching them with motion graphics that add dynamism without overpowering the photographic content.`,
        solutionIt: `Ho sviluppato una soluzione di <a href="/motion-graphics">motion graphics</a> applicata direttamente sulle immagini dal vero — tipografia animata, transizioni grafiche e ritmo visivo che trasformano materiale statico in un racconto dinamico del brand.`,
        solutionEn: `I developed a <a href="/en/motion-graphics">motion graphics</a> solution applied directly onto live-action images — animated typography, graphic transitions and visual rhythm that transform static material into a dynamic brand narrative.`,
        resultIt: `Un video di presentazione che comunica l'identità del brand in pochi secondi — perfetto per social media e sito web.`,
        resultEn: `A presentation video that communicates the brand's identity in seconds — perfect for social media and website.`,
    },
    {
        slug: 'pmi',
        titleIt: `Abbiamo Cura di Te — PMI`,
        titleEn: `Abbiamo Cura di Te — PMI`,
        category: 'motion',
        categoryLabel: { it: `Motion Graphics`, en: `Motion Graphics` },
        client: 'PMI',
        year: '2022',
        role: 'Motion Designer / Animator',
        thumbnail: '/images/portfolio/motion-graphics-pmi-thumb.jpg',
        thumbnailAlt: { it: `Motion graphics per PMI - Abbiamo Cura di Te`, en: `Motion graphics for PMI - We Take Care of You` },
        heroImage: '/images/portfolio/motion-graphics-pmi-hero.jpg',
        images: [],
        tools: ['After Effects', 'Illustrator'],
        briefingIt: `Video animato per PMI. Il concept: un unico tratto continuo che disegna una storia di due minuti, raccontando la missione e i valori di PMI attraverso un'animazione fluida e ininterrotta.`,
        briefingEn: `Animated video for PMI. The concept: a single continuous line that draws a two-minute story, telling PMI's mission and values through a fluid, uninterrupted animation.`,
        challengeIt: `Realizzare un'animazione dove un unico tratto si trasforma continuamente per due minuti senza interruzioni — ogni transizione doveva essere naturale, ogni elemento doveva nascere dal precedente. Zero tagli, zero stacchi.`,
        challengeEn: `Creating an animation where a single stroke continuously transforms for two minutes without breaks — every transition had to be natural, every element had to be born from the previous one. Zero cuts, zero breaks.`,
        solutionIt: `Ho progettato l'intero storyboard come un'unica linea narrativa, poi animato in After Effects frame per frame le transizioni tra un soggetto e l'altro. Il tratto continuo guida lo spettatore attraverso la storia di PMI — dalla cura della persona alla visione aziendale — in un flusso visivo ipnotico.`,
        solutionEn: `I designed the entire storyboard as a single narrative line, then animated the transitions between subjects frame by frame in After Effects. The continuous stroke guides the viewer through PMI's story — from personal care to corporate vision — in a hypnotic visual flow.`,
        resultIt: `Un video dove il medium è il messaggio: la continuità del tratto comunica la continuità della cura. Due minuti senza un solo stacco visivo.`,
        resultEn: `A video where the medium is the message: the continuity of the stroke communicates the continuity of care. Two minutes without a single visual break.`,
    },
    {
        slug: 'klinamen-orion',
        titleIt: `Klinamen — Orion`,
        titleEn: `Klinamen — Orion`,
        category: 'animation',
        categoryLabel: { it: `Animazione 3D`, en: `3D Animation` },
        client: 'Orion',
        year: '2023',
        role: '3D Animator / Motion Designer',
        thumbnail: '/images/portfolio/animazione-3d-klinamen-orion-thumb.jpg',
        thumbnailAlt: { it: `Animazione 3D per Klinamen di Orion`, en: `3D animation for Klinamen by Orion` },
        heroImage: '/images/portfolio/animazione-3d-klinamen-orion-hero.jpg',
        images: [],
        tools: ['3ds Max', 'tyFlow', 'After Effects', 'DaVinci Resolve'],
        briefingIt: `Video per il racconto della realizzazione di un polo multifunzionale a San Paolo del Brasile per Orion. Ma il video non racconta direttamente il progetto architettonico — racconta la nascita di un nuovo mondo.`,
        briefingEn: `Video for the story of a multifunctional hub being built in São Paulo, Brazil for Orion. But the video doesn't directly tell the architectural project's story — it tells the birth of a new world.`,
        challengeIt: `Il brief richiedeva un approccio poetico, non didascalico. Il video doveva sembrare raccontare tutt'altro — un nucleo che esplode, un mondo che nasce — per poi rivelare il collegamento con il progetto architettonico. La sfida era bilanciare astrazione e messaggio commerciale.`,
        challengeEn: `The brief required a poetic, not literal approach. The video had to seem to tell something entirely different — a nucleus exploding, a world being born — before revealing the connection to the architectural project. The challenge was balancing abstraction with commercial message.`,
        solutionIt: `Ho realizzato in <a href="/animazione-3d">3ds Max con tyFlow</a> un'esplosione particellare che si trasforma progressivamente nel polo multifunzionale. Il nucleo iniziale è pura energia astratta — particelle, luce, materia in formazione — che si organizza e prende forma architettonica. Il racconto visivo procede dal caos alla struttura, dal sogno alla realtà.`,
        solutionEn: `I created in <a href="/en/3d-animation">3ds Max with tyFlow</a> a particle explosion that progressively transforms into the multifunctional hub. The initial nucleus is pure abstract energy — particles, light, matter in formation — organizing and taking architectural form. The visual narrative proceeds from chaos to structure, from dream to reality.`,
        resultIt: `Un video dove lo spettatore entra pensando di guardare un'opera astratta e esce avendo visto nascere un progetto reale — il racconto più efficace possibile per un progetto architettonico visionario.`,
        resultEn: `A video where the viewer enters thinking they're watching an abstract piece and leaves having seen a real project being born — the most effective narrative possible for a visionary architectural project.`,
    },

    // ──────────────────── POST PRODUZIONE / COLOR ────────────────────

    {
        slug: 'pleiadi',
        titleIt: `Pleiadi — Sherol Dos Santos`,
        titleEn: `Pleiadi — Sherol Dos Santos`,
        category: 'post',
        categoryLabel: { it: `Post Produzione`, en: `Post Production` },
        client: 'Sherol Dos Santos',
        year: '2024',
        role: 'Regista / Editor / Colorist / VFX',
        thumbnail: '/images/portfolio/post-produzione-pleiadi-sherol-dos-santos-thumb.jpg',
        thumbnailAlt: { it: `Post produzione video musicale Pleiadi`, en: `Post production for Pleiadi music video` },
        heroImage: '/images/portfolio/post-produzione-pleiadi-sherol-dos-santos-hero.jpg',
        images: [],
        tools: ['DaVinci Resolve', 'After Effects'],
        briefingIt: `Video musicale per Sherol Dos Santos. Su questo progetto ho avuto il ruolo più completo: regia, montaggio, color grading e piccoli interventi VFX.`,
        briefingEn: `Music video for Sherol Dos Santos. On this project I had the most complete role: directing, editing, color grading and small VFX interventions.`,
        challengeIt: `Gestire l'intero processo creativo — dalla visione registica alla consegna finale — mantenendo coerenza tra le scelte di regia, il ritmo del montaggio e la palette cromatica del grading. Tutto doveva servire la musica e l'artista.`,
        challengeEn: `Managing the entire creative process — from directorial vision to final delivery — maintaining coherence between directing choices, editing rhythm and grading's color palette. Everything had to serve the music and the artist.`,
        solutionIt: `Avendo il controllo su regia, <a href="/post-produzione">montaggio e color grading</a>, ho potuto costruire il video come un'unica visione dall'inizio alla fine. Il grading supporta la narrazione emotiva del brano, il montaggio segue il ritmo musicale, e i piccoli <a href="/vfx">interventi VFX</a> aggiungono momenti di magia visiva dove la musica lo richiede.`,
        solutionEn: `Having control over directing, <a href="/en/post-production">editing and color grading</a>, I could build the video as a single vision from start to finish. The grading supports the song's emotional narrative, the editing follows the musical rhythm, and small <a href="/en/vfx">VFX touches</a> add moments of visual magic where the music demands it.`,
        resultIt: `Un video musicale dove ogni elemento tecnico è al servizio della musica — il vantaggio concreto del workflow integrato applicato a un progetto creativo completo.`,
        resultEn: `A music video where every technical element serves the music — the concrete advantage of the integrated workflow applied to a complete creative project.`,
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
        slug: 'bonus-idrico-acea',
        titleIt: `Bonus Idrico — Acea`,
        titleEn: `Bonus Idrico — Acea`,
        category: 'motion',
        categoryLabel: { it: `Motion Graphics`, en: `Motion Graphics` },
        client: 'Acea',
        year: '2022',
        role: 'Motion Designer / 2D Animator',
        thumbnail: '/images/portfolio/motion-graphics-bonus-idrico-acea-thumb.jpg',
        thumbnailAlt: { it: `Animazione 2D per spot Bonus Idrico Acea`, en: `2D animation for Acea Bonus Idrico spot` },
        heroImage: '/images/portfolio/motion-graphics-bonus-idrico-acea-hero.jpg',
        images: [],
        tools: ['After Effects', 'Illustrator'],
        briefingIt: `Spot istituzionale per Acea sulla comunicazione del Bonus Idrico. L'approccio scelto: animazione 2D che spiega in modo chiaro e coinvolgente un tema burocratico.`,
        briefingEn: `Institutional spot for Acea on the Water Bonus communication. The chosen approach: 2D animation that explains a bureaucratic topic in a clear and engaging way.`,
        challengeIt: `Trasformare un argomento tecnico-burocratico in un racconto visivo accessibile e piacevole, mantenendo la serietà istituzionale di Acea.`,
        challengeEn: `Transforming a technical-bureaucratic topic into an accessible and pleasant visual story, while maintaining Acea's institutional seriousness.`,
        solutionIt: `Ho realizzato un'<a href="/motion-graphics">animazione 2D</a> con uno stile grafico pulito e istituzionale — illustrazioni in linea con il brand Acea, transizioni fluide e tipografia animata che guida lo spettatore attraverso i passaggi del bonus idrico. Il risultato è stato un video molto efficace nella comunicazione del messaggio.`,
        solutionEn: `I created a <a href="/en/motion-graphics">2D animation</a> with a clean, institutional graphic style — illustrations aligned with the Acea brand, fluid transitions and animated typography guiding the viewer through the water bonus steps. The result was a highly effective video in communicating the message.`,
        resultIt: `Uno spot dove un tema complesso diventa semplice da capire — la forza della motion graphics applicata alla comunicazione istituzionale.`,
        resultEn: `A spot where a complex topic becomes simple to understand — the power of motion graphics applied to institutional communication.`,
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

    {
        slug: 'roche-jingle-ai',
        titleIt: `Roche — Jingle AI Milano Cortina`,
        titleEn: `Roche — AI Jingle Milano Cortina`,
        category: 'ai',
        categoryLabel: { it: `AI Video`, en: `AI Video` },
        client: 'Roche',
        year: '2025',
        role: 'AI Video Producer / Editor',
        thumbnail: '/images/portfolio/ai-video-roche-jingle-thumb.jpg',
        thumbnailAlt: { it: `AI video production per Roche`, en: `AI video production for Roche` },
        heroImage: '/images/portfolio/ai-video-roche-jingle-hero.jpg',
        images: [],
        tools: ['Runway', 'Kling AI', 'After Effects', 'DaVinci Resolve'],
        briefingIt: `Realizzazione di un jingle video per i dipendenti Roche, in stile Milano Cortina / Olimpiadi. Il materiale di partenza: solo foto in bassa qualità dei dipendenti. Il budget: minimo. L'aspettativa: un video divertente e coinvolgente.`,
        briefingEn: `Creation of a video jingle for Roche employees, in Milano Cortina / Olympics style. The starting material: only low-quality photos of employees. The budget: minimal. The expectation: a fun, engaging video.`,
        challengeIt: `Trasformare foto sgranate e in bassa risoluzione in video dinamici e coinvolgenti. Con un approccio tradizionale sarebbe stato impossibile nei tempi e nel budget. L'AI era l'unica strada — ma serviva l'occhio per guidarla.`,
        challengeEn: `Transforming grainy, low-resolution photos into dynamic, engaging videos. With a traditional approach it would have been impossible within the time and budget. AI was the only path — but the eye to guide it was essential.`,
        solutionIt: `Ho utilizzato strumenti di <a href="/ai-video">generazione video AI</a> (Runway, Kling) per trasformare le foto dei dipendenti in brevi clip animate nello stile olimpico richiesto. L'esperienza VFX è stata fondamentale per selezionare gli output migliori, correggere gli artefatti e montare il tutto in un video coerente e divertente con il giusto ritmo musicale.`,
        solutionEn: `I used <a href="/en/ai-video">AI video generation</a> tools (Runway, Kling) to transform employee photos into short animated clips in the requested Olympic style. VFX experience was essential for selecting the best outputs, correcting artifacts and editing everything into a coherent, fun video with the right musical rhythm.`,
        resultIt: `Un video che ha centrato l'obiettivo — divertente, coinvolgente, realizzato in tempi e budget che sarebbero stati impossibili senza AI. L'esempio perfetto del mio approccio: l'AI produce, l'esperienza seleziona e rifinisce.`,
        resultEn: `A video that hit the mark — fun, engaging, delivered within timelines and budgets that would have been impossible without AI. The perfect example of my approach: AI produces, experience selects and refines.`,
    },

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