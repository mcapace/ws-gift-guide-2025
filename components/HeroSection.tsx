'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-wine-dark via-neutral-charcoal to-neutral-black"
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Radial Gradient Overlays */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine-burgundy rounded-full blur-[120px] opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-deep rounded-full blur-[120px] opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </motion.div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block text-gold-elegant text-sm tracking-[0.3em] uppercase font-semibold mb-4">
              Holiday Gift Guide 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-display-1 font-display font-bold mb-6 text-balance"
          >
            <span className="gradient-text">Elevate</span>
            <br />
            <span className="text-neutral-cream">Every Celebration</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-2xl text-neutral-silver max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Discover our meticulously curated collection of exceptional wines,
            rare vintages, and sophisticated accessories for the discerning connoisseur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-wine group relative">
              Explore Collection
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>

            <button className="glass px-8 py-4 rounded-lg text-gold-elegant font-semibold hover:bg-neutral-charcoal transition-all duration-300 border border-gold-elegant/30">
              Gift Finder
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <span className="text-gold-elegant text-xs tracking-widest mb-2">SCROLL</span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-gold-elegant to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-black to-transparent" />
    </div>
  );
}
