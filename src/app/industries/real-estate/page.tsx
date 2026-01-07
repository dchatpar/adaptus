'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Home,
  Building2,
  MapPin,
  Users,
  Clock,
  Eye,
  CheckCircle2,
  ArrowRight,
  Globe,
  BarChart3,
  Key,
  Camera,
  Calendar,
  Target,
  Zap,
  Brain,
} from 'lucide-react';

export default function RealEstatePage() {
  const challenges = [
    {
      icon: Clock,
      title: 'Slow Sales Cycles',
      problem: 'Average home sale takes 65-93 days from listing to closing',
      impact: 'Carrying costs and opportunity costs eat into profits',
      color: '#E53935',
    },
    {
      icon: Users,
      title: 'Lead Quality Issues',
      problem: 'Only 2-5% of real estate leads convert to closed deals',
      impact: 'Wasted marketing spend on unqualified prospects',
      color: '#FF6A00',
    },
    {
      icon: Eye,
      title: 'Limited Visibility',
      problem: 'Properties get lost in crowded MLS listings and portals',
      impact: '73% of buyers find their agent online, not through referrals',
      color: '#F2A71B',
    },
    {
      icon: FileText,
      title: 'Manual Processes',
      problem: 'Paper-heavy workflows slow down transactions',
      impact: 'Average agent spends 40% of time on administrative tasks',
      color: '#1565C0',
    },
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Machine learning predicts buyer intent and prioritizes high-value leads',
      features: ['Behavioral scoring', 'Predictive analytics', 'Automated follow-up'],
      division: 'ADAPTUS CORTEX™',
      color: '#6E33FF',
    },
    {
      icon: Camera,
      title: 'Virtual Tours & 3D Staging',
      description: 'Immersive property experiences increase engagement by 87%',
      features: ['360° virtual tours', 'AI-powered staging', 'Drone photography'],
      division: 'ADAPTUS FORGE™',
      color: '#FF6A00',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing Automation',
      description: 'Multi-channel campaigns that generate 3.2x more qualified leads',
      features: ['Facebook/Instagram ads', 'Google Local Services', 'Email nurture sequences'],
      division: 'ADAPTUS KINETIC™',
      color: '#9AE66E',
    },
    {
      icon: Shield,
      title: 'Transaction Management',
      description: 'End-to-end digital workflow from offer to closing',
      features: ['E-signatures', 'Document automation', 'Compliance tracking'],
      division: 'ADAPTUS SENTINEL™',
      color: '#1565C0',
    },
  ];

  const metrics = [
    { value: '42%', label: 'Faster Sales', description: 'Average days on market' },
    { value: '3.2x', label: 'More Leads', description: 'Qualified buyer inquiries' },
    { value: '87%', label: 'Higher Engagement', description: 'With virtual tours' },
    { value: '$18K', label: 'Higher Sale Price', description: 'With professional staging' },
  ];

  const caseStudy = {
    company: 'Boutique Real Estate Brokerage',
    industry: 'Residential Real Estate',
    challenge: '23 agents, 180 listings/year, 89-day average sale time, 3.1% lead conversion',
    solution: 'Implemented CORTEX™ lead scoring + KINETIC™ marketing automation + FORGE™ virtual tours',
    results: [
      { metric: '51 days', label: 'Average sale time (down from 89)' },
      { metric: '8.7%', label: 'Lead conversion rate (up from 3.1%)' },
      { metric: '312%', label: 'Increase in qualified leads' },
      { metric: '$2.4M', label: 'Additional commission revenue' },
    ],
  };

  const features = [
    {
      category: 'Lead Generation',
      items: [
        { name: 'Facebook & Instagram lead ads', icon: Target },
        { name: 'Google Local Services integration', icon: MapPin },
        { name: 'Landing page builder', icon: Globe },
        { name: 'CRM integration (Follow Up Boss, LionDesk)', icon: Users },
      ],
    },
    {
      category: 'Property Marketing',
      items: [
        { name: '360° virtual tours', icon: Camera },
        { name: 'AI-powered virtual staging', icon: Home },
        { name: 'Drone photography & video', icon: Eye },
        { name: 'Property websites & microsites', icon: Globe },
      ],
    },
    {
      category: 'Transaction Management',
      items: [
        { name: 'Digital document signing (DocuSign, Dotloop)', icon: FileText },
        { name: 'Offer management', icon: DollarSign },
        { name: 'Compliance checklists', icon: Shield },
        { name: 'Closing coordination', icon: Key },
      ],
    },
    {
      category: 'Analytics & Insights',
      items: [
        { name: 'Market trend analysis', icon: TrendingUp },
        { name: 'Comparative market analysis (CMA) automation', icon: BarChart3 },
        { name: 'Agent performance dashboards', icon: Target },
        { name: 'ROI tracking', icon: DollarSign },
      ],
    },
  ];

  const techStack = [
    { name: 'CRM', tech: 'Follow Up Boss, LionDesk, Salesforce' },
    { name: 'MLS Integration', tech: 'RETS, RESO Web API' },
    { name: 'Virtual Tours', tech: 'Matterport, Zillow 3D Home' },
    { name: 'Marketing Automation', tech: 'HubSpot, Mailchimp, ActiveCampaign' },
    { name: 'Transaction Management', tech: 'Dotloop, SkySlope, Paperless Pipeline' },
    { name: 'E-Signature', tech: 'DocuSign, Adobe Sign' },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discovery & Audit',
      description: 'Analyze current lead flow, marketing channels, and sales process',
      duration: '1 week',
    },
    {
      step: '2',
      title: 'Strategy & Planning',
      description: 'Design lead generation strategy, marketing campaigns, and tech stack',
      duration: '2 weeks',
    },
    {
      step: '3',
      title: 'Platform Setup',
      description: 'Configure CRM, marketing automation, and MLS integrations',
      duration: '3-4 weeks',
    },
    {
      step: '4',
      title: 'Agent Training',
      description: 'Onboard team to new systems and workflows',
      duration: '1-2 weeks',
    },
    {
      step: '5',
      title: 'Launch & Optimize',
      description: 'Go live with campaigns, monitor performance, and iterate',
      duration: 'Ongoing',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
              <Home className="h-4 w-4 text-accent-gold" />
              <span className="text-sm font-semibold text-slate-300">Real Estate</span>
            </div>
            <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
              Sell Homes Faster with <span className="text-gradient">Digital-First Marketing</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300 leading-relaxed">
              Reduce days on market by 42%, generate 3.2x more qualified leads, and increase sale prices by $18K with AI lead scoring, virtual tours, and marketing automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-8 py-4 text-lg font-semibold text-background transition-all hover:scale-105 hover:shadow-glow"
              >
                <Home className="h-5 w-5" />
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

      {/* Challenges - Bento Grid */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">The Real Estate Challenge</h2>
            <p className="text-xl text-slate-400">
              Why traditional real estate marketing is failing agents and brokers
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

      {/* Solutions Grid */}
      <section id="solutions" className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Our Solutions</h2>
            <p className="text-xl text-slate-400">
              Technology that helps agents close more deals, faster
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
              Average improvements across our real estate clients
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
                <div className="mb-3 text-6xl font-black text-accent-gold">{metric.value}</div>
                <div className="mb-2 text-xl font-bold text-white">{metric.label}</div>
                <div className="text-sm text-slate-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Comprehensive Feature Set</h2>
            <p className="text-xl text-slate-400">
              Everything you need to run a modern real estate business
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-background p-8"
              >
                <h3 className="mb-6 text-2xl font-bold text-white">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-gold/10">
                        <item.icon className="h-5 w-5 text-accent-gold" />
                      </div>
                      <span className="text-slate-300">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Client Success Story</h2>
            <p className="text-xl text-slate-400">
              How we helped a boutique brokerage triple their lead conversion
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-surface p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-gold/20">
                <Building2 className="h-8 w-8 text-accent-gold" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{caseStudy.company}</h3>
                <p className="text-slate-400">{caseStudy.industry}</p>
              </div>
            </div>
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-background p-6">
                <h4 className="mb-3 text-lg font-bold text-white">Challenge</h4>
                <p className="text-slate-300">{caseStudy.challenge}</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-background p-6">
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
                    className="rounded-lg bg-accent-gold/10 p-6 text-center"
                  >
                    <div className="mb-2 text-4xl font-black text-accent-gold">{result.metric}</div>
                    <div className="text-sm text-slate-300">{result.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Implementation Process</h2>
            <p className="text-xl text-slate-400">
              From discovery to launch in 5 structured phases
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 h-full w-0.5 bg-gradient-to-b from-accent-gold to-transparent" />
                )}
                <div className="flex gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold/20 text-2xl font-black text-accent-gold">
                    {step.step}
                  </div>
                  <div className="flex-1 rounded-xl border border-slate-800 bg-background p-6">
                    <div className="mb-3 flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-accent-gold">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-slate-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Technology Stack</h2>
            <p className="text-xl text-slate-400">
              Industry-leading platforms we integrate
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
              href="/divisions/kinetic"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-kinetic hover:shadow-xl"
            >
              <TrendingUp className="mb-4 h-12 w-12 text-kinetic" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS KINETIC™</h3>
              <p className="mb-4 text-slate-400">
                Digital marketing and lead generation for real estate
              </p>
              <div className="flex items-center gap-2 text-kinetic">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/divisions/cortex"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cortex hover:shadow-xl"
            >
              <Brain className="mb-4 h-12 w-12 text-cortex" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS CORTEX™</h3>
              <p className="mb-4 text-slate-400">
                AI-powered lead scoring and predictive analytics
              </p>
              <div className="flex items-center gap-2 text-cortex">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/divisions/forge"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-forge hover:shadow-xl"
            >
              <Camera className="mb-4 h-12 w-12 text-forge" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS FORGE™</h3>
              <p className="mb-4 text-slate-400">
                Virtual tours and property marketing technology
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
          <div className="rounded-2xl border border-accent-gold/30 bg-accent-gold/5 p-16 text-center">
            <Home className="mx-auto mb-6 h-20 w-20 text-accent-gold" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              Schedule a free consultation with our real estate technology experts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?industry=real-estate"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-8 py-4 text-lg font-semibold text-background transition-all hover:scale-105"
              >
                <Users className="h-5 w-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/divisions/kinetic"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent-gold px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-gold/10"
              >
                <Globe className="h-5 w-5" />
                Explore KINETIC Division
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
