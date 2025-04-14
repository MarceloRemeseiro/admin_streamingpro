/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Optimización para Docker
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
  },
};

module.exports = nextConfig; 