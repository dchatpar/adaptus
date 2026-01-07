'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Code, Database, Cloud, Shield, Zap, Brain } from 'lucide-react';

export function TechnologyStack() {
  const categories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: '#6E33FF',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'LangChain'],
    },
    {
      name: 'Cloud Infrastructure',
      icon: Cloud,
      color: '#1565C0',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'],
    },
    {
      name: 'Development',
      icon: Code,
      color: '#FF6A00',
      technologies: ['Next.js', 'React', 'Node.js', 'TypeScript'],
    },
    {
      name: 'Data & Analytics',
      icon: Database,
      color: '#9AE66E',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    },
    {
      name: 'Security',
      icon: Shield,
      color: '#E53935',
      technologies: ['Zero Trust', 'SOC 2', 'ISO 27001', 'Encryption'],
    },
    {
      name: 'Automation',
      icon: Zap,
      color: '#F2A71B',
      technologies: ['GitHub Actions', 'Terraform', 'Ansible', 'Docker'],
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
            Enterprise-Grade Technology Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            Best-in-class tools and platforms powering our solutions
          </motion.p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-slate-800 bg-background p-8"
            >
              <div
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <category.icon className="h-7 w-7" style={{ color: category.color }} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">{category.name}</h3>
              <div className="space-y-2">
                {category.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-kinetic" />
                    <span className="text-sm text-slate-400">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
