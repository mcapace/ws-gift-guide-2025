import { SPONSORS } from "@/data/sponsors";
import { SponsorCard } from "@/components/cards/sponsor-card";

export function SponsorGrid() {
  return (
    <section
      id="sponsors"
      className="container-wide py-16 md:py-24 lg:py-32"
    >
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-display text-4xl font-bold text-wine-burgundy md:text-5xl">
          Featured Partners
        </h2>
        <p className="mx-auto max-w-2xl font-body text-lg text-neutral-slate">
          Discover exclusive holiday offers from our curated selection of premium
          wine partners
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SPONSORS.map((sponsor, index) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
        ))}
      </div>
    </section>
  );
}

