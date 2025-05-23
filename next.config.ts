import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // KRITIKUS: Production-ban minden hiba legyen látható!
  typescript: {
    ignoreBuildErrors: false, // ✅ JAVÍTVA: false kell production-ban
  },
  eslint: {
    ignoreDuringBuilds: false, // ✅ JAVÍTVA: false kell production-ban
  },
  // Performance optimalizáció
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
    ],
  },

  // Build optimalizálás
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  // Headers és Security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
