import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Tag, MapPin, Wine } from "lucide-react";
import type { Sponsor } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SponsorCardProps {
  sponsor: Sponsor;
  index?: number;
}

export function SponsorCard({ sponsor, index = 0 }: SponsorCardProps) {
  const hasPromo = sponsor.promo.hasPromo || sponsor.promo.text;
  const hasCode = sponsor.promo.code;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Hero Image */}
      <div className="relative h-64 w-full overflow-hidden bg-neutral-charcoal">
        <Image
          src={`/images/sponsors/${sponsor.images.hero}`}
          alt={sponsor.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/60 to-transparent" />
        
        {/* Logo Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="relative h-12 w-auto">
            <Image
              src={`/images/logos/${sponsor.images.logo}`}
              alt={`${sponsor.name} logo`}
              fill
              className="object-contain object-left"
              sizes="200px"
            />
          </div>
        </div>

        {/* Promo Badge */}
        {hasPromo && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1.5 rounded-full bg-champagne-gold px-3 py-1.5 text-xs font-semibold text-neutral-black">
              <Tag className="h-3 w-3" />
              <span>Special Offer</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tagline */}
        <p className="mb-2 font-accent text-sm italic text-champagne-gold-dark">
          {sponsor.tagline}
        </p>

        {/* Name */}
        <h3 className="mb-2 font-display text-2xl font-bold text-wine-burgundy">
          {sponsor.name}
        </h3>

        {/* Region */}
        <div className="mb-3 flex items-center gap-1.5 text-sm text-neutral-slate">
          <MapPin className="h-4 w-4" />
          <span>{sponsor.region}</span>
        </div>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-charcoal">
          {sponsor.description}
        </p>

        {/* Wine Types */}
        <div className="mb-4 flex flex-wrap gap-2">
          {sponsor.wineTypes.map((type) => (
            <div
              key={type}
              className="flex items-center gap-1.5 rounded-md bg-neutral-cream px-2.5 py-1 text-xs font-medium text-neutral-slate"
            >
              <Wine className="h-3 w-3" />
              <span>{type}</span>
            </div>
          ))}
        </div>

        {/* Promo Info */}
        {hasPromo && (
          <div className="mb-4 rounded-md border border-champagne-gold/30 bg-champagne-gold/10 p-3">
            {hasCode && (
              <div className="mb-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-slate">
                  Promo Code
                </p>
                <p className="font-mono text-base font-bold text-wine-burgundy">
                  {sponsor.promo.code}
                </p>
              </div>
            )}
            {sponsor.promo.text && (
              <p className="text-sm text-neutral-charcoal">
                {sponsor.promo.text}
              </p>
            )}
          </div>
        )}

        {/* Included Perks */}
        {sponsor.includedPerks && sponsor.includedPerks.length > 0 && (
          <div className="mb-4">
            <ul className="space-y-1.5">
              {sponsor.includedPerks.map((perk, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-neutral-slate"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-champagne-gold" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price */}
        {sponsor.price && (
          <div className="mb-4">
            <p className="font-display text-xl font-bold text-wine-burgundy">
              {sponsor.price}
            </p>
          </div>
        )}

        {/* CTA Button */}
        <Button
          asChild
          variant="primary"
          size="md"
          className="w-full"
        >
          <Link
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span>Shop Now</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}

