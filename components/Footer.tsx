'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-black border-t border-gold-elegant/10 py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-wine rounded-full flex items-center justify-center">
                <span className="text-gold-elegant font-bold text-xl">WS</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold gradient-text">Wine Spectator</h3>
                <p className="text-xs text-gold-champagne tracking-widest">HOLIDAY 2025</p>
              </div>
            </div>
            <p className="text-neutral-silver mb-6 max-w-md">
              The world&apos;s leading authority on wine, bringing you expert ratings, reviews,
              and recommendations since 1976.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-wine-burgundy/30 transition-colors duration-300"
                  aria-label={social}
                >
                  <span className="text-gold-elegant text-sm">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-elegant font-semibold mb-4 tracking-wider">Explore</h4>
            <ul className="space-y-3">
              {['Gift Guide', 'Wine Ratings', 'Top 100', 'Wine Basics', 'Events'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-silver hover:text-gold-elegant transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-elegant font-semibold mb-4 tracking-wider">Support</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping Info', 'Returns', 'FAQ', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-silver hover:text-gold-elegant transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-elegant/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-silver text-sm mb-4 md:mb-0">
            © {currentYear} Wine Spectator. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-neutral-silver hover:text-gold-elegant transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-silver hover:text-gold-elegant transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-neutral-silver hover:text-gold-elegant transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-neutral-silver text-xs">
            Please drink responsibly. Must be 21+ to purchase alcohol.
          </p>
        </div>
      </div>
    </footer>
  );
}
