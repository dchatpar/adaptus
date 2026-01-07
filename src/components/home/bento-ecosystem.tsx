'use client';

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
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="mb-6 inline-flex rounded-lg bg-slate-900 p-4 ring-1 ring-slate-800">
                <cortex.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mb-3 text-3xl font-black tracking-tight text-slate-50">
                {cortex.name}
              </h3>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                {cortex.tagline}
              </p>
              <p className="text-slate-400 leading-relaxed">{cortex.description}</p>
            </div>
            <div className="mt-6">
              <a
                href={cortex.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
              >
                Explore CORTEX
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </BentoCard>

        {/* SENTINEL */}
        <BentoCard hover="lift">
          <div className="mb-4 inline-flex rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">
            <sentinel.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-black tracking-tight text-slate-50">{sentinel.name}</h3>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            {sentinel.tagline}
          </p>
          <p className="text-sm text-slate-400">{sentinel.description}</p>
        </BentoCard>

        {/* FORGE */}
        <BentoCard hover="lift">
          <div className="mb-4 inline-flex rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">
            <forge.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-black tracking-tight text-slate-50">{forge.name}</h3>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            {forge.tagline}
          </p>
          <p className="text-sm text-slate-400">{forge.description}</p>
        </BentoCard>

        {/* KINETIC */}
        <BentoCard hover="lift">
          <div className="mb-4 inline-flex rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">
            <kinetic.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-black tracking-tight text-slate-50">{kinetic.name}</h3>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            {kinetic.tagline}
          </p>
          <p className="text-sm text-slate-400">{kinetic.description}</p>
        </BentoCard>

        {/* NEXUS - Wide card */}
        <BentoCard span="col-2" hover="scale">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="inline-flex rounded-lg bg-slate-900 p-4 ring-1 ring-slate-800">
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
              <p className="text-slate-400">{nexus.description}</p>
            </div>
          </div>
        </BentoCard>

        {/* VECTOR */}
        <BentoCard hover="lift">
          <div className="mb-4 inline-flex rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">
            <vector.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-black tracking-tight text-slate-50">{vector.name}</h3>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            {vector.tagline}
          </p>
          <p className="text-sm text-slate-400">{vector.description}</p>
        </BentoCard>
      </BentoGrid>
    </Section>
  );
}
