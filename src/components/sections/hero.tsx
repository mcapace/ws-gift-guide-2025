"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const scrollToSponsors = () => {
    document.getElementById("sponsors")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content with Parallax */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/wine-spectator-logo-white.png"
                alt="Wine Spectator"
                width={300}
                height={60}
                className="mx-auto mb-8 h-16 md:h-20 w-auto"
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
              className="font-accent text-4xl md:text-5xl lg:text-6xl text-champagne-gold mb-4"
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToSponsors}
          className="px-8 py-4 border-2 border-champagne-gold text-champagne-gold rounded-lg font-medium hover:bg-champagne-gold hover:text-neutral-black transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Explore Partner Offers</span>
          <span className="absolute inset-0 bg-champagne-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToSponsors}
            className="text-white/60 hover:text-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
