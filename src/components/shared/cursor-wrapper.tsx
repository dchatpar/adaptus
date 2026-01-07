'use client';

import * as React from 'react';
import { useCursor } from '@/components/shared/custom-cursor';

interface CursorWrapperProps {
  children: React.ReactNode;
  variant?: 'default' | 'button' | 'link';
  text?: string;
}

export function CursorWrapper({ children, variant = 'default', text = '' }: CursorWrapperProps) {
  const { setCursorVariant, setCursorText } = useCursor();

  return (
    <div
      onMouseEnter={() => {
        setCursorVariant(variant);
        if (text) setCursorText(text);
      }}
      onMouseLeave={() => {
        setCursorVariant('default');
        setCursorText('');
      }}
    >
      {children}
    </div>
  );
}
