'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  Factory,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Brain,
  Clock,
  Package,
  Database,
  Cog,
  Shield,
  AlertTriangle,
} from 'lucide-react';

export default function ManufacturingPage() {
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
      title: 'Production Downtime',
      problem: 'Unplanned downtime costs manufacturers $50B annually',
      impact: 'Average downtime costs $260K per hour for large plants',
      color: '#E53935',
    },
    {
      icon: AlertTriangle,
      title: 'Quality Control Issues',
      problem: '23% of products fail quality checks, leading to waste and rework',
      impact: 'Defects cost manufacturers 15-20% of revenue',
      color: '#FF6A00',
    },
    {
      icon: Users,
      title: 'Labor Shortages',
      problem: '2.1M manufacturing jobs unfilled due to skills gap',
      impact: 'Productivity losses of $2.5T by 2028',
      color: '#F2A71B',
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Disruptions',
      problem: '73% of manufacturers experienced supply chain delays in 2024',
      impact: 'Average revenue loss of $184M per disruption event',
      color: '#1565C0',
    },
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'Predictive Maintenance',
      description: 'AI predicts equipment failures 48 hours in advance, reducing downtime by 71%',
      features: ['IoT sensor integration', 'Failure prediction', 'Maintenance scheduling'],
      division: 'ADAPTUS CORTEX™',
      color: '#6E33FF',
    },
    {
      icon: Cog,
      title: 'Quality Automation',
      description: 'Computer vision and ML detect defects with 99.2% accuracy',
      features: ['Visual inspection', 'Defect classification', 'Root cause analysis'],
      division: 'ADAPTUS FORGE™',
      color: '#FF6A00',
    },
    {
      icon: Database,
      title: 'MES & ERP Integration',
      description: 'Real-time production tracking and resource optimization',
      features: ['Production scheduling', 'Inventory management', 'OEE tracking'],
      division: 'ADAPTUS VECTOR™',
      color: '#E53935',
    },
    {
      icon: Shield,
      title: 'Supply Chain Visibility',
      description: 'End-to-end tracking of materials, suppliers, and shipments',
      features: ['Supplier monitoring', 'Risk assessment', 'Demand forecasting'],
      division: 'ADAPTUS SENTINEL™',
      color: '#1565C0',
    },
  ];

  const metrics = [
    { value: '71%', label: 'Less Downtime', description: 'With predictive maintenance' },
    { value: '99.2%', label: 'Quality Accuracy', description: 'Automated inspection' },
    { value: '34%', label: 'Higher OEE', description: 'Overall equipment effectiveness' },
    { value: '$12M', label: 'Annual Savings', description: 'Reduced waste and rework' },
  ];

  const caseStudy = {
    company: 'Automotive Parts Manufacturer',
    industry: 'Automotive Manufacturing',
    challenge: '3 plants, 18% defect rate, $47M annual downtime costs, manual quality checks',
    solution:
      'Implemented CORTEX™ predictive maintenance + FORGE™ quality automation + VECTOR™ MES integration',
    results: [
      { metric: '71%', label: 'Reduction in unplanned downtime' },
      { metric: '99.2%', label: 'Quality inspection accuracy' },
      { metric: '$32M', label: 'Annual cost savings' },
      { metric: '34%', label: 'Increase in OEE' },
    ],
  };

  const techStack = [
    { name: 'MES', tech: 'Siemens Opcenter, Rockwell FactoryTalk' },
    { name: 'ERP', tech: 'SAP S/4HANA, Oracle NetSuite' },
    { name: 'IoT Platform', tech: 'AWS IoT, Azure IoT Hub' },
    { name: 'Computer Vision', tech: 'OpenCV, TensorFlow, PyTorch' },
    { name: 'SCADA', tech: 'Wonderware, Ignition' },
    { name: 'Quality Management', tech: 'Minitab, JMP, ETQ Reliance' },
  ];

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-surface to-background"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/industries/manufacturing/factory_manufacturing_producti_bing_0001_8291340e.jpeg"
            alt="Manufacturing Floor"
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
              <Factory className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Smart Manufacturing Solutions
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-6xl font-black leading-tight tracking-tight text-white md:text-7xl"
            >
              Smart Manufacturing{' '}
              <span className="bg-gradient-to-r from-primary via-accent-gold to-kinetic bg-clip-text text-transparent">
                For Industry 4.0
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl"
            >
              Increase production efficiency by 45%, reduce downtime by 60%, and achieve zero-defect
              quality with AI-powered automation.
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
                <Cog className="h-5 w-5" />
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
            <h2 className="mb-4 text-5xl font-bold text-white">The Manufacturing Challenge</h2>
            <p className="text-xl text-slate-400">
              Why traditional manufacturing is struggling to compete
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
                      ⚙️ {challenge.impact}
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
              Industry 4.0 technology that transforms production efficiency
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
              Average improvements across our manufacturing clients
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
                <div className="mb-3 text-6xl font-black text-forge">{metric.value}</div>
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
              How we helped an automotive manufacturer save $32M annually
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-background p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forge/20">
                <Factory className="h-8 w-8 text-forge" />
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
                    className="rounded-lg bg-forge/10 p-6 text-center"
                  >
                    <div className="mb-2 text-4xl font-black text-forge">{result.metric}</div>
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
            <p className="text-xl text-slate-400">Enterprise-grade platforms we integrate</p>
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
              <p className="mb-4 text-slate-400">AI-powered predictive maintenance and analytics</p>
              <div className="flex items-center gap-2 text-cortex">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/divisions/forge"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-forge hover:shadow-xl"
            >
              <Cog className="mb-4 h-12 w-12 text-forge" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS FORGE™</h3>
              <p className="mb-4 text-slate-400">Quality automation and computer vision systems</p>
              <div className="flex items-center gap-2 text-forge">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/divisions/vector"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-vector hover:shadow-xl"
            >
              <Package className="mb-4 h-12 w-12 text-vector" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS VECTOR™</h3>
              <p className="mb-4 text-slate-400">
                MES/ERP integration and supply chain optimization
              </p>
              <div className="flex items-center gap-2 text-vector">
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent)]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Transform Your Manufacturing Operations
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Join 200+ manufacturers who've achieved 40% productivity gains with AdaptUs
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
              90-Day Implementation Roadmap
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              From assessment to full deployment - a proven path to manufacturing excellence
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                phase: 'Phase 1: Discovery',
                duration: '0-30 Days',
                icon: Database,
                color: '#6366f1',
                steps: [
                  'Comprehensive operational audit',
                  'Technology stack assessment',
                  'Production line mapping',
                  'Data integration planning',
                  'Custom solution design',
                  'Team training roadmap',
                ],
                deliverables: [
                  'Current state analysis report',
                  'Gap analysis document',
                  'Detailed implementation plan',
                  'ROI projection model',
                ],
              },
              {
                phase: 'Phase 2: Deployment',
                duration: '31-60 Days',
                icon: Cog,
                color: '#8b5cf6',
                steps: [
                  'Core platform installation',
                  'IoT sensor deployment',
                  'ERP/MES integration',
                  'AI model training',
                  'Dashboard configuration',
                  'Pilot production line launch',
                ],
                deliverables: [
                  'Functioning pilot system',
                  'Integration test results',
                  'Performance benchmarks',
                  'User training completion',
                ],
              },
              {
                phase: 'Phase 3: Optimization',
                duration: '61-90 Days',
                icon: Brain,
                color: '#ec4899',
                steps: [
                  'Full facility rollout',
                  'Advanced analytics activation',
                  'Predictive maintenance enablement',
                  'Quality control automation',
                  'Supply chain integration',
                  'Performance optimization',
                ],
                deliverables: [
                  'Full system deployment',
                  'Optimized workflows',
                  'Performance metrics dashboard',
                  '24/7 support activation',
                ],
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-slate-800 bg-surface p-8 transition-all hover:-translate-y-2 hover:border-slate-700 hover:shadow-2xl"
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
                    {phase.deliverables.map((deliverable, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300">
                        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                        <span className="text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-surface py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
              Flexible Pricing for Every Scale
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              From single production lines to enterprise-wide deployments
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '$2,500',
                period: '/month',
                description: 'Perfect for small manufacturing operations',
                features: [
                  'Up to 2 production lines',
                  '50 IoT sensors included',
                  'Real-time monitoring dashboard',
                  'Basic predictive maintenance',
                  'Email support (24h response)',
                  'Monthly performance reports',
                  'Standard integrations',
                ],
                cta: 'Start Free Trial',
                highlight: false,
              },
              {
                name: 'Professional',
                price: '$7,500',
                period: '/month',
                description: 'For mid-size manufacturing facilities',
                features: [
                  'Up to 10 production lines',
                  '500 IoT sensors included',
                  'Advanced analytics & AI insights',
                  'Predictive maintenance with alerts',
                  'Priority support (4h response)',
                  'Weekly optimization reports',
                  'Custom integrations included',
                  'Quality control automation',
                  'Supply chain visibility',
                ],
                cta: 'Schedule Demo',
                highlight: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                description: 'For large-scale manufacturing operations',
                features: [
                  'Unlimited production lines',
                  'Unlimited IoT sensors',
                  'Full AI-powered optimization suite',
                  'Advanced predictive maintenance',
                  'Dedicated support team (1h SLA)',
                  'Real-time executive dashboards',
                  'Multi-facility management',
                  'Advanced security & compliance',
                  'Custom AI model development',
                  'White-glove onboarding',
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
                className={`relative rounded-2xl p-8 ${
                  tier.highlight
                    ? 'border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/10 shadow-2xl'
                    : 'border border-slate-800 bg-background'
                }`}
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
                  className={`mb-8 block w-full rounded-xl py-3 text-center font-bold transition-all ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-primary to-accent text-white hover:scale-105 hover:shadow-2xl'
                      : 'border-2 border-slate-700 text-white hover:border-slate-600 hover:bg-slate-800'
                  }`}
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
            All plans include: SSL encryption, 99.99% uptime SLA, regular security audits, and GDPR
            compliance
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              Everything you need to know about manufacturing transformation
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {[
              {
                q: 'How long does implementation typically take?',
                a: 'Our standard implementation timeline is 90 days from contract signing to full deployment. This includes discovery (30 days), deployment (30 days), and optimization (30 days). For smaller facilities, we can accelerate to 60 days. Enterprise deployments may take 120-180 days depending on complexity.',
              },
              {
                q: 'What kind of ROI can we expect?',
                a: 'Our clients typically see 3-5x ROI within the first year. This comes from reduced downtime (40% improvement), lower defect rates (60% reduction), optimized inventory (30% reduction in carrying costs), and increased throughput (25-35% improvement). We provide detailed ROI projections during the discovery phase.',
              },
              {
                q: 'Do you integrate with existing ERP and MES systems?',
                a: 'Yes! We have pre-built integrations with major systems including SAP, Oracle, Microsoft Dynamics, Infor, Plex, and many others. Our platform uses open APIs and can integrate with virtually any system. Custom integrations are included in Professional and Enterprise plans.',
              },
              {
                q: 'What hardware is required?',
                a: 'We provide IoT sensors and edge devices as part of the service. These connect to your existing equipment via standard industrial protocols (OPC-UA, Modbus, MQTT). No major capital equipment purchases required. Our hardware is industrial-grade, rated for harsh manufacturing environments.',
              },
              {
                q: 'How do you ensure data security?',
                a: 'We employ end-to-end encryption, zero-trust architecture, and maintain SOC 2 Type II and ISO 27001 certifications. Data can be stored on-premises, in your cloud, or in our secure cloud infrastructure. We never share customer data and provide complete data sovereignty.',
              },
              {
                q: 'What training is provided?',
                a: 'Comprehensive training is included for all user levels - operators, supervisors, engineers, and executives. This includes on-site workshops, online courses, video tutorials, and ongoing support. We typically train 20-50 users per facility during implementation.',
              },
              {
                q: 'Can we start with a pilot program?',
                a: 'Absolutely! We recommend starting with a single production line or department. This allows you to validate results before scaling. Pilot programs typically run 30-60 days and cost $10-15k. Credits apply toward full deployment if you proceed.',
              },
              {
                q: 'What ongoing support do you provide?',
                a: 'All plans include 24/7 technical support, regular system updates, quarterly business reviews, and access to our customer success team. Enterprise clients receive a dedicated account manager and priority support with 1-hour SLA for critical issues.',
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
                <p className="text-slate-300 leading-relaxed">{faq.a}</p>
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
              Ready to Revolutionize Your Manufacturing?
            </h2>
            <p className="mb-8 text-xl text-slate-400">
              Join industry leaders who've transformed their operations with AdaptUs
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
