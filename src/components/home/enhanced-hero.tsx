'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { MagneticButton } from '@/components/ui/magnetic-button';
import { COMPANY_INFO } from '@/lib/constants';

export function EnhancedHero() {
  const scrollToDivisions = () => {
    document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="container relative z-10 py-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Subtitle with stagger */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-sm font-bold uppercase tracking-wider text-primary"
          >
            Est. {COMPANY_INFO.founded} • {COMPANY_INFO.headquarters}
          </motion.p>

          {/* Main Heading with split-text effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="block text-6xl font-black tracking-tight text-slate-50 md:text-8xl">
              {COMPANY_INFO.name.split(' ')[0]}
            </span>
            <span className="block text-gradient text-5xl font-black tracking-tight md:text-7xl">
              {COMPANY_INFO.name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-2xl font-bold text-slate-300 md:text-4xl"
          >
            {COMPANY_INFO.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto"
          >
            A global enterprise technology holding company delivering specialized solutions across
            AI, cybersecurity, software development, marketing, talent, and logistics.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <MagneticButton onClick={scrollToDivisions}>Explore Divisions</MagneticButton>
            <MagneticButton
              onClick={() => (window.location.href = '/contact')}
              className="bg-transparent border-2 border-slate-700 hover:bg-slate-800"
            >
              Contact Us
            </MagneticButton>
          </motion.div>

          {/* Global Locations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-slate-500"
          >
            {COMPANY_INFO.locations.map((location) => (
              <div key={location} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>{location}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        onClick={scrollToDivisions}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-primary"
        aria-label="Scroll to divisions"
      >
        <span className="text-xs font-semibold uppercase tracking-wider">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
