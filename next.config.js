/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    GITHUB_SECRET_TOKEN: process.env.GITHUB_SECRET_TOKEN,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth/login',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
