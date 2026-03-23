import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Philosophy } from '@/components/sections/Philosophy';
import { Sanctuaries } from '@/components/sections/Sanctuaries';
import { Nightfall } from '@/components/sections/Nightfall';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative bg-pearl dark:bg-midnight transition-colors duration-[1.5s]">
      <Navigation />
      <Hero />
      <Philosophy />
      <Sanctuaries />
      <Nightfall />
      <Footer />
    </main>
  );
}
