'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  Home,
  TrendingUp,
  Users,
  Eye,
  CheckCircle2,
  ArrowRight,
  Globe,
  Brain,
  Clock,
  Camera,
  Target,
  MapPin,
  BarChart3,
  FileText,
  DollarSign,
  Shield,
  Key,
  Building2,
  Zap,
} from 'lucide-react';

export default function RealEstatePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    solution:
      'Implemented CORTEX™ lead scoring + KINETIC™ marketing automation + FORGE™ virtual tours',
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
    <>
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-surface to-background"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/industries/real-estate/modern_real_estate_luxury_prop_bing_0001_f309b1c5.jpeg"
            alt="Luxury Real Estate"
            fill
            className="object-cover opacity-20"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </motion.div>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div style={{ opacity }} className="container relative z-10 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 backdrop-blur-sm"
            >
              <Home className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Real Estate & PropTech Solutions
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-6xl font-black leading-tight tracking-tight text-white md:text-7xl"
            >
              Transform Real Estate{' '}
              <span className="bg-gradient-to-r from-primary via-accent-gold to-kinetic bg-clip-text text-transparent">
                With Digital Innovation
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl"
            >
              Close deals 50% faster, reduce operational costs by 40%, and deliver exceptional
              client experiences with modern PropTech.
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
            <p className="text-xl text-slate-400">Industry-leading platforms we integrate</p>
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
              <p className="mb-4 text-slate-400">Virtual tours and property marketing technology</p>
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
              Transform Your Real Estate Business
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Join 400+ real estate firms achieving 50% faster sales with AdaptUs
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-primary transition-all hover:scale-105 hover:shadow-2xl"
              >
                Schedule Demo
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
            <h2 className="mb-4 text-4xl font-black text-foreground md:text-5xl">
              90-Day Digital Transformation
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              From traditional to cutting-edge real estate technology
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                phase: 'Phase 1: Foundation',
                duration: '0-30 Days',
                icon: BarChart3,
                color: '#6366f1',
                steps: [
                  'Property data migration',
                  'CRM integration',
                  'Virtual tour setup',
                  'Website modernization',
                  'Lead capture optimization',
                  'Team training program',
                ],
                deliverables: [
                  'Unified property database',
                  'Integrated CRM',
                  'Virtual tour platform',
                  'Modern website',
                ],
              },
              {
                phase: 'Phase 2: Activation',
                duration: '31-60 Days',
                icon: Zap,
                color: '#8b5cf6',
                steps: [
                  'Marketing automation',
                  'AI property matching',
                  'Smart scheduling',
                  'Client portal launch',
                  'Analytics dashboard',
                  'Mobile app deployment',
                ],
                deliverables: [
                  'Automated marketing',
                  'AI recommendations',
                  'Booking system',
                  'Client access',
                ],
              },
              {
                phase: 'Phase 3: Scale',
                duration: '61-90 Days',
                icon: TrendingUp,
                color: '#ec4899',
                steps: [
                  'Predictive analytics',
                  'Market intelligence',
                  'Portfolio optimization',
                  'Multi-office expansion',
                  'Advanced reporting',
                  'Continuous improvement',
                ],
                deliverables: [
                  'Full automation',
                  'Market insights',
                  'Scalable platform',
                  'Enterprise features',
                ],
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${phase.color}20` }}
                >
                  <phase.icon className="h-8 w-8" style={{ color: phase.color }} />
                </div>
                <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {phase.duration}
                </div>
                <h3 className="mb-6 text-2xl font-black text-foreground">{phase.phase}</h3>
                <div className="mb-6">
                  <h4 className="mb-3 text-sm font-bold uppercase text-muted-foreground">
                    Key Activities
                  </h4>
                  <ul className="space-y-2">
                    {phase.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-bold uppercase text-muted-foreground">
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((del, j) => (
                      <li key={j} className="flex items-start gap-2 text-foreground">
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
            <h2 className="mb-4 text-4xl font-black text-foreground md:text-5xl">
              Flexible Real Estate Pricing
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Scale from boutique to enterprise
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Boutique',
                price: '$2,500',
                period: '/month',
                description: 'For independent agents & small teams',
                features: [
                  'Up to 100 listings',
                  'Virtual tours',
                  'Basic CRM',
                  'Lead capture',
                  'Email support (24h)',
                  'Monthly reports',
                  'Standard integrations',
                ],
                cta: 'Start Trial',
                highlight: false,
              },
              {
                name: 'Professional',
                price: '$8,500',
                period: '/month',
                description: 'For growing real estate firms',
                features: [
                  'Up to 1,000 listings',
                  'Advanced virtual tours',
                  'Full CRM suite',
                  'AI property matching',
                  'Priority support (4h)',
                  'Weekly analytics',
                  'Custom integrations',
                  'Client portal',
                  'Marketing automation',
                ],
                cta: 'Schedule Demo',
                highlight: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                description: 'For large real estate organizations',
                features: [
                  'Unlimited listings',
                  'White-label platform',
                  'Dedicated team (1h SLA)',
                  'Predictive analytics',
                  'Multi-office support',
                  'Custom development',
                  'Advanced compliance',
                  'API access',
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
                className={`relative rounded-2xl p-8 ${tier.highlight ? 'border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/10 shadow-2xl' : 'border border-border bg-card'}`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-sm font-bold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-black text-foreground">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`mb-8 block w-full rounded-xl py-3 text-center font-bold transition-all ${tier.highlight ? 'bg-gradient-to-r from-primary to-accent text-white hover:scale-105 hover:shadow-2xl' : 'border-2 border-border text-foreground hover:border-primary hover:bg-secondary'}`}
                >
                  {tier.cta}
                </Link>
                <ul className="space-y-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center text-sm text-muted-foreground">
            All plans include: 99.99% uptime SLA, regular updates, and data security
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-foreground md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Everything about real estate technology
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-6">
            {[
              {
                q: 'How quickly can we see results?',
                a: 'Most real estate firms see measurable improvements within 2-3 weeks. Early wins include better lead capture and virtual tour engagement. Full transformation typically occurs by 90 days with 40-50% faster sales cycles, 60% more qualified leads, and 35% higher conversion rates.',
              },
              {
                q: 'Do virtual tours really increase sales?',
                a: 'Yes! Properties with virtual tours sell 50% faster and attract 3x more qualified leads. Our platform creates immersive 3D tours, video walkthroughs, and interactive floor plans that engage buyers 24/7. Virtual tours also reduce unnecessary showings by 40%, saving time for agents.',
              },
              {
                q: 'Can you integrate with our existing systems?',
                a: 'Absolutely! We integrate with major real estate platforms including MLS systems, Zillow, Realtor.com, DocuSign, and popular CRMs like Salesforce and HubSpot. Our API-first approach allows custom integrations with any platform. Professional and Enterprise plans include dedicated integration support.',
              },
              {
                q: 'What about data migration?',
                a: 'We handle all data migration from your existing systems with zero downtime. Our team migrates property listings, client data, documents, and historical records. We ensure data integrity and provide validation reports. Most migrations complete within 1-2 weeks with full support.',
              },
              {
                q: 'How does AI property matching work?',
                a: 'Our AI analyzes buyer preferences, search history, budget, and behavior to recommend perfect property matches. The system learns from interactions and improves over time. Agents see 60% higher engagement with AI-matched properties and close deals 35% faster through better targeting.',
              },
              {
                q: 'Is the platform mobile-friendly?',
                a: 'Yes! Our platform includes native iOS and Android apps for agents and a responsive web portal for clients. Agents can manage listings, schedule showings, and communicate with clients on-the-go. Clients can browse properties, book tours, and track their search from any device.',
              },
              {
                q: 'What about security and compliance?',
                a: 'We maintain SOC 2 Type II certification and comply with all real estate regulations including RESPA, Fair Housing Act, and state-specific requirements. All data is encrypted at rest and in transit. We offer secure document signing, audit trails, and regular security audits.',
              },
              {
                q: 'Do you provide training and support?',
                a: 'All plans include comprehensive training for your team, regular platform updates, and ongoing support. Professional and Enterprise clients get dedicated account managers, priority support, and access to our real estate technology experts for strategic guidance and best practices.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary"
              >
                <h3 className="mb-3 text-xl font-bold text-foreground">{faq.q}</h3>
                <p className="leading-relaxed text-foreground">{faq.a}</p>
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
            <h2 className="mb-6 text-4xl font-black text-foreground md:text-5xl">
              Ready to Transform Real Estate?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join 400+ firms achieving 50% faster sales
            </p>
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
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-8 py-4 font-bold text-foreground transition-all hover:bg-primary/10"
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
