/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use export mode only for GitHub Pages, not for Vercel
  output: process.env.GITHUB_ACTIONS ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: process.env.GITHUB_ACTIONS ? true : false
  },
  // Only use basePath for GitHub Pages deployment, not for Vercel
  basePath: process.env.GITHUB_ACTIONS ? '/smstomail' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/smstomail/' : '',
}

module.exports = nextConfig