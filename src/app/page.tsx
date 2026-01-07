import { Hero } from '@/components/home/hero';
import { Divisions } from '@/components/home/divisions';
import { About } from '@/components/home/about';
import { CTA } from '@/components/home/cta';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Divisions />
      <About />
      <CTA />
    </main>
  );
}
