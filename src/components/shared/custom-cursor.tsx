'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';

interface CursorContextType {
  cursorVariant: string;
  setCursorVariant: (variant: string) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
}

const CursorContext = React.createContext<CursorContextType>({
  cursorVariant: 'default',
  setCursorVariant: () => {},
  cursorText: '',
  setCursorText: () => {},
});

export function useCursor() {
  return React.useContext(CursorContext);
}

export function CustomCursor({ children }: { children: React.ReactNode }) {
  const [cursorVariant, setCursorVariant] = React.useState('default');
  const [cursorText, setCursorText] = React.useState('');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  React.useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'rgba(14, 165, 233, 0.5)',
      border: '2px solid rgba(14, 165, 233, 1)',
      mixBlendMode: 'normal' as const,
    },
    button: {
      height: 64,
      width: 64,
      backgroundColor: 'rgba(14, 165, 233, 0.2)',
      border: '2px solid rgba(14, 165, 233, 1)',
      mixBlendMode: 'difference' as const,
    },
    link: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(14, 165, 233, 0.3)',
      border: '2px solid rgba(14, 165, 233, 1)',
      mixBlendMode: 'normal' as const,
    },
  };

  if (isMobile) {
    return (
      <CursorContext.Provider
        value={{ cursorVariant, setCursorVariant, cursorText, setCursorText }}
      >
        {children}
      </CursorContext.Provider>
    );
  }

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant, cursorText, setCursorText }}>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {cursorText && <span className="text-xs font-bold text-slate-50">{cursorText}</span>}
      </motion.div>
      <div className="cursor-none">{children}</div>
    </CursorContext.Provider>
  );
}
