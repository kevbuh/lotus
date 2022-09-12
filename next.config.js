/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.hush-uk.com",
      "upload.wikimedia.org",
      "sm.mashable.com",
      "www.kevinbuhler.com",
      "marketplace.canva.com",
      "c4.wallpaperflare.com",
      "media-exp1.licdn.com",
      "www.lotuscolorado.org",
    ],
  },
};

module.exports = nextConfig;
