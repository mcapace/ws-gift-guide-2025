import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wine Spectator Holiday Gift Guide 2025 | Premium Wine Gifts & Accessories",
  description: "Discover the finest wine gifts, accessories, and experiences for the holidays. Curated by Wine Spectator's experts for wine lovers and connoisseurs.",
  keywords: "wine gifts, holiday wine, wine accessories, wine spectator, gift guide, premium wine, wine lovers",
  authors: [{ name: "Wine Spectator" }],
  openGraph: {
    title: "Wine Spectator Holiday Gift Guide 2025",
    description: "Discover the finest wine gifts, accessories, and experiences for the holidays.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wine Spectator Holiday Gift Guide 2025",
    description: "Discover the finest wine gifts, accessories, and experiences for the holidays.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Noise Texture Overlay for Premium Feel */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
