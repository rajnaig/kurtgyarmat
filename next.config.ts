import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TypeScript hibák kezelése deployment során
  typescript: {
    ignoreBuildErrors: true, // ideiglenesen true, később változtasd false-ra
  },
  // ESLint hibák kezelése deployment során
  eslint: {
    ignoreDuringBuilds: true, // ideiglenesen true, később változtasd false-ra
  },
  // Kép optimalizáció Cloudinary-hoz
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
