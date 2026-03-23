'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/assets/images';
import { ReservationModal } from '../ui/ReservationModal';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleOpenModal = () => setIsReservationOpen(true);
    window.addEventListener('open-reservation-modal', handleOpenModal);
    return () => window.removeEventListener('open-reservation-modal', handleOpenModal);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.hash.length > 1 && anchor.origin === window.location.origin) {
        try {
          const element = document.querySelector(anchor.hash);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }
        } catch (err) {
          // Ignore invalid selectors
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-700 ease-water px-6 md:px-10 flex justify-between items-center ${isScrolled && !isMenuOpen
      ? `py-4 backdrop-blur-md shadow-sm ${isDark ? 'bg-midnight/80 text-shell' : 'bg-pearl/80 text-navy'}`
      : `py-6 ${isMenuOpen ? (isDark ? 'text-shell' : 'text-navy') : 'text-white'}`
    }`;

  return (
    <>
      <header className={navClasses}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group relative w-8 h-[14px] focus:outline-none z-50 transition-colors duration-500"
        >
          <span
            className={`absolute top-0 left-0 w-full h-[1px] bg-current transition-all duration-500 ease-water transform origin-center ${isMenuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
          ></span>
          <span
            className={`absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-500 ease-water transform origin-center ${isMenuOpen ? 'w-full -translate-y-[7px] -rotate-45' : 'w-2/3 group-hover:w-full'
              }`}
          ></span>
        </button>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 z-50 transition-opacity duration-500 hover:opacity-80"
          aria-label="Infina — Home"
        >
          <Image
            src={IMAGES.logo}
            alt="Infina Beach Resort"
            height={44}
            width={110}
            className="object-contain rounded-md"
            priority
          />
        </Link>

        <button
          onClick={() => setIsReservationOpen(true)}
          className="hidden md:block font-sans text-[10px] uppercase tracking-[0.2em] font-medium border border-current rounded-full px-8 py-3 transition-all duration-500 ease-water relative z-50 hover:bg-current hover:text-pearl dark:hover:text-midnight"
        >
          coming soon
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-40 bg-pearl/95 dark:bg-midnight/95 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 md:gap-12 text-center mt-10">
              <Image
                src={IMAGES.logo}
                alt="Infina Beach Resort"
                height={64}
                width={160}
                className="object-contain rounded-xl mb-4"
              />
              {[
                { name: 'The Sanctuary', href: '#philosophy' },
                { name: 'Residences', href: '#sanctuaries' },
                { name: 'Gastronomy', href: '#nightfall' },
                { name: 'ROÉE Spa', href: '#nightfall' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="font-serif text-5xl md:text-7xl tracking-tight text-navy dark:text-shell hover:text-terracotta dark:hover:text-teal transition-colors duration-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}
