/**
 * Shape utilities for irregular, polygonal, and curved elements
 * Used for Bento grids, cards, and dynamic layouts
 */

// Polygonal clip paths for irregular shapes
export const polygonShapes = {
  hexagon: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  octagon: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  pentagon: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
  slantedRight: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
  slantedLeft: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
  chevron: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)',
  arrow: 'polygon(0 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0 80%)',
} as const;

// SVG path data for curved borders
export const curvedBorders = {
  wave: 'M0,0 Q50,20 100,0 L100,100 L0,100 Z',
  blob: 'M50,0 C75,0 100,25 100,50 C100,75 75,100 50,100 C25,100 0,75 0,50 C0,25 25,0 50,0',
  organic: 'M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z',
  smooth: 'M0,0 C0,0 25,25 50,25 C75,25 100,0 100,0 L100,100 L0,100 Z',
} as const;

// Bento grid size classes
export const bentoSizes = {
  sm: 'col-span-1 row-span-1',
  md: 'col-span-2 row-span-1',
  lg: 'col-span-2 row-span-2',
  xl: 'col-span-3 row-span-2',
  wide: 'col-span-3 row-span-1',
  tall: 'col-span-1 row-span-2',
} as const;

// Helper function to get random shape
export function getRandomShape(): string {
  const shapes = Object.values(polygonShapes);
  return shapes[Math.floor(Math.random() * shapes.length)];
}

// Helper function to create gradient overlay
export function createGradientOverlay(
  direction: 'to-t' | 'to-b' | 'to-l' | 'to-r' | 'to-br' | 'to-tr',
  opacity: number = 0.6
): string {
  return `linear-gradient(${direction}, rgba(0,0,0,${opacity}) 0%, transparent 100%)`;
}

// Helper function for depth layers
export function getDepthLayer(depth: number): {
  transform: string;
  zIndex: number;
  filter: string;
} {
  return {
    transform: `translateZ(${depth * 10}px)`,
    zIndex: depth,
    filter: `blur(${Math.max(0, (5 - depth) * 0.5)}px)`,
  };
}

export type ShapeName = keyof typeof polygonShapes;
export type BentoSize = keyof typeof bentoSizes;
