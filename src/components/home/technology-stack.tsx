'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/section';
import { Cloud, Code, Database, Lock, Zap, Cpu } from 'lucide-react';

const techCategories = [
  {
    name: 'Cloud Infrastructure',
    icon: Cloud,
    image: '/images/tech-stack/technology_stack_cloud_computi_bing_0001_4f95b496.webp',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    color: 'from-nexus/30 to-primary/30',
  },
  {
    name: 'AI & Machine Learning',
    icon: Cpu,
    image: '/images/tech-stack/technology_stack_cloud_computi_bing_0004_cff21eb3.jpeg',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain', 'Vector DBs'],
    color: 'from-primary/30 to-accent-gold/30',
  },
  {
    name: 'Frontend Development',
    icon: Code,
    image: '/images/tech-stack/technology_stack_cloud_computi_bing_0005_796c549d.jpeg',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    color: 'from-forge/30 to-kinetic/30',
  },
  {
    name: 'Backend & APIs',
    icon: Database,
    image: '/images/tech-stack/technology_stack_cloud_computi_bing_0007_c2d09d47.jpeg',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
    color: 'from-sentinel/30 to-vector/30',
  },
  {
    name: 'Security & Compliance',
    icon: Lock,
    image: '/images/tech-stack/technology_stack_cloud_computi_bing_0008_2260988b.jpeg',
    technologies: ['Zero Trust', 'OAuth 2.0', 'JWT', 'Encryption', 'SIEM', 'WAF'],
    color: 'from-sentinel/30 to-primary/30',
  },
  {
    name: 'Performance & Scale',
    icon: Zap,
    image: '/images/tech-stack/technology_stack_cloud_computi_bing_0009_9669cc74.jpeg',
    technologies: ['CDN', 'Load Balancing', 'Caching', 'Edge Computing', 'Auto-scaling', 'Monitoring'],
    color: 'from-kinetic/30 to-nexus/30',
  },
];

export function TechnologyStack() {
  return (
    <Section background="grid">
      <SectionHeader
        subtitle="Technology Excellence"
        title="Enterprise-Grade Tech Stack"
        description="We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions."
        centered
      />

      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Background Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
                  quality={90}
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${category.color} to-background/95`} />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl bg-slate-900/80 p-4 ring-1 ring-slate-700 backdrop-blur-sm"
                  >
                    <category.icon className="h-12 w-12 text-primary" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-4 text-xl font-black tracking-tight text-slate-50">
                  {category.name}
                </h3>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="rounded-lg border border-slate-600 bg-slate-800/50 px-3 py-1.5 text-xs font-semibold text-white/90 transition-all hover:border-primary hover:text-primary hover:bg-primary/10"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Animated Border Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent-gold/20 to-primary/20 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm md:grid-cols-4"
        >
          {[
            { value: '50+', label: 'Technologies' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '24/7', label: 'Support' },
            { value: 'SOC 2', label: 'Certified' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-black bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
