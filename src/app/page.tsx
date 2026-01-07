'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  ArrowRight,
  Zap,
  Shield,
  Code,
  TrendingUp,
  Users,
  Globe,
  CheckCircle2,
  Sparkles,
  Brain,
  Rocket,
  BarChart3,
  Star,
} from 'lucide-react';

// Modern UI Components
import { ParallaxHero, GlassPanel } from '@/components/ui/parallax-hero';
import { BentoGrid, BentoTile } from '@/components/ui/bento-grid';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FloatingCard, MagneticButton } from '@/components/ui/floating-card';
import { AnimatedCounter, KPICard } from '@/components/ui/animated-counter';
import { ActiveBentoTile } from '@/components/ui/active-bento';
import { GridContainer, GridSection } from '@/lib/baseline-grid';

export default function HomePage() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* Hero Section - WebGL Particles + Kinetic Typography */}
      <ParallaxHero
        backgroundImage="/images/homepage/hero/digital_technology_abstract_backg_bing_0001_c8e5f3d8.webp"
        height="screen"
        overlayOpacity={0.7}
      >
        <div className="mx-auto max-w-7xl text-center">
          {/* Badge */}
          <ScrollReveal delay={0.1}>
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Engineering the Digital Spine
              </span>
            </motion.div>
          </ScrollReveal>

          {/* Kinetic Headline */}
          <ScrollReveal delay={0.2}>
            <h1 className="mb-6 text-7xl font-black leading-tight tracking-tight text-white md:text-8xl lg:text-9xl">
              Enterprise AI
              <br />
              <span className="bg-gradient-to-r from-primary via-accent-gold to-kinetic bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtext */}
          <ScrollReveal delay={0.3}>
            <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
              Global IT infrastructure, autonomous AI agents, zero-trust security, and cloud-native software—delivered by 200+ experts across 3 continents.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <MagneticButton
                strength={15}
                className="bg-primary text-white shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60"
              >
                <Zap className="h-5 w-5" />
                Get Started
                <ArrowRight className="h-5 w-5" />
              </MagneticButton>

              <MagneticButton
                strength={15}
                className="border-2 border-slate-700 bg-slate-900/50 text-white backdrop-blur-sm hover:border-primary hover:bg-slate-800"
              >
                <BarChart3 className="h-5 w-5" />
                View Case Studies
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Animated Stats Bar */}
          <ScrollReveal delay={0.5}>
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: 500, suffix: '+', label: 'Global Clients' },
                { value: 1000, suffix: '+', label: 'Projects Delivered' },
                { value: 99.99, suffix: '%', label: 'Uptime SLA' },
                { value: 200, suffix: '+', label: 'Team Members' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="mb-2 text-4xl font-black text-white">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                      decimals={stat.suffix === '%' ? 2 : 0}
                    />
                  </div>
                  <div className="text-sm font-medium text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ParallaxHero>

      {/* Interactive Bento Grid - 6 Divisions */}
      <GridSection spacing="xl" className="bg-gradient-to-b from-background via-surface to-background">
        <GridContainer maxWidth="7xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-black text-white md:text-6xl">
                Our <span className="text-gradient">Ecosystem</span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-400">
                Six specialized divisions working in harmony to deliver enterprise-grade solutions
              </p>
            </div>
          </ScrollReveal>

          <BentoGrid columns={3} gap="lg">
            {/* Cortex - Large Tile */}
            <ActiveBentoTile
              size="lg"
              gradient="linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
              delay={0.1}
              expandable
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <Brain className="mb-4 h-12 w-12 text-white" />
                  <h3 className="mb-3 text-3xl font-black text-white">ADAPTUS CORTEX™</h3>
                  <p className="mb-4 text-white/80">
                    AI & Machine Learning agents that optimize operations, predict outcomes, and automate complex workflows.
                  </p>
                </div>
                <Link
                  href="/divisions/cortex"
                  className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all"
                >
                  Explore Cortex
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </ActiveBentoTile>

            {/* Sentinel */}
            <ActiveBentoTile
              size="md"
              gradient="linear-gradient(135deg, #ef4444 0%, #f97316 100%)"
              delay={0.2}
            >
              <Shield className="mb-4 h-10 w-10 text-white" />
              <h3 className="mb-2 text-2xl font-black text-white">ADAPTUS SENTINEL™</h3>
              <p className="text-sm text-white/80">
                Zero-trust security, SOC operations, and 24/7 managed IT infrastructure.
              </p>
              <Link
                href="/divisions/sentinel"
                className="mt-4 inline-flex items-center gap-2 text-white hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ActiveBentoTile>

            {/* Forge */}
            <ActiveBentoTile
              size="md"
              gradient="linear-gradient(135deg, #f59e0b 0%, #eab308 100%)"
              delay={0.3}
            >
              <Code className="mb-4 h-10 w-10 text-white" />
              <h3 className="mb-2 text-2xl font-black text-white">ADAPTUS FORGE™</h3>
              <p className="text-sm text-white/80">
                Cloud-native software development, microservices, and API-first architecture.
              </p>
              <Link
                href="/divisions/forge"
                className="mt-4 inline-flex items-center gap-2 text-white hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ActiveBentoTile>

            {/* Kinetic */}
            <ActiveBentoTile
              size="md"
              gradient="linear-gradient(135deg, #ec4899 0%, #f472b6 100%)"
              delay={0.4}
            >
              <Rocket className="mb-4 h-10 w-10 text-white" />
              <h3 className="mb-2 text-2xl font-black text-white">ADAPTUS KINETIC™</h3>
              <p className="text-sm text-white/80">
                Growth marketing, demand generation, and performance analytics.
              </p>
              <Link
                href="/divisions/kinetic"
                className="mt-4 inline-flex items-center gap-2 text-white hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ActiveBentoTile>

            {/* Nexus */}
            <ActiveBentoTile
              size="md"
              gradient="linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
              delay={0.5}
            >
              <Globe className="mb-4 h-10 w-10 text-white" />
              <h3 className="mb-2 text-2xl font-black text-white">ADAPTUS NEXUS™</h3>
              <p className="text-sm text-white/80">
                Cloud infrastructure, DevOps automation, and multi-cloud orchestration.
              </p>
              <Link
                href="/divisions/nexus"
                className="mt-4 inline-flex items-center gap-2 text-white hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ActiveBentoTile>

            {/* Vector */}
            <ActiveBentoTile
              size="md"
              gradient="linear-gradient(135deg, #10b981 0%, #34d399 100%)"
              delay={0.6}
            >
              <TrendingUp className="mb-4 h-10 w-10 text-white" />
              <h3 className="mb-2 text-2xl font-black text-white">ADAPTUS VECTOR™</h3>
              <p className="text-sm text-white/80">
                Supply chain optimization, logistics tracking, and real-time analytics.
              </p>
              <Link
                href="/divisions/vector"
                className="mt-4 inline-flex items-center gap-2 text-white hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ActiveBentoTile>
          </BentoGrid>
        </GridContainer>
      </GridSection>

      {/* Metrics Showcase - Animated KPIs */}
      <GridSection spacing="xl" className="relative overflow-hidden bg-gradient-to-b from-surface to-background">
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <GridContainer maxWidth="7xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-black text-white md:text-6xl">
                Impact at <span className="text-gradient">Scale</span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-400">
                Measurable results across industries and continents
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <KPICard
              value={2.8}
              suffix="B"
              prefix="$"
              label="Revenue Managed"
              trend="up"
              trendValue="+40%"
              icon={<BarChart3 className="h-6 w-6 text-primary" />}
              gradient="linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
            />

            <KPICard
              value={99.99}
              suffix="%"
              label="Uptime SLA"
              trend="up"
              trendValue="Industry Leading"
              icon={<Shield className="h-6 w-6 text-sentinel" />}
              gradient="linear-gradient(135deg, #ef4444 0%, #f97316 100%)"
            />

            <KPICard
              value={1000}
              suffix="+"
              label="Projects Delivered"
              trend="up"
              trendValue="+200 this year"
              icon={<CheckCircle2 className="h-6 w-6 text-vector" />}
              gradient="linear-gradient(135deg, #10b981 0%, #34d399 100%)"
            />

            <KPICard
              value={45}
              suffix="+"
              label="Countries Served"
              trend="up"
              trendValue="Global Reach"
              icon={<Globe className="h-6 w-6 text-nexus" />}
              gradient="linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
            />
          </div>
        </GridContainer>
      </GridSection>

      {/* Case Studies Section */}
      <GridSection spacing="xl" className="bg-gradient-to-b from-background to-surface">
        <GridContainer maxWidth="7xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-black text-white md:text-6xl">
                Proven <span className="text-gradient">Results</span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-400">
                Real-world impact across enterprise, finance, and logistics
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Enterprise Fintech Platform',
                industry: 'Finance',
                metrics: ['40% faster delivery', '100% security compliance', '$2.5M cost savings'],
                image: '/images/homepage/case-studies/finance_technology_fintech_tradin_bing_0001_7c8d9e2f.webp',
              },
              {
                title: 'Global Logistics Optimization',
                industry: 'Logistics',
                metrics: ['98% on-time delivery', '100k+ shipments/month', '35% cost reduction'],
                image: '/images/homepage/case-studies/logistics_warehouse_supply_chain_bing_0001_a4b5c6d7.webp',
              },
              {
                title: 'AI-Powered Customer Service',
                industry: 'Enterprise SaaS',
                metrics: ['85% automation rate', '60% faster response', '4.8/5 satisfaction'],
                image: '/images/homepage/case-studies/customer_service_ai_chatbot_supp_bing_0001_e8f9g0h1.webp',
              },
            ].map((study, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <FloatingCard className="group h-full overflow-hidden p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-4 text-2xl font-black text-white">{study.title}</h3>

                    <div className="space-y-2">
                      {study.metrics.map((metric, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-400">
                          <CheckCircle2 className="h-4 w-4 text-vector" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/case-studies"
                      className="mt-6 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                    >
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </FloatingCard>
              </ScrollReveal>
            ))}
          </div>
        </GridContainer>
      </GridSection>

      {/* Technology Stack */}
      <GridSection spacing="xl" className="bg-gradient-to-b from-surface to-background">
        <GridContainer maxWidth="7xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-black text-white md:text-6xl">
                Enterprise <span className="text-gradient">Technology</span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-400">
                Best-in-class tools and platforms powering our solutions
              </p>
            </div>
          </ScrollReveal>

          <BentoGrid columns={4} gap="md">
            {[
              { name: 'AWS', category: 'Cloud' },
              { name: 'Azure', category: 'Cloud' },
              { name: 'Google Cloud', category: 'Cloud' },
              { name: 'Kubernetes', category: 'DevOps' },
              { name: 'TensorFlow', category: 'AI/ML' },
              { name: 'PyTorch', category: 'AI/ML' },
              { name: 'React', category: 'Frontend' },
              { name: 'Next.js', category: 'Frontend' },
            ].map((tech, i) => (
              <BentoTile key={i} size="sm" delay={i * 0.05}>
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-2 text-sm font-semibold text-primary">{tech.category}</div>
                  <div className="text-lg font-black text-white">{tech.name}</div>
                </div>
              </BentoTile>
            ))}
          </BentoGrid>
        </GridContainer>
      </GridSection>

      {/* Global Presence */}
      <GridSection spacing="xl" className="bg-gradient-to-b from-background to-surface">
        <GridContainer maxWidth="7xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-black text-white md:text-6xl">
                Global <span className="text-gradient">Presence</span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-400">
                Three strategic hubs serving clients across 45+ countries
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { city: 'New York', region: 'Americas HQ', timezone: 'EST', image: '/images/homepage/global/new_york_city_skyline_manhattan_bing_0001_i2j3k4l5.webp' },
              { city: 'London', region: 'EMEA HQ', timezone: 'GMT', image: '/images/homepage/global/london_city_skyline_business_dis_bing_0001_m6n7o8p9.webp' },
              { city: 'Singapore', region: 'APAC HQ', timezone: 'SGT', image: '/images/homepage/global/singapore_city_skyline_marina_ba_bing_0001_q0r1s2t3.webp' },
            ].map((office, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <FloatingCard className="overflow-hidden p-0">
                  <div className="relative h-64">
                    <Image
                      src={office.image}
                      alt={office.city}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="mb-1 text-3xl font-black text-white">{office.city}</h3>
                      <p className="text-sm text-white/80">{office.region}</p>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        <Globe className="h-3 w-3" />
                        {office.timezone}
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              </ScrollReveal>
            ))}
          </div>
        </GridContainer>
      </GridSection>

      {/* Testimonials */}
      <GridSection spacing="xl" className="bg-gradient-to-b from-surface to-background">
        <GridContainer maxWidth="7xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-black text-white md:text-6xl">
                Client <span className="text-gradient">Success</span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-400">
                Trusted by industry leaders worldwide
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote: 'AdaptUs transformed our infrastructure with zero downtime. Their team is exceptional.',
                author: 'Sarah Chen',
                role: 'CTO, Global Fintech Corp',
                rating: 5,
              },
              {
                quote: 'The AI agents they built saved us $2M annually. ROI was immediate.',
                author: 'Michael Rodriguez',
                role: 'VP Engineering, Enterprise SaaS',
                rating: 5,
              },
              {
                quote: 'Best-in-class security and compliance. We sleep better at night.',
                author: 'Emily Thompson',
                role: 'CISO, Healthcare Platform',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GlassPanel blur="lg" tint="dark" className="p-8">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>

                  <p className="mb-6 text-lg text-white/90">&ldquo;{testimonial.quote}&rdquo;</p>

                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </GlassPanel>
              </ScrollReveal>
            ))}
          </div>
        </GridContainer>
      </GridSection>

      {/* Final CTA */}
      <GridSection spacing="xl" className="relative overflow-hidden bg-gradient-to-b from-background via-primary/10 to-background">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <GridContainer maxWidth="7xl">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-gradient-to-r from-primary via-accent-gold to-kinetic p-1">
              <div className="rounded-3xl bg-background p-12 text-center md:p-16">
                <h2 className="mb-6 text-5xl font-black text-white md:text-6xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-xl text-slate-400">
                  Join 500+ global enterprises trusting AdaptUs for their digital transformation
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <MagneticButton
                    strength={20}
                    className="bg-primary text-white shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60"
                  >
                    <Users className="h-5 w-5" />
                    Schedule Consultation
                    <ArrowRight className="h-5 w-5" />
                  </MagneticButton>

                  <MagneticButton
                    strength={20}
                    className="border-2 border-slate-700 bg-slate-900/50 text-white backdrop-blur-sm hover:border-primary hover:bg-slate-800"
                  >
                    <BarChart3 className="h-5 w-5" />
                    Download Case Studies
                  </MagneticButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </GridContainer>
      </GridSection>
    </div>
  );
}
