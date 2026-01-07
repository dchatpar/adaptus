'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxHeroProps {
  backgroundImage: string;
  children: ReactNode;
  height?: 'screen' | 'xl' | '2xl';
  overlayOpacity?: number;
  className?: string;
}

export function ParallaxHero({
  backgroundImage,
  children,
  height = 'screen',
  overlayOpacity = 0.6,
  className,
}: ParallaxHeroProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const heightClasses = {
    screen: 'min-h-screen',
    xl: 'min-h-[80vh]',
    '2xl': 'min-h-[70vh]',
  };

  return (
    <section
      ref={heroRef}
      className={cn(
        'relative flex items-center overflow-hidden',
        heightClasses[height],
        className
      )}
    >
      {/* Parallax Background Layer */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        {/* Multi-layer gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom,
                rgba(0, 0, 0, ${overlayOpacity * 0.8}) 0%,
                rgba(0, 0, 0, ${overlayOpacity * 0.6}) 50%,
                rgba(0, 0, 0, ${overlayOpacity}) 100%
              )
            `,
          }}
        />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 grid-pattern opacity-20" />

      {/* Animated noise texture for depth */}
      <div className="absolute inset-0 z-0 opacity-5 mix-blend-overlay">
        <div className="h-full w-full bg-[url('/noise.png')] animate-noise" />
      </div>

      {/* Content Layer */}
      <motion.div
        style={{ opacity }}
        className="container relative z-10 py-24"
      >
        {children}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/60">Scroll to explore</span>
          <div className="h-12 w-6 rounded-full border-2 border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-2 w-2 rounded-full bg-white/60"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

interface GlassPanelProps {
  children: ReactNode;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  tint?: 'light' | 'dark';
  border?: boolean;
  className?: string;
}

export function GlassPanel({
  children,
  blur = 'md',
  tint = 'dark',
  border = true,
  className,
}: GlassPanelProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const tintClasses = {
    light: 'bg-white/10',
    dark: 'bg-black/20',
  };

  return (
    <div
      className={cn(
        'rounded-2xl',
        blurClasses[blur],
        tintClasses[tint],
        border && 'border border-white/10',
        'shadow-2xl shadow-black/20',
        className
      )}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
