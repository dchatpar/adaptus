import { EnhancedHero } from '@/components/home/enhanced-hero';
import { MetricsSection } from '@/components/home/metrics';
import { BentoEcosystem } from '@/components/home/bento-ecosystem';
import { CaseStudiesPreview } from '@/components/home/case-studies-preview';
import { TechnologyStack } from '@/components/home/technology-stack';
import { GlobalPresence } from '@/components/home/global-presence';
import { Testimonials } from '@/components/home/testimonials';
import { About } from '@/components/home/about';
import { CTA } from '@/components/home/cta';

export default function HomePage() {
  return (
    <main>
      <EnhancedHero />
      <MetricsSection />
      <BentoEcosystem />
      <CaseStudiesPreview />
      <TechnologyStack />
      <GlobalPresence />
      <Testimonials />
      <About />
      <CTA />
    </main>
  );
}
