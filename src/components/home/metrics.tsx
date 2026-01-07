'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

export function MetricsSection() {
  const metrics = [
    {
      value: '250+',
      label: 'Enterprise Clients',
      description: 'Across 6 industries',
      icon: Users,
      color: '#6E33FF',
    },
    {
      value: '$420M+',
      label: 'Client Value Generated',
      description: 'Measurable ROI delivered',
      icon: TrendingUp,
      color: '#9AE66E',
    },
    {
      value: '3',
      label: 'Global Offices',
      description: 'Vancouver, Dubai, Mumbai',
      icon: Globe,
      color: '#1565C0',
    },
    {
      value: '99.99%',
      label: 'Uptime SLA',
      description: 'Enterprise-grade reliability',
      icon: Award,
      color: '#F2A71B',
    },
  ];

  return (
    <section className="section bg-surface">
      <div className="container">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-5xl font-bold text-white"
          >
            Trusted by Global Enterprises
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            Delivering measurable results across industries
          </motion.p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-background p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5"
                style={{ backgroundColor: metric.color }}
              />
              <div className="relative">
                <div
                  className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${metric.color}20` }}
                >
                  <metric.icon className="h-7 w-7" style={{ color: metric.color }} />
                </div>
                <div className="mb-2 text-6xl font-black" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="mb-2 text-xl font-bold text-white">{metric.label}</div>
                <div className="text-sm text-slate-400">{metric.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
