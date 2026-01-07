'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  Truck,
  MapPin,
  BarChart3,
  Clock,
  Zap,
  CheckCircle2,
  ArrowRight,
  Warehouse,
  Route,
  Target,
  Users,
  Boxes,
  Navigation,
  TrendingUp,
  Eye,
  Shield,
  Globe,
} from 'lucide-react';

export default function LogisticsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);


  const painPoints = [
    {
      icon: Clock,
      title: 'Delivery Delays',
      problem: 'Late shipments damage customer trust and increase costs',
      impact: '35% of customers abandon brands after 2 late deliveries',
      color: '#E53935',
    },
    {
      icon: TrendingUp,
      title: 'Rising Costs',
      problem: 'Fuel, labor, and warehouse expenses eating into margins',
      impact: 'Logistics costs up 18% YoY for mid-market companies',
      color: '#FF6A00',
    },
    {
      icon: Eye,
      title: 'Visibility Gaps',
      problem: 'No real-time tracking of shipments and inventory',
      impact: '42% of supply chain disruptions go undetected for 24+ hours',
      color: '#F2A71B',
    },
    {
      icon: Boxes,
      title: 'Inventory Chaos',
      problem: 'Overstocking and stockouts due to poor forecasting',
      impact: '$1.1T lost annually to inventory distortion',
      color: '#1565C0',
    },
  ];

  const solutions = [
    {
      icon: Route,
      title: 'Smart Route Optimization',
      description: 'AI-powered routing reduces fuel costs by 23% and delivery times by 31%',
      features: ['Real-time traffic integration', 'Multi-stop optimization', 'Driver performance analytics'],
      division: 'ADAPTUS VECTOR™',
      color: '#E53935',
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'GPS + IoT sensors provide second-by-second visibility across your entire fleet',
      features: ['Live shipment tracking', 'Geofencing alerts', 'Temperature monitoring'],
      division: 'ADAPTUS SENTINEL™',
      color: '#1565C0',
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Machine learning forecasts demand, optimizes inventory, and prevents stockouts',
      features: ['Demand forecasting', 'Inventory optimization', 'Anomaly detection'],
      division: 'ADAPTUS CORTEX™',
      color: '#6E33FF',
    },
    {
      icon: Warehouse,
      title: 'Warehouse Automation',
      description: 'Robotic picking, automated sorting, and smart storage systems',
      features: ['Automated picking', 'Smart shelving', 'Inventory robots'],
      division: 'ADAPTUS FORGE™',
      color: '#FF6A00',
    },
  ];

  const metrics = [
    { value: '31%', label: 'Faster Deliveries', description: 'Average reduction in delivery time' },
    { value: '23%', label: 'Cost Savings', description: 'Reduction in fuel and labor costs' },
    { value: '99.2%', label: 'On-Time Rate', description: 'Delivery accuracy for clients' },
    { value: '47%', label: 'Less Inventory', description: 'Reduction in excess stock' },
  ];

  const caseStudy = {
    company: 'National Retail Chain',
    industry: 'Retail & Distribution',
    challenge: '2,400 daily deliveries across 6 provinces with 18% late delivery rate',
    solution: 'Implemented ADAPTUS VECTOR™ route optimization + real-time tracking',
    results: [
      { metric: '92%', label: 'On-time delivery rate (up from 82%)' },
      { metric: '$2.1M', label: 'Annual fuel savings' },
      { metric: '34%', label: 'Reduction in customer complaints' },
      { metric: '19%', label: 'Increase in delivery capacity' },
    ],
  };

  const techStack = [
    { name: 'Route Optimization', tech: 'Google OR-Tools, OSRM' },
    { name: 'Real-Time Tracking', tech: 'GPS IoT, WebSocket APIs' },
    { name: 'Predictive Analytics', tech: 'TensorFlow, Prophet' },
    { name: 'Warehouse Management', tech: 'SAP EWM, Manhattan SCALE' },
    { name: 'Fleet Management', tech: 'Samsara, Geotab' },
    { name: 'Last-Mile Delivery', tech: 'Onfleet, Circuit' },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Audit your current logistics operations, identify bottlenecks',
      duration: '1-2 weeks',
    },
    {
      step: '2',
      title: 'Strategy',
      description: 'Design custom solution architecture and implementation roadmap',
      duration: '2-3 weeks',
    },
    {
      step: '3',
      title: 'Integration',
      description: 'Connect with existing ERP, WMS, and TMS systems',
      duration: '4-6 weeks',
    },
    {
      step: '4',
      title: 'Deployment',
      description: 'Phased rollout with pilot testing and staff training',
      duration: '6-8 weeks',
    },
    {
      step: '5',
      title: 'Optimization',
      description: 'Continuous monitoring, tuning, and performance improvements',
      duration: 'Ongoing',
    },
  ];

  return (
    <>
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-surface to-background">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/industries/logistics/warehouse_logistics_distributi_bing_0001_73ca0084.webp"
            alt="Warehouse & Logistics"
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 backdrop-blur-sm">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Logistics & Distribution Solutions</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6 text-6xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Optimize Your Supply Chain{' '}
              <span className="bg-gradient-to-r from-primary via-accent-gold to-kinetic bg-clip-text text-transparent">With AI-Powered Logistics</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
              Reduce delivery times by 40%, cut costs by 35%, and achieve 99.9% accuracy with intelligent routing and real-time tracking.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="#solutions" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/60">
                <Zap className="h-5 w-5" />
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

      {/* Pain Points - Bento Grid */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">The Logistics Crisis</h2>
            <p className="text-xl text-slate-400">
              Modern supply chains are breaking under pressure. Here's why.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {painPoints.map((pain, index) => (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5"
                  style={{ backgroundColor: pain.color }}
                />
                <div className="relative">
                  <div
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${pain.color}20` }}
                  >
                    <pain.icon className="h-8 w-8" style={{ color: pain.color }} />
                  </div>
                  <h3 className="mb-3 text-3xl font-bold text-white">{pain.title}</h3>
                  <p className="mb-4 text-lg text-slate-300">{pain.problem}</p>
                  <div className="rounded-lg bg-slate-900/50 p-4">
                    <p className="text-sm font-semibold" style={{ color: pain.color }}>
                      📊 {pain.impact}
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
              Enterprise-grade logistics technology that delivers measurable results
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
            <h2 className="mb-4 text-5xl font-bold text-white">Results That Matter</h2>
            <p className="text-xl text-slate-400">
              Average improvements across our logistics clients
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
                <div className="mb-3 text-6xl font-black text-vector">{metric.value}</div>
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
              How we transformed a national retail chain's distribution network
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-background p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-vector/20">
                <Target className="h-8 w-8 text-vector" />
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
                    className="rounded-lg bg-vector/10 p-6 text-center"
                  >
                    <div className="mb-2 text-4xl font-black text-vector">{result.metric}</div>
                    <div className="text-sm text-slate-300">{result.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Implementation Process</h2>
            <p className="text-xl text-slate-400">
              From assessment to optimization in 5 structured phases
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
                  <div className="absolute left-8 top-20 h-full w-0.5 bg-gradient-to-b from-vector to-transparent" />
                )}
                <div className="flex gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-vector/20 text-2xl font-black text-vector">
                    {step.step}
                  </div>
                  <div className="flex-1 rounded-xl border border-slate-800 bg-surface p-6">
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
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Technology Stack</h2>
            <p className="text-xl text-slate-400">
              Enterprise-grade tools and platforms we integrate
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
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-background p-6"
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
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Related Services</h2>
            <p className="text-xl text-slate-400">
              Comprehensive solutions across our divisions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/divisions/vector"
              className="group rounded-2xl border border-slate-800 bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:border-vector hover:shadow-xl"
            >
              <Navigation className="mb-4 h-12 w-12 text-vector" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS VECTOR™</h3>
              <p className="mb-4 text-slate-400">
                Full-service logistics and distribution optimization
              </p>
              <div className="flex items-center gap-2 text-vector">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/divisions/cortex"
              className="group rounded-2xl border border-slate-800 bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cortex hover:shadow-xl"
            >
              <Zap className="mb-4 h-12 w-12 text-cortex" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS CORTEX™</h3>
              <p className="mb-4 text-slate-400">
                AI-powered demand forecasting and predictive analytics
              </p>
              <div className="flex items-center gap-2 text-cortex">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/divisions/sentinel"
              className="group rounded-2xl border border-slate-800 bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sentinel hover:shadow-xl"
            >
              <Shield className="mb-4 h-12 w-12 text-sentinel" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS SENTINEL™</h3>
              <p className="mb-4 text-slate-400">
                Real-time tracking and IoT sensor integration
              </p>
              <div className="flex items-center gap-2 text-sentinel">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface">
        <div className="container">
          <div className="rounded-2xl border border-vector/30 bg-vector/5 p-16 text-center">
            <Truck className="mx-auto mb-6 h-20 w-20 text-vector" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Transform Your Logistics?
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              Schedule a free consultation with our logistics optimization experts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?division=vector"
                className="inline-flex items-center gap-2 rounded-lg bg-vector px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
              >
                <Users className="h-5 w-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/divisions/vector"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-vector px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-vector/10"
              >
                <Globe className="h-5 w-5" />
                Explore VECTOR Division
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
