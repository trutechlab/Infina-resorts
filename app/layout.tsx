import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Infina Beach Resort | Murdeshwara, Karnataka',
  description: 'Where the Horizon Meets Timeless Elegance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth antialiased ${cormorant.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="font-sans font-light selection:bg-terracotta/20 dark:selection:bg-teal/30">
        {children}
      </body>
    </html>
  );
}
