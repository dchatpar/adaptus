'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';

const caseStudies = [
  {
    id: 1,
    title: 'Fortune 500 Digital Transformation',
    client: 'Global Retail Corporation',
    industry: 'Retail & E-commerce',
    image: '/images/metrics/business_success_metrics_dashb_bing_0004_af471899.jpeg',
    results: [
      { label: 'Revenue Increase', value: '+340%', icon: TrendingUp },
      { label: 'User Growth', value: '2.4M', icon: Users },
      { label: 'Performance', value: '+89%', icon: Zap },
    ],
    description: 'Complete cloud migration and AI-powered analytics platform deployment',
    tags: ['Cloud Migration', 'AI/ML', 'Analytics'],
    color: 'from-primary/20 to-accent-gold/20',
  },
  {
    id: 2,
    title: 'Enterprise Security Overhaul',
    client: 'Financial Services Leader',
    industry: 'Finance & Banking',
    image: '/images/metrics/business_success_metrics_dashb_bing_0005_5867cdc9.jpeg',
    results: [
      { label: 'Threat Detection', value: '+99.8%', icon: TrendingUp },
      { label: 'Response Time', value: '-85%', icon: Zap },
      { label: 'Compliance', value: '100%', icon: Users },
    ],
    description: 'Zero-trust architecture implementation with real-time threat intelligence',
    tags: ['Cybersecurity', 'Compliance', 'Zero Trust'],
    color: 'from-sentinel/20 to-primary/20',
  },
  {
    id: 3,
    title: 'Supply Chain Optimization',
    client: 'Manufacturing Giant',
    industry: 'Manufacturing & Logistics',
    image: '/images/metrics/business_success_metrics_dashb_bing_0006_a0a7b876.jpeg',
    results: [
      { label: 'Cost Reduction', value: '-42%', icon: TrendingUp },
      { label: 'Efficiency', value: '+156%', icon: Zap },
      { label: 'Accuracy', value: '99.9%', icon: Users },
    ],
    description: 'AI-driven logistics platform with predictive analytics and automation',
    tags: ['Logistics', 'AI', 'Automation'],
    color: 'from-vector/20 to-kinetic/20',
  },
];

export function CaseStudiesPreview() {
  return (
    <Section background="elevated">
      <SectionHeader
        subtitle="Success Stories"
        title="Transforming Businesses Worldwide"
        description="Real results from real clients. See how we've helped industry leaders achieve their digital transformation goals."
        centered
      />

      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${study.color} to-background/95`} />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    {study.industry}
                  </p>
                  <h3 className="mb-2 text-xl font-black tracking-tight text-slate-50">
                    {study.title}
                  </h3>
                  <p className="text-sm text-white/80">{study.description}</p>
                </div>

                {/* Results Grid */}
                <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <result.icon className="mx-auto mb-1 h-4 w-4 text-primary" />
                      <div className="mb-1 text-lg font-black text-gradient bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
                        {result.value}
                      </div>
                      <div className="text-xs text-slate-300">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  Read Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-primary/10 px-8 py-4 text-lg font-semibold text-primary backdrop-blur-sm transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/50"
          >
            View All Case Studies
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
