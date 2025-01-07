/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.ctfassets.net'],
  },
  output: 'standalone',
  poweredByHeader: false,
  generateEtags: false,
}

export default nextConfig
