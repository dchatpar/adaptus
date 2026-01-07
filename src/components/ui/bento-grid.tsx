'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface BentoCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  className?: string;
  span?: 'col-1' | 'col-2' | 'col-3' | 'row-1' | 'row-2' | 'row-3';
  hover?: 'lift' | 'glow' | 'scale' | 'none';
}

export function BentoCard({ children, className, span, hover = 'lift', ...props }: BentoCardProps) {
  const spanClasses = {
    'col-1': 'md:col-span-1',
    'col-2': 'md:col-span-2',
    'col-3': 'md:col-span-3',
    'row-1': 'md:row-span-1',
    'row-2': 'md:row-span-2',
    'row-3': 'md:row-span-3',
  };

  const hoverVariants = {
    lift: {
      y: -8,
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.2)',
    },
    glow: {
      boxShadow: '0 0 40px rgb(14 165 233 / 0.4)',
    },
    scale: {
      scale: 1.02,
    },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={hover !== 'none' ? hoverVariants[hover] : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-slate-800 bg-surface p-6',
        'transition-all duration-300',
        span && spanClasses[span],
        className
      )}
      {...props}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
