"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PAGE_CONFIG } from "@/data/sponsors";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-wine-burgundy via-wine-burgundy-dark to-neutral-black">
      <div className="container-wide relative z-10 py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Year Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <span className="rounded-full border-2 border-champagne-gold/50 bg-champagne-gold/10 px-4 py-1.5 font-accent text-sm font-medium text-champagne-gold">
              {PAGE_CONFIG.hero.year}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 font-display text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            {PAGE_CONFIG.hero.headline}
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 font-body text-lg text-white/90 md:text-xl lg:text-2xl"
          >
            {PAGE_CONFIG.hero.subhead}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const section = document.getElementById("sponsors");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="shadow-lg"
            >
              {PAGE_CONFIG.hero.cta}
            </Button>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 font-body text-xs uppercase tracking-wider text-white/60"
          >
            {PAGE_CONFIG.hero.disclaimer}
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-champagne-gold/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-champagne-gold/5 blur-3xl" />
      </div>
    </section>
  );
}

