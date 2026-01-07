'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FileText,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Building2,
  ShoppingCart,
  Factory,
  Home,
} from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'National Retail Chain: 51% Revenue Growth',
      client: 'Fashion Retailer',
      industry: 'Retail & Ecommerce',
      challenge: '$12M annual revenue, 68% cart abandonment, 1.9% conversion rate',
      solution: 'CORTEX™ personalization + KINETIC™ conversion optimization',
      results: [
        { metric: '4.7%', label: 'Conversion rate (up from 1.9%)' },
        { metric: '$18.2M', label: 'Annual revenue (51% increase)' },
        { metric: '41%', label: 'Reduction in cart abandonment' },
        { metric: '$127', label: 'Average order value (up from $89)' },
      ],
      icon: ShoppingCart,
      color: '#9AE66E',
      slug: 'fashion-retailer-revenue-growth',
    },
    {
      title: 'Automotive Manufacturer: $32M Annual Savings',
      client: 'Automotive Parts Manufacturer',
      industry: 'Manufacturing',
      challenge: '3 plants, 18% defect rate, $47M annual downtime costs',
      solution: 'CORTEX™ predictive maintenance + FORGE™ quality automation',
      results: [
        { metric: '71%', label: 'Reduction in unplanned downtime' },
        { metric: '99.2%', label: 'Quality inspection accuracy' },
        { metric: '$32M', label: 'Annual cost savings' },
        { metric: '34%', label: 'Increase in OEE' },
      ],
      icon: Factory,
      color: '#FF6A00',
      slug: 'automotive-manufacturer-savings',
    },
    {
      title: 'Credit Union: 94% Fraud Detection Accuracy',
      client: 'Regional Credit Union',
      industry: 'Financial Services',
      challenge: '$1.2B AUM, 18% fraud loss ratio, manual compliance',
      solution: 'CORTEX™ fraud detection + SENTINEL™ compliance automation',
      results: [
        { metric: '94%', label: 'Fraud detection accuracy (up from 71%)' },
        { metric: '$8.7M', label: 'Annual fraud loss reduction' },
        { metric: '67%', label: 'Faster customer onboarding' },
        { metric: '100%', label: 'SOX and PCI DSS compliance' },
      ],
      icon: DollarSign,
      color: '#F2A71B',
      slug: 'credit-union-fraud-detection',
    },
    {
      title: 'Real Estate Brokerage: 312% More Leads',
      client: 'Boutique Real Estate Brokerage',
      industry: 'Real Estate',
      challenge: '23 agents, 180 listings/year, 89-day average sale time',
      solution: 'CORTEX™ lead scoring + KINETIC™ marketing + FORGE™ virtual tours',
      results: [
        { metric: '51 days', label: 'Average sale time (down from 89)' },
        { metric: '8.7%', label: 'Lead conversion rate (up from 3.1%)' },
        { metric: '312%', label: 'Increase in qualified leads' },
        { metric: '$2.4M', label: 'Additional commission revenue' },
      ],
      icon: Home,
      color: '#1565C0',
      slug: 'real-estate-brokerage-leads',
    },
    {
      title: 'B2B SaaS: 71% ARR Growth',
      client: 'Project Management SaaS',
      industry: 'Enterprise SaaS',
      challenge: '$24M ARR, 6.8% monthly churn, $12K CAC',
      solution: 'CORTEX™ churn prediction + KINETIC™ growth marketing',
      results: [
        { metric: '2.9%', label: 'Monthly churn (down from 6.8%)' },
        { metric: '$7.2K', label: 'CAC (down from $12K)' },
        { metric: '38 days', label: 'Time-to-value (down from 120)' },
        { metric: '$41M', label: 'ARR (71% growth)' },
      ],
      icon: TrendingUp,
      color: '#6E33FF',
      slug: 'saas-arr-growth',
    },
    {
      title: 'Logistics Company: $2.1M Fuel Savings',
      client: 'National Retail Chain',
      industry: 'Logistics & Distribution',
      challenge: '2,400 daily deliveries, 18% late delivery rate',
      solution: 'VECTOR™ route optimization + real-time tracking',
      results: [
        { metric: '92%', label: 'On-time delivery rate (up from 82%)' },
        { metric: '$2.1M', label: 'Annual fuel savings' },
        { metric: '34%', label: 'Reduction in customer complaints' },
        { metric: '19%', label: 'Increase in delivery capacity' },
      ],
      icon: Target,
      color: '#E53935',
      slug: 'logistics-fuel-savings',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-surface to-background py-32">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2">
              <BarChart3 className="h-4 w-4 text-accent-gold" />
              <span className="text-sm font-semibold text-slate-300">Case Studies</span>
            </div>
            <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
              Real Results from <span className="text-gradient">Real Clients</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300 leading-relaxed">
              Explore how we've helped enterprises across industries achieve measurable business outcomes with our specialized technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { value: '250+', label: 'Client Success Stories' },
              { value: '$420M+', label: 'Client Value Generated' },
              { value: '6', label: 'Industries Served' },
              { value: '4.9/5', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="mb-2 text-5xl font-black text-accent-gold">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Featured Case Studies</h2>
            <p className="text-xl text-slate-400">
              In-depth analysis of client transformations
            </p>
          </div>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-background"
              >
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="p-12">
                    <div
                      className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${study.color}20` }}
                    >
                      <study.icon className="h-8 w-8" style={{ color: study.color }} />
                    </div>
                    <h3 className="mb-4 text-4xl font-bold text-white">{study.title}</h3>
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Building2 className="h-4 w-4" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Target className="h-4 w-4" />
                        <span>{study.industry}</span>
                      </div>
                    </div>
                    <div className="mb-6 space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold text-white">Challenge</h4>
                        <p className="text-slate-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold text-white">Solution</h4>
                        <p className="text-slate-300">{study.solution}</p>
                      </div>
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white transition-all hover:scale-105"
                    >
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="bg-surface p-12">
                    <h4 className="mb-6 text-2xl font-bold text-white">Results</h4>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {study.results.map((result) => (
                        <div
                          key={result.label}
                          className="rounded-lg p-6 text-center"
                          style={{ backgroundColor: `${study.color}10` }}
                        >
                          <div className="mb-2 text-4xl font-black" style={{ color: study.color }}>
                            {result.metric}
                          </div>
                          <div className="text-sm text-slate-300">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border border-accent-gold/30 bg-accent-gold/5 p-16 text-center">
            <Users className="mx-auto mb-6 h-20 w-20 text-accent-gold" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Achieve Similar Results?
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              Schedule a consultation to discuss your business challenges
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-8 py-4 text-lg font-semibold text-background transition-all hover:scale-105"
            >
              <Target className="h-5 w-5" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
