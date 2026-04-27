import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All images live under /public/images/ — no remote hotlinking required.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
