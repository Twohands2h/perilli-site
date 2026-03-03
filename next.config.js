const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.mux.com',
      },
      {
        protocol: 'https',
        hostname: '**.vimeocdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      // === Redirect 301 da vecchie pagine WordPress / Adobe Portfolio ===

      // Pagine servizio
      { source: '/animazione', destination: '/animazione-3d', permanent: true },
      { source: '/animazione/', destination: '/animazione-3d', permanent: true },
      { source: '/dit', destination: '/', permanent: true },
      { source: '/dit/', destination: '/', permanent: true },
      { source: '/dit-fotografico-agenzie', destination: '/', permanent: true },
      { source: '/dit-fotografico-agenzie/', destination: '/', permanent: true },
      { source: '/servizio-dit-fotografico-a-roma', destination: '/', permanent: true },
      { source: '/servizio-dit-fotografico-a-roma/', destination: '/', permanent: true },
      { source: '/servizio-assistente-digitale', destination: '/ai-video', permanent: true },
      { source: '/servizio-assistente-digitale/', destination: '/ai-video', permanent: true },

      // Progetti portfolio — con equivalente nel nuovo sito
      { source: '/wonderalba', destination: '/portfolio/wonder-alba', permanent: true },
      { source: '/wonderalba/', destination: '/portfolio/wonder-alba', permanent: true },
      { source: '/along-came-ruby', destination: '/portfolio/along-came-ruby', permanent: true },
      { source: '/along-came-ruby/', destination: '/portfolio/along-came-ruby', permanent: true },
      { source: '/guerciotti', destination: '/portfolio/guerciotti-60-anni', permanent: true },
      { source: '/guerciotti/', destination: '/portfolio/guerciotti-60-anni', permanent: true },
      { source: '/doppelganger', destination: '/portfolio/doppelganger', permanent: true },
      { source: '/doppelganger/', destination: '/portfolio/doppelganger', permanent: true },
      { source: '/stalking', destination: '/portfolio/stalking', permanent: true },
      { source: '/stalking/', destination: '/portfolio/stalking', permanent: true },
      { source: '/pmi-abbiamo-cura-di-te', destination: '/portfolio/pmi-abbiamo-cura-di-te', permanent: true },
      { source: '/pmi-abbiamo-cura-di-te/', destination: '/portfolio/pmi-abbiamo-cura-di-te', permanent: true },
      { source: '/ipotesi-metaverso', destination: '/portfolio/ipotesi-metaverso', permanent: true },
      { source: '/ipotesi-metaverso/', destination: '/portfolio/ipotesi-metaverso', permanent: true },
      { source: '/isole-islands', destination: '/portfolio/isole', permanent: true },
      { source: '/isole-islands/', destination: '/portfolio/isole', permanent: true },
      { source: '/klinamenorion', destination: '/portfolio/klinamen-orion', permanent: true },
      { source: '/klinamenorion/', destination: '/portfolio/klinamen-orion', permanent: true },
      { source: '/black-hole-tale', destination: '/portfolio/black-hole-tale', permanent: true },
      { source: '/black-hole-tale/', destination: '/portfolio/black-hole-tale', permanent: true },
      { source: '/doppelganger-ss-2019', destination: '/portfolio/doppelganger', permanent: true },
      { source: '/doppelganger-ss-2019/', destination: '/portfolio/doppelganger', permanent: true },

      // Progetti portfolio — senza equivalente, redirect a lista portfolio
      { source: '/sony-all-star-battle-royale', destination: '/portfolio', permanent: true },
      { source: '/sony-all-star-battle-royale/', destination: '/portfolio', permanent: true },
      { source: '/scovaventi', destination: '/portfolio', permanent: true },
      { source: '/scovaventi/', destination: '/portfolio', permanent: true },
      { source: '/virgin-radio', destination: '/portfolio', permanent: true },
      { source: '/virgin-radio/', destination: '/portfolio', permanent: true },
      { source: '/asproli', destination: '/portfolio', permanent: true },
      { source: '/asproli/', destination: '/portfolio', permanent: true },
      { source: '/fendi-kids-adv', destination: '/portfolio', permanent: true },
      { source: '/fendi-kids-adv/', destination: '/portfolio', permanent: true },
      { source: '/redemptoris-mater', destination: '/portfolio', permanent: true },
      { source: '/redemptoris-mater/', destination: '/portfolio', permanent: true },
      { source: '/ovito', destination: '/portfolio', permanent: true },
      { source: '/ovito/', destination: '/portfolio', permanent: true },
      { source: '/campanile', destination: '/portfolio', permanent: true },
      { source: '/campanile/', destination: '/portfolio', permanent: true },
      { source: '/ferrari-chrono', destination: '/portfolio', permanent: true },
      { source: '/ferrari-chrono/', destination: '/portfolio', permanent: true },
      { source: '/anche-il-cielo-sbadiglia', destination: '/portfolio', permanent: true },
      { source: '/anche-il-cielo-sbadiglia/', destination: '/portfolio', permanent: true },
      { source: '/tu-porta-a-spasso-il-cellulare', destination: '/portfolio', permanent: true },
      { source: '/tu-porta-a-spasso-il-cellulare/', destination: '/portfolio', permanent: true },

      // Altre pagine
      { source: '/cookie', destination: '/privacy', permanent: true },
      { source: '/cookie/', destination: '/privacy', permanent: true },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
