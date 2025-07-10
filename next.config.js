/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable static exports for Netlify
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 