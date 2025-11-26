"use client";

import { SPONSORS } from "@/data/sponsors";
import { SponsorCard } from "@/components/cards/sponsor-card";
import { shuffleArray } from "@/lib/utils";
import { useMemo, useState, Suspense } from "react";
import { CardSkeleton } from "@/components/ui/skeleton";

export function SponsorGrid() {
  // Show all sponsors (including Sullivan Rutherford and Loco Tequila placeholders)
  const activeSponsors = useMemo(() => {
    return shuffleArray(SPONSORS);
  }, []);

  return (
    <section id="sponsors" className="py-20 md:py-28 bg-gradient-to-b from-neutral-cream via-white/50 to-neutral-cream relative">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-wine-burgundy mb-4">
            Featured Partners
          </h2>
          <p className="text-neutral-slate text-lg max-w-3xl mx-auto">
            Discover exclusive holiday offers from our curated selection of premium partners
          </p>
        </div>

        {/* Introductory Blurb */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="bg-gradient-to-br from-white/80 via-white/70 to-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-champagne-gold/20 shadow-lg relative overflow-hidden">
            {/* Subtle gold accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne-gold/40 to-transparent" />
            <p className="font-body text-base md:text-lg text-neutral-charcoal leading-relaxed mb-4">
              This holiday season, give the gift of exceptional wine and spirits. We've partnered with some of the world's most celebrated wineries and distilleries to bring you exclusive offers on premium selections, limited editions, and curated gift sets.
            </p>
            <p className="font-body text-base md:text-lg text-neutral-charcoal leading-relaxed">
              From Napa Valley Cabernets to Willamette Valley Pinot Noirs, and from artisanal spirits to rare vintages, discover the perfect bottle or collection for your loved ones. Each partner offers special promotions, complimentary tastings, and beautifully packaged gift options to make your holiday shopping effortless.
            </p>
          </div>
        </div>

        {/* Grid - Equal height cards with loading states */}
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[...Array(6)].map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 auto-rows-fr">
            {activeSponsors.map((sponsor, index) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
}
