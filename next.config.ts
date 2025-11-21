import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Enable experimental features for cutting-edge performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'three', '@react-three/fiber', '@react-three/drei'],
  },

  // Webpack configuration to fix React duplicate instances
  webpack: (config, { isServer }) => {
    // Ensure only one instance of React is used
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    };

    // Handle three.js and related packages properly
    config.externals = config.externals || [];
    if (!isServer) {
      // Ensure three.js modules are properly handled on client-side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        stream: false,
      };
    }

    return config;
  },

  // Transpile three.js packages for better compatibility
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

export default nextConfig;
