import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import Link from 'next/link';
import { IMAGES } from '@/assets/images';

export function Sanctuaries() {
  return (
    <section id="sanctuaries" className="bg-sand dark:bg-slate py-24 md:py-48 transition-colors duration-[1.5s] relative z-10">
      <div className="max-w-[100rem] mx-auto px-6 mb-16 md:mb-24 text-center md:text-left">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-[4.5rem] font-light tracking-tight text-navy dark:text-shell">
            Private Reserves
          </h2>
        </Reveal>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative pb-24 md:pb-32">
        
        <div className="!sticky top-[15vh] w-full h-[65vh] md:h-[80vh] rounded-[2rem] md:rounded-[2.5rem] img-wrap mb-16 md:mb-24 shadow-2xl dark:shadow-black/60 group z-10">
          <Image
            src={IMAGES.sanctuaries.pavilion}
            alt="Oceanfront Pavilion"
            fill
            className="object-cover img-scale brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 md:p-14 flex flex-col justify-end pointer-events-none">
            <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] mb-3 md:mb-4 text-white/90 pointer-events-auto w-max font-medium">
              120 SQM | Private Infinity Pool
            </p>
            <h3 className="font-serif text-3xl md:text-5xl font-light mb-6 md:mb-8 text-white pointer-events-auto w-max tracking-wide">
              The Oceanfront Pavilion
            </h3>
            <Link href="#" className="inline-flex items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white hover:text-terracotta transition-colors w-max pointer-events-auto font-medium">
              <span className="border-b border-white/50 pb-1">Discover</span>
            </Link>
          </div>
        </div>

        <div className="!sticky top-[15vh] w-full h-[65vh] md:h-[80vh] rounded-[2rem] md:rounded-[2.5rem] img-wrap mb-16 md:mb-24 shadow-2xl dark:shadow-black/60 group mt-[-5vh] md:mt-[-10vh] z-20">
          <Image
            src={IMAGES.sanctuaries.canopy}
            alt="Canopy Suite"
            fill
            className="object-cover img-scale brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 md:p-14 flex flex-col justify-end pointer-events-none">
            <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] mb-3 md:mb-4 text-white/90 pointer-events-auto w-max font-medium">
              85 SQM | Panoramic Vistas
            </p>
            <h3 className="font-serif text-3xl md:text-5xl font-light mb-6 md:mb-8 text-white pointer-events-auto w-max tracking-wide">
              The Canopy Suite
            </h3>
            <Link href="#" className="inline-flex items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white hover:text-terracotta transition-colors w-max pointer-events-auto font-medium">
              <span className="border-b border-white/50 pb-1">Discover</span>
            </Link>
          </div>
        </div>

        <div className="!sticky top-[15vh] w-full h-[65vh] md:h-[80vh] rounded-[2rem] md:rounded-[2.5rem] img-wrap shadow-2xl dark:shadow-black/60 group mt-[-5vh] md:mt-[-10vh] z-30">
          <Image
            src={IMAGES.sanctuaries.estate}
            alt="Horizon Estate"
            fill
            className="object-cover img-scale brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 md:p-14 flex flex-col justify-end pointer-events-none">
            <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] mb-3 md:mb-4 text-white/90 pointer-events-auto w-max font-medium">
              350 SQM | Butler Service
            </p>
            <h3 className="font-serif text-3xl md:text-5xl font-light mb-6 md:mb-8 text-white pointer-events-auto w-max tracking-wide">
              The Horizon Estate
            </h3>
            <Link href="#" className="inline-flex items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white hover:text-terracotta transition-colors w-max pointer-events-auto font-medium">
              <span className="border-b border-white/50 pb-1">Discover</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
