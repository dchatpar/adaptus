import { Metadata } from 'next';
import { Users } from 'lucide-react';

import { Section, SectionHeader } from '@/components/ui/section';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { MagneticButton } from '@/components/ui/magnetic-button';

export const metadata: Metadata = {
  title: 'ADAPTUS NEXUS™ | Talent Solutions & Workforce Strategy',
  description:
    'Enterprise talent acquisition, workforce planning, and organizational development for global teams.',
};

export default function NexusPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800">
              <Users className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4">
              <span className="block text-5xl font-black tracking-tight text-slate-50 md:text-7xl">
                ADAPTUS NEXUS™
              </span>
            </h1>
            <p className="mb-6 text-xl font-bold uppercase tracking-wider text-primary md:text-2xl">
              Talent Solutions
            </p>
            <p className="mb-12 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Talent is infrastructure. We build hiring systems, workforce planning models, and
              organizational structures that scale. From executive search to offshore team building,
              we deliver talent strategies for global operations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <MagneticButton>Start Hiring</MagneticButton>
              <MagneticButton className="bg-transparent border-2 border-slate-700 hover:bg-slate-800">
                View Talent Network
              </MagneticButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem → Solution */}
      <Section background="grid">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <BentoCard hover="lift">
              <h3 className="mb-4 text-2xl font-black text-slate-50">The Problem</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Critical roles unfilled for 90+ days, blocking product roadmaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Offshore teams with high turnover and communication gaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>No workforce planning model to forecast hiring needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Executive search firms charging 30%+ with poor culture fit</span>
                </li>
              </ul>
            </BentoCard>

            <BentoCard hover="glow">
              <h3 className="mb-4 text-2xl font-black text-slate-50">Our Solution</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>
                    Embedded recruiters with 15-day average time-to-fill for critical roles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>
                    Managed offshore teams in Vancouver, Dubai, Mumbai with cultural alignment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Workforce planning models with 12-month hiring roadmaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>
                    Executive search with guaranteed culture fit and 12-month retention SLA
                  </span>
                </li>
              </ul>
            </BentoCard>
          </div>
        </div>
      </Section>

      {/* Sub-Services */}
      <Section>
        <SectionHeader
          subtitle="Capabilities"
          title="Talent & Workforce Services"
          description="End-to-end talent solutions for enterprise organizations and high-growth companies."
          centered
        />

        <BentoGrid className="lg:grid-cols-2">
          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Executive Search</h3>
            <p className="mb-4 text-sm text-slate-400">
              C-suite and VP-level placements. Deep industry networks, behavioral assessments, and
              culture-fit guarantees. 12-month retention SLA.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                C-Suite
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                VP/Director
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Assessment
              </span>
            </div>
          </BentoCard>

          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Technical Recruiting</h3>
            <p className="mb-4 text-sm text-slate-400">
              Engineers, architects, and technical leaders. Source from top-tier talent pools,
              technical screening, and rapid placement (15-day avg).
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Engineering
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                DevOps
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Data Science
              </span>
            </div>
          </BentoCard>

          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Offshore Team Building</h3>
            <p className="mb-4 text-sm text-slate-400">
              Build and manage offshore development teams in Dubai and Mumbai. Full HR support,
              cultural training, and retention programs.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Dubai
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Mumbai
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Managed Teams
              </span>
            </div>
          </BentoCard>

          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Workforce Planning</h3>
            <p className="mb-4 text-sm text-slate-400">
              Strategic workforce models, org design, and hiring roadmaps. Forecast headcount needs
              and budget for 12-24 months.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Planning
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Org Design
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Forecasting
              </span>
            </div>
          </BentoCard>
        </BentoGrid>
      </Section>

      {/* KPIs */}
      <Section background="elevated">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">15 days</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Avg. Time-to-Fill (Critical Roles)
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">94%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                12-Month Retention Rate
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">3 Cities</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Global Talent Hubs
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-50 md:text-5xl">
              Build Your Global Team
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              Discuss your hiring needs and workforce strategy with our talent advisors.
            </p>
            <MagneticButton>Contact NEXUS Team</MagneticButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
