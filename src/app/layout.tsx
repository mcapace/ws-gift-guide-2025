import type { Metadata } from "next";

import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";

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



const cormorant = Cormorant_Garamond({

  subsets: ["latin"],

  weight: ["400", "500"],

  style: ["normal", "italic"],

  variable: "--font-cormorant",

  display: "swap",

});



export const metadata: Metadata = {

  title: "2025 Holiday Gift Guide | Wine Spectator",

  description: "Exclusive holiday offers from Wine Spectator advertising partners.",

};



export default function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {

  return (

    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>

      <body className="font-body bg-neutral-cream">{children}</body>

    </html>

  );

}
