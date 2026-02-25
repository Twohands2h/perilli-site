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
      // Redirect 301 da vecchie pagine WordPress
      {
        source: '/animazione',
        destination: '/animazione-3d',
        permanent: true,
      },
      {
        source: '/animazione/',
        destination: '/animazione-3d',
        permanent: true,
      },
      {
        source: '/dit',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dit/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/servizio-assistente-digitale',
        destination: '/ai-video',
        permanent: true,
      },
      {
        source: '/servizio-assistente-digitale/',
        destination: '/ai-video',
        permanent: true,
      },
      {
        source: '/wonderalba',
        destination: '/portfolio/wonder-alba',
        permanent: true,
      },
      {
        source: '/wonderalba/',
        destination: '/portfolio/wonder-alba',
        permanent: true,
      },
      {
        source: '/along-came-ruby',
        destination: '/portfolio/along-came-ruby',
        permanent: true,
      },
      {
        source: '/along-came-ruby/',
        destination: '/portfolio/along-came-ruby',
        permanent: true,
      },
      {
        source: '/guerciotti',
        destination: '/portfolio/guerciotti-60-anni',
        permanent: true,
      },
      {
        source: '/guerciotti/',
        destination: '/portfolio/guerciotti-60-anni',
        permanent: true,
      },
      {
        source: '/doppelganger',
        destination: '/portfolio/doppelganger',
        permanent: true,
      },
      {
        source: '/doppelganger/',
        destination: '/portfolio/doppelganger',
        permanent: true,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
