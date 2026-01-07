'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Shield,
  Hammer,
  Zap,
  Network,
  Navigation,
  ChevronDown,
  Mail,
} from 'lucide-react';

import { DIVISIONS } from '@/lib/constants';

const divisionIcons = {
  cortex: Brain,
  sentinel: Shield,
  forge: Hammer,
  kinetic: Zap,
  nexus: Network,
  vector: Navigation,
};

const divisionColors = {
  cortex: '#6E33FF',
  sentinel: '#1565C0',
  forge: '#FF6A00',
  kinetic: '#9AE66E',
  nexus: '#00B5AD',
  vector: '#E53935',
};

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Divisions', href: '/divisions', hasMegaMenu: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="relative">
      <div className="flex items-center gap-8">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.label)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
              {item.hasMegaMenu && (
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeMenu === item.label ? 'rotate-180' : ''
                  }`}
                />
              )}
            </Link>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {item.hasMegaMenu && activeMenu === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full z-50 mt-2 w-screen max-w-6xl -translate-x-1/2"
                >
                  <div className="rounded-2xl border border-slate-800 bg-surface-elevated p-8 shadow-2xl backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-6">
                      {DIVISIONS.map((division) => {
                        const Icon = divisionIcons[division.id as keyof typeof divisionIcons];
                        const color = divisionColors[division.id as keyof typeof divisionColors];

                        return (
                          <Link
                            key={division.id}
                            href={division.href}
                            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-lg"
                          >
                            {/* Gradient Overlay on Hover */}
                            <div
                              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                              style={{ backgroundColor: color }}
                            />

                            {/* Icon */}
                            <div className="relative mb-4">
                              <div
                                className="inline-flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                                style={{
                                  backgroundColor: `${color}1A`,
                                  color: color,
                                }}
                              >
                                <Icon className="h-6 w-6" />
                              </div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                              <h3
                                className="mb-2 text-lg font-bold transition-colors"
                                style={{ color: 'white' }}
                              >
                                {division.name}
                              </h3>
                              <p className="text-sm text-slate-400 line-clamp-2">
                                {division.description}
                              </p>
                            </div>

                            {/* Arrow Indicator */}
                            <div className="absolute bottom-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                              <svg
                                className="h-5 w-5"
                                style={{ color: color }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom CTA Section */}
                    <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Need help choosing the right division?
                        </h4>
                        <p className="text-sm text-slate-400">
                          Our team can guide you to the perfect solution
                        </p>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-glow"
                      >
                        <Mail className="h-4 w-4" />
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </nav>
  );
}

