/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
}
 module.exports = nextConfig