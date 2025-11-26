"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Wine, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useSwipe } from "@/hooks/use-swipe";
import type { Sponsor } from "@/types";

interface SponsorCardProps {
  sponsor: Sponsor;
  index: number;
}

export function SponsorCard({ sponsor, index }: SponsorCardProps) {
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const [showAltImage, setShowAltImage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const swipeHandlers = useSwipe({
    onSwipeLeft: () => {
      if (sponsor.images.alt) setShowAltImage(true);
    },
    onSwipeRight: () => {
      setShowAltImage(false);
    },
  });

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
      {...swipeHandlers}
    >
      {/* Image Container - Larger Height */}
      <div className="relative h-80 md:h-96 w-full overflow-hidden flex-shrink-0 touch-none">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-neutral-charcoal/20 animate-pulse" />
        )}

        {/* Main Hero Image */}
        <Image
          src={`/images/sponsors/${sponsor.images.hero}`}
          alt={sponsor.name}
          fill
          className={`object-cover transition-opacity duration-500 ${
            showAltImage ? "opacity-0" : "group-hover:opacity-0"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Alt Image (shown on hover or swipe) */}
        {sponsor.images.alt && (
          <Image
            src={`/images/sponsors/${sponsor.images.alt}`}
            alt={`${sponsor.name} product`}
            fill
            className={`absolute inset-0 object-cover transition-opacity duration-500 ${
              showAltImage ? "opacity-100" : "group-hover:opacity-100"
            }`}
            loading="lazy"
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Hover Hint */}
        {sponsor.images.alt && (
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
              Hover to see product
            </span>
          </div>
        )}
        
        {/* Logo Overlay - Fixed Size Container with better centering */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg flex items-center justify-center">
          <div className="relative w-36 h-12 flex items-center justify-center">
            <Image
              src={`/images/logos/${sponsor.images.logo}`}
              alt={`${sponsor.name} logo`}
              fill
              className="object-contain object-center"
              sizes="144px"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Image Indicator Dots */}
        {sponsor.images.alt && (
          <div className="absolute bottom-4 right-4 flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white group-hover:bg-white/50 transition-colors" />
            <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
          </div>
        )}
        
        {/* Special Offer Badge */}
        {sponsor.promo.hasPromo && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            className="absolute top-4 right-4 bg-champagne-gold text-neutral-black px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg"
          >
            ✦ Special Offer
          </motion.div>
        )}
      </div>

      {/* Content - Flex grow to fill space */}
      <div className="p-7 flex flex-col flex-grow">
        {/* Tagline - Allow full text */}
        <div className="mb-2 flex items-center min-h-[28px]">
          <p className="font-accent text-base italic text-champagne-gold-dark">
            {sponsor.tagline}
          </p>
        </div>

        {/* Name - Allow full text */}
        <div className="mb-2 flex items-center min-h-[40px]">
          <h3 className="font-display text-2xl font-bold text-wine-burgundy">
            {sponsor.name}
          </h3>
        </div>

        {/* Region - Allow full text */}
        <div className="mb-4 flex items-center min-h-[24px]">
          <div className="flex items-center gap-1.5 text-neutral-slate text-sm">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{sponsor.region}</span>
          </div>
        </div>

        {/* Description - Allow full text, flexible height */}
        <div className="mb-5 flex items-start min-h-[60px]">
          <p className="text-neutral-charcoal text-base leading-relaxed">
            {sponsor.description}
          </p>
        </div>

        {/* Wine Types - Flexible height */}
        <div className="mb-5 flex items-center min-h-[32px]">
          <div className="flex flex-wrap gap-2">
            {sponsor.wineTypes.map((type) => (
              <motion.span
                key={type}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-cream rounded-full text-xs font-medium text-neutral-slate cursor-default"
              >
                <Wine className="w-3 h-3 flex-shrink-0" />
                {type}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Promo Box - Always reserve space, show if exists */}
        <div className="mb-5 min-h-[80px] flex items-start">
          {sponsor.promo.hasPromo ? (
            <div className="w-full p-4 bg-champagne-gold/10 border border-champagne-gold/30 rounded-xl">
              {sponsor.promo.code && (
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-neutral-slate uppercase tracking-wide">
                    Promo Code
                  </span>
                  <button
                    onClick={() => copyCode(sponsor.promo.code!)}
                    onMouseDown={handleRipple}
                    className="relative flex items-center gap-1 text-xs text-champagne-gold-dark hover:text-wine-burgundy transition-colors overflow-hidden rounded px-2 py-1"
                  >
                    {ripple && (
                      <motion.span
                        className="absolute rounded-full bg-champagne-gold/30"
                        initial={{ width: 0, height: 0, x: ripple.x, y: ripple.y }}
                        animate={{ width: 200, height: 200, x: ripple.x - 100, y: ripple.y - 100 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copied ? "Copied!" : "Copy"}
                    </span>
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
          ) : (
            <div className="w-full" />
          )}
        </div>

        {/* Perks - Always reserve space, show if exists */}
        <div className="mb-5 min-h-[60px] flex items-start">
          {sponsor.includedPerks && sponsor.includedPerks.length > 0 ? (
            <ul className="w-full space-y-1">
              {sponsor.includedPerks.map((perk) => (
                <motion.li
                  key={perk}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-sm text-neutral-slate flex items-center gap-2"
                >
                  <span className="text-champagne-gold flex-shrink-0">✦</span>
                  <span>{perk}</span>
                </motion.li>
              ))}
            </ul>
          ) : (
            <div className="w-full" />
          )}
        </div>

        {/* Price - Always reserve space, show if exists */}
        <div className="h-8 mb-5 flex items-center">
          {sponsor.price ? (
            <p className="text-2xl font-bold text-wine-burgundy">
              {sponsor.price}
            </p>
          ) : (
            <div className="w-full" />
          )}
        </div>

        {/* CTA - Always at bottom with consistent spacing - Festive Red/Gold/White */}
        <div className="mt-auto pt-2">
          <Link
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border-2 overflow-hidden group"
            style={{
              background: isHovered
                ? "linear-gradient(to right, #C9A962, #A68B4B, #C9A962)"
                : "linear-gradient(to right, #722F37, #5A252C, #722F37)",
              color: isHovered ? "#1C1C1C" : "#FFFFFF",
              borderColor: isHovered ? "#C9A962" : "#FFFFFF",
            }}
          >
            {/* Shimmer effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={isHovered ? { x: "200%" } : { x: "-100%" }}
              transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, repeatDelay: 2 }}
            />
            <span className="relative z-10 font-bold flex items-center gap-2">
              Shop Now
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
