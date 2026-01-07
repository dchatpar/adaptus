'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Cloud,
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Brain,
  Clock,
  Smartphone,
  Code,
} from 'lucide-react';

export default function EnterpriseSaaSPage() {
  const challenges = [
    {
      icon: Users,
      title: 'High Churn Rates',
      problem: 'Average SaaS churn rate is 5-7% monthly for SMB products',
      impact: '$1.6T lost annually to customer churn',
      color: '#E53935',
    },
    {
      title: 'Customer Acquisition Costs',
      problem: 'CAC has increased 60% over the past 5 years',
      impact: 'Average CAC payback period is 11-14 months',
      color: '#FF6A00',
    },
    {
      icon: Clock,
      title: 'Slow Onboarding',
      problem: 'Average time-to-value is 90+ days for enterprise SaaS',
      impact: '40-60% of users never complete onboarding',
      color: '#F2A71B',
    },
    {
      icon: BarChart3,
      title: 'Limited Product Analytics',
      problem: 'Only 23% of SaaS companies have comprehensive product analytics',
      impact: 'Blind spots lead to poor product decisions and feature bloat',
      color: '#1565C0',
    },
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'Churn Prediction & Prevention',
      description: 'AI identifies at-risk customers 30 days before churn with 87% accuracy',
      features: ['Behavioral analysis', 'Health scoring', 'Automated interventions'],
      division: 'ADAPTUS CORTEX™',
      color: '#6E33FF',
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing Automation',
      description: 'Multi-channel campaigns that reduce CAC by 42% and increase LTV by 3.1x',
      features: ['Email nurture sequences', 'In-app messaging', 'Referral programs'],
      division: 'ADAPTUS KINETIC™',
      color: '#9AE66E',
    },
    {
      icon: Smartphone,
      title: 'Onboarding Optimization',
      description: 'Interactive product tours and contextual help reduce time-to-value by 68%',
      features: ['Product tours', 'In-app guidance', 'Progress tracking'],
      division: 'ADAPTUS FORGE™',
      color: '#FF6A00',
    },
    {
      icon: BarChart3,
      title: 'Product Analytics Platform',
      description: 'Real-time insights into feature usage, user journeys, and conversion funnels',
      features: ['Event tracking', 'Cohort analysis', 'A/B testing'],
      division: 'ADAPTUS CORTEX™',
      color: '#6E33FF',
    },
  ];

  const metrics = [
    { value: '42%', label: 'Lower CAC', description: 'With growth marketing automation' },
    { value: '3.1x', label: 'Higher LTV', description: 'Improved retention and upsells' },
    { value: '68%', label: 'Faster Onboarding', description: 'Reduced time-to-value' },
    { value: '87%', label: 'Churn Prediction', description: 'Accuracy rate' },
  ];

  const caseStudy = {
    company: 'B2B SaaS Platform',
    industry: 'Project Management Software',
    challenge: '$24M ARR, 6.8% monthly churn, $12K CAC, 120-day time-to-value',
    solution: 'Implemented CORTEX™ churn prediction + KINETIC™ growth marketing + FORGE™ onboarding optimization',
    results: [
      { metric: '2.9%', label: 'Monthly churn (down from 6.8%)' },
      { metric: '$7.2K', label: 'CAC (down from $12K)' },
      { metric: '38 days', label: 'Time-to-value (down from 120)' },
      { metric: '$41M', label: 'ARR (71% growth)' },
    ],
  };

  const techStack = [
    { name: 'Product Analytics', tech: 'Mixpanel, Amplitude, Heap' },
    { name: 'Customer Data Platform', tech: 'Segment, RudderStack' },
    { name: 'Marketing Automation', tech: 'HubSpot, Marketo, Pardot' },
    { name: 'Onboarding', tech: 'Appcues, Pendo, WalkMe' },
    { name: 'Customer Success', tech: 'Gainsight, ChurnZero, Totango' },
    { name: 'A/B Testing', tech: 'Optimizely, VWO, LaunchDarkly' },
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
              <Cloud className="h-4 w-4 text-accent-blue" />
              <span className="text-sm font-semibold text-slate-300">Enterprise SaaS</span>
            </div>
            <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
              Scale Your SaaS with <span className="text-gradient">Data-Driven Growth</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300 leading-relaxed">
              Reduce churn by 57%, lower CAC by 42%, and increase LTV by 3.1x with AI-powered churn prediction, growth marketing automation, and onboarding optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
              >
                <Zap className="h-5 w-5" />
                Explore Solutions
              </Link>
              <Link
                href="#case-study"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800"
              >
                <BarChart3 className="h-5 w-5" />
                View Case Study
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">The SaaS Growth Challenge</h2>
            <p className="text-xl text-slate-400">
              Why most SaaS companies struggle to achieve sustainable growth
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5"
                  style={{ backgroundColor: challenge.color }}
                />
                <div className="relative">
                  <div
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${challenge.color}20` }}
                  >
                    <challenge.icon className="h-8 w-8" style={{ color: challenge.color }} />
                  </div>
                  <h3 className="mb-3 text-3xl font-bold text-white">{challenge.title}</h3>
                  <p className="mb-4 text-lg text-slate-300">{challenge.problem}</p>
                  <div className="rounded-lg bg-slate-900/50 p-4">
                    <p className="text-sm font-semibold" style={{ color: challenge.color }}>
                      📉 {challenge.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Our Solutions</h2>
            <p className="text-xl text-slate-400">
              Technology that drives sustainable SaaS growth
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-background p-8"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${solution.color}20` }}
                  >
                    <solution.icon className="h-7 w-7" style={{ color: solution.color }} />
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold"
                    style={{ backgroundColor: `${solution.color}20`, color: solution.color }}
                  >
                    {solution.division}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">{solution.title}</h3>
                <p className="mb-6 text-slate-300">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-kinetic" />
                      <span className="text-sm text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Proven Results</h2>
            <p className="text-xl text-slate-400">
              Average improvements across our SaaS clients
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="mb-3 text-6xl font-black text-accent-blue">{metric.value}</div>
                <div className="mb-2 text-xl font-bold text-white">{metric.label}</div>
                <div className="text-sm text-slate-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Client Success Story</h2>
            <p className="text-xl text-slate-400">
              How we helped a B2B SaaS platform achieve 71% ARR growth
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-background p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-blue/20">
                <Cloud className="h-8 w-8 text-accent-blue" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{caseStudy.company}</h3>
                <p className="text-slate-400">{caseStudy.industry}</p>
              </div>
            </div>
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-surface p-6">
                <h4 className="mb-3 text-lg font-bold text-white">Challenge</h4>
                <p className="text-slate-300">{caseStudy.challenge}</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-surface p-6">
                <h4 className="mb-3 text-lg font-bold text-white">Solution</h4>
                <p className="text-slate-300">{caseStudy.solution}</p>
              </div>
            </div>
            <div>
              <h4 className="mb-6 text-2xl font-bold text-white">Results</h4>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={result.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-lg bg-accent-blue/10 p-6 text-center"
                  >
                    <div className="mb-2 text-4xl font-black text-accent-blue">{result.metric}</div>
                    <div className="text-sm text-slate-300">{result.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Technology Stack</h2>
            <p className="text-xl text-slate-400">
              Best-in-class platforms we integrate
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-surface p-6"
              >
                <div>
                  <h4 className="mb-1 font-bold text-white">{tech.name}</h4>
                  <p className="text-sm text-slate-400">{tech.tech}</p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-kinetic" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Related Services</h2>
            <p className="text-xl text-slate-400">
              Comprehensive solutions across our divisions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/divisions/cortex"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cortex hover:shadow-xl"
            >
              <Brain className="mb-4 h-12 w-12 text-cortex" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS CORTEX™</h3>
              <p className="mb-4 text-slate-400">
                AI-powered churn prediction and product analytics
              </p>
              <div className="flex items-center gap-2 text-cortex">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/divisions/kinetic"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-kinetic hover:shadow-xl"
            >
              <TrendingUp className="mb-4 h-12 w-12 text-kinetic" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS KINETIC™</h3>
              <p className="mb-4 text-slate-400">
                Growth marketing and customer acquisition
              </p>
              <div className="flex items-center gap-2 text-kinetic">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/divisions/forge"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-forge hover:shadow-xl"
            >
              <Code className="mb-4 h-12 w-12 text-forge" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS FORGE™</h3>
              <p className="mb-4 text-slate-400">
                Onboarding optimization and product development
              </p>
              <div className="flex items-center gap-2 text-forge">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/5 p-16 text-center">
            <Cloud className="mx-auto mb-6 h-20 w-20 text-accent-blue" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Scale Your SaaS Business?
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              Schedule a free consultation with our SaaS growth experts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?industry=saas"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
              >
                <Users className="h-5 w-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/divisions/cortex"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent-blue px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-blue/10"
              >
                <Globe className="h-5 w-5" />
                Explore CORTEX Division
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
