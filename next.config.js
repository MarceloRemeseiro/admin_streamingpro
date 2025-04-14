/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Optimización para Docker
  reactStrictMode: true,
  serverExternalPackages: ['@prisma/client', 'bcrypt'],
  eslint: {
    // Deshabilitar linting durante la compilación
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 