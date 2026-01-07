/**
 * Baseline Grid Utilities
 * Ensures all components align to 8px baseline grid
 */

import { cn } from './utils';

/**
 * Get spacing value aligned to 8px grid
 * @param multiplier - Number of 8px units
 */
export function getGridSpacing(multiplier: number): string {
  return `${multiplier * 8}px`;
}

/**
 * Validate if value is aligned to 8px grid
 */
export function isGridAligned(value: number): boolean {
  return value % 8 === 0;
}

/**
 * Round value to nearest 8px grid line
 */
export function snapToGrid(value: number): number {
  return Math.round(value / 8) * 8;
}

/**
 * Container component with grid alignment
 */
export function GridContainer({
  children,
  className,
  maxWidth = '7xl',
}: {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
}) {
  return (
    <div
      className={cn(
        'container mx-auto',
        `max-w-${maxWidth}`,
        'px-4 md:px-6 lg:px-8', // 16px, 24px, 32px
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Section component with baseline grid alignment
 */
export function GridSection({
  children,
  className,
  spacing = 'lg',
}: {
  children: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  const spacingClasses = {
    sm: 'py-12 md:py-16',  // 96px, 128px
    md: 'py-16 md:py-20',  // 128px, 160px
    lg: 'py-20 md:py-24',  // 160px, 192px
    xl: 'py-24 md:py-32',  // 192px, 256px
  };

  return (
    <section className={cn(spacingClasses[spacing], className)}>
      {children}
    </section>
  );
}

/**
 * Typography component with baseline alignment
 */
export function BaselineText({
  children,
  as: Component = 'p',
  size = 'base',
  className,
}: {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  className?: string;
}) {
  return (
    <Component className={cn(`text-${size}`, 'leading-snug', className)}>
      {children}
    </Component>
  );
}

/**
 * Grid overlay for development/debugging
 * Shows 8px baseline grid lines
 */
export function GridOverlay({ show = false }: { show?: boolean }) {
  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Vertical grid lines */}
      <div className="h-full w-full" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(255, 0, 0, 0.1) 7px, rgba(255, 0, 0, 0.1) 8px)',
      }} />

      {/* Horizontal grid lines */}
      <div className="absolute inset-0 h-full w-full" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0, 0, 255, 0.1) 7px, rgba(0, 0, 255, 0.1) 8px)',
      }} />

      {/* Grid info */}
      <div className="absolute bottom-4 right-4 rounded-lg bg-black/80 px-4 py-2 text-xs text-white backdrop-blur-sm">
        8px Baseline Grid Active
      </div>
    </div>
  );
}
