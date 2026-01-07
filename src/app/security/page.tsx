'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, FileCheck, Eye, AlertTriangle, Award } from 'lucide-react';

import { Section, SectionHeader } from '@/components/ui/section';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { MagneticButton } from '@/components/ui/magnetic-button';

export const metadata: Metadata = {
  title: 'Security & Compliance | AdaptUs Group',
  description:
    'Enterprise-grade security controls, compliance certifications, and transparent security practices. SOC 2, ISO 27001, GDPR compliant.',
};

const securityLinks = [
  {
    title: 'Compliance Certifications',
    description: 'SOC 2 Type II, ISO 27001, GDPR, PIPEDA compliance status and audit reports.',
    href: '/security/compliance',
    icon: FileCheck,
  },
  {
    title: 'Security Controls',
    description:
      'Technical controls, encryption standards, access management, and infrastructure security.',
    href: '/security/controls',
    icon: Lock,
  },
  {
    title: 'Privacy & Data Protection',
    description: 'Data processing agreements, privacy policies, and data residency information.',
    href: '/security/privacy',
    icon: Eye,
  },
  {
    title: 'Incident Response',
    description: 'Security incident procedures, notification SLAs, and transparency reports.',
    href: '/security/incidents',
    icon: AlertTriangle,
  },
  {
    title: 'Security Assurance',
    description: 'Request audit reports, penetration test results, and security documentation.',
    href: '/security/assurance',
    icon: Award,
  },
];

export default function SecurityPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4">
              <span className="block text-5xl font-black tracking-tight text-slate-50 md:text-7xl">
                Security & Compliance
              </span>
            </h1>
            <p className="mb-12 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Security is not a checkbox. It's a continuous practice. We maintain enterprise-grade
              security controls, undergo regular third-party audits, and operate with full
              transparency on our security posture.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/security/assurance"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
              >
                Request Security Documentation
              </Link>
              <Link
                href="/security/compliance"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800"
              >
                View Compliance Status
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Security Claims */}
      <Section background="elevated">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">SOC 2</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Type II Certified
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">ISO 27001</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Certified
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">99.99%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Infrastructure Uptime
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Security Sections */}
      <Section>
        <SectionHeader
          subtitle="Security Documentation"
          title="Comprehensive Security Program"
          description="Explore our security controls, compliance certifications, and transparent security practices."
          centered
        />

        <BentoGrid className="lg:grid-cols-2">
          {securityLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <BentoCard hover="lift" className="h-full cursor-pointer">
                <div className="mb-4 inline-flex rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">
                  <link.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-black tracking-tight text-slate-50">
                  {link.title}
                </h3>
                <p className="text-sm text-slate-400">{link.description}</p>
              </BentoCard>
            </Link>
          ))}
        </BentoGrid>
      </Section>

      {/* Core Security Principles */}
      <Section background="grid">
        <div className="container">
          <SectionHeader
            subtitle="Our Approach"
            title="Security Principles"
            description="The foundational principles that guide our security program."
            centered
          />

          <div className="mx-auto max-w-4xl space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-surface p-6">
              <h3 className="mb-3 text-xl font-black text-slate-50">Defense in Depth</h3>
              <p className="text-slate-400">
                Multiple layers of security controls across network, application, and data layers.
                No single point of failure in our security architecture.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-surface p-6">
              <h3 className="mb-3 text-xl font-black text-slate-50">Zero Trust Architecture</h3>
              <p className="text-slate-400">
                Never trust, always verify. Every request is authenticated, authorized, and
                encrypted regardless of network location.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-surface p-6">
              <h3 className="mb-3 text-xl font-black text-slate-50">Continuous Monitoring</h3>
              <p className="text-slate-400">
                24/7 security operations center with real-time threat detection, automated response,
                and human oversight for critical incidents.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-surface p-6">
              <h3 className="mb-3 text-xl font-black text-slate-50">
                Transparency & Accountability
              </h3>
              <p className="text-slate-400">
                Regular third-party audits, public security documentation, and transparent incident
                disclosure when appropriate.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-50 md:text-5xl">
              Questions About Our Security?
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              Our security team is available to discuss our controls, provide audit reports, and
              answer technical security questions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
            >
              Contact Security Team
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
