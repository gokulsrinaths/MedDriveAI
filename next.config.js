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
  // Disable dynamic routes that can't be statically generated
  experimental: {
    missingSuspenseWithCSRError: false,
  },
  // Specify routes to prerender
  trailingSlash: true,
  distDir: '.next',
}

module.exports = nextConfig 