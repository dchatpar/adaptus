'use client';

import { motion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { designTokens } from '@/lib/design-tokens';

interface FloatingCardProps {
  children: ReactNode;
  tilt?: boolean;
  maxTilt?: number;
  glowColor?: string;
  className?: string;
}

export function FloatingCard({
  children,
  tilt = true,
  maxTilt = 10,
  glowColor = 'rgba(99, 102, 241, 0.4)',
  className,
}: FloatingCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setRotateX((y - 0.5) * maxTilt);
    setRotateY((x - 0.5) * -maxTilt);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.2), 0 0 40px ${glowColor}`,
      }}
      transition={{
        duration: 0.3,
        ease: designTokens.motion.easing.default,
      }}
      className={cn(
        'relative rounded-2xl bg-surface p-6',
        'border border-slate-800/50',
        'shadow-lg transition-all duration-300',
        className
      )}
    >
      {/* Inner content with reverse transform to keep it flat */}
      <div
        style={{
          transform: 'translateZ(20px)',
        }}
      >
        {children}
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  strength = 20,
  className,
  onClick,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    setPosition({
      x: x * strength,
      y: y * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={position}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'relative inline-flex items-center justify-center gap-2',
        'rounded-lg px-8 py-4 text-lg font-semibold',
        'bg-primary text-white',
        'shadow-lg shadow-primary/50',
        'transition-all duration-300',
        'hover:shadow-xl hover:shadow-primary/60',
        className
      )}
    >
      {children}
    </motion.button>
  );
}
