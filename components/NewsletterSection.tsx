'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <section ref={ref} className="py-32 px-6 bg-neutral-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/30 via-transparent to-gold-deep/30" />
      <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-20" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-12 md:p-16 text-center border border-gold-elegant/20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block w-20 h-20 bg-gradient-wine rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">📧</span>
            </div>
            <span className="text-gold-elegant text-sm tracking-[0.3em] uppercase font-semibold block mb-4">
              Stay Updated
            </span>
            <h2 className="text-display-3 font-display font-bold mb-4">
              <span className="gradient-text">Join Our</span>
              <br />
              <span className="text-neutral-cream">Exclusive List</span>
            </h2>
            <p className="text-xl text-neutral-silver max-w-2xl mx-auto">
              Receive expert wine recommendations, exclusive offers, and early access
              to our finest selections
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-neutral-charcoal border border-gold-elegant/30 rounded-xl text-neutral-cream placeholder-neutral-silver focus:outline-none focus:border-gold-elegant transition-colors duration-300"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-wine whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-neutral-silver text-sm mt-4">
              By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </motion.form>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: '🎁', text: 'Exclusive Offers' },
              { icon: '⭐', text: 'Expert Insights' },
              { icon: '🚀', text: 'Early Access' },
            ].map((benefit, index) => (
              <div
                key={benefit.text}
                className="flex flex-col items-center"
              >
                <div className="text-3xl mb-2">{benefit.icon}</div>
                <div className="text-neutral-silver text-sm">{benefit.text}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-wine-burgundy rounded-full blur-[150px] opacity-10" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-deep rounded-full blur-[150px] opacity-10" />
    </section>
  );
}
