import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Kürtgyarmat Hagyományőrző Íjász Egyesület",
  description: "Magyar lovas és íjász hagyományok őrzése 2003 óta. Lovasíjászat, hagyományőrzés, rendezvények, oktatás.",
  keywords: "Kürtgyarmat, íjászat, lovasíjászat, hagyományőrzés, Fehérgyarmat, lovas kultúra, Kassai rendszer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}