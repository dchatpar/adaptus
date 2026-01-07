'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/lib/constants';

export function Hero() {
  const scrollToDivisions = () => {
    document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="container relative z-10 py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-sm font-bold uppercase tracking-wider text-primary"
          >
            Est. {COMPANY_INFO.founded} • {COMPANY_INFO.headquarters}
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-5xl font-black tracking-tight text-slate-50 md:text-7xl"
          >
            {COMPANY_INFO.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-2xl font-bold text-slate-300 md:text-3xl"
          >
            {COMPANY_INFO.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 text-lg text-slate-400 leading-relaxed"
          >
            {COMPANY_INFO.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" onClick={scrollToDivisions}>
              Explore Divisions
            </Button>
            <Button size="lg" variant="secondary">
              Contact Us
            </Button>
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
                <div className="h-2 w-2 rounded-full bg-primary" />
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
