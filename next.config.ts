import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.devtool = false; // Отключает source maps
    return config;
  },
};

export default nextConfig;
