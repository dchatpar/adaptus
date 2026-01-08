'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  ShoppingCart,
  Users,
  Smartphone,
  Package,
  BarChart3,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
  Globe,
  Star,
  MessageSquare,
  Eye,
  Clock,
  Brain,
  TrendingUp,
  Shield,
  DollarSign,
} from 'lucide-react';

export default function RetailPage() {
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
      title: 'Cart Abandonment',
      problem: '69.8% of online shopping carts are abandoned before checkout',
      impact: '$260B in lost revenue annually for US retailers',
      color: '#E53935',
    },
    {
      icon: Eye,
      title: 'Low Conversion Rates',
      problem: 'Average ecommerce conversion rate is only 2.86%',
      impact: '97 out of 100 visitors leave without buying',
      color: '#FF6A00',
    },
    {
      icon: MessageSquare,
      title: 'Poor Customer Experience',
      problem: '32% of customers abandon brands after one bad experience',
      impact: 'Customer acquisition costs 5x more than retention',
      color: '#F2A71B',
    },
    {
      icon: BarChart3,
      title: 'Inventory Blind Spots',
      problem: 'Out-of-stock items cost retailers $1.77T globally',
      impact: '43% of customers switch to competitors when items unavailable',
      color: '#1565C0',
    },
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      description: 'Machine learning recommendations increase AOV by 41% and conversion by 28%',
      features: ['Product recommendations', 'Dynamic pricing', 'Personalized email campaigns'],
      division: 'ADAPTUS CORTEX™',
      color: '#6E33FF',
    },
    {
      icon: ShoppingCart,
      title: 'Conversion Optimization',
      description:
        'A/B testing, UX improvements, and checkout optimization to reduce cart abandonment',
      features: ['One-click checkout', 'Guest checkout', 'Cart recovery emails'],
      division: 'ADAPTUS KINETIC™',
      color: '#9AE66E',
    },
    {
      icon: Package,
      title: 'Omnichannel Inventory',
      description: 'Real-time inventory sync across online, retail, and warehouse locations',
      features: ['Multi-location tracking', 'Auto-reordering', 'Demand forecasting'],
      division: 'ADAPTUS VECTOR™',
      color: '#E53935',
    },
    {
      icon: Shield,
      title: 'Secure Payment Processing',
      description:
        'PCI-DSS compliant payment gateway with fraud detection and chargeback protection',
      features: ['Multi-currency support', 'Fraud detection', 'Subscription billing'],
      division: 'ADAPTUS SENTINEL™',
      color: '#1565C0',
    },
  ];

  const metrics = [
    { value: '41%', label: 'Higher AOV', description: 'With AI personalization' },
    { value: '28%', label: 'Conversion Lift', description: 'Optimized checkout flow' },
    { value: '3.2x', label: 'ROAS', description: 'Targeted marketing campaigns' },
    { value: '19%', label: 'Lower CAC', description: 'Improved retention' },
  ];

  const caseStudy = {
    company: 'Fashion Retailer',
    industry: 'Apparel & Accessories',
    challenge: '$12M annual revenue, 68% cart abandonment, 1.9% conversion rate',
    solution: 'Implemented CORTEX™ personalization + KINETIC™ conversion optimization',
    results: [
      { metric: '4.7%', label: 'Conversion rate (up from 1.9%)' },
      { metric: '$18.2M', label: 'Annual revenue (51% increase)' },
      { metric: '41%', label: 'Reduction in cart abandonment' },
      { metric: '$127', label: 'Average order value (up from $89)' },
    ],
  };

  const features = [
    {
      category: 'Customer Experience',
      items: [
        { name: 'Personalized product recommendations', icon: Star },
        { name: 'Live chat & chatbot support', icon: MessageSquare },
        { name: 'Loyalty & rewards programs', icon: Target },
        { name: 'Wishlist & saved carts', icon: ShoppingCart },
      ],
    },
    {
      category: 'Marketing & Growth',
      items: [
        { name: 'Email & SMS automation', icon: Zap },
        { name: 'Social media integration', icon: Users },
        { name: 'Influencer tracking', icon: TrendingUp },
        { name: 'Referral programs', icon: Globe },
      ],
    },
    {
      category: 'Operations',
      items: [
        { name: 'Multi-warehouse management', icon: Package },
        { name: 'Shipping rate optimization', icon: DollarSign },
        { name: 'Returns & exchanges automation', icon: Clock },
        { name: 'Supplier integration', icon: Globe },
      ],
    },
    {
      category: 'Analytics',
      items: [
        { name: 'Real-time dashboards', icon: BarChart3 },
        { name: 'Customer lifetime value tracking', icon: TrendingUp },
        { name: 'Cohort analysis', icon: Users },
        { name: 'Attribution modeling', icon: Target },
      ],
    },
  ];

  const techStack = [
    { name: 'Ecommerce Platform', tech: 'Shopify Plus, Magento, WooCommerce' },
    { name: 'Payment Processing', tech: 'Stripe, PayPal, Square' },
    { name: 'Marketing Automation', tech: 'Klaviyo, Mailchimp, HubSpot' },
    { name: 'Analytics', tech: 'Google Analytics 4, Mixpanel' },
    { name: 'Personalization', tech: 'Dynamic Yield, Nosto' },
    { name: 'Inventory Management', tech: 'Cin7, TradeGecko, Skubana' },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discovery & Audit',
      description: 'Analyze current site performance, customer journey, and conversion funnel',
      duration: '1-2 weeks',
    },
    {
      step: '2',
      title: 'Strategy & Design',
      description: 'Create personalization strategy, UX improvements, and marketing roadmap',
      duration: '2-3 weeks',
    },
    {
      step: '3',
      title: 'Platform Integration',
      description: 'Connect ecommerce platform, payment gateway, and marketing tools',
      duration: '3-4 weeks',
    },
    {
      step: '4',
      title: 'Testing & Launch',
      description: 'A/B testing, QA, and phased rollout of new features',
      duration: '2-3 weeks',
    },
    {
      step: '5',
      title: 'Optimization',
      description: 'Continuous testing, analytics review, and performance tuning',
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
            src="/images/industries/retail/retail_store_ecommerce_shoppin_bing_0001_90e1c27a.webp"
            alt="Retail Store"
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
              <ShoppingCart className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Retail & E-commerce Solutions
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-6xl font-black leading-tight tracking-tight text-white md:text-7xl"
            >
              Revolutionize Retail{' '}
              <span className="bg-gradient-to-r from-primary via-accent-gold to-kinetic bg-clip-text text-transparent">
                With Omnichannel Excellence
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl"
            >
              Boost conversion rates by 65%, increase customer lifetime value by 3x, and deliver
              personalized experiences at scale.
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
            <h2 className="mb-4 text-5xl font-bold text-white">The Ecommerce Challenge</h2>
            <p className="text-xl text-slate-400">
              Why most online stores struggle to convert traffic into revenue
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
                      💰 {challenge.impact}
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
              Data-driven strategies that turn browsers into buyers
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
            <p className="text-xl text-slate-400">Average improvements across our retail clients</p>
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
                <div className="mb-3 text-6xl font-black text-kinetic">{metric.value}</div>
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
              Everything you need to run a modern ecommerce business
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kinetic/10">
                        <item.icon className="h-5 w-5 text-kinetic" />
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
              How we helped a fashion retailer double their revenue
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-surface p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-kinetic/20">
                <ShoppingCart className="h-8 w-8 text-kinetic" />
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
                    className="rounded-lg bg-kinetic/10 p-6 text-center"
                  >
                    <div className="mb-2 text-4xl font-black text-kinetic">{result.metric}</div>
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
              From audit to optimization in 5 structured phases
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
                  <div className="absolute left-8 top-20 h-full w-0.5 bg-gradient-to-b from-kinetic to-transparent" />
                )}
                <div className="flex gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-kinetic/20 text-2xl font-black text-kinetic">
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
              href="/divisions/kinetic"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-kinetic hover:shadow-xl"
            >
              <TrendingUp className="mb-4 h-12 w-12 text-kinetic" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS KINETIC™</h3>
              <p className="mb-4 text-slate-400">Digital marketing and conversion optimization</p>
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
              <p className="mb-4 text-slate-400">AI-powered personalization and recommendations</p>
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
              <p className="mb-4 text-slate-400">Custom ecommerce platform development</p>
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
              Scale Your Retail Business
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Join 500+ retailers achieving 3x revenue growth with AdaptUs
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
              90-Day Growth Roadmap
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              From traditional retail to omnichannel excellence
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
                  'Inventory system integration',
                  'POS modernization',
                  'Ecommerce platform setup',
                  'Customer data unification',
                  'Analytics implementation',
                  'Staff training program',
                ],
                deliverables: [
                  'Unified inventory',
                  'Modern POS',
                  'Online store',
                  'Customer database',
                ],
              },
              {
                phase: 'Phase 2: Growth',
                duration: '31-60 Days',
                icon: Zap,
                color: '#8b5cf6',
                steps: [
                  'Omnichannel activation',
                  'Personalization engine',
                  'Loyalty program launch',
                  'Marketing automation',
                  'Mobile app deployment',
                  'Supply chain optimization',
                ],
                deliverables: [
                  'Seamless omnichannel',
                  'AI personalization',
                  'Active loyalty program',
                  'Automated marketing',
                ],
              },
              {
                phase: 'Phase 3: Scale',
                duration: '61-90 Days',
                icon: TrendingUp,
                color: '#ec4899',
                steps: [
                  'Predictive inventory',
                  'Advanced analytics',
                  'Multi-location expansion',
                  'Marketplace integration',
                  'Customer experience optimization',
                  'Continuous innovation',
                ],
                deliverables: [
                  'Smart inventory',
                  'Full analytics',
                  'Scalable operations',
                  'Marketplace presence',
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
              Flexible Retail Pricing
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Scale from single store to enterprise chain
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '$1,500',
                period: '/month',
                description: 'For single-location retailers',
                features: [
                  '1 location',
                  'Basic POS',
                  'Inventory management',
                  'Customer database',
                  'Email support (24h)',
                  'Monthly reports',
                  'Standard integrations',
                ],
                cta: 'Start Trial',
                highlight: false,
              },
              {
                name: 'Growth',
                price: '$6,500',
                period: '/month',
                description: 'For multi-location retailers',
                features: [
                  'Up to 10 locations',
                  'Advanced POS',
                  'Omnichannel inventory',
                  'Ecommerce platform',
                  'Priority support (4h)',
                  'Weekly analytics',
                  'Custom integrations',
                  'Loyalty program',
                  'Marketing automation',
                ],
                cta: 'Schedule Demo',
                highlight: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                description: 'For retail chains & franchises',
                features: [
                  'Unlimited locations',
                  'Enterprise POS',
                  'Predictive inventory',
                  'White-label platform',
                  'Dedicated team (1h SLA)',
                  'Real-time analytics',
                  'Multi-region support',
                  'Custom development',
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
            All plans include: 99.99% uptime SLA, regular updates, and PCI compliance
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
              Everything about retail transformation
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-6">
            {[
              {
                q: 'How quickly can we see revenue growth?',
                a: 'Most retailers see measurable revenue increases within 4-6 weeks. Early wins include 20-30% higher online sales and 15% better in-store conversion. Full transformation typically occurs by 90 days with 2-3x revenue growth, 40% higher customer lifetime value, and 50% better inventory turnover.',
              },
              {
                q: 'What is omnichannel retail?',
                a: 'Omnichannel retail provides seamless shopping experiences across all channels - in-store, online, mobile, and social. Customers can browse online and buy in-store, order online for in-store pickup, or shop in-store and have items shipped. Our platform unifies inventory, customer data, and operations for true omnichannel excellence.',
              },
              {
                q: 'Can you integrate with our existing systems?',
                a: 'Yes! We integrate with major retail systems including Square, Shopify, Lightspeed, NetSuite, and popular accounting software. Our platform also connects with payment processors, shipping carriers, and marketplaces like Amazon and eBay. Custom integrations are included in Growth and Enterprise plans.',
              },
              {
                q: 'How does inventory management work?',
                a: 'Our platform provides real-time inventory visibility across all locations and channels. Automated reordering prevents stockouts, while predictive analytics optimize inventory levels. You can track products from supplier to customer, manage transfers between locations, and sync inventory across online and offline channels instantly.',
              },
              {
                q: 'What about customer data and privacy?',
                a: 'We maintain strict data privacy with SOC 2 Type II certification and GDPR compliance. All customer data is encrypted and stored securely. We help you build unified customer profiles while respecting privacy preferences. Customers control their data, and we provide tools for consent management and data deletion requests.',
              },
              {
                q: 'Do you support mobile commerce?',
                a: 'Absolutely! Our platform includes native iOS and Android apps for both customers and staff. Customers can shop, track orders, and manage loyalty points on mobile. Staff can process sales, check inventory, and assist customers from anywhere in the store using mobile POS capabilities.',
              },
              {
                q: 'How do loyalty programs work?',
                a: 'Our AI-powered loyalty platform rewards customers for purchases, referrals, social shares, and engagement. You can create tiered programs, offer personalized rewards, and gamify the experience. The system tracks points automatically and provides insights on customer behavior to optimize your program for maximum retention.',
              },
              {
                q: 'What ongoing support do you provide?',
                a: 'All plans include 24/7 technical support, regular platform updates, and quarterly business reviews. Growth and Enterprise clients get dedicated success managers, priority support, and access to our retail experts for merchandising strategies, marketing campaigns, and operational optimization.',
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
              Ready to Transform Retail?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join 500+ retailers achieving 3x revenue growth
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
