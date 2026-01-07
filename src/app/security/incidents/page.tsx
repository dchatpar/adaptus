'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  AlertTriangle,
  Clock,
  Users,
  FileText,
  CheckCircle2,
  Bell,
  Mail,
  Phone,
  ExternalLink,
} from 'lucide-react';

export default function IncidentsPage() {
  const responseTeam = [
    { role: 'Incident Commander', availability: '24/7', contact: 'ic@adaptusgroup.com' },
    { role: 'Security Lead', availability: '24/7', contact: 'security@adaptusgroup.com' },
    { role: 'Communications Officer', availability: 'Business Hours', contact: 'comms@adaptusgroup.com' },
    { role: 'Legal Counsel', availability: 'On-Call', contact: 'legal@adaptusgroup.com' },
  ];

  const incidentTypes = [
    {
      severity: 'Critical',
      color: '#E53935',
      examples: ['Data breach', 'Ransomware attack', 'Complete service outage'],
      responseTime: '< 15 minutes',
      escalation: 'Immediate C-level notification',
    },
    {
      severity: 'High',
      color: '#FF6A00',
      examples: ['Unauthorized access attempt', 'DDoS attack', 'Major vulnerability'],
      responseTime: '< 1 hour',
      escalation: 'Security team + management',
    },
    {
      severity: 'Medium',
      color: '#F2A71B',
      examples: ['Phishing campaign', 'Policy violation', 'Minor data leak'],
      responseTime: '< 4 hours',
      escalation: 'Security team',
    },
    {
      severity: 'Low',
      color: '#9AE66E',
      examples: ['Failed login attempts', 'Suspicious activity', 'Configuration drift'],
      responseTime: '< 24 hours',
      escalation: 'Automated ticketing',
    },
  ];

  const responsePhases = [
    {
      phase: '1. Detection',
      icon: Bell,
      description: 'Automated monitoring systems detect anomaly',
      duration: '< 5 min',
      actions: ['SIEM alert triggered', 'On-call engineer paged', 'Initial triage'],
    },
    {
      phase: '2. Containment',
      icon: Shield,
      description: 'Isolate affected systems to prevent spread',
      duration: '15-60 min',
      actions: ['Quarantine compromised assets', 'Block malicious IPs', 'Preserve evidence'],
    },
    {
      phase: '3. Investigation',
      icon: FileText,
      description: 'Root cause analysis and impact assessment',
      duration: '1-24 hrs',
      actions: ['Forensic analysis', 'Scope determination', 'Timeline reconstruction'],
    },
    {
      phase: '4. Remediation',
      icon: CheckCircle2,
      description: 'Eliminate threat and restore normal operations',
      duration: 'Variable',
      actions: ['Patch vulnerabilities', 'Restore from backups', 'System hardening'],
    },
    {
      phase: '5. Post-Incident',
      icon: FileText,
      description: 'Document lessons learned and improve defenses',
      duration: '1-2 weeks',
      actions: ['Incident report', 'Process improvements', 'Training updates'],
    },
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
              <AlertTriangle className="h-4 w-4 text-accent-gold" />
              <span className="text-sm font-semibold text-slate-300">Incident Response</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Rapid Response to <span className="text-gradient">Security Incidents</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300">
              24/7 monitoring, sub-15-minute response times, and a battle-tested incident management framework.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#response-process"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-3 font-semibold text-background transition-all hover:scale-105"
              >
                <Shield className="h-5 w-5" />
                View Response Process
              </Link>
              <Link
                href="tel:+1-800-ADAPTUS"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 font-semibold text-white transition-all hover:bg-slate-800"
              >
                <Phone className="h-5 w-5" />
                Emergency Hotline
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Incident Classification */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Incident Classification & Response Times</h2>
            <p className="text-lg text-slate-400">
              Severity-based triage ensures appropriate resource allocation
            </p>
          </div>
          <div className="space-y-6">
            {incidentTypes.map((incident, index) => (
              <motion.div
                key={incident.severity}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-slate-800 bg-surface p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: incident.color }}
                      />
                      <h3 className="text-2xl font-bold text-white">{incident.severity} Severity</h3>
                      <span
                        className="rounded-full px-3 py-1 text-sm font-semibold"
                        style={{ backgroundColor: `${incident.color}20`, color: incident.color }}
                      >
                        {incident.responseTime}
                      </span>
                    </div>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {incident.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-lg bg-slate-800 px-3 py-1 text-sm text-slate-300"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-400">
                      <span className="font-semibold text-white">Escalation: </span>
                      {incident.escalation}
                    </p>
                  </div>
                  <AlertTriangle className="h-8 w-8" style={{ color: incident.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Process */}
      <section id="response-process" className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">5-Phase Response Framework</h2>
            <p className="text-lg text-slate-400">
              From detection to post-mortem, every incident follows a structured process
            </p>
          </div>
          <div className="space-y-8">
            {responsePhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < responsePhases.length - 1 && (
                  <div className="absolute left-6 top-16 h-full w-0.5 bg-gradient-to-b from-accent-blue to-transparent" />
                )}
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-blue/20">
                    <phase.icon className="h-6 w-6 text-accent-blue" />
                  </div>
                  <div className="flex-1 rounded-xl border border-slate-800 bg-background p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="mb-2 text-2xl font-bold text-white">{phase.phase}</h3>
                        <p className="text-slate-400">{phase.description}</p>
                      </div>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-accent-gold">
                        {phase.duration}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {phase.actions.map((action) => (
                        <div key={action} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-kinetic" />
                          <span className="text-slate-300">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Team */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Incident Response Team</h2>
            <p className="text-lg text-slate-400">
              Dedicated professionals ready to respond 24/7/365
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {responseTeam.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <Users className="mb-4 h-10 w-10 text-accent-blue" />
                <h3 className="mb-2 text-xl font-bold text-white">{member.role}</h3>
                <div className="mb-3 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-kinetic" />
                  <span className="text-sm font-semibold text-kinetic">{member.availability}</span>
                </div>
                <Link
                  href={`mailto:${member.contact}`}
                  className="inline-flex items-center gap-2 text-sm text-accent-gold hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {member.contact}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Reporting */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Transparency & Reporting</h2>
            <p className="text-lg text-slate-400">
              We believe in radical transparency when incidents occur
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card">
              <FileText className="mb-4 h-10 w-10 text-accent-blue" />
              <h3 className="mb-3 text-2xl font-bold text-white">Client Notifications</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span>Immediate notification for critical incidents affecting client data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span>Regular updates every 2 hours during active incidents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span>Detailed post-incident report within 72 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span>Compliance with GDPR breach notification (72-hour window)</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <ExternalLink className="mb-4 h-10 w-10 text-accent-gold" />
              <h3 className="mb-3 text-2xl font-bold text-white">Public Disclosure</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span>Status page for real-time service health monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span>Quarterly security incident summary reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span>Anonymized case studies for industry learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-kinetic" />
                  <span>Regulatory reporting (PCI DSS, HIPAA, SOC 2)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border border-vector/30 bg-vector/5 p-12 text-center">
            <AlertTriangle className="mx-auto mb-4 h-16 w-16 text-vector" />
            <h2 className="mb-4 text-3xl font-bold text-white">Experiencing a Security Incident?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Contact our 24/7 incident response team immediately
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="tel:+1-800-ADAPTUS"
                className="inline-flex items-center gap-2 rounded-lg bg-vector px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                +1-800-ADAPTUS
              </Link>
              <Link
                href="mailto:security@adaptusgroup.com"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-vector px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-vector/10"
              >
                <Mail className="h-5 w-5" />
                security@adaptusgroup.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
