import { Metadata } from 'next';
import { Truck } from 'lucide-react';

import { Section, SectionHeader } from '@/components/ui/section';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { MagneticButton } from '@/components/ui/magnetic-button';

export const metadata: Metadata = {
  title: 'ADAPTUS VECTOR™ | Logistics & Distribution',
  description:
    'Enterprise logistics optimization, supply chain management, and distribution network design for global operations.',
};

export default function VectorPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800">
              <Truck className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4">
              <span className="block text-5xl font-black tracking-tight text-slate-50 md:text-7xl">
                ADAPTUS VECTOR™
              </span>
            </h1>
            <p className="mb-6 text-xl font-bold uppercase tracking-wider text-primary md:text-2xl">
              Logistics & Distribution
            </p>
            <p className="mb-12 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Logistics is precision engineering. We optimize supply chains, design distribution
              networks, and build warehouse management systems that reduce costs and improve
              delivery times. From route optimization to inventory forecasting.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <MagneticButton>Optimize Supply Chain</MagneticButton>
              <MagneticButton className="bg-transparent border-2 border-slate-700 hover:bg-slate-800">
                View Case Studies
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
                  <span>Logistics costs consuming 15-20% of revenue with no visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Inventory stockouts and overstocking happening simultaneously</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Manual route planning leading to inefficient delivery schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>No real-time tracking across multi-modal transportation</span>
                </li>
              </ul>
            </BentoCard>

            <BentoCard hover="glow">
              <h3 className="mb-4 text-2xl font-black text-slate-50">Our Solution</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>AI-powered route optimization reducing fuel costs by 25-35%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Predictive inventory management with demand forecasting models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Real-time tracking across air, sea, rail, and road transportation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Warehouse automation and WMS integration for 99.9% accuracy</span>
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
          title="Logistics & Supply Chain Services"
          description="End-to-end logistics optimization and distribution network design."
          centered
        />

        <BentoGrid className="lg:grid-cols-2">
          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Route Optimization</h3>
            <p className="mb-4 text-sm text-slate-400">
              AI-powered routing algorithms for last-mile delivery, long-haul trucking, and
              multi-stop routes. Reduce fuel costs and improve on-time delivery.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Last Mile
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Fleet Mgmt
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                AI Routing
              </span>
            </div>
          </BentoCard>

          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Warehouse Management Systems</h3>
            <p className="mb-4 text-sm text-slate-400">
              Custom WMS implementation and integration. Barcode scanning, pick/pack optimization,
              and real-time inventory tracking with 99.9% accuracy.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                WMS
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Automation
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                RFID
              </span>
            </div>
          </BentoCard>

          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Supply Chain Visibility</h3>
            <p className="mb-4 text-sm text-slate-400">
              Real-time tracking and visibility across your entire supply chain. IoT sensors, GPS
              tracking, and predictive ETAs for shipments.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Tracking
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                IoT
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Analytics
              </span>
            </div>
          </BentoCard>

          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Demand Forecasting</h3>
            <p className="mb-4 text-sm text-slate-400">
              Machine learning models to predict demand, optimize inventory levels, and prevent
              stockouts. Reduce carrying costs by 20-30%.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Forecasting
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                ML Models
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Inventory
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
              <div className="mb-2 text-5xl font-black text-gradient">-32%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Avg. Logistics Cost Reduction
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">99.9%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Inventory Accuracy
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">98%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                On-Time Delivery Rate
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
              Optimize Your Supply Chain
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              Get a comprehensive logistics audit analyzing your current costs, inefficiencies, and
              optimization opportunities.
            </p>
            <MagneticButton>Contact VECTOR Team</MagneticButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
