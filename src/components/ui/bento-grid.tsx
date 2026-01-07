'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { bentoSizes, polygonShapes, type BentoSize, type ShapeName } from '@/lib/shapes';

interface BentoTileProps {
  children: ReactNode;
  size?: BentoSize;
  shape?: ShapeName;
  depth?: 1 | 2 | 3 | 4 | 5;
  gradient?: string;
  className?: string;
  delay?: number;
}

export function BentoTile({
  children,
  size = 'md',
  shape,
  depth = 1,
  gradient,
  className,
  delay = 0,
}: BentoTileProps) {
  const shadowIntensity = depth * 0.05;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3 },
      }}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-surface backdrop-blur-sm',
        'border border-slate-800/50',
        'transition-all duration-300',
        bentoSizes[size],
        className
      )}
      style={{
        clipPath: shape ? polygonShapes[shape] : undefined,
        boxShadow: `
          0 ${depth * 4}px ${depth * 16}px rgba(0, 0, 0, ${shadowIntensity}),
          0 ${depth * 2}px ${depth * 8}px rgba(0, 0, 0, ${shadowIntensity * 0.5})
        `,
        background: gradient || undefined,
      }}
    >
      {/* Gradient overlay */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full p-6">
        {children}
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        whileHover={{ opacity: 0.1 }}
        style={{
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.3), transparent 70%)',
        }}
      />
    </motion.div>
  );
}

interface BentoGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function BentoGrid({
  children,
  columns = 3,
  gap = 'md',
  className,
}: BentoGridProps) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div
      className={cn(
        'grid auto-rows-[200px]',
        `grid-cols-1 md:grid-cols-${columns}`,
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
