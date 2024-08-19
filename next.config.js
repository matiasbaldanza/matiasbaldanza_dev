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
            value: 'discord.matiasbaldanza.com'
          }
        ],
        destination: 'https://twitter.com/`matiasbaldanza`',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
