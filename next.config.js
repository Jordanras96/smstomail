/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only use basePath for GitHub Pages deployment, not for Vercel
  basePath: process.env.GITHUB_ACTIONS ? '/smstomail' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/smstomail/' : '',
}

module.exports = nextConfig