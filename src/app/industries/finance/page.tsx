'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  DollarSign,
  Users,
  Shield,
  BarChart3,
  ArrowRight,
  Lock,
  Clock,
  CheckCircle2,
  Globe,
  Brain,
  Smartphone,
  Database,
} from 'lucide-react';

export default function FinancePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);


  const challenges = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      problem: 'Navigating complex regulations (SOX, PCI DSS, GDPR, GLBA)',
      impact: 'Non-compliance fines average $14.8M per violation',
      color: '#E53935',
    },
    {
      icon: Lock,
      title: 'Cybersecurity Threats',
      problem: 'Financial services face 300x more cyberattacks than other industries',
      impact: 'Average data breach costs $5.85M for financial institutions',
      color: '#FF6A00',
    },
    {
      icon: Clock,
      title: 'Legacy Systems',
      problem: '43% of banks still run on COBOL mainframes from the 1970s',
      impact: 'Technical debt slows innovation and increases operational costs',
      color: '#F2A71B',
    },
    {
      icon: Users,
      title: 'Customer Experience',
      problem: '73% of customers expect bank-level service from all financial apps',
      impact: 'Poor UX drives 32% of customers to switch providers',
      color: '#1565C0',
    },
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Compliance Automation',
      description: 'Automated compliance monitoring, reporting, and audit trail management',
      features: ['SOX compliance', 'PCI DSS certification', 'GDPR data protection'],
      division: 'ADAPTUS SENTINEL™',
      color: '#1565C0',
    },
    {
      icon: Brain,
      title: 'Fraud Detection AI',
      description: 'Machine learning models detect fraudulent transactions in real-time',
      features: ['Anomaly detection', 'Risk scoring', 'Pattern recognition'],
      division: 'ADAPTUS CORTEX™',
      color: '#6E33FF',
    },
    {
      icon: Smartphone,
      title: 'Digital Banking Platform',
      description: 'Modern web and mobile apps with seamless UX and real-time data',
      features: ['Mobile banking', 'Real-time payments', 'Biometric authentication'],
      division: 'ADAPTUS FORGE™',
      color: '#FF6A00',
    },
    {
      icon: Database,
      title: 'Data Analytics & BI',
      description: 'Real-time dashboards, predictive analytics, and customer insights',
      features: ['Customer segmentation', 'Churn prediction', 'Revenue forecasting'],
      division: 'ADAPTUS CORTEX™',
      color: '#6E33FF',
    },
  ];

  const metrics = [
    { value: '94%', label: 'Fraud Detection', description: 'Accuracy rate' },
    { value: '67%', label: 'Faster Onboarding', description: 'Digital KYC process' },
    { value: '$4.2M', label: 'Cost Savings', description: 'Annual compliance automation' },
    { value: '4.8/5', label: 'Customer Satisfaction', description: 'Mobile app rating' },
  ];

  const caseStudy = {
    company: 'Regional Credit Union',
    industry: 'Banking & Financial Services',
    challenge: '$1.2B AUM, legacy core banking system, 18% fraud loss ratio, manual compliance',
    solution: 'Implemented CORTEX™ fraud detection + FORGE™ digital banking + SENTINEL™ compliance automation',
    results: [
      { metric: '94%', label: 'Fraud detection accuracy (up from 71%)' },
      { metric: '$8.7M', label: 'Annual fraud loss reduction' },
      { metric: '67%', label: 'Faster customer onboarding' },
      { metric: '100%', label: 'SOX and PCI DSS compliance' },
    ],
  };

  const techStack = [
    { name: 'Core Banking', tech: 'Temenos, FIS, Jack Henry' },
    { name: 'Payment Processing', tech: 'Stripe, Adyen, Marqeta' },
    { name: 'Fraud Detection', tech: 'Feedzai, Kount, Sift' },
    { name: 'Compliance', tech: 'ComplyAdvantage, Chainalysis' },
    { name: 'Analytics', tech: 'Tableau, Looker, Power BI' },
    { name: 'Identity Verification', tech: 'Onfido, Jumio, Trulioo' },
  ];

  return (
    <>
      {/* Hero Section with HD Background */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-surface to-background">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/industries/finance/financial_trading_floor_bankin_bing_0001_3e1686db.jpeg"
            alt="Financial Trading Floor"
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
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 backdrop-blur-sm">
              <DollarSign className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Finance & Banking Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-6xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Secure, Compliant{' '}
              <span className="bg-gradient-to-r from-primary via-accent-gold to-kinetic bg-clip-text text-transparent">
                Financial Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
              Achieve 94% fraud detection accuracy, reduce compliance costs by $4.2M annually, and deliver bank-grade customer experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/60">
                <Shield className="h-5 w-5" />
                Explore Solutions
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#case-study"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-700 bg-slate-900/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-primary hover:bg-slate-800">
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
            <h2 className="mb-4 text-5xl font-bold text-white">The Financial Services Challenge</h2>
            <p className="text-xl text-slate-400">
              Why traditional financial institutions struggle with digital transformation
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
                      ⚠️ {challenge.impact}
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
              Enterprise-grade financial technology that meets regulatory standards
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
              Average improvements across our financial services clients
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

      {/* Case Study */}
      <section id="case-study" className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Client Success Story</h2>
            <p className="text-xl text-slate-400">
              How we helped a credit union reduce fraud losses by $8.7M annually
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-background p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-gold/20">
                <DollarSign className="h-8 w-8 text-accent-gold" />
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
              href="/divisions/sentinel"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sentinel hover:shadow-xl"
            >
              <Shield className="mb-4 h-12 w-12 text-sentinel" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS SENTINEL™</h3>
              <p className="mb-4 text-slate-400">
                Compliance automation and cybersecurity
              </p>
              <div className="flex items-center gap-2 text-sentinel">
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
                AI-powered fraud detection and analytics
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
              <Smartphone className="mb-4 h-12 w-12 text-forge" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS FORGE™</h3>
              <p className="mb-4 text-slate-400">
                Digital banking platform development
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
            <DollarSign className="mx-auto mb-6 h-20 w-20 text-accent-gold" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Modernize Your Financial Services?
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              Schedule a free consultation with our fintech experts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?industry=finance"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-8 py-4 text-lg font-semibold text-background transition-all hover:scale-105"
              >
                <Users className="h-5 w-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/divisions/sentinel"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent-gold px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-gold/10"
              >
                <Globe className="h-5 w-5" />
                Explore SENTINEL Division
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
