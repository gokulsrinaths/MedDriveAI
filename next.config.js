/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  
  // Enable static export optimization
  experimental: {
    appDir: true,
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.netlify.app'],
    },
  },
}

module.exports = nextConfig 