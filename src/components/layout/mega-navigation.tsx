'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO, DIVISIONS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function MegaNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMega, setActiveMega] = React.useState<string | null>(null);
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
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.name === 'Divisions' && setActiveMega('divisions')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  'group relative text-sm font-semibold text-slate-300 transition-colors hover:text-primary',
                  'flex items-center gap-1'
                )}
              >
                {link.name}
                {link.name === 'Divisions' && (
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                )}

                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Mega Menu for Divisions */}
              {link.name === 'Divisions' && activeMega === 'divisions' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 top-full mt-2 w-[600px] -translate-x-1/2 rounded-2xl border border-slate-800 bg-surface p-6 shadow-2xl"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {DIVISIONS.map((division) => (
                      <Link
                        key={division.id}
                        href={division.href}
                        className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-slate-800"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 ring-1 ring-slate-800 transition-all group-hover:bg-primary/10 group-hover:ring-primary/50">
                          <division.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-slate-50">{division.name}</div>
                          <div className="text-xs text-slate-400">{division.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
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
