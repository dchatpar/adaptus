import { Metadata } from 'next';
import { Shield } from 'lucide-react';

import { Section, SectionHeader } from '@/components/ui/section';
import { BentoGrid, BentoTile } from '@/components/ui/bento-grid';
import { MagneticButton } from '@/components/ui/magnetic-button';

export const metadata: Metadata = {
  title: 'ADAPTUS SENTINEL™ | Managed IT & Cybersecurity',
  description:
    'Enterprise-grade managed IT services and cybersecurity solutions with 24/7 monitoring and zero-trust architecture.',
};

export default function SentinelPage() {
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
                ADAPTUS SENTINEL™
              </span>
            </h1>
            <p className="mb-6 text-xl font-bold uppercase tracking-wider text-primary md:text-2xl">
              Managed IT & Cybersecurity
            </p>
            <p className="mb-12 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Security isn't a product. It's a posture. We provide 24/7 managed IT and cybersecurity
              services with zero-trust architecture, SOC 2 compliance, and incident response that
              meets enterprise SLAs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <MagneticButton>Request Security Assessment</MagneticButton>
              <MagneticButton className="bg-transparent border-2 border-slate-700 hover:bg-slate-800">
                View Compliance Certifications
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
                  <span>Average breach detection time: 207 days (industry standard)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Internal IT teams overwhelmed by alert fatigue and false positives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Compliance gaps exposing organizations to regulatory penalties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error" />
                  <span>Legacy infrastructure creating expanding attack surfaces</span>
                </li>
              </ul>
            </BentoTile>

            <BentoTile hover="glow">
              <h3 className="mb-4 text-2xl font-black text-slate-50">Our Solution</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>24/7 SOC with sub-15-minute threat detection and response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Zero-trust architecture implementation across all endpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>SOC 2, ISO 27001, HIPAA, and PCI-DSS compliance management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success" />
                  <span>Managed infrastructure with 99.99% uptime SLA</span>
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
          title="Security & IT Services"
          description="Comprehensive managed services for enterprise infrastructure and cybersecurity."
          centered
        />

        <BentoGrid className="lg:grid-cols-2">
          <BentoTile hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">
              24/7 Security Operations Center
            </h3>
            <p className="mb-4 text-sm text-slate-400">
              Round-the-clock monitoring, threat hunting, and incident response. Our SOC analysts
              detect and neutralize threats before they impact operations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                SIEM
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Threat Intel
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                IR
              </span>
            </div>
          </BentoTile>

          <BentoTile hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Managed Infrastructure</h3>
            <p className="mb-4 text-sm text-slate-400">
              Proactive management of servers, networks, and cloud environments. Patch management,
              capacity planning, and performance optimization included.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Cloud
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                On-Prem
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Hybrid
              </span>
            </div>
          </BentoTile>

          <BentoTile hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Compliance Management</h3>
            <p className="mb-4 text-sm text-slate-400">
              Achieve and maintain SOC 2, ISO 27001, HIPAA, PCI-DSS, and GDPR compliance. Continuous
              monitoring and audit-ready documentation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                SOC 2
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                ISO 27001
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                HIPAA
              </span>
            </div>
          </BentoTile>

          <BentoTile hover="lift">
            <h3 className="mb-3 text-xl font-black text-slate-50">Penetration Testing</h3>
            <p className="mb-4 text-sm text-slate-400">
              Quarterly penetration tests and vulnerability assessments. Identify weaknesses before
              attackers do, with detailed remediation roadmaps.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Red Team
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                VA
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                Remediation
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
              <div className="mb-2 text-5xl font-black text-gradient">&lt;15min</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Avg. Threat Response Time
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">99.99%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Infrastructure Uptime SLA
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-gradient">24/7/365</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                SOC Monitoring Coverage
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
              Secure Your Enterprise Infrastructure
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              Schedule a security assessment with our SOC team to identify vulnerabilities and build
              your defense roadmap.
            </p>
            <MagneticButton>Contact SENTINEL Team</MagneticButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
