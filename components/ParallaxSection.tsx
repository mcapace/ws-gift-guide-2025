'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-neutral-black">
      {/* Parallax Background Layers */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-display-1 font-display font-bold mb-8"
          >
            <span className="gradient-text">Unforgettable</span>
            <br />
            <span className="text-neutral-cream">Moments</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl text-neutral-silver max-w-3xl mx-auto mb-12"
          >
            Create memories that last a lifetime with exceptional wines
            <br />
            and exclusive experiences from Wine Spectator
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { number: '50K+', label: 'Ratings & Reviews' },
              { number: '40+', label: 'Years of Expertise' },
              { number: '100+', label: 'Top Wines' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border border-gold-elegant/20"
              >
                <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-neutral-silver tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-wine-burgundy rounded-full blur-[100px] opacity-20"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-deep rounded-full blur-[100px] opacity-20"
      />
    </section>
  );
}
