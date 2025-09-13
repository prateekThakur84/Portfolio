/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: Disables ESLint checks during production builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
