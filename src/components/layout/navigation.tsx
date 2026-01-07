'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.95)']
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.2]);

  return (
    <motion.header
      style={{
        backgroundColor,
        borderBottomColor: useTransform(
          borderOpacity,
          (opacity) => `rgba(148, 163, 184, ${opacity})`
        ),
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
    >
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-black text-slate-50">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black leading-none text-slate-50">
              {COMPANY_INFO.name.split(' ')[0]}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Group
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800 hover:text-slate-50 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-slate-800 bg-surface md:hidden"
        >
          <div className="container flex flex-col gap-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-slate-300 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-4 w-full">Get Started</Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
