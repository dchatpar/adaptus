'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'elevated' | 'grid';
}

export function Section({ children, className, id, background = 'default' }: SectionProps) {
  const backgroundClasses = {
    default: 'bg-background',
    elevated: 'bg-surface',
    grid: 'bg-background grid-pattern',
  };

  return (
    <section id={id} className={cn('section relative', backgroundClasses[background], className)}>
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-16', centered && 'text-center mx-auto max-w-3xl')}
    >
      {subtitle && (
        <p className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">{subtitle}</p>
      )}
      <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-50 md:text-5xl">{title}</h2>
      {description && <p className="text-lg text-slate-400 leading-relaxed">{description}</p>}
    </motion.div>
  );
}
