/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Sanity CDN'den gelen görüntülere izin ver
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  // Türkçe karakterleri destekleyen route'lar için
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;