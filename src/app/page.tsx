import { Hero } from "@/components/sections/hero";
import { SponsorGrid } from "@/components/sections/sponsor-grid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SponsorGrid />
    </main>
  );
}
