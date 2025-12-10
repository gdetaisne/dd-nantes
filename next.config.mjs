import { getMoverzBlogRedirectsForHost } from './scripts/blog-moverz-redirects.mjs';

const HOST = 'devis-demenageur-nantes.fr';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverComponentsExternalPackages: []
  },

  compress: true,
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    const existing = [
      // Homepage → Page ville moverz.fr
      // Blog hub → moverz.fr
      // Blog articles → moverz.fr
      // Quartiers nantes (6 pages)
      { source: '/nantes/', destination: 'https://moverz.fr/nantes/', permanent: true },
      { source: '/nantes/beaulieu/', destination: 'https://moverz.fr/nantes/beaulieu/', permanent: true },
      { source: '/nantes/centre-ville/', destination: 'https://moverz.fr/nantes/centre-ville/', permanent: true },
      { source: '/nantes/dervallieres/', destination: 'https://moverz.fr/nantes/dervallieres/', permanent: true },
      { source: '/nantes/ile-nantes/', destination: 'https://moverz.fr/nantes/ile-nantes/', permanent: true },
      { source: '/nantes/malakoff/', destination: 'https://moverz.fr/nantes/malakoff/', permanent: true },
      // Hub quartiers nantes
      // Corridors depuis nantes (5 pages)
      { source: '/nantes-vers-espagne/', destination: 'https://moverz.fr/nantes-vers-espagne/', permanent: true },
      { source: '/nantes-vers-lyon/', destination: 'https://moverz.fr/nantes-vers-lyon/', permanent: true },
      { source: '/nantes-vers-marseille/', destination: 'https://moverz.fr/nantes-vers-marseille/', permanent: true },
      { source: '/nantes-vers-paris/', destination: 'https://moverz.fr/nantes-vers-paris/', permanent: true },
      { source: '/nantes-vers-toulouse/', destination: 'https://moverz.fr/nantes-vers-toulouse/', permanent: true },
      // Services
      { source: '/services/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-economique-nantes/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-premium-nantes/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-standard-nantes/', destination: 'https://moverz.fr/', permanent: true },
      // Pages communes
      { source: '/cgu/', destination: 'https://moverz.fr/cgu/', permanent: true },
      { source: '/cgv/', destination: 'https://moverz.fr/cgv/', permanent: true },
      { source: '/comment-ca-marche/', destination: 'https://moverz.fr/comment-ca-marche/', permanent: true },
      { source: '/contact/', destination: 'https://moverz.fr/contact/', permanent: true },
      { source: '/devis-gratuits/', destination: 'https://moverz.fr/devis-gratuits/', permanent: true },
      { source: '/estimation-rapide/', destination: 'https://moverz.fr/estimation-rapide/', permanent: true },
      { source: '/faq/', destination: 'https://moverz.fr/faq/', permanent: true },
      { source: '/mentions-legales/', destination: 'https://moverz.fr/mentions-legales/', permanent: true },
      { source: '/notre-offre/', destination: 'https://moverz.fr/notre-offre/', permanent: true },
      { source: '/partenaires/', destination: 'https://moverz.fr/partenaires/', permanent: true },
      { source: '/politique-confidentialite/', destination: 'https://moverz.fr/politique-confidentialite/', permanent: true },
    ];

    const blogToMoverz = getMoverzBlogRedirectsForHost(HOST);

    return [...existing, ...blogToMoverz];
  }
};

export default nextConfig;
