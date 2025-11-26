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

        {/* Introductory Blurb */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-champagne-gold/20 shadow-sm">
            <p className="font-body text-lg md:text-xl text-neutral-charcoal leading-relaxed mb-4">
              This holiday season, give the gift of exceptional wine. We've partnered with some of the world's most celebrated wineries to bring you exclusive offers on premium selections, limited editions, and curated gift sets.
            </p>
            <p className="font-body text-base md:text-lg text-neutral-slate leading-relaxed">
              From Napa Valley Cabernets to Willamette Valley Pinot Noirs, discover the perfect bottle or collection for the wine enthusiast in your life. Each partner offers special promotions, complimentary tastings, and beautifully packaged gift options to make your holiday shopping effortless.
            </p>
          </div>
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
