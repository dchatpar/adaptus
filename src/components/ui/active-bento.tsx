'use client';

import { motion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { designTokens } from '@/lib/design-tokens';

interface ActiveBentoTileProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  expandable?: boolean;
  videoSrc?: string;
  hoverContent?: ReactNode;
  gradient?: string;
  className?: string;
  delay?: number;
}

export function ActiveBentoTile({
  children,
  size = 'md',
  expandable = false,
  videoSrc,
  hoverContent,
  gradient,
  className,
  delay = 0,
}: ActiveBentoTileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'col-span-1 row-span-1',
    md: 'col-span-2 row-span-1',
    lg: 'col-span-2 row-span-2',
    xl: 'col-span-3 row-span-2',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: designTokens.motion.easing.default,
      }}
      whileHover={{
        scale: isExpanded ? 1 : 1.03,
        rotateZ: isExpanded ? 0 : 0.5,
        transition: { duration: 0.3 },
      }}
      onClick={() => expandable && setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative overflow-hidden rounded-3xl',
        'bg-surface backdrop-blur-md',
        'border border-slate-800/50',
        'cursor-pointer transition-all duration-300',
        sizeClasses[size],
        isExpanded && 'col-span-full row-span-full z-50',
        className
      )}
      style={{
        background: gradient || undefined,
        boxShadow: isHovered
          ? '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(99, 102, 241, 0.2)'
          : '0 8px 32px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Video background (if provided) */}
      {videoSrc && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={cn(
              'h-full w-full object-cover opacity-0 transition-opacity duration-500',
              isHovered && 'opacity-30'
            )}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Gradient overlay */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
      )}

      {/* Main content */}
      <div className="relative z-10 h-full p-6">
        {children}
      </div>

      {/* Hover reveal content */}
      {hoverContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
        >
          {hoverContent}
        </motion.div>
      )}

      {/* Animated border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.3) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: isHovered ? 'shimmer 2s infinite' : 'none',
        }}
      />

      {/* Expand indicator */}
      {expandable && (
        <motion.div
          className="absolute bottom-4 right-4 z-30 rounded-full bg-white/10 p-2 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
        >
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-white"
            animate={{ rotate: isExpanded ? 45 : 0 }}
          >
            <path
              d="M4 10h12M10 4v12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </motion.div>
  );
}

// Add shimmer animation to global CSS
const shimmerKeyframes = `
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
`;
