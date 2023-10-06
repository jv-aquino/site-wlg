/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    domains: [
      "tailwindui.com",
      "res.cloudinary.com"
    ]
  }
}

module.exports = nextConfig