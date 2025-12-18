import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Temporarily disable image optimization due to corrupted PNG files
  },
};

export default nextConfig;
