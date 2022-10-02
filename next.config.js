/** @type {import('next').NextConfig} */

const assetPrefix = './'
const basePath = ''

const nextConfig = {
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  assetPrefix,
  basePath,
  swcMinify: true
}

module.exports = nextConfig
