import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/assets/images';
import { Reveal } from '../ui/Reveal';
import { ArrowRight, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-sand pt-16 md:pt-20 pb-8 px-6 md:px-12 border-t border-navy/10 transition-colors duration-[1.5s] relative z-10">
      <div className="max-w-[100rem] mx-auto">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 mb-14">
          {/* Brand Section */}
          <Reveal className="lg:col-span-1">
            <div className="flex flex-col gap-5">
              <Image
                src={IMAGES.logo}
                alt="Infina Beach Resort"
                height={50}
                width={130}
                className="object-contain"
              />
              <p className="font-sans text-sm text-navy leading-relaxed max-w-xs">
                Experience luxury redefined at Infina Beach Resort. Where every moment becomes a cherished memory.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="p-2 rounded-full bg-navy/5 hover:bg-terracotta/20 transition-colors">
                  <Instagram size={18} className="text-navy" />
                </a>
                <a href="#" className="p-2 rounded-full bg-navy/5 hover:bg-terracotta/20 transition-colors">
                  <MapPin size={18} className="text-navy" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Newsletter Section */}
          <Reveal delay={0.1} className="lg:col-span-1">
            <h4 className="font-serif text-2xl md:text-3xl font-light tracking-tight text-navy mb-5">
              Stay Connected
            </h4>
            <p className="font-sans text-sm text-navy mb-4">
              Subscribe to receive exclusive offers and updates.
            </p>
            {/* <form className="flex items-center border-b border-navy/30 py-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent font-sans text-base focus:outline-none focus:border-terracotta transition-colors text-navy placeholder-navy/60"
              />
              <button type="button" className="text-navy hover:text-terracotta transition-colors flex-shrink-0 ml-4">
                <ArrowRight size={22} strokeWidth={1.5} />
              </button>
            </form> */}
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.2} className="lg:col-span-1">
            <h4 className="font-serif text-2xl md:text-3xl font-light tracking-tight text-navy mb-5">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 font-sans text-sm">
              <div className="flex flex-col gap-2.5">
                <Link href="#" className="hover:text-terracotta transition-colors w-max">The Resort</Link>
                <Link href="#" className="hover:text-terracotta transition-colors w-max">Villas & Estates</Link>
                <Link href="#" className="hover:text-terracotta transition-colors w-max">Gastronomy</Link>
                <Link href="#" className="hover:text-terracotta transition-colors w-max">ROÉE Spa</Link>
              </div>
              <div className="flex flex-col gap-2.5">
                <Link href="#" className="hover:text-terracotta transition-colors w-max">Gallery</Link>
                <Link href="#" className="hover:text-terracotta transition-colors w-max">Contact</Link>
                <Link href="#" className="hover:text-terracotta transition-colors w-max">Sustainability</Link>
                <Link href="#" className="hover:text-terracotta transition-colors w-max">Careers</Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contact Info Row */}
        <Reveal delay={0.15} className="flex flex-wrap gap-6 md:gap-10 mb-10 pb-6 border-b border-navy/10">
          <div className="flex items-center gap-2.5">
            <MapPin size={16} className="text-terracotta" />
            <span className="font-sans text-sm text-navy">Karnataka, India</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone size={16} className="text-terracotta" />
            <span className="font-sans text-sm text-navy">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail size={16} className="text-terracotta" />
            <span className="font-sans text-sm text-navy">reservations@infina.com</span>
          </div>
        </Reveal>

        {/* Bottom Bar */}
        <Reveal delay={0.3} className="flex flex-col md:flex-row justify-between items-center gap-3 pt-3">
          <p className="font-sans text-xs text-navy">
            © 2026 INFINA BEACH RESORT. ALL RIGHTS RESERVED.
          </p>
          {/* <div className="flex items-center gap-5">
            <Link href="#" className="font-sans text-xs text-navy/50 hover:text-navy transition-colors">Instagram</Link>
            <Link href="#" className="font-sans text-xs text-navy/50 hover:text-navy transition-colors">Legal</Link>
            <Link href="#" className="font-sans text-xs text-navy/50 hover:text-navy transition-colors">Privacy</Link>
          </div> */}
        </Reveal>

        {/* Developer Credit */}
        <Reveal delay={0.4} className="flex items-center justify-center gap-2 mt-6 pt-5 border-t border-navy/10">
          <span className="font-sans text-xs text-navy">Designed & Developed by TruTech Labs</span>
          <Image
            src={IMAGES.trutechLogo}
            alt="TruTech Labs"
            height={16}
            width={55}
            className="object-contain opacity-50"
          />
        </Reveal>

      </div>
    </footer>
  );
}
