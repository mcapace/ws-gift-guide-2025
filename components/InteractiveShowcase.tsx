'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const showcaseItems = [
  {
    year: '1982',
    name: 'Château Margaux',
    region: 'Bordeaux, France',
    rating: 100,
    price: '$3,500',
    description: 'A legendary vintage from one of the most celebrated years in Bordeaux history.',
  },
  {
    year: '2010',
    name: 'Screaming Eagle',
    region: 'Napa Valley, California',
    rating: 98,
    price: '$4,200',
    description: 'Cult Cabernet Sauvignon from one of Napa Valley\'s most sought-after producers.',
  },
  {
    year: '1990',
    name: 'Domaine de la Romanée-Conti',
    region: 'Burgundy, France',
    rating: 99,
    price: '$12,500',
    description: 'The pinnacle of Pinot Noir, from the world\'s most prestigious vineyard.',
  },
];

export default function InteractiveShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-neutral-charcoal relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-gold-deep rounded-full blur-[150px] opacity-5"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['-100px', '100px']) }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-wine-burgundy rounded-full blur-[150px] opacity-10"
      />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold-elegant text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
            Trophy Wines
          </span>
          <h2 className="text-display-2 font-display font-bold mb-6">
            <span className="text-neutral-cream">Legendary </span>
            <span className="gradient-text">Vintages</span>
          </h2>
          <p className="text-xl text-neutral-silver max-w-2xl mx-auto">
            Invest in history with these exceptional bottles from the world's greatest estates
          </p>
        </motion.div>

        <div className="space-y-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 md:p-12 hover:bg-neutral-slate/50 transition-all duration-500 group cursor-pointer border border-gold-elegant/10 hover:border-gold-elegant/30"
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                {/* Year Badge */}
                <div className="md:col-span-2">
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-24 h-24 mx-auto rounded-full bg-gradient-wine flex items-center justify-center"
                    >
                      <span className="text-3xl font-display font-bold gradient-text">
                        {item.year}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Wine Details */}
                <div className="md:col-span-7">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-cream mb-2 group-hover:text-wine-gradient transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gold-elegant mb-4 flex items-center gap-2">
                    <span className="inline-block w-1 h-1 bg-gold-elegant rounded-full" />
                    {item.region}
                  </p>
                  <p className="text-neutral-silver text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Rating & Price */}
                <div className="md:col-span-3 text-center md:text-right">
                  <div className="inline-block glass rounded-xl p-6 border border-gold-elegant/20">
                    <div className="mb-4">
                      <div className="text-5xl font-bold gradient-text mb-1">
                        {item.rating}
                      </div>
                      <div className="text-xs text-neutral-silver tracking-wider">
                        WS RATING
                      </div>
                    </div>
                    <div className="border-t border-gold-elegant/20 pt-4">
                      <div className="text-2xl font-bold text-gold-elegant">
                        {item.price}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 w-full bg-gradient-wine text-gold-elegant py-2 px-4 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-wine-burgundy/50 transition-all duration-300"
                      >
                        Inquire
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
