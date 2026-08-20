import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats; AVIF first, WebP fallback. Smaller than JPEG
    // for the same visual quality (image-delivery optimization).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
