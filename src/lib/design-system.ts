/**
 * Enterprise Design System - 8px Baseline Grid
 * Following Apple/Google/Shopify alignment standards
 */

// 8px baseline spacing scale
export const spacing = {
  0: '0px',
  1: '8px',    // 8 * 1
  2: '16px',   // 8 * 2
  3: '24px',   // 8 * 3
  4: '32px',   // 8 * 4
  5: '40px',   // 8 * 5
  6: '48px',   // 8 * 6
  7: '56px',   // 8 * 7
  8: '64px',   // 8 * 8
  9: '72px',   // 8 * 9
  10: '80px',  // 8 * 10
  12: '96px',  // 8 * 12
  14: '112px', // 8 * 14
  16: '128px', // 8 * 16
  20: '160px', // 8 * 20
  24: '192px', // 8 * 24
  28: '224px', // 8 * 28
  32: '256px', // 8 * 32
} as const;

// Typography scale aligned to 8px baseline
export const typography = {
  fontSize: {
    xs: ['12px', { lineHeight: '16px' }],    // 12/16 = 0.75 ratio
    sm: ['14px', { lineHeight: '20px' }],    // 14/20 = 0.7 ratio
    base: ['16px', { lineHeight: '24px' }],  // 16/24 = 0.667 ratio
    lg: ['18px', { lineHeight: '28px' }],    // 18/28 = 0.643 ratio
    xl: ['20px', { lineHeight: '28px' }],    // 20/28 = 0.714 ratio
    '2xl': ['24px', { lineHeight: '32px' }], // 24/32 = 0.75 ratio
    '3xl': ['30px', { lineHeight: '36px' }], // 30/36 = 0.833 ratio
    '4xl': ['36px', { lineHeight: '40px' }], // 36/40 = 0.9 ratio
    '5xl': ['48px', { lineHeight: '48px' }], // 48/48 = 1 ratio
    '6xl': ['60px', { lineHeight: '64px' }], // 60/64 = 0.938 ratio
    '7xl': ['72px', { lineHeight: '80px' }], // 72/80 = 0.9 ratio
    '8xl': ['96px', { lineHeight: '96px' }], // 96/96 = 1 ratio
    '9xl': ['128px', { lineHeight: '128px' }], // 128/128 = 1 ratio
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },
} as const;

// Container max widths (aligned to grid)
export const containers = {
  sm: '640px',   // 80 * 8
  md: '768px',   // 96 * 8
  lg: '1024px',  // 128 * 8
  xl: '1280px',  // 160 * 8
  '2xl': '1536px', // 192 * 8
  '7xl': '1440px', // 180 * 8 (max content width)
} as const;

// Breakpoints (aligned to 8px grid)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Grid columns and gutters
export const grid = {
  columns: 12,
  gutter: {
    mobile: '16px',  // 2 * 8
    tablet: '24px',  // 3 * 8
    desktop: '32px', // 4 * 8
  },
} as const;

// Border radius (aligned to 8px)
export const borderRadius = {
  none: '0px',
  sm: '4px',   // 0.5 * 8
  DEFAULT: '8px',  // 1 * 8
  md: '12px',  // 1.5 * 8
  lg: '16px',  // 2 * 8
  xl: '24px',  // 3 * 8
  '2xl': '32px', // 4 * 8
  '3xl': '48px', // 6 * 8
  full: '9999px',
} as const;

// Shadows (aligned to grid)
export const boxShadow = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
} as const;

// Z-index scale
export const zIndex = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
} as const;

export const designSystem = {
  spacing,
  typography,
  containers,
  breakpoints,
  grid,
  borderRadius,
  boxShadow,
  zIndex,
} as const;
