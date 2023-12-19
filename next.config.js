/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "a.lmcdn.ru", "storage.googleapis.com"],
    formats: ["image/webp"],
  },

  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
