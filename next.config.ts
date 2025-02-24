import type { NextConfig } from 'next';

const defaultConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

const devConfig: NextConfig = {
  ...defaultConfig,
  reactStrictMode: true,
};

const prodConfig: NextConfig = {
  ...defaultConfig,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
