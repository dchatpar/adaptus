'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Factory, ShoppingCart } from 'lucide-react';

export function CaseStudiesPreview() {
  const caseStudies = [
    {
      title: 'Fashion Retailer: 51% Revenue Growth',
      industry: 'Retail & Ecommerce',
      result: '$18.2M annual revenue',
      metric: '4.7%',
      metricLabel: 'Conversion Rate',
      icon: ShoppingCart,
      color: '#9AE66E',
      slug: 'fashion-retailer-revenue-growth',
    },
    {
      title: 'Automotive Manufacturer: $32M Savings',
      industry: 'Manufacturing',
      result: '71% less downtime',
      metric: '99.2%',
      metricLabel: 'Quality Accuracy',
      icon: Factory,
      color: '#FF6A00',
      slug: 'automotive-manufacturer-savings',
    },
    {
      title: 'B2B SaaS: 71% ARR Growth',
      industry: 'Enterprise SaaS',
      result: '$41M ARR achieved',
      metric: '2.9%',
      metricLabel: 'Monthly Churn',
      icon: TrendingUp,
      color: '#6E33FF',
      slug: 'saas-arr-growth',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-5xl font-bold text-white"
            >
              Client Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400"
            >
              Real results from real enterprises
            </motion.p>
          </div>
          <Link
            href="/case-studies"
            className="hidden items-center gap-2 text-accent-blue hover:underline md:inline-flex"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-800 bg-surface transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-8">
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${study.color}20` }}
                >
                  <study.icon className="h-7 w-7" style={{ color: study.color }} />
                </div>
                <div
                  className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: `${study.color}20`, color: study.color }}
                >
                  {study.industry}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">{study.title}</h3>
                <div
                  className="mb-6 rounded-lg p-6 text-center"
                  style={{ backgroundColor: `${study.color}10` }}
                >
                  <div className="mb-2 text-5xl font-black" style={{ color: study.color }}>
                    {study.metric}
                  </div>
                  <div className="text-sm text-slate-300">{study.metricLabel}</div>
                </div>
                <p className="mb-6 text-slate-400">{study.result}</p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:underline"
                >
                  Read Full Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-accent-blue hover:underline"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
