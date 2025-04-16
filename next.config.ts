import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.palawanwebsolutions.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
