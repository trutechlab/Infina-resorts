'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import { IMAGES } from '@/assets/images';

export function Nightfall() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.15) {
            document.documentElement.classList.add('dark');
          } else {
            const rect = sectionRef.current?.getBoundingClientRect();
            if (rect && (rect.top > window.innerHeight * 0.5 || rect.bottom < window.innerHeight * 0.2)) {
              document.documentElement.classList.remove('dark');
            }
          }
        });
      },
      { threshold: [0, 0.15, 0.8, 1], rootMargin: "-10% 0px -10% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="nightfall" className="py-24 md:py-48 px-6 md:px-10 relative z-10 transition-colors duration-[1.5s]">
      <div className="max-w-[90rem] mx-auto">
        
        <div className="text-center mb-24 md:mb-40">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-7xl font-light tracking-tight text-navy dark:text-shell mb-4 md:mb-6">
              Nightfall at Infina
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium text-charcoal/60 dark:text-champagne/60">
              Gastronomy & Restoration
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <Reveal className="md:col-span-5 md:col-start-1 rounded-[2rem] md:rounded-[2.5rem] img-wrap aspect-[4/5]">
            <motion.div style={{ y: y1 }} className="w-full h-[120%] -top-[10%] relative">
              <Image
                src={IMAGES.nightfall.dining}
                alt="Michelin Dining"
                fill
                className="object-cover img-scale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </Reveal>
          
          <Reveal delay={0.2} className="md:col-span-6 md:col-start-7 flex flex-col justify-center mt-8 md:mt-0">
            <h3 className="font-serif text-3xl md:text-[3.25rem] font-light mb-6 md:mb-8 text-navy dark:text-shell leading-[1.2] md:leading-[1.15] tracking-tight">
              Michelin-Inspired<br/>Coastal Dining
            </h3>
            <p className="font-sans text-sm md:text-base leading-[2] md:leading-[2.2] text-charcoal dark:text-champagne mb-10 md:mb-12">
              A cinematic culinary journey. We honor Karnataka's heritage by transforming the day's freshest catch into art, served by moonlight against the roar of the Arabian Sea.
            </p>
            <button 
              onClick={() => window.dispatchEvent(new Event('open-reservation-modal'))}
              className="btn-sweep font-sans text-[10px] uppercase tracking-[0.2em] font-medium border border-navy/20 dark:border-shell/20 rounded-full py-3.5 px-8 w-max text-navy dark:text-shell"
            >
              Reserve a Table
            </button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center mt-24 md:mt-48">
          <Reveal className="md:col-span-5 md:col-start-2 order-2 md:order-1 flex flex-col justify-center mt-8 md:mt-0">
            <h3 className="font-serif text-3xl md:text-[3.25rem] font-light mb-6 md:mb-8 text-navy dark:text-shell leading-[1.2] md:leading-[1.15] tracking-tight">
              ROÉE Wellness<br/>Under the Stars
            </h3>
            <p className="font-sans text-sm md:text-base leading-[2] md:leading-[2.2] text-charcoal dark:text-champagne mb-10 md:mb-12">
              Surrender to absolute tranquility. Our nocturnal spa rituals utilize bioluminescent flora and ancient botanicals to deeply restore your inner equilibrium.
            </p>
            <button className="btn-sweep font-sans text-[10px] uppercase tracking-[0.2em] font-medium border border-navy/20 dark:border-shell/20 rounded-full py-3.5 px-8 w-max text-navy dark:text-shell">
              Explore Spa Menu
            </button>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-6 md:col-start-7 order-1 md:order-2 rounded-[2rem] md:rounded-[2.5rem] rounded-bl-[4rem] md:rounded-bl-[6rem] img-wrap aspect-square md:aspect-[4/3]">
            <motion.div style={{ y: y2 }} className="w-full h-[120%] -top-[10%] relative">
              <Image
                src={IMAGES.nightfall.spa}
                alt="Spa Wellness"
                fill
                className="object-cover img-scale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
