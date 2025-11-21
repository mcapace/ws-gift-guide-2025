'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    title: 'Rare Vintages',
    description: 'Exceptional wines from legendary vineyards',
    image: '/images/categories/rare-vintages.jpg',
    price: 'From $500',
    gradient: 'from-wine-burgundy to-wine-dark',
  },
  {
    title: 'Luxury Accessories',
    description: 'Sophisticated tools for the perfect pour',
    image: '/images/categories/accessories.jpg',
    price: 'From $150',
    gradient: 'from-gold-deep to-gold-elegant',
  },
  {
    title: 'Wine Experiences',
    description: 'Unforgettable tastings and vineyard tours',
    image: '/images/categories/experiences.jpg',
    price: 'From $300',
    gradient: 'from-wine-medium to-wine-light',
  },
  {
    title: 'Gift Collections',
    description: 'Curated sets for every occasion',
    image: '/images/categories/collections.jpg',
    price: 'From $250',
    gradient: 'from-wine-dark to-gold-deep',
  },
];

export default function FeaturedCategories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 px-6 bg-neutral-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wine-burgundy rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold-elegant text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
            Curated Selection
          </span>
          <h2 className="text-display-2 font-display font-bold mb-6">
            <span className="gradient-text">Premium Collections</span>
          </h2>
          <p className="text-xl text-neutral-silver max-w-2xl mx-auto">
            Handpicked by our expert sommeliers for the most discerning palates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

              {/* Glass Effect */}
              <div className="glass h-full p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
                {/* Hover Shimmer Effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4`}>
                      <span className="text-2xl">🍷</span>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-display font-bold text-neutral-cream mb-3 group-hover:text-wine-gradient transition-colors duration-300">
                    {category.title}
                  </h3>

                  <p className="text-neutral-silver mb-4">
                    {category.description}
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-gold-elegant font-semibold">
                      {category.price}
                    </span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-gold-elegant hover:text-gold-shimmer transition-colors duration-300"
                    >
                      Explore →
                    </motion.button>
                  </div>
                </div>

                {/* Border Gradient */}
                <div className="absolute inset-0 rounded-2xl border border-gold-elegant/20 group-hover:border-gold-elegant/40 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
