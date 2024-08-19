/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  async redirects () {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'discord.matiasbaldanza.dev'
          }
        ],
        destination: 'https://discord.gg/QR8hQ3WN57',
        permanent: true
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'github.matiasbaldanza.dev'
          }
        ],
        destination: 'https://github.com/matiasbaldanza',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
