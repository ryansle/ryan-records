/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'downloads.ctfassets.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
      }
    ],
  },
};

module.exports = nextConfig;
