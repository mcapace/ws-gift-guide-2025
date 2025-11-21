'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import ParallaxSection from '@/components/ParallaxSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

// Dynamically import 3D component to avoid SSR issues
const WineBottle3D = dynamic(() => import('@/components/WineBottle3D'), {
  ssr: false,
  loading: () => <div className="py-32 px-6 bg-gradient-to-b from-neutral-charcoal to-neutral-black" />,
});

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-neutral-black">
        <Header />
        <HeroSection />
        <FeaturedCategories />
        <WineBottle3D />
        <InteractiveShowcase />
        <ParallaxSection />
        <NewsletterSection />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
