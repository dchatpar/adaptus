'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export function EnhancedHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-surface to-background">
      {/* Animated Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero/modern_technology_hero_backgro_bing_0001_af91aed6.jpeg"
          alt="Modern Technology Background"
          fill
          className="object-cover opacity-20"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl"
      />

      <motion.div style={{ opacity }} className="container relative z-10 py-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 backdrop-blur-sm"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Enterprise-Grade Solutions</span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-6xl font-black leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-primary via-accent-gold to-kinetic bg-clip-text text-transparent">
              AI-Powered Innovation
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl"
          >
            Six specialized divisions delivering cutting-edge software, AI, and digital transformation
            solutions across industries. From concept to deployment, we build the future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/60"
            >
              <Zap className="h-5 w-5" />
              Start Your Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-700 bg-slate-900/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-primary hover:bg-slate-800"
            >
              View Case Studies
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '6', label: 'Specialized Divisions' },
              { value: '24/7', label: 'Global Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm"
              >
                <div className="mb-1 text-3xl font-black bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="h-8 w-5 rounded-full border-2 border-slate-600">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-auto mt-1 h-2 w-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
