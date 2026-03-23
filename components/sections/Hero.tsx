'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import { IMAGES } from '@/assets/images';

export function Hero() {
  const { scrollY } = useScroll();

  // FIX: Fade out the hero text on scroll to prevent overlapping with subsequent sections
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div id="hero" className="h-screen w-full relative group">
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
        {/* FIX: Removed the scale and y transforms that were causing the enlarging/overlap bug */}
        <div className="w-full h-full relative">
          <Image
            src={IMAGES.hero}
            alt="Arabian Sea"
            fill
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            priority
            quality={100}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 transition-colors duration-[2s] ease-out group-hover:from-black/40 group-hover:via-black/30 group-hover:to-black/60"></div>

        <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 mt-8">
          <Reveal>
            <h1 className="font-serif text-[4.5rem] md:text-[9.5rem] font-light tracking-tight leading-none mb-4 md:mb-6">
              Infina
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-sans text-[8px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium">
              Where the Horizon Meets Timeless Elegance
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-serif italic text-lg md:text-3xl mt-4 md:mt-6 text-white/90 tracking-wide">
              Murdeshwara, Karnataka
            </p>
          </Reveal>
        </motion.div>

        <motion.div style={{ opacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-80">
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] font-medium text-white">
            Breathe & Scroll
          </span>
          <div className="w-[1px] h-12 md:h-16 bg-white/20 overflow-hidden">
            <div className="w-full h-full bg-white scroll-line"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
