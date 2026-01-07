'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  Award,
  FileCheck,
  Download,
  ExternalLink,
  CheckCircle2,
  Lock,
  Eye,
  Users,
  Building2,
  Calendar,
} from 'lucide-react';

export default function AssurancePage() {
  const certifications = [
    {
      name: 'SOC 2 Type II',
      issuer: 'AICPA',
      status: 'Active',
      validUntil: 'December 2026',
      scope: 'Security, Availability, Confidentiality',
      icon: Award,
      color: '#1565C0',
    },
    {
      name: 'ISO 27001:2022',
      issuer: 'ISO/IEC',
      status: 'Active',
      validUntil: 'March 2027',
      scope: 'Information Security Management',
      icon: Shield,
      color: '#6E33FF',
    },
    {
      name: 'GDPR Compliant',
      issuer: 'EU Commission',
      status: 'Verified',
      validUntil: 'Ongoing',
      scope: 'Data Protection & Privacy',
      icon: Lock,
      color: '#9AE66E',
    },
    {
      name: 'PIPEDA Compliant',
      issuer: 'OPC Canada',
      status: 'Verified',
      validUntil: 'Ongoing',
      scope: 'Canadian Privacy Law',
      icon: Eye,
      color: '#F2A71B',
    },
  ];

  const auditReports = [
    {
      title: 'SOC 2 Type II Report',
      period: 'January 2025 - December 2025',
      auditor: 'Deloitte & Touche LLP',
      fileSize: '2.4 MB',
      restricted: true,
    },
    {
      title: 'ISO 27001 Certificate',
      period: 'March 2024 - March 2027',
      auditor: 'BSI Group',
      fileSize: '156 KB',
      restricted: false,
    },
    {
      title: 'Penetration Test Report',
      period: 'Q4 2025',
      auditor: 'Offensive Security',
      fileSize: '1.8 MB',
      restricted: true,
    },
    {
      title: 'GDPR Compliance Assessment',
      period: '2025 Annual Review',
      auditor: 'TrustArc',
      fileSize: '890 KB',
      restricted: true,
    },
  ];

  const assuranceActivities = [
    {
      activity: 'Third-Party Audits',
      frequency: 'Annual',
      description: 'Independent SOC 2 and ISO 27001 audits by Big 4 firms',
      icon: Users,
    },
    {
      activity: 'Penetration Testing',
      frequency: 'Quarterly',
      description: 'Offensive security testing by certified ethical hackers',
      icon: Shield,
    },
    {
      activity: 'Vulnerability Scanning',
      frequency: 'Continuous',
      description: 'Automated scanning with Tenable, Qualys, and Rapid7',
      icon: Eye,
    },
    {
      activity: 'Code Reviews',
      frequency: 'Every Release',
      description: 'Manual security code review + SAST/DAST automation',
      icon: FileCheck,
    },
    {
      activity: 'Compliance Assessments',
      frequency: 'Quarterly',
      description: 'GDPR, PIPEDA, CCPA, and industry-specific regulations',
      icon: Building2,
    },
    {
      activity: 'Security Training',
      frequency: 'Quarterly',
      description: 'Mandatory security awareness for all employees',
      icon: Users,
    },
  ];

  const trustMetrics = [
    { metric: '99.99%', label: 'Uptime SLA', description: 'Over the past 12 months' },
    { metric: '< 15 min', label: 'Incident Response', description: 'Average time to first response' },
    { metric: '0', label: 'Data Breaches', description: 'In company history (since 2018)' },
    { metric: '100%', label: 'Audit Pass Rate', description: 'SOC 2 and ISO 27001 compliance' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-surface to-background py-20">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2">
              <Award className="h-4 w-4 text-accent-gold" />
              <span className="text-sm font-semibold text-slate-300">Security Assurance</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Trust Through <span className="text-gradient">Verified Compliance</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300">
              Independent audits, continuous testing, and transparent reporting. Our security posture is validated by industry-leading third parties.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#certifications"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-3 font-semibold text-background transition-all hover:scale-105"
              >
                <Award className="h-5 w-5" />
                View Certifications
              </Link>
              <Link
                href="#audit-reports"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 font-semibold text-white transition-all hover:bg-slate-800"
              >
                <Download className="h-5 w-5" />
                Audit Reports
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="mb-2 text-5xl font-black text-accent-gold">{item.metric}</div>
                <div className="mb-2 text-lg font-bold text-white">{item.label}</div>
                <div className="text-sm text-slate-400">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Active Certifications & Compliance</h2>
            <p className="text-lg text-slate-400">
              Independently verified by leading audit firms
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-slate-800 bg-background p-6"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <cert.icon className="h-7 w-7" style={{ color: cert.color }} />
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-sm font-semibold"
                    style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
                  >
                    {cert.status}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">{cert.name}</h3>
                <p className="mb-4 text-slate-400">{cert.scope}</p>
                <div className="space-y-2 border-t border-slate-800 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Issuer:</span>
                    <span className="font-semibold text-slate-300">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Valid Until:</span>
                    <span className="font-semibold text-slate-300">{cert.validUntil}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance Activities */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Continuous Assurance Activities</h2>
            <p className="text-lg text-slate-400">
              Ongoing validation of our security controls
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assuranceActivities.map((activity, index) => (
              <motion.div
                key={activity.activity}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="mb-4 flex items-center justify-between">
                  <activity.icon className="h-10 w-10 text-accent-blue" />
                  <span className="rounded-full bg-accent-gold/20 px-3 py-1 text-sm font-semibold text-accent-gold">
                    {activity.frequency}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{activity.activity}</h3>
                <p className="text-slate-400">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Reports */}
      <section id="audit-reports" className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Audit Reports & Documentation</h2>
            <p className="text-lg text-slate-400">
              Request access to our compliance documentation
            </p>
          </div>
          <div className="space-y-4">
            {auditReports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-background p-6"
              >
                <div className="flex items-center gap-4">
                  <FileCheck className="h-10 w-10 text-accent-blue" />
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-white">{report.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {report.period}
                      </span>
                      <span>•</span>
                      <span>Auditor: {report.auditor}</span>
                      <span>•</span>
                      <span>{report.fileSize}</span>
                    </div>
                  </div>
                </div>
                {report.restricted ? (
                  <Link
                    href="/contact?subject=Audit Report Request"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
                  >
                    <Lock className="h-4 w-4" />
                    Request Access
                  </Link>
                ) : (
                  <button className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-background transition-all hover:scale-105">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-accent-blue/30 bg-accent-blue/5 p-6">
            <div className="flex items-start gap-4">
              <Lock className="h-6 w-6 flex-shrink-0 text-accent-blue" />
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">Restricted Documents</h3>
                <p className="text-slate-300">
                  Some audit reports contain sensitive information and are only available to clients and prospects under NDA.
                  Contact our compliance team to request access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Validation */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">External Validation</h2>
            <p className="text-lg text-slate-400">
              Our security posture is continuously validated by independent third parties
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card">
              <ExternalLink className="mb-4 h-10 w-10 text-accent-blue" />
              <h3 className="mb-3 text-2xl font-bold text-white">Third-Party Auditors</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span><strong>Deloitte & Touche LLP</strong> - SOC 2 Type II audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span><strong>BSI Group</strong> - ISO 27001 certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span><strong>Offensive Security</strong> - Penetration testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span><strong>TrustArc</strong> - Privacy compliance assessments</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <Shield className="mb-4 h-10 w-10 text-accent-gold" />
              <h3 className="mb-3 text-2xl font-bold text-white">Security Tools & Platforms</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span><strong>Tenable Nessus</strong> - Vulnerability management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span><strong>Splunk Enterprise Security</strong> - SIEM platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span><strong>Snyk & SonarQube</strong> - Code security analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span><strong>Vanta</strong> - Continuous compliance monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface">
        <div className="container">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-background to-surface p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Need Compliance Documentation?</h2>
            <p className="mb-8 text-lg text-slate-400">
              Request access to our SOC 2 reports, ISO certificates, and security assessments
            </p>
            <Link
              href="/contact?subject=Compliance Documentation Request"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-8 py-4 text-lg font-semibold text-background transition-all hover:scale-105"
            >
              <FileCheck className="h-5 w-5" />
              Request Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
