import type { NextConfig } from "next";

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = withNextIntl({
  webpack(config: any) {
    config.devtool = false; // Отключает Source Maps
    return config;
  },
});

export default nextConfig;
