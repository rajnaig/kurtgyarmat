import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kurtgyarmat.vercel.app"),
  title: {
    default: "Kurtgyármat Lovas Íjász Egyesület",
    template: "%s | Kurtgyármat Lovas Íjász Egyesület",
  },
  description:
    "Magyar hagyományőrző lovas íjász egyesület Kurtgyármaton. Lovas íjászat oktatás, versenyek és hagyományőrző programok.",
  keywords: [
    "lovas íjászat",
    "hagyományőrzés",
    "Kurtgyármat",
    "magyar tradíció",
    "íjászat oktatás",
  ],
  authors: [{ name: "Kurtgyármat Lovas Íjász Egyesület" }],
  creator: "Kurtgyármat Lovas Íjász Egyesület",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://kurtgyarmat.vercel.app",
    title: "Kurtgyármat Lovas Íjász Egyesület",
    description: "Magyar hagyományőrző lovas íjász egyesület Kurtgyármaton",
    siteName: "Kurtgyármat Lovas Íjász Egyesület",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kurtgyármat Lovas Íjász Egyesület",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Kurtgyármat Lovas Íjász Egyesület",
    description: "Magyar hagyományőrző lovas íjász egyesület",
    images: ["/og-image.jpg"],
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Manifest
  manifest: "/manifest.webmanifest",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
