import { Metadata } from 'next';
import { Brain } from 'lucide-react';

import { Section, SectionHeader } from '@/components/ui/section';
import { BentoGrid, BentoTile } from '@/components/ui/bento-grid';
import { MagneticButton } from '@/components/ui/magnetic-button';

export const metadata: Metadata = {
  title: 'ADAPTUS CORTEX™ | AI & Automation',
  description:
    'Enterprise AI agents and intelligent automation solutions for global organizations.',
};

export default function CortexPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800">
              <Brain className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4">
              <span className="block text-5xl font-black tracking-tight text-slate-50 md:text-7xl">
                ADAPTUS CORTEX™
              </span>
            </h1>
            <p className="mb-6 text-xl font-bold uppercase tracking-wider text-primary md:text-2xl">
              AI & Automation
            </p>
            <p className="mb-12 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We don't deploy AI for novelty. We deploy it when it meaningfully improves outcomes.
              Our intelligent automation systems are built for enterprise scale, regulatory
              compliance, and measurable ROI.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <MagneticButton>Schedule Consultation</MagneticButton>
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
            <BentoTile>
              <h3 className="mb-4 text-2xl font-black text-slate-50">The Problem</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Manual processes consuming thousands of employee hours monthly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Inconsistent decision-making across departments and regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Legacy AI implementations that don't integrate with existing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Compliance risks from unauditable AI decision paths</span>
                </li>
              </ul>
            </BentoTile>

            <BentoTile>
              <h3 className="mb-4 text-2xl font-black text-slate-50">Our Solution</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>
                    Custom AI agents trained on your data, workflows, and compliance needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Seamless integration with SAP, Salesforce, Oracle, and custom systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Full audit trails and explainable AI for regulatory compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Measured ROI tracking with guaranteed performance benchmarks</span>
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
          title="AI Solutions Portfolio"
          description="Specialized AI agents and automation systems for enterprise operations."
          centered
        />

        <BentoGrid className="lg:grid-cols-2">
          <BentoTile>
            <h3 className="mb-3 text-xl font-black text-slate-50">
              Intelligent Document Processing
            </h3>
            <p className="mb-4 text-sm text-slate-400">
              Extract, classify, and process documents at scale with 99.7% accuracy. Handles
              invoices, contracts, compliance forms, and unstructured data.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                OCR
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                NLP
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Classification
              </span>
            </div>
          </BentoTile>

          <BentoTile>
            <h3 className="mb-3 text-xl font-black text-slate-50">Predictive Analytics</h3>
            <p className="mb-4 text-sm text-slate-400">
              Forecast demand, identify risks, and optimize resource allocation using machine
              learning models trained on your historical data.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Forecasting
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Risk Analysis
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Optimization
              </span>
            </div>
          </BentoTile>

          <BentoTile>
            <h3 className="mb-3 text-xl font-black text-slate-50">Process Automation</h3>
            <p className="mb-4 text-sm text-slate-400">
              Automate repetitive workflows across departments. From procurement to HR to finance,
              reduce manual work by 60-80%.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                RPA
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Workflow
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Integration
              </span>
            </div>
          </BentoTile>

          <BentoTile>
            <h3 className="mb-3 text-xl font-black text-slate-50">Conversational AI</h3>
            <p className="mb-4 text-sm text-slate-400">
              Deploy intelligent chatbots and voice assistants for customer service, internal
              support, and knowledge management.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Chatbots
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Voice AI
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                NLU
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
              <div className="mb-2 text-5xl font-black text-gradient">87%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Avg. Process Time Reduction
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">99.7%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Document Processing Accuracy
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">24/7</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Autonomous Operation
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
              Ready to Deploy Enterprise AI?
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              Schedule a technical consultation with our AI architects to discuss your automation
              roadmap.
            </p>
            <MagneticButton>Contact CORTEX Team</MagneticButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
