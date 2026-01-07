'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  Cloud,
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Zap,
  Brain,
  Clock,
  Smartphone,
  Code,
  Database,
} from 'lucide-react';

export default function EnterpriseSaaSPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const challenges = [
    {
      icon: Users,
      title: 'High Churn Rates',
      problem: 'Average SaaS churn rate is 5-7% monthly for SMB products',
      impact: '$1.6T lost annually to customer churn',
      color: '#E53935',
    },
    {
      icon: TrendingUp,
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
    solution:
      'Implemented CORTEX™ churn prediction + KINETIC™ growth marketing + FORGE™ onboarding optimization',
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
    <>
      {/* Hero Section with HD Background */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-surface to-background"
      >
        {/* Animated Background Image with Parallax */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/industries/saas/enterprise_saas_software_platf_bing_0001_0a922f58.webp"
            alt="Enterprise SaaS Platform"
            fill
            className="object-cover opacity-20"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <motion.div style={{ opacity }} className="container relative z-10 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 backdrop-blur-sm"
            >
              <Cloud className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Enterprise SaaS Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-6xl font-black leading-tight tracking-tight text-white md:text-7xl"
            >
              Scale Your SaaS{' '}
              <span className="bg-gradient-to-r from-primary via-accent-gold to-kinetic bg-clip-text text-transparent">
                With Confidence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl"
            >
              Reduce churn by 40%, accelerate onboarding by 60%, and unlock sustainable growth with
              AI-powered analytics and automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/60"
              >
                <Zap className="h-5 w-5" />
                Explore Solutions
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#case-study"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-700 bg-slate-900/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-primary hover:bg-slate-800"
              >
                <BarChart3 className="h-5 w-5" />
                View Case Study
              </Link>
            </motion.div>
          </div>
        </motion.div>
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
            <p className="text-xl text-slate-400">Technology that drives sustainable SaaS growth</p>
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
            <p className="text-xl text-slate-400">Average improvements across our SaaS clients</p>
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
            <p className="text-xl text-slate-400">Best-in-class platforms we integrate</p>
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
            <p className="text-xl text-slate-400">Comprehensive solutions across our divisions</p>
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
              <p className="mb-4 text-slate-400">Growth marketing and customer acquisition</p>
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
              <p className="mb-4 text-slate-400">Onboarding optimization and product development</p>
              <div className="flex items-center gap-2 text-forge">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Scale Your SaaS to Enterprise
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Join 300+ SaaS companies achieving 10x growth with AdaptUs
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-primary transition-all hover:scale-105 hover:shadow-2xl"
              >
                Schedule a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-primary"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
              90-Day Growth Roadmap
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              From product-market fit to enterprise scale
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                phase: 'Phase 1: Foundation',
                duration: '0-30 Days',
                icon: Database,
                color: '#6366f1',
                steps: [
                  'Product analytics setup',
                  'User journey mapping',
                  'Conversion funnel analysis',
                  'Integration planning',
                  'Growth strategy design',
                  'Team onboarding',
                ],
                deliverables: [
                  'Analytics dashboard',
                  'User behavior insights',
                  'Growth roadmap',
                  'Integration plan',
                ],
              },
              {
                phase: 'Phase 2: Acceleration',
                duration: '31-60 Days',
                icon: Zap,
                color: '#8b5cf6',
                steps: [
                  'Marketing automation',
                  'Lead scoring system',
                  'Customer success platform',
                  'Email campaign optimization',
                  'A/B testing framework',
                  'Retention programs',
                ],
                deliverables: [
                  'Automation workflows',
                  'Lead pipeline',
                  'Success metrics',
                  'Campaign templates',
                ],
              },
              {
                phase: 'Phase 3: Scale',
                duration: '61-90 Days',
                icon: TrendingUp,
                color: '#ec4899',
                steps: [
                  'Enterprise features',
                  'Multi-tenant architecture',
                  'Advanced security',
                  'Compliance automation',
                  'Global expansion',
                  'Performance optimization',
                ],
                deliverables: [
                  'Enterprise-ready platform',
                  'Security certifications',
                  'Scalable infrastructure',
                  'Global deployment',
                ],
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-slate-800 bg-surface p-8 transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${phase.color}20` }}
                >
                  <phase.icon className="h-8 w-8" style={{ color: phase.color }} />
                </div>
                <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {phase.duration}
                </div>
                <h3 className="mb-6 text-2xl font-black text-white">{phase.phase}</h3>
                <div className="mb-6">
                  <h4 className="mb-3 text-sm font-bold uppercase text-slate-400">
                    Key Activities
                  </h4>
                  <ul className="space-y-2">
                    {phase.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-bold uppercase text-slate-400">Deliverables</h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((del, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300">
                        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                        <span className="text-sm">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
              Growth-Focused Pricing
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              Scale from startup to enterprise
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Startup',
                price: '$3,500',
                period: '/month',
                description: 'For early-stage SaaS companies',
                features: [
                  'Up to 10K MAU',
                  'Core analytics',
                  'Basic automation',
                  'Email support (24h)',
                  'Monthly reports',
                  'Standard integrations',
                  'Community access',
                ],
                cta: 'Start Free Trial',
                highlight: false,
              },
              {
                name: 'Growth',
                price: '$12,000',
                period: '/month',
                description: 'For scaling SaaS businesses',
                features: [
                  'Up to 100K MAU',
                  'Advanced analytics & AI',
                  'Full automation suite',
                  'Priority support (4h)',
                  'Weekly optimization',
                  'Custom integrations',
                  'A/B testing platform',
                  'Customer success manager',
                  'Advanced security',
                ],
                cta: 'Schedule Demo',
                highlight: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                description: 'For enterprise SaaS platforms',
                features: [
                  'Unlimited MAU',
                  'Enterprise analytics',
                  'White-label solutions',
                  'Dedicated team (1h SLA)',
                  'Real-time dashboards',
                  'Multi-region deployment',
                  'Advanced compliance',
                  'Custom AI development',
                  'Executive business reviews',
                  '24/7 support',
                ],
                cta: 'Contact Sales',
                highlight: false,
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${tier.highlight ? 'border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/10 shadow-2xl' : 'border border-slate-800 bg-background'}`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-sm font-bold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-black text-white">{tier.name}</h3>
                  <p className="text-sm text-slate-400">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">{tier.price}</span>
                    <span className="text-slate-400">{tier.period}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`mb-8 block w-full rounded-xl py-3 text-center font-bold transition-all ${tier.highlight ? 'bg-gradient-to-r from-primary to-accent text-white hover:scale-105 hover:shadow-2xl' : 'border-2 border-slate-700 text-white hover:border-slate-600 hover:bg-slate-800'}`}
                >
                  {tier.cta}
                </Link>
                <ul className="space-y-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center text-sm text-slate-400">
            All plans include: SOC 2 compliance, 99.99% uptime SLA, and regular updates
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              Everything about SaaS growth & scaling
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-6">
            {[
              {
                q: 'How quickly can we see results?',
                a: 'Most SaaS companies see measurable improvements within 30-45 days. Early wins include better analytics visibility and automated workflows. Full transformation typically occurs by 90 days with 3-5x improvement in key metrics like conversion rates, retention, and LTV.',
              },
              {
                q: 'Do you integrate with our existing tech stack?',
                a: 'Yes! We integrate with 100+ SaaS tools including Stripe, HubSpot, Salesforce, Intercom, Segment, Mixpanel, and more. Our API-first approach allows custom integrations with any platform. Professional and Enterprise plans include dedicated integration support.',
              },
              {
                q: 'What kind of growth can we expect?',
                a: 'Our clients typically achieve 10x growth within 12-18 months. This includes 3-4x increase in MRR, 50% improvement in customer acquisition cost, 60% better retention rates, and 40% faster time-to-value for customers. We provide detailed projections during discovery.',
              },
              {
                q: 'How do you handle data security?',
                a: 'We maintain SOC 2 Type II and ISO 27001 certifications with bank-grade encryption. All data is encrypted at rest and in transit. We offer on-premise deployment for enterprise clients and never share customer data. Regular security audits and penetration testing ensure compliance.',
              },
              {
                q: 'Can you help with enterprise sales?',
                a: 'Absolutely! Our platform includes enterprise-specific features like SSO, advanced permissions, audit logs, SLA guarantees, and dedicated support. We help you achieve security certifications required for enterprise deals and provide sales enablement resources.',
              },
              {
                q: 'What about international expansion?',
                a: 'We support global SaaS growth with multi-currency billing, localization support, GDPR compliance, and region-specific hosting. Our platform works in 40+ languages and handles international tax compliance, helping you expand to new markets faster.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'All plans include 24/7 technical support, regular platform updates, and quarterly business reviews. Growth and Enterprise clients get dedicated customer success managers, priority support, and access to our SaaS growth experts for strategic guidance.',
              },
              {
                q: 'How does pricing scale with growth?',
                a: 'Our pricing scales with your success. As your MAU increases, we offer volume discounts and custom enterprise pricing. Many clients start on Growth plans and smoothly transition to Enterprise as they scale, with no migration headaches.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-slate-800 bg-surface p-6 transition-all hover:border-slate-700"
              >
                <h3 className="mb-3 text-xl font-bold text-white">{faq.q}</h3>
                <p className="leading-relaxed text-slate-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-surface to-background py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Ready to Scale Your SaaS?
            </h2>
            <p className="mb-8 text-xl text-slate-400">Join 300+ companies achieving 10x growth</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-2xl"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary/10"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
