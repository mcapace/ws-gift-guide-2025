import { Header } from "@/components/layout/header";
import { SponsoredBar } from "@/components/layout/sponsored-bar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { SponsorGrid } from "@/components/sections/sponsor-grid";
import { ProofOfPurchase } from "@/components/sections/proof-of-purchase";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <SponsoredBar />
      <Hero />
      <SponsorGrid />
      <ProofOfPurchase />
      <Footer />
    </main>
  );
}
