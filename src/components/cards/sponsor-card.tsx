"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Wine, ExternalLink, Copy, Check, Instagram, Facebook, GlassWater } from "lucide-react";
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
  const [buttonHovered, setButtonHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

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

  const shouldShowAlt = showAltImage || imageHovered;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:border-champagne-gold/20"
      {...swipeHandlers}
    >
      {/* Image Container - Varied Heights for Masonry Effect */}
      <div
        className={`relative w-full overflow-hidden flex-shrink-0 touch-none ${
          index % 4 === 0 ? "h-80 md:h-[24rem]" : // Shorter
          index % 4 === 1 ? "h-[28rem] md:h-[32rem]" : // Taller
          index % 4 === 2 ? "h-72 md:h-[22rem]" : // Shortest
          "h-[32rem] md:h-[36rem]" // Tallest
        }`}
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      >
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
            shouldShowAlt ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Alt Image (shown on hover or swipe) */}
        {sponsor.images.alt && (
          <Image
            src={`/images/sponsors/${sponsor.images.alt}`}
            alt={`${sponsor.name} product`}
            fill
            className={`absolute inset-0 transition-opacity duration-500 ${
              shouldShowAlt ? "opacity-100" : "opacity-0"
            } ${
              sponsor.id === "sullivan-rutherford" 
                ? "object-contain" 
                : "object-cover"
            }`}
            loading="lazy"
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Hover Hint */}
        {sponsor.images.alt && (
          <div className={`absolute top-4 left-4 transition-opacity duration-300 ${
            imageHovered ? "opacity-100" : "opacity-0"
          }`}>
            <span className="text-xs text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
              Hover to see product
            </span>
          </div>
        )}
        
        {/* Logo Overlay - Fixed Size Container with better centering */}
        {/* Vertical panel for John Anthony (vertically-oriented logo) */}
        <div className={`absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center ${
          sponsor.id === "john-anthony" 
            ? "px-4 py-5" // Taller padding for vertical logo
            : "px-4 py-3"  // Standard padding
        }`}>
          <div className={`relative flex items-center justify-center ${
            sponsor.id === "john-anthony"
              ? "w-36 h-24" // Larger container for vertical logo (144px x 96px)
              : "w-36 h-12" // Standard container (144px x 48px)
          }`}>
            <Image
              src={`/images/logos/${sponsor.images.logo}`}
              alt={`${sponsor.name} logo`}
              fill
              className="object-contain object-center"
              sizes={sponsor.id === "john-anthony" ? "144px" : "144px"}
              loading="lazy"
            />
          </div>
        </div>

        {/* Image Indicator Dots */}
        {sponsor.images.alt && (
          <div className="absolute bottom-4 right-4 flex gap-1.5">
            <span className={`w-2 h-2 rounded-full transition-colors ${
              shouldShowAlt ? "bg-white/50" : "bg-white"
            }`} />
            <span className={`w-2 h-2 rounded-full transition-colors ${
              shouldShowAlt ? "bg-white" : "bg-white/50"
            }`} />
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

      {/* Content - Varied padding for more visual interest */}
      <div className={`${
        index % 3 === 0 ? "p-4 md:p-5" : // Standard
        index % 3 === 1 ? "p-5 md:p-6" : // More padding
        "p-3 md:p-4" // Less padding
      }`}>
        {/* Tagline */}
        {sponsor.tagline && (
          <p className="font-accent text-sm italic text-champagne-gold-dark mb-1">
            {sponsor.tagline}
          </p>
        )}

        {/* Name */}
        <h3 className="font-display text-xl font-bold text-wine-burgundy mb-1">
          {sponsor.name}
        </h3>

        {/* Region */}
        <div className="flex items-center gap-1.5 text-neutral-slate text-xs mb-2">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span>{sponsor.region}</span>
        </div>

        {/* Description */}
        <p className="text-neutral-charcoal text-sm leading-relaxed mb-3">
          {sponsor.description}
        </p>

        {/* Wine Types */}
        {sponsor.wineTypes.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {sponsor.wineTypes.map((type) => {
              // Color coding based on wine type
              const isTequila = type.toLowerCase().includes("tequila");
              const isRed = ["cabernet sauvignon", "pinot noir", "syrah", "red blend"].some(red => type.toLowerCase().includes(red));
              const isWhite = ["chardonnay", "sauvignon blanc", "white blend"].some(white => type.toLowerCase().includes(white));
              const isSparkling = type.toLowerCase().includes("sparkling");
              
              // Determine background color
              let bgColor = "bg-neutral-cream";
              let textColor = "text-neutral-slate";
              let iconColor = "text-neutral-slate";
              
              if (isTequila) {
                bgColor = "bg-amber-100";
                textColor = "text-amber-800";
                iconColor = "text-amber-700";
              } else if (isRed) {
                bgColor = "bg-red-50";
                textColor = "text-red-800";
                iconColor = "text-red-700";
              } else if (isWhite) {
                bgColor = "bg-yellow-50";
                textColor = "text-yellow-800";
                iconColor = "text-yellow-700";
              } else if (isSparkling) {
                bgColor = "bg-champagne-gold/20";
                textColor = "text-champagne-gold-dark";
                iconColor = "text-champagne-gold-dark";
              }
              
              return (
                <motion.span
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 ${bgColor} rounded-full text-xs font-medium ${textColor} cursor-default`}
                >
                  {isTequila ? (
                    <GlassWater className={`w-3 h-3 flex-shrink-0 ${iconColor}`} />
                  ) : (
                    <Wine className={`w-3 h-3 flex-shrink-0 ${iconColor}`} />
                  )}
                  {type}
                </motion.span>
              );
            })}
          </div>
        )}

        {/* Promo Box - Only show if exists */}
        {sponsor.promo.hasPromo && (
          <div className="mb-3 p-2.5 bg-champagne-gold/10 border border-champagne-gold/30 rounded-lg">
            {sponsor.promo.code && (
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-neutral-slate uppercase tracking-wide">
                  Promo Code
                </span>
                <button
                  onClick={() => copyCode(sponsor.promo.code!)}
                  onMouseDown={handleRipple}
                  className="relative flex items-center gap-1 text-xs text-champagne-gold-dark hover:text-wine-burgundy transition-colors overflow-hidden rounded px-2 py-0.5"
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
              <p className="font-mono text-base font-bold text-wine-burgundy mb-1">
                {sponsor.promo.code}
              </p>
            )}
            {sponsor.promo.text && (
              <p className="text-xs text-neutral-charcoal">
                {sponsor.promo.text}
              </p>
            )}
          </div>
        )}

        {/* Perks - Only show if exists */}
        {sponsor.includedPerks && sponsor.includedPerks.length > 0 && (
          <ul className="mb-3 space-y-0.5">
            {sponsor.includedPerks.map((perk) => (
              <motion.li
                key={perk}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-xs text-neutral-slate flex items-center gap-1.5"
              >
                <span className="text-champagne-gold flex-shrink-0">✦</span>
                <span>{perk}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {/* Price - Only show if exists */}
        {sponsor.price && (
          <p className="text-xl font-bold text-wine-burgundy mb-3">
            {sponsor.price}
          </p>
        )}

        {/* Social Links & CTA Section */}
        <div className="space-y-2">
          {/* Social Media Links - Elegant row above button - All Gold */}
          {sponsor.social && (sponsor.social.instagram || sponsor.social.facebook) && (
            <div className="flex items-center justify-center gap-3">
              {sponsor.social.instagram && (
                <motion.a
                  href={sponsor.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-champagne-gold via-champagne-gold-dark to-champagne-gold text-neutral-black hover:shadow-lg transition-all"
                  aria-label={`${sponsor.name} Instagram`}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              )}
              {sponsor.social.facebook && (
                <motion.a
                  href={sponsor.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-champagne-gold via-champagne-gold-dark to-champagne-gold text-neutral-black hover:shadow-lg transition-all"
                  aria-label={`${sponsor.name} Facebook`}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              )}
              <motion.a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-champagne-gold via-champagne-gold-dark to-champagne-gold text-neutral-black hover:shadow-lg transition-all"
                aria-label={`${sponsor.name} Website`}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          )}

          {/* CTA - Festive Red/Gold/White */}
          <motion.a
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-hovered={buttonHovered}
            className="shop-now-btn relative flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg overflow-hidden"
          >
            {/* Shimmer effect */}
            {buttonHovered && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
              />
            )}
            <span className="relative z-10 font-bold flex items-center gap-2">
              Explore Offer
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
