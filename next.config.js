/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets', 'assets.vercel.com', 'localhost', 'localhost:3000', 'localhost:3001'],
  }
}

module.exports = nextConfig
