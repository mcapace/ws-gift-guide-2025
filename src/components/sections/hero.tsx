"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const videos = [
  "/videos/hero-video.mp4",                    // Wine video
  "/videos/AdobeStock_286990778.mp4",          // Tequila video
  "/videos/AdobeStock_1737935567.mp4",         // Champagne video
  "/videos/AdobeStock_1071056087.mp4"          // Tequila video
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef0 = useRef<HTMLVideoElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const scrollToSponsors = () => {
    document.getElementById("sponsors")?.scrollIntoView({ behavior: "smooth" });
  };

  // Get video ref by index
  const getVideoRef = (index: number) => {
    switch (index) {
      case 0: return videoRef0.current;
      case 1: return videoRef1.current;
      case 2: return videoRef2.current;
      case 3: return videoRef3.current;
      default: return null;
    }
  };

  // Handle video end and switch to next video
  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    const currentVideo = getVideoRef(currentVideoIndex);
    const nextVideo = getVideoRef(nextIndex);
    
    console.log(`Switching from video ${currentVideoIndex} to ${nextIndex}`);
    
    // Hide current video
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.style.opacity = '0';
      currentVideo.style.pointerEvents = 'none';
      currentVideo.style.zIndex = '0';
    }
    
    // Show and play next video
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.style.opacity = '1';
      nextVideo.style.pointerEvents = 'auto';
      nextVideo.style.zIndex = '1';
      
      // Ensure video is loaded before playing
      if (nextVideo.readyState >= 2) {
        nextVideo.play().catch((error) => {
          console.error(`Error playing video ${nextIndex}:`, error);
        });
      } else {
        // Wait for video to be ready
        const handleCanPlay = () => {
          nextVideo.play().catch((error) => {
            console.error(`Error playing video ${nextIndex}:`, error);
          });
          nextVideo.removeEventListener('canplay', handleCanPlay);
        };
        nextVideo.addEventListener('canplay', handleCanPlay);
        nextVideo.load();
      }
    }
    
    setCurrentVideoIndex(nextIndex);
  };

  // Preload all videos on mount
  useEffect(() => {
    const refs = [videoRef0, videoRef1, videoRef2, videoRef3];
    refs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.load();
        // Set initial styles
        if (index === 0) {
          ref.current.style.opacity = '1';
          ref.current.style.zIndex = '1';
        } else {
          ref.current.style.opacity = '0';
          ref.current.style.zIndex = '0';
        }
        ref.current.style.pointerEvents = index === 0 ? 'auto' : 'none';
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef0}
          muted
          playsInline
          autoPlay
          preload="auto"
          onEnded={handleVideoEnd}
          onError={(e) => {
            console.error("Video 0 error:", e);
          }}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: currentVideoIndex === 0 ? 1 : 0, zIndex: currentVideoIndex === 0 ? 1 : 0 }}
        >
          <source src={videos[0]} type="video/mp4" />
        </video>
        <video
          ref={videoRef1}
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          onError={(e) => {
            console.error("Video 1 error:", e);
          }}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: currentVideoIndex === 1 ? 1 : 0, zIndex: currentVideoIndex === 1 ? 1 : 0 }}
        >
          <source src={videos[1]} type="video/mp4" />
        </video>
        <video
          ref={videoRef2}
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          onError={(e) => {
            console.error("Video 2 error:", e);
          }}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: currentVideoIndex === 2 ? 1 : 0, zIndex: currentVideoIndex === 2 ? 1 : 0 }}
        >
          <source src={videos[2]} type="video/mp4" />
        </video>
        <video
          ref={videoRef3}
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          onError={(e) => {
            console.error("Video 3 error:", e, videos[3]);
          }}
          onLoadedData={() => {
            console.log("Video 3 loaded:", videos[3]);
          }}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: currentVideoIndex === 3 ? 1 : 0, zIndex: currentVideoIndex === 3 ? 1 : 0 }}
        >
          <source src={videos[3]} type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Overlay - Enhanced for better text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75 z-10" />

      {/* Content with Parallax */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/wine-spectator-logo-white.png"
                alt="Wine Spectator"
                width={300}
                height={60}
                className="mx-auto mb-8 h-16 md:h-20 w-auto"
              />
            </motion.div>

        {/* Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-0.5 bg-champagne-gold mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          Holiday Gift Guide
        </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-accent text-4xl md:text-5xl lg:text-6xl text-champagne-gold mb-4"
            >
              2025
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-xl"
            >
              Exclusive offers from our partners
            </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToSponsors}
          className="px-8 py-4 border-2 border-champagne-gold text-champagne-gold rounded-lg font-medium hover:bg-champagne-gold hover:text-neutral-black transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Explore Partner Offers</span>
          <span className="absolute inset-0 bg-champagne-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToSponsors}
            className="text-white/60 hover:text-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
