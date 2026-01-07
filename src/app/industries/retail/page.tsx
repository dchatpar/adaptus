'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ShoppingCart,
  TrendingUp,
  Users,
  Smartphone,
  CreditCard,
  Package,
  BarChart3,
  Zap,
  Shield,
  Target,
  CheckCircle2,
  ArrowRight,
  Globe,
  Star,
  MessageSquare,
  Eye,
  DollarSign,
  Clock,
  AlertCircle,
  Brain,
} from 'lucide-react';

export default function RetailPage() {
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
      description: 'A/B testing, UX improvements, and checkout optimization to reduce cart abandonment',
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
      description: 'PCI-DSS compliant payment gateway with fraud detection and chargeback protection',
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
              <ShoppingCart className="h-4 w-4 text-kinetic" />
              <span className="text-sm font-semibold text-slate-300">Retail & Ecommerce</span>
            </div>
            <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
              Convert More Visitors into <span className="text-gradient">Loyal Customers</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300 leading-relaxed">
              Increase conversion rates by 28%, boost AOV by 41%, and reduce cart abandonment with AI-powered personalization, conversion optimization, and omnichannel inventory management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-lg bg-kinetic px-8 py-4 text-lg font-semibold text-background transition-all hover:scale-105 hover:shadow-glow"
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
            <p className="text-xl text-slate-400">
              Average improvements across our retail clients
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
              href="/divisions/kinetic"
              className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-kinetic hover:shadow-xl"
            >
              <TrendingUp className="mb-4 h-12 w-12 text-kinetic" />
              <h3 className="mb-2 text-2xl font-bold text-white">ADAPTUS KINETIC™</h3>
              <p className="mb-4 text-slate-400">
                Digital marketing and conversion optimization
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
                AI-powered personalization and recommendations
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
                Custom ecommerce platform development
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
          <div className="rounded-2xl border border-kinetic/30 bg-kinetic/5 p-16 text-center">
            <ShoppingCart className="mx-auto mb-6 h-20 w-20 text-kinetic" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Scale Your Ecommerce Business?
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              Schedule a free consultation with our ecommerce growth experts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?division=kinetic"
                className="inline-flex items-center gap-2 rounded-lg bg-kinetic px-8 py-4 text-lg font-semibold text-background transition-all hover:scale-105"
              >
                <Users className="h-5 w-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/divisions/kinetic"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-kinetic px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-kinetic/10"
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
