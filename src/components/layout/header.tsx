"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProofOfPurchase = () => {
    const element = document.getElementById("proof-of-purchase");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-[40px] left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2 md:py-3" : "bg-transparent py-2 md:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-2">
        <Link href="https://www.winespectator.com" target="_blank" className="flex-shrink-0">
          <Image
            src={scrolled ? "/images/wine-spectator-logo.png" : "/images/wine-spectator-logo-white.png"}
            alt="Wine Spectator"
            width={160}
            height={32}
            className="h-6 md:h-8 w-auto"
          />
        </Link>
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <button
            onClick={scrollToProofOfPurchase}
            className={`px-2 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${
              scrolled
                ? "bg-champagne-gold text-neutral-black hover:bg-champagne-gold-dark shadow-md"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            <span className="hidden sm:inline">Claim 3 Months Free</span>
            <span className="sm:hidden">Claim Free</span>
          </button>
          {scrolled && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs md:text-sm text-wine-burgundy hover:text-wine-burgundy-dark transition-colors whitespace-nowrap hidden md:block"
            >
              Back to Top ↑
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
