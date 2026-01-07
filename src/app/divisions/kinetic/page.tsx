import { Metadata } from 'next';
import { TrendingUp } from 'lucide-react';

import { Section, SectionHeader } from '@/components/ui/section';
import { BentoGrid, BentoTile } from '@/components/ui/bento-grid';
import { MagneticButton } from '@/components/ui/magnetic-button';

export const metadata: Metadata = {
  title: 'ADAPTUS KINETIC™ | Digital Marketing & Growth',
  description:
    'Performance marketing and growth engineering for enterprise brands. Data-driven campaigns with measurable ROI.',
};

export default function KineticPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800">
              <TrendingUp className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4">
              <span className="block text-5xl font-black tracking-tight text-slate-50 md:text-7xl">
                ADAPTUS KINETIC™
              </span>
            </h1>
            <p className="mb-6 text-xl font-bold uppercase tracking-wider text-primary md:text-2xl">
              Digital Marketing & Growth
            </p>
            <p className="mb-12 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Marketing without measurement is guesswork. We build performance marketing systems
              with full-funnel attribution, predictable CAC, and campaigns that scale profitably. No
              vanity metrics. Just revenue.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <MagneticButton>Request Growth Audit</MagneticButton>
              <MagneticButton className="bg-transparent border-2 border-slate-700 hover:bg-slate-800">
                View Campaign Results
              </MagneticButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem → Solution */}
      <Section background="grid">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <BentoTile hover="lift">
              <h3 className="mb-4 text-2xl font-black text-slate-50">The Problem</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Marketing spend increasing while CAC rises and LTV stagnates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Attribution broken across channels, can't identify what's working</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Agency partners optimizing for impressions, not revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>No experimentation framework to test and iterate systematically</span>
                </li>
              </ul>
            </BentoTile>

            <BentoTile hover="glow">
              <h3 className="mb-4 text-2xl font-black text-slate-50">Our Solution</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>
                    Full-funnel attribution with server-side tracking and data warehousing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Performance campaigns optimized for pipeline and revenue, not clicks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>
                    Growth engineering: A/B testing infrastructure and experimentation culture
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Predictable CAC with monthly reporting on unit economics</span>
                </li>
              </ul>
            </BentoTile>
          </div>
        </div>
      </Section>

      {/* Sub-Services */}
      <Section>
        <SectionHeader
          subtitle="Capabilities"
          title="Growth Marketing Services"
          description="Data-driven marketing and growth engineering for enterprise scale."
          centered
        />

        <BentoGrid className="lg:grid-cols-2">
          <BentoTile hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Performance Marketing</h3>
            <p className="mb-4 text-sm text-slate-400">
              Paid search, social, display, and programmatic campaigns. Multi-touch attribution,
              incrementality testing, and budget optimization across channels.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Google Ads
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                LinkedIn
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Programmatic
              </span>
            </div>
          </BentoTile>

          <BentoTile hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">SEO & Content Strategy</h3>
            <p className="mb-4 text-sm text-slate-400">
              Technical SEO, content pillar strategy, and programmatic SEO for enterprise sites.
              Rank for high-intent keywords and build organic pipeline.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Technical SEO
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Content
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Link Building
              </span>
            </div>
          </BentoTile>

          <BentoTile hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Conversion Rate Optimization</h3>
            <p className="mb-4 text-sm text-slate-400">
              A/B testing infrastructure, experimentation roadmap, and UX optimization. Increase
              conversion rates across landing pages, product flows, and checkout.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                A/B Testing
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                UX Research
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Analytics
              </span>
            </div>
          </BentoTile>

          <BentoTile hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">
              Marketing Analytics & Attribution
            </h3>
            <p className="mb-4 text-sm text-slate-400">
              Build data warehouses, attribution models, and dashboards. Track every dollar from
              impression to closed deal with server-side tracking.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Attribution
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Data Warehouse
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Dashboards
              </span>
            </div>
          </BentoTile>
        </BentoGrid>
      </Section>

      {/* KPIs */}
      <Section background="elevated">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">-42%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Avg. CAC Reduction (6 months)
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">3.2x</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Avg. ROAS Improvement
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">98%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Attribution Accuracy
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
              Scale Your Growth Engine
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              Get a comprehensive growth audit analyzing your current CAC, attribution gaps, and
              optimization opportunities.
            </p>
            <MagneticButton>Contact KINETIC Team</MagneticButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
