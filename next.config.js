module.exports = {
  reactStrictMode: true,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
        "sinerider.com",
        "aretav.com",
        "cdn.tobyb.dev",
        "grooovy.tobyb.dev"
    ],
  },
  ...nextConfig
}
