import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import ParallaxSection from '@/components/ParallaxSection';
import WineBottle3D from '@/components/WineBottle3D';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

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
