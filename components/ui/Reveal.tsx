'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
