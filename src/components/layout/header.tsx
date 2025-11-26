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
      className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="https://www.winespectator.com" target="_blank">
          <Image
            src={scrolled ? "/images/wine-spectator-logo.png" : "/images/wine-spectator-logo-white.png"}
            alt="Wine Spectator"
            width={160}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToProofOfPurchase}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              scrolled
                ? "bg-champagne-gold text-neutral-black hover:bg-champagne-gold-dark shadow-md"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            Claim 3 Months Free
          </button>
          {scrolled && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-wine-burgundy hover:text-wine-burgundy-dark transition-colors"
            >
              Back to Top ↑
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
