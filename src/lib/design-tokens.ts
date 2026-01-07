/**
 * Design Tokens for AdaptUs Enterprise UI/UX
 * Branch-specific colors, animations, shadows, and spacing
 */

export const designTokens = {
  // Branch-specific color themes
  branches: {
    cortex: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#a78bfa',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    },
    sentinel: {
      primary: '#ef4444',
      secondary: '#f97316',
      accent: '#fb923c',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
    },
    forge: {
      primary: '#f59e0b',
      secondary: '#eab308',
      accent: '#fbbf24',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #eab308 100%)',
    },
    kinetic: {
      primary: '#ec4899',
      secondary: '#f472b6',
      accent: '#fb7185',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
    },
    nexus: {
      primary: '#3b82f6',
      secondary: '#60a5fa',
      accent: '#93c5fd',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
    },
    vector: {
      primary: '#10b981',
      secondary: '#34d399',
      accent: '#6ee7b7',
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    },
  },

  // Animation timings
  motion: {
    instant: '100ms',
    fast: '200ms',
    base: '300ms',
    slow: '600ms',
    slower: '900ms',
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    stagger: {
      fast: 50,
      base: 100,
      slow: 150,
    },
  },

  // Shadows & depth
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
    md: '0 4px 16px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.2)',
    xl: '0 16px 64px rgba(0, 0, 0, 0.25)',
    glow: {
      primary: '0 0 24px rgba(99, 102, 241, 0.4)',
      accent: '0 0 32px rgba(236, 72, 153, 0.5)',
      success: '0 0 24px rgba(16, 185, 129, 0.4)',
    },
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
  },

  // Spacing scale
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
    '3xl': '6rem',  // 96px
    '4xl': '8rem',  // 128px
  },

  // Border radius
  radius: {
    sm: '0.375rem',  // 6px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },

  // Z-index layers
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },
} as const;

export type BranchName = keyof typeof designTokens.branches;
