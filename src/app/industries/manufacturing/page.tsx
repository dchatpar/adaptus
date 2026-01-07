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
  Globe,
  Brain,
  Clock,
  Package,
  Database,
  Cog,
  Shield,
  AlertTriangle,
  TrendingUp,
  Zap,
  Target,
  Eye,
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
    solution: 'Implemented CORTEX™ predictive maintenance + FORGE™ quality automation + VECTOR™ MES integration',
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
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-surface to-background">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image src="/images/industries/manufacturing/factory_manufacturing_producti_bing_0001_8291340e.jpeg" alt="Manufacturing Floor" fill className="object-cover opacity-20" priority quality={90} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </motion.div>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div style={{ opacity }} className="container relative z-10 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 backdrop-blur-sm">
              <Factory className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Smart Manufacturing Solutions</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6 text-6xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Smart Manufacturing{' '}
              <span className="bg-gradient-to-r from-primary via-accent-gold to-kinetic bg-clip-text text-transparent">For Industry 4.0</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
              Increase production efficiency by 45%, reduce downtime by 60%, and achieve zero-defect quality with AI-powered automation.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="#solutions" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/60">
                <Cog className="h-5 w-5" />
                Explore Solutions
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#case-study" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-700 bg-slate-900/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-primary hover:bg-slate-800">
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
            <p className="text-xl text-slate-400">
              Enterprise-grade platforms we integrate
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
                AI-powered predictive maintenance and analytics
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
              <Cog className="mb-4 h-12 w-12 text-forge" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS FORGE™</h3>
              <p className="mb-4 text-slate-400">
                Quality automation and computer vision systems
              </p>
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

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border border-forge/30 bg-forge/5 p-16 text-center">
            <Factory className="mx-auto mb-6 h-20 w-20 text-forge" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Transform Your Manufacturing Operations?
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              Schedule a free consultation with our Industry 4.0 experts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?industry=manufacturing"
                className="inline-flex items-center gap-2 rounded-lg bg-forge px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
              >
                <Users className="h-5 w-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/divisions/cortex"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-forge px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-forge/10"
              >
                <Globe className="h-5 w-5" />
                Explore CORTEX Division
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
