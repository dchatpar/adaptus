'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export function CTA() {
  return (
    <Section background="grid">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-12 md:p-16"
      >
        {/* Glow Effect */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-50 md:text-5xl">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            Partner with AdaptUs Group to access world-class technology solutions across AI,
            cybersecurity, software development, marketing, talent, and logistics.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="group">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="secondary">
              View Case Studies
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
