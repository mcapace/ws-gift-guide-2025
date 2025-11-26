"use client";

import { SPONSORS } from "@/data/sponsors";
import { SponsorCard } from "@/components/cards/sponsor-card";

export function SponsorGrid() {
  // Filter out pending sponsors
  const activeSponsors = SPONSORS.filter(
    (s) => !s.description.includes("PENDING")
  );

  return (
    <section id="sponsors" className="py-20 md:py-28 bg-neutral-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-wine-burgundy mb-4">
            Featured Partners
          </h2>
          <p className="text-neutral-slate text-lg max-w-2xl mx-auto">
            Discover exclusive holiday offers from our curated selection of premium wine partners
          </p>
        </div>

        {/* Grid - Equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 auto-rows-fr">
          {activeSponsors.map((sponsor, index) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
