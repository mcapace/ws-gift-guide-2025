"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Wine, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import type { Sponsor } from "@/types";

interface SponsorCardProps {
  sponsor: Sponsor;
  index: number;
}

export function SponsorCard({ sponsor, index }: SponsorCardProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={`/images/sponsors/${sponsor.images.hero}`}
          alt={sponsor.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Logo Overlay */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
          <Image
            src={`/images/logos/${sponsor.images.logo}`}
            alt={`${sponsor.name} logo`}
            width={100}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </div>
        
        {/* Special Offer Badge */}
        {sponsor.promo.hasPromo && (
          <div className="absolute top-4 right-4 bg-champagne-gold text-neutral-black px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            ✦ Special Offer
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Tagline */}
        <p className="font-accent text-lg italic text-champagne-gold-dark mb-2">
          {sponsor.tagline}
        </p>

        {/* Name */}
        <h3 className="font-display text-2xl font-bold text-wine-burgundy mb-2">
          {sponsor.name}
        </h3>

        {/* Region */}
        <div className="flex items-center gap-1.5 text-neutral-slate text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{sponsor.region}</span>
        </div>

        {/* Description */}
        <p className="text-neutral-charcoal text-base leading-relaxed mb-5 line-clamp-3">
          {sponsor.description}
        </p>

        {/* Wine Types */}
        <div className="flex flex-wrap gap-2 mb-5">
          {sponsor.wineTypes.map((type) => (
            <span
              key={type}
              className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-cream rounded-full text-xs font-medium text-neutral-slate"
            >
              <Wine className="w-3 h-3" />
              {type}
            </span>
          ))}
        </div>

        {/* Promo Box */}
        {sponsor.promo.hasPromo && (
          <div className="mb-5 p-4 bg-champagne-gold/10 border border-champagne-gold/30 rounded-xl">
            {sponsor.promo.code && (
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-neutral-slate uppercase tracking-wide">
                  Promo Code
                </span>
                <button
                  onClick={() => copyCode(sponsor.promo.code!)}
                  className="flex items-center gap-1 text-xs text-champagne-gold-dark hover:text-wine-burgundy transition-colors"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            )}
            {sponsor.promo.code && (
              <p className="font-mono text-lg font-bold text-wine-burgundy mb-2">
                {sponsor.promo.code}
              </p>
            )}
            {sponsor.promo.text && (
              <p className="text-sm text-neutral-charcoal">
                {sponsor.promo.text}
              </p>
            )}
          </div>
        )}

        {/* Perks */}
        {sponsor.includedPerks && (
          <ul className="mb-5 space-y-1">
            {sponsor.includedPerks.map((perk) => (
              <li key={perk} className="text-sm text-neutral-slate flex items-center gap-2">
                <span className="text-champagne-gold">✦</span>
                {perk}
              </li>
            ))}
          </ul>
        )}

        {/* Price */}
        {sponsor.price && (
          <p className="text-2xl font-bold text-wine-burgundy mb-5">
            {sponsor.price}
          </p>
        )}

        {/* CTA */}
        <Link
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-2 w-full py-4 bg-wine-burgundy text-white rounded-xl font-semibold hover:bg-wine-burgundy-dark transition-colors"
        >
          Shop Now
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}
