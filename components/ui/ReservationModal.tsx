'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 4000);
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
                        <input required type="text" className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm" />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-sans text-[9px] uppercase tracking-[0.15em] text-navy/70 dark:text-shell/70 mb-2">Last Name</label>
                        <input required type="text" className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm" />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="font-sans text-[9px] uppercase tracking-[0.15em] text-navy/70 dark:text-shell/70 mb-2">Email Address</label>
                      <input required type="email" className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col">
                        <label className="font-sans text-[9px] uppercase tracking-[0.15em] text-navy/70 dark:text-shell/70 mb-2">Arrival Date</label>
                        <input required type="date" className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm [color-scheme:light] dark:[color-scheme:dark]" />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-sans text-[9px] uppercase tracking-[0.15em] text-navy/70 dark:text-shell/70 mb-2">Departure Date</label>
                        <input required type="date" className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm [color-scheme:light] dark:[color-scheme:dark]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col">
                        <label className="font-sans text-[9px] uppercase tracking-[0.15em] text-navy/70 dark:text-shell/70 mb-2">Guests</label>
                        <select className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm appearance-none">
                          <option value="1" className="bg-pearl dark:bg-midnight">1 Guest</option>
                          <option value="2" className="bg-pearl dark:bg-midnight">2 Guests</option>
                          <option value="3" className="bg-pearl dark:bg-midnight">3 Guests</option>
                          <option value="4" className="bg-pearl dark:bg-midnight">4+ Guests</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label className="font-sans text-[9px] uppercase tracking-[0.15em] text-navy/70 dark:text-shell/70 mb-2">Accommodation</label>
                        <select className="bg-transparent border-b border-navy/20 dark:border-shell/20 py-2 text-navy dark:text-shell focus:outline-none focus:border-navy dark:focus:border-shell transition-colors font-sans text-sm appearance-none">
                          <option value="pavilion" className="bg-pearl dark:bg-midnight">The Oceanfront Pavilion</option>
                          <option value="canopy" className="bg-pearl dark:bg-midnight">The Canopy Suite</option>
                          <option value="estate" className="bg-pearl dark:bg-midnight">The Horizon Estate</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full mt-8 btn-sweep font-sans text-[10px] uppercase tracking-[0.2em] font-medium border border-navy/20 dark:border-shell/20 rounded-full py-4 text-navy dark:text-shell hover:bg-navy hover:text-pearl dark:hover:bg-shell dark:hover:text-midnight transition-all duration-500"
                    >
                      Submit Request
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
