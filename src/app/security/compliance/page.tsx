'use client';

import { motion } from 'framer-motion';
import { Metadata } from 'next';
import { FileCheck, Download, CheckCircle2, Clock } from 'lucide-react';

import { Section, SectionHeader } from '@/components/ui/section';
import { MagneticButton } from '@/components/ui/magnetic-button';

export const metadata: Metadata = {
  title: 'Compliance Certifications | AdaptUs Group Security',
  description:
    'SOC 2 Type II, ISO 27001, GDPR, and PIPEDA compliance certifications with audit reports and compliance matrix.',
};

const certifications = [
  {
    name: 'SOC 2 Type II',
    status: 'Compliant',
    scope: 'Infrastructure, Application, People',
    auditor: 'Deloitte & Touche LLP',
    lastAudit: 'November 2025',
    nextAudit: 'November 2026',
    reportPeriod: '12 months',
    findings: 'Zero material weaknesses',
  },
  {
    name: 'ISO 27001:2022',
    status: 'Certified',
    scope: 'Information Security Management System',
    auditor: 'BSI Group',
    lastAudit: 'September 2025',
    nextAudit: 'September 2026',
    reportPeriod: 'Annual surveillance',
    findings: 'Certified with zero non-conformities',
  },
  {
    name: 'GDPR',
    status: 'Compliant',
    scope: 'Data Processing & Privacy',
    auditor: 'Internal + External DPO',
    lastAudit: 'Continuous',
    nextAudit: 'Ongoing',
    reportPeriod: 'Continuous monitoring',
    findings: 'Compliant with all GDPR requirements',
  },
  {
    name: 'PIPEDA (Canada)',
    status: 'Compliant',
    scope: 'Personal Information Protection',
    auditor: 'Privacy Commissioner of Canada',
    lastAudit: 'August 2025',
    nextAudit: 'August 2026',
    reportPeriod: 'Annual review',
    findings: 'Compliant with PIPEDA requirements',
  },
];

const complianceMatrix = [
  {
    control: 'Access Control & IAM',
    infrastructure: 'Compliant',
    application: 'Compliant',
    people: 'Compliant',
    evidence: 'SOC 2, ISO 27001',
  },
  {
    control: 'Encryption (at rest & in transit)',
    infrastructure: 'Compliant',
    application: 'Compliant',
    people: 'N/A',
    evidence: 'SOC 2, ISO 27001',
  },
  {
    control: 'Vulnerability Management',
    infrastructure: 'Compliant',
    application: 'Compliant',
    people: 'Compliant',
    evidence: 'SOC 2, ISO 27001',
  },
  {
    control: 'Incident Response',
    infrastructure: 'Compliant',
    application: 'Compliant',
    people: 'Compliant',
    evidence: 'SOC 2, ISO 27001',
  },
  {
    control: 'Data Privacy & Protection',
    infrastructure: 'Compliant',
    application: 'Compliant',
    people: 'Compliant',
    evidence: 'GDPR, PIPEDA',
  },
  {
    control: 'Business Continuity & DR',
    infrastructure: 'Compliant',
    application: 'Compliant',
    people: 'Compliant',
    evidence: 'SOC 2, ISO 27001',
  },
  {
    control: 'Security Awareness Training',
    infrastructure: 'N/A',
    application: 'N/A',
    people: 'Compliant',
    evidence: 'SOC 2, ISO 27001',
  },
  {
    control: 'Third-Party Risk Management',
    infrastructure: 'Compliant',
    application: 'Compliant',
    people: 'Compliant',
    evidence: 'SOC 2, ISO 27001',
  },
];

export default function CompliancePage() {
  return (
    <main>
      {/* Hero */}
      <Section className="min-h-[50vh] flex items-center">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800">
              <FileCheck className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4">
              <span className="block text-5xl font-black tracking-tight text-slate-50 md:text-7xl">
                Compliance Certifications
              </span>
            </h1>
            <p className="mb-12 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We maintain industry-leading compliance certifications and undergo regular third-party
              audits. All audit reports are available to customers under NDA.
            </p>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="grid">
        <SectionHeader
          subtitle="Current Status"
          title="Active Certifications"
          description="All certifications are current and actively maintained with annual audits."
          centered
        />

        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-2xl border border-slate-800 bg-surface p-6 transition-all hover:border-primary/50"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-black text-slate-50">{cert.name}</h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                      <CheckCircle2 className="h-3 w-3" />
                      {cert.status}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-slate-400">Scope:</span>
                    <span className="ml-2 text-slate-300">{cert.scope}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400">Auditor:</span>
                    <span className="ml-2 text-slate-300">{cert.auditor}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400">Last Audit:</span>
                    <span className="ml-2 text-slate-300">{cert.lastAudit}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400">Next Audit:</span>
                    <span className="ml-2 text-slate-300">{cert.nextAudit}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400">Findings:</span>
                    <span className="ml-2 text-slate-300">{cert.findings}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover">
                    <Download className="h-4 w-4" />
                    Request Audit Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Compliance Matrix */}
      <Section>
        <SectionHeader
          subtitle="Control Coverage"
          title="Compliance Matrix"
          description="Comprehensive view of security controls across infrastructure, application, and people layers."
          centered
        />

        <div className="container">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-slate-400">
                    Control
                  </th>
                  <th className="p-4 text-center text-sm font-bold uppercase tracking-wider text-slate-400">
                    Infrastructure
                  </th>
                  <th className="p-4 text-center text-sm font-bold uppercase tracking-wider text-slate-400">
                    Application
                  </th>
                  <th className="p-4 text-center text-sm font-bold uppercase tracking-wider text-slate-400">
                    People
                  </th>
                  <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-slate-400">
                    Evidence
                  </th>
                </tr>
              </thead>
              <tbody>
                {complianceMatrix.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-800 transition-colors hover:bg-slate-900/50"
                  >
                    <td className="p-4 font-semibold text-slate-50">{row.control}</td>
                    <td className="p-4 text-center">
                      {row.infrastructure === 'Compliant' ? (
                        <span className="inline-flex items-center gap-1 text-success">
                          <CheckCircle2 className="h-4 w-4" />
                          <span className="text-xs font-semibold">Compliant</span>
                        </span>
                      ) : row.infrastructure === 'In progress' ? (
                        <span className="inline-flex items-center gap-1 text-warning">
                          <Clock className="h-4 w-4" />
                          <span className="text-xs font-semibold">In Progress</span>
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-600">N/A</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.application === 'Compliant' ? (
                        <span className="inline-flex items-center gap-1 text-success">
                          <CheckCircle2 className="h-4 w-4" />
                          <span className="text-xs font-semibold">Compliant</span>
                        </span>
                      ) : row.application === 'In progress' ? (
                        <span className="inline-flex items-center gap-1 text-warning">
                          <Clock className="h-4 w-4" />
                          <span className="text-xs font-semibold">In Progress</span>
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-600">N/A</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.people === 'Compliant' ? (
                        <span className="inline-flex items-center gap-1 text-success">
                          <CheckCircle2 className="h-4 w-4" />
                          <span className="text-xs font-semibold">Compliant</span>
                        </span>
                      ) : row.people === 'In progress' ? (
                        <span className="inline-flex items-center gap-1 text-warning">
                          <Clock className="h-4 w-4" />
                          <span className="text-xs font-semibold">In Progress</span>
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-600">N/A</span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-slate-400">{row.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="elevated">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-50 md:text-5xl">
              Request Audit Reports
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              Full audit reports, penetration test results, and compliance documentation available
              to customers under NDA.
            </p>
            <MagneticButton onClick={() => (window.location.href = '/security/assurance')}>
              Request Security Documentation
            </MagneticButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
