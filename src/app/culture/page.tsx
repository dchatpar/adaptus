'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Heart,
  Users,
  Globe,
  CheckCircle2,
  MapPin,
  Building2,
  Zap,
  Target,
} from 'lucide-react';

export default function CulturePage() {
  const values = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We invest in our team\'s growth, well-being, and success.',
      examples: ['Unlimited PTO', 'Mental health support', 'Learning budgets'],
      color: '#E53935',
    },
    {
      icon: Globe,
      title: 'Global Mindset',
      description: 'We embrace diversity and leverage our international presence.',
      examples: ['3 global offices', '25+ nationalities', 'Remote-first culture'],
      color: '#1565C0',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We encourage experimentation and continuous learning.',
      examples: ['20% innovation time', 'Hackathons', 'Tech conferences'],
      color: '#6E33FF',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver world-class solutions and exceed expectations.',
      examples: ['Consultant-grade work', 'Peer reviews', 'Best practices'],
      color: '#9AE66E',
    },
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health insurance',
        'Mental health support & counseling',
        'Fitness stipend ($100/month)',
        'Annual health checkups',
      ],
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Unlimited PTO policy',
        'Flexible work hours',
        'Remote-first culture',
        'Parental leave (16 weeks)',
      ],
    },
    {
      category: 'Growth & Development',
      items: [
        'Learning budget ($3K/year)',
        'Conference attendance',
        'Mentorship programs',
        'Career development plans',
      ],
    },
    {
      category: 'Financial & Perks',
      items: [
        'Competitive salaries',
        'Stock options',
        'Annual bonuses',
        'Home office stipend',
      ],
    },
  ];

  const offices = [
    {
      city: 'Vancouver',
      country: 'Canada',
      address: '1055 W Georgia St, Vancouver, BC V6E 3P3',
      team: '85 professionals',
      perks: ['Ocean views', 'Standing desks', 'Espresso bar', 'Game room'],
      image: '/offices/vancouver.jpg',
      color: '#1565C0',
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      address: 'Dubai Internet City, Dubai, UAE',
      team: '42 professionals',
      perks: ['Modern workspace', 'Prayer room', 'Rooftop terrace', 'Gym access'],
      image: '/offices/dubai.jpg',
      color: '#F2A71B',
    },
    {
      city: 'Mumbai',
      country: 'India',
      address: 'Bandra Kurla Complex, Mumbai, India',
      team: '78 professionals',
      perks: ['24/7 access', 'Cafeteria', 'Nap pods', 'Shuttle service'],
      image: '/offices/mumbai.jpg',
      color: '#9AE66E',
    },
  ];

  const stats = [
    { value: '205', label: 'Team Members', description: 'Across 3 continents' },
    { value: '25+', label: 'Nationalities', description: 'Diverse perspectives' },
    { value: '4.8/5', label: 'Employee Satisfaction', description: 'Glassdoor rating' },
    { value: '92%', label: 'Retention Rate', description: 'Industry-leading' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-surface to-background py-32">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2">
              <Heart className="h-4 w-4 text-accent-gold" />
              <span className="text-sm font-semibold text-slate-300">Culture & Values</span>
            </div>
            <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
              Where Talent Meets <span className="text-gradient">Global Opportunity</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300 leading-relaxed">
              We've built a culture that values innovation, diversity, and excellence. With offices in Vancouver, Dubai, and Mumbai, we offer a truly global work experience with local impact.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-8 py-4 text-lg font-semibold text-background transition-all hover:scale-105"
            >
              <Users className="h-5 w-5" />
              Join Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="mb-3 text-6xl font-black text-accent-gold">{stat.value}</div>
                <div className="mb-2 text-xl font-bold text-white">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Our Culture</h2>
            <p className="text-xl text-slate-400">
              The values that define how we work
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-background p-8"
              >
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="h-7 w-7" style={{ color: value.color }} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">{value.title}</h3>
                <p className="mb-6 text-slate-300">{value.description}</p>
                <div className="space-y-2">
                  {value.examples.map((example) => (
                    <div key={example} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-kinetic" />
                      <span className="text-sm text-slate-400">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Benefits & Perks</h2>
            <p className="text-xl text-slate-400">
              We invest in our team's success and well-being
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-surface p-8"
              >
                <h3 className="mb-6 text-2xl font-bold text-white">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-gold" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Our Offices</h2>
            <p className="text-xl text-slate-400">
              World-class workspaces in 3 global cities
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${office.color}20` }}
                >
                  <Building2 className="h-8 w-8" style={{ color: office.color }} />
                </div>
                <h3 className="mb-2 text-3xl font-bold text-white">{office.city}</h3>
                <p className="mb-4 text-lg text-slate-400">{office.country}</p>
                <div className="mb-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-slate-500" />
                    <span className="text-sm text-slate-400">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-400">{office.team}</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-900/50 p-4">
                  <p className="mb-2 text-sm font-semibold text-white">Office Perks:</p>
                  <div className="space-y-1">
                    {office.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-kinetic" />
                        <span className="text-xs text-slate-400">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border border-accent-gold/30 bg-accent-gold/5 p-16 text-center">
            <Heart className="mx-auto mb-6 h-20 w-20 text-accent-gold" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Join Our Team?
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              Explore open positions across our global offices
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-8 py-4 text-lg font-semibold text-background transition-all hover:scale-105"
            >
              <Users className="h-5 w-5" />
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
