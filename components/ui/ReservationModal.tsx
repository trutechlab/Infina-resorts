'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { IMAGES } from '@/assets/images';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Paste your Google Apps Script Web App URL here after deploying
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwODZbqyLqor346oHb6oO32rvkPoNt--BHaebLQTRwQWo5zbbjTS0duMhZkMhATXOA1/exec';

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 4000);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            className="relative w-full max-w-2xl bg-pearl dark:bg-midnight rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-navy/50 hover:text-navy dark:text-shell/50 dark:hover:text-shell transition-colors"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <div className="p-8 md:p-12 overflow-y-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-16 md:py-24"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-terracotta/10 dark:bg-teal/10 flex items-center justify-center mb-8"
                  >
                    <svg className="w-10 h-10 text-terracotta dark:text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        d="M20 6L9 17l-5-5"
                      />
                    </svg>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="font-serif text-3xl md:text-4xl text-navy dark:text-shell mb-4"
                  >
                    Request Received
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="font-sans text-sm text-charcoal dark:text-champagne max-w-md leading-relaxed"
                  >
                    Thank you for your interest in Infina. Our concierge will contact you shortly to confirm your reservation details and curate your experience.
                  </motion.p>
                </motion.div>
              ) : (
                <>
                  <div className="flex justify-center mb-8">
                    <Image
                      src={IMAGES.logo}
                      alt="Infina Beach Resort"
                      height={56}
                      width={140}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="mb-10 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-navy dark:text-shell mb-3">
                      Reserve Your Sanctuary
                    </h2>
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/60 dark:text-champagne/60">
                      Submit your interest below
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col">
                        <label className="font-sans text-[9px] uppercase tracking-[0.15em] text-navy/70 dark:text-shell/70 mb-2">First Name</label>
                        <input required name="firstName" type="text" className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-sans text-[9px] uppercase tracking-[0.15em] text-navy/70 dark:text-shell/70 mb-2">Last Name</label>
                        <input required name="lastName" type="text" className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm" />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="font-sans text-[9px] uppercase tracking-[0.15em] text-navy/70 dark:text-shell/70 mb-2">Email Address</label>
                      <input required name="email" type="email" className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm" />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-sans text-[9px] uppercase tracking-[0.15em] text-navy/70 dark:text-shell/70 mb-2">Phone Number</label>
                      <input required name="phone" type="tel" placeholder="+91  xxxxx xxxxx" className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm placeholder-navy/30 dark:placeholder-shell/30" />
                    </div>

                    {error && (
                      <p className="font-sans text-[10px] text-red-500 text-center">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full mt-8 btn-sweep font-sans text-[10px] uppercase tracking-[0.2em] font-medium border border-navy/20 dark:border-shell/20 rounded-full py-4 text-navy dark:text-shell hover:bg-navy hover:text-pearl dark:hover:bg-shell dark:hover:text-midnight transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Sending...' : 'Submit Request'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
