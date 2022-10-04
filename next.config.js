/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
let nextConfig = {}

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  const assetPrefix = `/${repo}/`
  const basePath = `/${repo}`
  nextConfig = {
    assetPrefix,
    basePath,
    images: {
      unoptimized: true
    },
    reactStrictMode: true,
    swcMinify: true
  }
} else {
  nextConfig = {
    images: {
      unoptimized: true
    },
    reactStrictMode: true,
    swcMinify: true
  }
}

module.exports = nextConfig
