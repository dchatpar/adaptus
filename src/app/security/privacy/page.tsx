'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserX,
  Cookie,
  Mail,
  FileText,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

export default function PrivacyPage() {
  const privacyPrinciples = [
    {
      icon: Lock,
      title: 'Data Minimization',
      description: 'We collect only what we need, nothing more.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication about data usage and processing.',
    },
    {
      icon: UserX,
      title: 'User Control',
      description: 'You own your data. Request access, correction, or deletion anytime.',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade encryption and access controls protect your information.',
    },
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      items: ['Name, email, phone', 'Job title, company', 'Business contact details'],
      retention: '7 years post-engagement',
      purpose: 'Client relationship management, contract execution',
    },
    {
      category: 'Technical Data',
      items: ['IP addresses, device info', 'Browser type, OS', 'Session logs'],
      retention: '90 days',
      purpose: 'Security monitoring, performance optimization',
    },
    {
      category: 'Usage Analytics',
      items: ['Page views, click patterns', 'Feature usage', 'Time on site'],
      retention: '24 months',
      purpose: 'Product improvement, UX optimization',
    },
    {
      category: 'Financial Records',
      items: ['Invoices, payment history', 'Billing addresses', 'Tax information'],
      retention: '10 years (regulatory)',
      purpose: 'Accounting, compliance, audit trail',
    },
  ];

  const userRights = [
    { right: 'Right to Access', description: 'Request a copy of your personal data' },
    { right: 'Right to Rectification', description: 'Correct inaccurate or incomplete data' },
    { right: 'Right to Erasure', description: 'Request deletion of your data ("right to be forgotten")' },
    { right: 'Right to Portability', description: 'Receive your data in a machine-readable format' },
    { right: 'Right to Object', description: 'Object to processing for marketing or profiling' },
    { right: 'Right to Restrict', description: 'Limit how we process your data' },
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
              <Shield className="h-4 w-4 text-accent-blue" />
              <span className="text-sm font-semibold text-slate-300">Privacy & Data Protection</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Your Privacy is <span className="text-gradient">Non-Negotiable</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300">
              We handle your data with the same rigor we apply to Fortune 500 clients. GDPR, PIPEDA, and SOC 2 compliant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#data-practices"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-3 font-semibold text-background transition-all hover:scale-105"
              >
                <FileText className="h-5 w-5" />
                View Data Practices
              </Link>
              <Link
                href="#your-rights"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 font-semibold text-white transition-all hover:bg-slate-800"
              >
                <UserX className="h-5 w-5" />
                Your Rights
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Our Privacy Principles</h2>
            <p className="text-lg text-slate-400">The foundation of our data protection approach</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-blue/10">
                  <principle.icon className="h-6 w-6 text-accent-blue" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{principle.title}</h3>
                <p className="text-slate-400">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section id="data-practices" className="section bg-surface">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-bold text-white">Data We Collect & Why</h2>
            <p className="text-lg text-slate-400">
              Transparent breakdown of data categories, retention periods, and processing purposes
            </p>
          </div>
          <div className="space-y-6">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-slate-800 bg-background p-6"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Database className="h-8 w-8 text-accent-blue" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-1 text-sm font-semibold text-slate-500">Retention Period</p>
                    <p className="text-slate-300">{category.retention}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-slate-500">Processing Purpose</p>
                    <p className="text-slate-300">{category.purpose}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights (GDPR/PIPEDA) */}
      <section id="your-rights" className="section">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-bold text-white">Your Data Rights</h2>
            <p className="text-lg text-slate-400">
              Under GDPR, PIPEDA, and CCPA, you have comprehensive control over your personal data
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {userRights.map((item, index) => (
              <motion.div
                key={item.right}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-slate-800 bg-surface p-6"
              >
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-kinetic" />
                  <h3 className="text-lg font-bold text-white">{item.right}</h3>
                </div>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 rounded-xl border border-accent-gold/30 bg-accent-gold/5 p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 flex-shrink-0 text-accent-gold" />
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">Exercise Your Rights</h3>
                <p className="mb-4 text-slate-300">
                  To request access, correction, or deletion of your personal data, contact our Data Protection Officer:
                </p>
                <Link
                  href="mailto:privacy@adaptusgroup.com"
                  className="inline-flex items-center gap-2 font-semibold text-accent-gold hover:underline"
                >
                  <Mail className="h-5 w-5" />
                  privacy@adaptusgroup.com
                </Link>
                <p className="mt-2 text-sm text-slate-400">
                  We respond to all requests within 30 days as required by law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies & Tracking */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-bold text-white">Cookies & Tracking Technologies</h2>
            <p className="text-lg text-slate-400">
              We use cookies to improve your experience and analyze site performance
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="card">
              <Cookie className="mb-4 h-10 w-10 text-accent-blue" />
              <h3 className="mb-2 text-xl font-bold text-white">Essential Cookies</h3>
              <p className="mb-4 text-slate-400">
                Required for basic site functionality. Cannot be disabled.
              </p>
              <span className="inline-block rounded-full bg-kinetic/20 px-3 py-1 text-sm font-semibold text-kinetic">
                Always Active
              </span>
            </div>
            <div className="card">
              <Cookie className="mb-4 h-10 w-10 text-accent-gold" />
              <h3 className="mb-2 text-xl font-bold text-white">Analytics Cookies</h3>
              <p className="mb-4 text-slate-400">
                Help us understand how visitors interact with our site.
              </p>
              <span className="inline-block rounded-full bg-slate-700 px-3 py-1 text-sm font-semibold text-slate-300">
                Optional
              </span>
            </div>
            <div className="card">
              <Cookie className="mb-4 h-10 w-10 text-vector" />
              <h3 className="mb-2 text-xl font-bold text-white">Marketing Cookies</h3>
              <p className="mb-4 text-slate-400">
                Track visitors across websites for targeted advertising.
              </p>
              <span className="inline-block rounded-full bg-slate-700 px-3 py-1 text-sm font-semibold text-slate-300">
                Optional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-surface to-background p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Questions About Your Privacy?</h2>
            <p className="mb-8 text-lg text-slate-400">
              Our Data Protection Officer is here to help
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-8 py-4 text-lg font-semibold text-background transition-all hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              Contact Privacy Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
