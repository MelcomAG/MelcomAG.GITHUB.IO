/** @type {import('next').NextConfig} */

const assetPrefix = './'
const basePath = ''

const nextConfig = {
  i18n: {
    locales: ['de'],
    defaultLocale: 'de'
  },
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  assetPrefix,
  basePath,
  swcMinify: true
}

module.exports = nextConfig
