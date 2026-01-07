'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  index?: number;
}

export function Card({ title, tagline, description, icon: Icon, href, index = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={cn(
        'group relative overflow-hidden rounded-xl border border-slate-800',
        'bg-surface p-8 transition-all duration-300',
        'hover:border-primary hover:shadow-glow'
      )}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 inline-flex rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800 transition-all duration-300 group-hover:bg-primary/10 group-hover:ring-primary/50">
          <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="mb-2 text-2xl font-black tracking-tight text-slate-50">{title}</h3>

        {/* Tagline */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
          {tagline}
        </p>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed">{description}</p>

        {/* Link indicator */}
        {href && (
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-200 group-hover:text-primary">
            <span>Learn more</span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );
}
