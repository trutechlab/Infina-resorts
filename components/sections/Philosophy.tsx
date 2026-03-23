'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import { useRef } from 'react';
import { IMAGES } from '@/assets/images';

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    // FIX: Added id="philosophy" for routing
    <section id="philosophy" ref={containerRef} className="relative z-10 bg-pearl dark:bg-midnight rounded-t-[2rem] md:rounded-t-[3rem] py-24 md:py-48 overflow-hidden transition-colors duration-[1.5s]">
      <div className="max-w-[100rem] mx-auto px-6 relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
        
        <motion.div style={{ y: y1 }} className="absolute top-0 left-4 lg:left-24 w-40 lg:w-72 aspect-[3/4] rounded-[1.5rem] lg:rounded-[2.5rem] img-wrap hidden md:block opacity-90 lg:opacity-100">
          <Image
            src={IMAGES.philosophy.texture}
            alt="Texture"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="absolute bottom-0 right-4 lg:right-32 w-48 lg:w-80 aspect-square rounded-[1.5rem] lg:rounded-[2.5rem] rounded-tr-none img-wrap hidden md:block opacity-90 lg:opacity-100">
          <Image
            src={IMAGES.philosophy.resort}
            alt="Resort Life"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="text-center max-w-3xl mx-auto relative z-20 px-4">
          <Reveal>
            <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-terracotta dark:text-teal mb-8 md:mb-10">
              The Ethos
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-[5rem] font-light leading-[1.2] md:leading-[1.15] tracking-tight text-navy dark:text-shell">
              Step into a sanctuary stripped of excess.
              <span className="italic text-charcoal/60 dark:text-champagne/60 block mt-4 md:mt-6 tracking-normal">
                Barefoot luxury redefined.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 md:mt-16 font-sans text-sm md:text-base leading-[2] md:leading-[2.2] text-charcoal dark:text-champagne max-w-lg mx-auto">
              Located on the pristine coastline of the Arabian Sea, Infina is architected to yield to its environment. Here, time is measured not by clocks, but by the rhythm of the tides.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
