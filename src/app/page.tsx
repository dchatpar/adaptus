import { EnhancedHero } from '@/components/home/enhanced-hero';
import { BentoEcosystem } from '@/components/home/bento-ecosystem';
import { About } from '@/components/home/about';
import { CTA } from '@/components/home/cta';

export default function HomePage() {
  return (
    <main>
      <EnhancedHero />
      <BentoEcosystem />
      <About />
      <CTA />
    </main>
  );
}
