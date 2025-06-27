/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mhwildswiki/ui', '@mhwildswiki/database'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
