'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = true,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = value * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, value, duration]);

  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    if (!separator) return fixed;

    const parts = fixed.split('.');
    if (parts[0]) {
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return parts.join('.');
  };

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

interface KPICardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  icon?: React.ReactNode;
  gradient?: string;
  className?: string;
}

export function KPICard({
  value,
  label,
  prefix = '',
  suffix = '',
  trend,
  trendValue,
  icon,
  gradient,
  className,
}: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative overflow-hidden rounded-2xl p-6',
        'bg-surface backdrop-blur-md',
        'border border-slate-800/50',
        'shadow-lg',
        className
      )}
      style={{
        background: gradient || undefined,
      }}
    >
      {/* Gradient overlay */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      )}

      <div className="relative z-10">
        {/* Icon */}
        {icon && (
          <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3 backdrop-blur-sm">
            {icon}
          </div>
        )}

        {/* Value */}
        <div className="mb-2 text-4xl font-black text-white">
          <AnimatedCounter
            value={value}
            prefix={prefix}
            suffix={suffix}
            separator
          />
        </div>

        {/* Label */}
        <div className="mb-2 text-sm font-medium text-white/60">
          {label}
        </div>

        {/* Trend indicator */}
        {trend && trendValue && (
          <div
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold',
              trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            )}
          >
            <span>{trend === 'up' ? '↑' : '↓'}</span>
            <span>{trendValue}</span>
          </div>
        )}
      </div>

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        whileHover={{ opacity: 0.1 }}
        style={{
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.4), transparent 70%)',
        }}
      />
    </motion.div>
  );
}
