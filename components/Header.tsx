'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3"
        >
          <div className="w-12 h-12 bg-gradient-wine rounded-full flex items-center justify-center">
            <span className="text-gold-elegant font-bold text-xl">WS</span>
          </div>
          <div>
            <h1 className="font-display text-xl font-bold gradient-text">Wine Spectator</h1>
            <p className="text-xs text-gold-champagne tracking-widest">HOLIDAY 2025</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          <a href="#gifts" className="text-neutral-cream hover:text-gold-elegant transition-colors duration-300 font-medium">
            Gifts
          </a>
          <a href="#collections" className="text-neutral-cream hover:text-gold-elegant transition-colors duration-300 font-medium">
            Collections
          </a>
          <a href="#experiences" className="text-neutral-cream hover:text-gold-elegant transition-colors duration-300 font-medium">
            Experiences
          </a>
          <button className="btn-wine text-sm py-2 px-6">
            Shop Now
          </button>
        </motion.div>
      </nav>
    </motion.header>
  );
}
