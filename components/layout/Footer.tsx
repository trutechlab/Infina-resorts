import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/assets/images';
import { Reveal } from '../ui/Reveal';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-pearl dark:bg-midnight pt-12 md:pt-16 pb-12 px-6 md:px-12 border-t border-navy/10 dark:border-shell/10 transition-colors duration-[1.5s] relative z-10">
      <div className="max-w-[100rem] mx-auto px-2 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-16 md:mb-20">
          <Reveal>
            <h4 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-navy dark:text-shell mb-8 md:mb-10">
              Join the Infina Circle
            </h4>
            <form className="max-w-sm group flex items-center border-b border-navy/30 dark:border-shell/30 py-2">
              <input
                type="email"
                placeholder="Your elegant email"
                className="w-full bg-transparent font-sans text-sm focus:outline-none focus:border-navy dark:focus:border-shell transition-colors text-navy dark:text-shell placeholder-navy/40 dark:placeholder-shell/40"
              />
              <button type="button" className="text-navy dark:text-shell group-hover:text-terracotta dark:group-hover:text-teal transition-colors flex-shrink-0 ml-4 pb-1">
                <ArrowRight size={20} strokeWidth={1.2} />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.2} className="grid grid-cols-2 gap-8 font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium text-charcoal/80 dark:text-champagne/80 md:ml-auto">
            <div className="flex flex-col gap-5 md:gap-6">
              <Link href="#" className="hover:text-terracotta dark:hover:text-teal transition-colors w-max">The Resort</Link>
              <Link href="#" className="hover:text-terracotta dark:hover:text-teal transition-colors w-max">Villas & Estates</Link>
              <Link href="#" className="hover:text-terracotta dark:hover:text-teal transition-colors w-max">Gastronomy</Link>
            </div>
            <div className="flex flex-col gap-5 md:gap-6">
              <Link href="#" className="hover:text-terracotta dark:hover:text-teal transition-colors w-max">ROÉE Spa</Link>
              <Link href="#" className="hover:text-terracotta dark:hover:text-teal transition-colors w-max">Contact</Link>
              <Link href="#" className="hover:text-terracotta dark:hover:text-teal transition-colors w-max">Gallery</Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="flex justify-center my-10 md:my-12">
          <Image
            src={IMAGES.logo}
            alt="Infina Beach Resort"
            height={64}
            width={160}
            className="object-contain rounded-xl opacity-80"
          />
        </Reveal>

        <Reveal delay={0.3} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-sans text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-medium text-charcoal/50 dark:text-champagne/50 border-t border-navy/10 dark:border-shell/10 pt-10">
          <p>© 2026 INFINA BEACH RESORT. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <Link href="#" className="hover:text-navy dark:hover:text-shell transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-navy dark:hover:text-shell transition-colors">Sustainability</Link>
            <Link href="#" className="hover:text-navy dark:hover:text-shell transition-colors">Legal</Link>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}
