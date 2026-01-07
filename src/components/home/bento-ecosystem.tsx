'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { Section, SectionHeader } from '@/components/ui/section';
import { DIVISIONS } from '@/lib/constants';

export function BentoEcosystem() {
  const cortex = DIVISIONS[0]!;
  const sentinel = DIVISIONS[1]!;
  const forge = DIVISIONS[2]!;
  const kinetic = DIVISIONS[3]!;
  const nexus = DIVISIONS[4]!;
  const vector = DIVISIONS[5]!;

  const divisionImages = {
    cortex: '/images/divisions/artificial_intelligence_brain__bing_0002_8f124a5c.jpeg',
    sentinel: '/images/divisions/artificial_intelligence_brain__bing_0005_b55d35a7.jpeg',
    forge: '/images/divisions/artificial_intelligence_brain__bing_0011_28d053a6.jpeg',
    kinetic: '/images/divisions/artificial_intelligence_brain__bing_0012_7c3a9f9b.jpeg',
    nexus: '/images/divisions/artificial_intelligence_brain__bing_0013_f958d3e1.jpeg',
    vector: '/images/divisions/artificial_intelligence_brain__bing_0016_84e446ed.jpeg',
  };

  return (
    <Section id="divisions" background="grid">
      <SectionHeader
        subtitle="Our Ecosystem"
        title="Six Specialized Divisions"
        description="Integrated technology solutions across AI, security, development, marketing, talent, and logistics."
        centered
      />

      <BentoGrid className="lg:grid-cols-3">
        {/* CORTEX - Large card */}
        <BentoCard span="col-2" hover="glow">
          <div className="relative h-full overflow-hidden rounded-xl">
            <Image
              src={divisionImages.cortex}
              alt="AI & Machine Learning"
              fill
              className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-110"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-background/80 to-background/95" />

            <div className="relative flex h-full flex-col justify-between p-6">
              <div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-6 inline-flex rounded-lg bg-slate-900/80 p-4 ring-1 ring-slate-800 backdrop-blur-sm"
                >
                  <cortex.icon className="h-12 w-12 text-primary" />
                </motion.div>
                <h3 className="mb-3 text-3xl font-black tracking-tight text-slate-50">
                  {cortex.name}
                </h3>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  {cortex.tagline}
                </p>
                <p className="text-slate-300 leading-relaxed">{cortex.description}</p>
              </div>
              <div className="mt-6">
                <a
                  href={cortex.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                >
                  Explore CORTEX
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* SENTINEL */}
        <BentoCard hover="lift">
          <div className="relative h-full overflow-hidden rounded-xl">
            <Image
              src={divisionImages.sentinel}
              alt="Cybersecurity"
              fill
              className="object-cover opacity-25 transition-transform duration-500 group-hover:scale-110"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-sentinel/30 via-background/85 to-background/95" />

            <div className="relative p-6">
              <div className="mb-4 inline-flex rounded-lg bg-slate-900/80 p-3 ring-1 ring-slate-800 backdrop-blur-sm">
                <sentinel.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-black tracking-tight text-slate-50">{sentinel.name}</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {sentinel.tagline}
              </p>
              <p className="text-sm text-slate-300">{sentinel.description}</p>
            </div>
          </div>
        </BentoCard>

        {/* FORGE */}
        <BentoCard hover="lift">
          <div className="relative h-full overflow-hidden rounded-xl">
            <Image
              src={divisionImages.forge}
              alt="Software Development"
              fill
              className="object-cover opacity-25 transition-transform duration-500 group-hover:scale-110"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-forge/30 via-background/85 to-background/95" />

            <div className="relative p-6">
              <div className="mb-4 inline-flex rounded-lg bg-slate-900/80 p-3 ring-1 ring-slate-800 backdrop-blur-sm">
                <forge.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-black tracking-tight text-slate-50">{forge.name}</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {forge.tagline}
              </p>
              <p className="text-sm text-slate-300">{forge.description}</p>
            </div>
          </div>
        </BentoCard>

        {/* KINETIC */}
        <BentoCard hover="lift">
          <div className="relative h-full overflow-hidden rounded-xl">
            <Image
              src={divisionImages.kinetic}
              alt="Digital Marketing"
              fill
              className="object-cover opacity-25 transition-transform duration-500 group-hover:scale-110"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-kinetic/30 via-background/85 to-background/95" />

            <div className="relative p-6">
              <div className="mb-4 inline-flex rounded-lg bg-slate-900/80 p-3 ring-1 ring-slate-800 backdrop-blur-sm">
                <kinetic.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-black tracking-tight text-slate-50">{kinetic.name}</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {kinetic.tagline}
              </p>
              <p className="text-sm text-slate-300">{kinetic.description}</p>
            </div>
          </div>
        </BentoCard>

        {/* NEXUS - Wide card */}
        <BentoCard span="col-2" hover="scale">
          <div className="relative h-full overflow-hidden rounded-xl">
            <Image
              src={divisionImages.nexus}
              alt="Cloud Infrastructure"
              fill
              className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-110"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-nexus/40 via-background/80 to-background/95" />

            <div className="relative flex items-start gap-6 p-6">
              <div className="flex-shrink-0">
                <div className="inline-flex rounded-lg bg-slate-900/80 p-4 ring-1 ring-slate-800 backdrop-blur-sm">
                  <nexus.icon className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-black tracking-tight text-slate-50">
                  {nexus.name}
                </h3>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                  {nexus.tagline}
                </p>
                <p className="text-slate-300">{nexus.description}</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* VECTOR */}
        <BentoCard hover="lift">
          <div className="relative h-full overflow-hidden rounded-xl">
            <Image
              src={divisionImages.vector}
              alt="Supply Chain & Logistics"
              fill
              className="object-cover opacity-25 transition-transform duration-500 group-hover:scale-110"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-vector/30 via-background/85 to-background/95" />

            <div className="relative p-6">
              <div className="mb-4 inline-flex rounded-lg bg-slate-900/80 p-3 ring-1 ring-slate-800 backdrop-blur-sm">
                <vector.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-black tracking-tight text-slate-50">{vector.name}</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {vector.tagline}
              </p>
              <p className="text-sm text-slate-300">{vector.description}</p>
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </Section>
  );
}
