'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
  Search,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Brain,
  Shield,
  Code,
  Rocket,
  Cloud,
  TrendingUp,
  Building2,
  Users,
  FileText,
  Phone,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Menu data structure
const menuData = {
  products: {
    title: 'Products',
    icon: Sparkles,
    columns: [
      {
        title: 'AI & Intelligence',
        items: [
          { name: 'Cortex AI Platform', href: '/divisions/cortex', icon: Brain, description: 'Enterprise AI solutions' },
          { name: 'Machine Learning', href: '/products/ml', icon: Brain, description: 'Advanced ML models' },
        ],
      },
      {
        title: 'Security & IT',
        items: [
          { name: 'Sentinel Security', href: '/divisions/sentinel', icon: Shield, description: 'Cybersecurity suite' },
          { name: 'IT Management', href: '/products/it', icon: Shield, description: 'Infrastructure tools' },
        ],
      },
      {
        title: 'Development',
        items: [
          { name: 'Forge DevOps', href: '/divisions/forge', icon: Code, description: 'Development platform' },
          { name: 'API Gateway', href: '/products/api', icon: Code, description: 'API management' },
        ],
      },
    ],
    featured: {
      title: 'New: AI-Powered Analytics',
      description: 'Transform your data into actionable insights',
      image: '/images/products/featured.webp',
      href: '/products/analytics',
    },
  },
  solutions: {
    title: 'Solutions',
    icon: Rocket,
    columns: [
      {
        title: 'By Industry',
        items: [
          { name: 'Enterprise SaaS', href: '/industries/enterprise-saas', icon: Cloud, description: 'SaaS solutions' },
          { name: 'Finance', href: '/industries/finance', icon: TrendingUp, description: 'Financial services' },
          { name: 'Manufacturing', href: '/industries/manufacturing', icon: Building2, description: 'Industrial tech' },
        ],
      },
      {
        title: 'By Use Case',
        items: [
          { name: 'Digital Transformation', href: '/solutions/transformation', icon: Sparkles, description: 'Modernize operations' },
          { name: 'Cloud Migration', href: '/solutions/cloud', icon: Cloud, description: 'Move to cloud' },
        ],
      },
    ],
    featured: {
      title: 'Case Study: Fortune 500 Success',
      description: '300% ROI in 6 months',
      image: '/images/case-studies/featured.webp',
      href: '/case-studies/fortune-500',
    },
  },
  services: {
    title: 'Services',
    icon: Users,
    columns: [
      {
        title: 'Consulting',
        items: [
          { name: 'Strategy Consulting', href: '/services/strategy', icon: Brain, description: 'Business strategy' },
          { name: 'Technical Consulting', href: '/services/technical', icon: Code, description: 'Tech advisory' },
        ],
      },
      {
        title: 'Support',
        items: [
          { name: '24/7 Support', href: '/services/support', icon: Phone, description: 'Round-the-clock help' },
          { name: 'Training', href: '/services/training', icon: Users, description: 'Team enablement' },
        ],
      },
    ],
    featured: {
      title: 'Premium Support Plans',
      description: 'Get dedicated support from our experts',
      image: '/images/services/support.webp',
      href: '/services/premium',
    },
  },
  insights: {
    title: 'Insights',
    icon: FileText,
    columns: [
      {
        title: 'Resources',
        items: [
          { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest articles' },
          { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Customer stories' },
          { name: 'Whitepapers', href: '/resources/whitepapers', icon: FileText, description: 'In-depth guides' },
        ],
      },
      {
        title: 'Events',
        items: [
          { name: 'Webinars', href: '/events/webinars', icon: Users, description: 'Live sessions' },
          { name: 'Conferences', href: '/events/conferences', icon: Users, description: 'Industry events' },
        ],
      },
    ],
    featured: {
      title: 'Latest Report: AI Trends 2026',
      description: 'Download our comprehensive industry report',
      image: '/images/insights/report.webp',
      href: '/resources/ai-trends-2026',
    },
  },
};

interface MegaMenuProps {
  className?: string;
}

export function MegaMenu({ className }: MegaMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Sticky nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.nav
      ref={menuRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        isSticky ? 'bg-background/95 backdrop-blur-lg shadow-lg' : 'bg-background/80 backdrop-blur-sm',
        className
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ADAPTUS
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>

            {Object.entries(menuData).map(([key, menu]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveMenu(key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  aria-expanded={activeMenu === key}
                  aria-haspopup="true"
                >
                  <span>{menu.title}</span>
                  <ChevronDown className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    activeMenu === key && 'rotate-180'
                  )} />
                </button>

                <AnimatePresence>
                  {activeMenu === key && (
                    <MegaPanel menu={menu} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            menuData={menuData}
            onClose={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Mega Panel Component
interface MegaPanelProps {
  menu: any;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function MegaPanel({ menu, searchQuery, setSearchQuery }: MegaPanelProps) {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[calc(100vw-2rem)] max-w-7xl bg-surface/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden z-[90]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-8">
        {/* Search Bar - 8px grid aligned */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {/* Menu Columns */}
          <div className="col-span-3 grid grid-cols-3 gap-8">
            {menu.columns.map((column: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.items.map((item: any, itemIdx: number) => (
                    <motion.li
                      key={itemIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-background/50 transition-colors"
                      >
                        <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Featured Content */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href={menu.featured.href}
              className="block p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors group"
            >
              <div className="aspect-video bg-background/50 rounded-lg mb-3 overflow-hidden">
                {/* Placeholder for featured image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {menu.featured.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {menu.featured.description}
              </p>
              <div className="flex items-center text-sm text-primary font-medium">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Mobile Menu Component
interface MobileMenuProps {
  menuData: any;
  onClose: () => void;
}

function MobileMenu({ menuData, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <motion.div
      className="fixed inset-0 bg-background z-[110] lg:hidden overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container mx-auto px-4 py-6">
        {/* Header - 8px grid aligned */}
        <div className="flex items-center justify-between mb-8 h-16">
          <div className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ADAPTUS
          </div>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          <Link
            href="/"
            className="block px-4 py-3 text-lg font-medium rounded-lg hover:bg-surface transition-colors"
            onClick={onClose}
          >
            Home
          </Link>

          {Object.entries(menuData).map(([key, menu]: [string, any]) => (
            <div key={key} className="border-b border-border">
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium"
                onClick={() => setExpandedSection(expandedSection === key ? null : key)}
              >
                <span>{menu.title}</span>
                <ChevronDown className={cn(
                  'h-5 w-5 transition-transform',
                  expandedSection === key && 'rotate-180'
                )} />
              </button>

              <AnimatePresence>
                {expandedSection === key && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-4">
                      {menu.columns.map((column: any, idx: number) => (
                        <div key={idx}>
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                            {column.title}
                          </h4>
                          <ul className="space-y-2">
                            {column.items.map((item: any, itemIdx: number) => (
                              <li key={itemIdx}>
                                <Link
                                  href={item.href}
                                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-surface transition-colors"
                                  onClick={onClose}
                                >
                                  <item.icon className="h-4 w-4 text-primary" />
                                  <span className="text-sm">{item.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link
            href="/about"
            className="block px-4 py-3 text-lg font-medium rounded-lg hover:bg-surface transition-colors"
            onClick={onClose}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="block mx-4 mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full text-center font-semibold"
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
