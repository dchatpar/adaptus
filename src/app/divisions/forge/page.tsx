import { Metadata } from 'next';
import { Code2 } from 'lucide-react';

import { Section, SectionHeader } from '@/components/ui/section';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { MagneticButton } from '@/components/ui/magnetic-button';

export const metadata: Metadata = {
  title: 'ADAPTUS FORGE™ | Custom Software Development',
  description:
    'Enterprise software development with modern architectures, scalable systems, and long-term maintainability.',
};

export default function ForgePage() {
  return (
    <main>
      {/* Hero */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800">
              <Code2 className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4">
              <span className="block text-5xl font-black tracking-tight text-slate-50 md:text-7xl">
                ADAPTUS FORGE™
              </span>
            </h1>
            <p className="mb-6 text-xl font-bold uppercase tracking-wider text-primary md:text-2xl">
              Custom Software Development
            </p>
            <p className="mb-12 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We build software that lasts. Not MVPs that collapse under scale. Our engineering
              teams deliver production-grade systems with modern architectures, comprehensive
              testing, and documentation that doesn't lie.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <MagneticButton>Start a Project</MagneticButton>
              <MagneticButton className="bg-transparent border-2 border-slate-700 hover:bg-slate-800">
                View Technical Portfolio
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
                  <span>Legacy systems that can't scale beyond initial requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Technical debt accumulating faster than feature velocity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Offshore teams delivering code that requires complete rewrites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>No testing strategy, leading to production incidents every release</span>
                </li>
              </ul>
            </BentoCard>

            <BentoCard hover="glow">
              <h3 className="mb-4 text-2xl font-black text-slate-50">Our Solution</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>
                    Microservices and event-driven architectures built for horizontal scale
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Test coverage above 80%, with integration and E2E automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Senior engineers (8+ years) based in Vancouver, Dubai, Mumbai</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>CI/CD pipelines with automated testing and zero-downtime deployments</span>
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
          title="Development Services"
          description="Full-stack engineering for web, mobile, and cloud-native applications."
          centered
        />

        <BentoGrid className="lg:grid-cols-2">
          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Enterprise Web Applications</h3>
            <p className="mb-4 text-sm text-slate-400">
              React, Next.js, TypeScript for frontend. Node.js, Python, Go for backend. PostgreSQL,
              MongoDB for data. Built for millions of users.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                React
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Next.js
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                TypeScript
              </span>
            </div>
          </BentoCard>

          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Mobile Applications</h3>
            <p className="mb-4 text-sm text-slate-400">
              Native iOS and Android development. React Native for cross-platform. Offline-first
              architecture and biometric authentication.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                iOS
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Android
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                React Native
              </span>
            </div>
          </BentoCard>

          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Cloud-Native Architecture</h3>
            <p className="mb-4 text-sm text-slate-400">
              Kubernetes, Docker, serverless functions. AWS, GCP, Azure certified. Auto-scaling,
              multi-region deployments, disaster recovery.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                K8s
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                AWS
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Serverless
              </span>
            </div>
          </BentoCard>

          <BentoCard hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">API Development & Integration</h3>
            <p className="mb-4 text-sm text-slate-400">
              RESTful and GraphQL APIs. Third-party integrations (Salesforce, SAP, Oracle). Webhook
              systems and real-time data pipelines.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                REST
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                GraphQL
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Webhooks
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
              <div className="mb-2 text-5xl font-black text-gradient">&gt;80%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Test Coverage Standard
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">8+yrs</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Avg. Engineer Experience
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">Zero</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Downtime Deployments
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
              Build Software That Scales
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              Discuss your technical requirements with our engineering leads and get a detailed
              architecture proposal.
            </p>
            <MagneticButton>Contact FORGE Team</MagneticButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
