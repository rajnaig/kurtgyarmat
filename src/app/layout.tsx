import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kurtgyarmat.hu"),
  title: "Kürtgyarmat Íjász Egyesület",
  description: "Magyar lovas íjász hagyományok őrzése és továbbadása",
  alternates: {
    // Canonical was missing (on-page SEO score was 78/100).
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Kürtgyarmat Íjász Egyesület",
    description: "Magyar lovas íjász hagyományok őrzése és továbbadása",
    url: "https://www.kurtgyarmat.hu",
    siteName: "Kürtgyarmat Íjász Egyesület",
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
