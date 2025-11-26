"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSponsors = () => {
    document.getElementById("sponsors")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/wine-spectator-logo-white.png"
            alt="Wine Spectator"
            width={200}
            height={40}
            className="mx-auto mb-8 h-10 w-auto"
          />
        </motion.div>

        {/* Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-0.5 bg-champagne-gold mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          Holiday Gift Guide
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-accent text-2xl md:text-3xl text-champagne-gold mb-4"
        >
          2025
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-xl"
        >
          Exclusive offers from our advertising partners
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToSponsors}
          className="px-8 py-4 border-2 border-champagne-gold text-champagne-gold rounded-lg font-medium hover:bg-champagne-gold hover:text-neutral-black transition-all duration-300"
        >
          Explore Partner Offers
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <button onClick={scrollToSponsors} className="text-white/60 hover:text-white animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
