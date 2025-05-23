import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Kürtgyarmat Hagyományőrző Íjász Egyesület",
    default:
      "Kürtgyarmat Hagyományőrző Íjász Egyesület - Magyar lovas íjász hagyományok őrzése",
  },
  description:
    "A Kürtgyarmat Hagyományőrző Íjász Egyesület 2003 óta őrzi a magyar lovas íjász hagyományokat Szatmárban. Lovas íjászat oktatás, hagyományőrző tevékenységek és kézműves foglalkozások.",
  keywords: [
    "Kürtgyarmat",
    "íjászat",
    "lovasíjászat",
    "hagyományőrzés",
    "Fehérgyarmat",
    "lovas kultúra",
    "Kassai rendszer",
    "magyar lovas hagyományok",
    "íjász oktatás",
    "Szatmár",
    "hagyományos íjászat",
    "lovas oktatás",
    "kézművesség",
    "nemezelés",
    "bőrözés",
    "magyar kultúra",
    "lovas bemutató",
    "íjász verseny",
    "hagyományőrző egyesület",
  ],
  authors: [{ name: "Kürtgyarmat Hagyományőrző Íjász Egyesület" }],
  creator: "Kürtgyarmat Egyesület",
  publisher: "Kürtgyarmat Egyesület",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://kurtgyarmat.hu",
    siteName: "Kürtgyarmat Hagyományőrző Íjász Egyesület",
    title: "Kürtgyarmat - Magyar lovas íjász hagyományok őrzése 2003 óta",
    description:
      "Lovas íjászat oktatás, hagyományőrző tevékenységek és magyar kultúra őrzése Szatmárban. Csatlakozz hozzánk!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kürtgyarmat Hagyományőrző Íjász Egyesület",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Kürtgyarmat - Magyar lovas íjász hagyományok",
    description:
      "Lovas íjászat oktatás és hagyományőrző tevékenységek Szatmárban",
    images: ["/og-image.jpg"],
  },

  // Favicon és ikonok - Next.js automatikusan kezeli az app/ mappában lévő fájlokat
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
        color: "#8B4513", // barna szín a lovas témához
      },
    ],
  },

  // További SEO
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

  // További beállítások
  other: {
    "theme-color": "#8B4513",
    "msapplication-navbutton-color": "#8B4513",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />

        {/* Bing Verification */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://kurtgyarmat.hu" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              name: "Kürtgyarmat Hagyományőrző Íjász Egyesület",
              description: "Magyar lovas íjász hagyományok őrzése és oktatása",
              url: "https://kurtgyarmat.hu",
              telephone: "+36 70 123 4567",
              email: "info@kurtgyarmat.hu",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Szabó Lovasudvar",
                addressLocality: "Fehérgyarmat",
                postalCode: "4900",
                addressCountry: "HU",
              },
              sport: "Íjászat",
              foundingDate: "2003",
              sameAs: [
                "https://www.facebook.com/kurtgyarmat",
                "https://www.instagram.com/kurtgyarmat",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
