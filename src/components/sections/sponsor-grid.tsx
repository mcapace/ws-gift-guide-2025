"use client";

import Masonry from 'react-masonry-css';
import { SPONSORS } from "@/data/sponsors";
import { SponsorCard } from "@/components/cards/sponsor-card";
import { shuffleArray } from "@/lib/utils";
import { useState, useEffect } from "react";

export function SponsorGrid() {
  // Shuffle only on client-side to avoid hydration mismatch
  // Start with unshuffled array for SSR, then shuffle on client
  const [activeSponsors, setActiveSponsors] = useState<typeof SPONSORS>(SPONSORS);

  useEffect(() => {
    // Shuffle on client-side only after mount
    setActiveSponsors(shuffleArray(SPONSORS));
  }, []);

  const breakpointColumns = {
    default: 3, // 3 columns on large screens for more staggering
    1280: 3,
    1024: 2,
    768: 1
  };

  return (
    <section id="sponsors" className="py-20 md:py-28 bg-gradient-to-b from-neutral-cream via-white/50 to-neutral-cream relative">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
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
              From Napa Valley Cabernets to Willamette Valley Pinot Noirs, and from artisanal spirits to rare vintages, discover the perfect bottle or collection for your loved ones. Each partner offers special promotions and beautifully packaged gift options to make your holiday shopping effortless.
            </p>
          </div>
        </div>

        {/* Masonry Grid - More pronounced staggering */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {activeSponsors.map((sponsor, index) => (
            <div key={sponsor.id} className="mb-4">
              <SponsorCard sponsor={sponsor} index={index} />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
