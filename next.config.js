/*
const million = require('million/compiler');
module.exports = million.next(
  {
  reactStrictMode: true,
}

/!** @type {import('next').NextConfig} *!/
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
, { auto: true }
)*/

const million = require('million/compiler');

million.next = module.exports = {
  reactStrictMode: true,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig, { auto: true }
