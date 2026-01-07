'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Building2,
  Globe,
  Users,
  TrendingUp,
  Award,
  Target,
  Heart,
  Zap,
  Shield,
  Brain,
  MapPin,
  Calendar,
  Briefcase,
} from 'lucide-react';

export default function AboutPage() {
  const timeline = [
    {
      year: '2018',
      title: 'Founded in Vancouver',
      description: 'AdaptUs Group Inc. established as a technology holding company with a vision to deliver specialized enterprise solutions.',
      milestone: 'Company inception',
    },
    {
      year: '2019',
      title: 'First Division Launch',
      description: 'ADAPTUS CORTEX™ launched, bringing AI and automation solutions to enterprise clients.',
      milestone: '12 enterprise clients',
    },
    {
      year: '2020',
      title: 'Expansion to Dubai',
      description: 'Opened Middle East headquarters in Dubai to serve MENA region clients.',
      milestone: 'Global expansion begins',
    },
    {
      year: '2021',
      title: 'Multi-Division Growth',
      description: 'Launched SENTINEL™, FORGE™, and KINETIC™ divisions, expanding service offerings.',
      milestone: '47 enterprise clients',
    },
    {
      year: '2022',
      title: 'Mumbai Office Opens',
      description: 'Established Asia-Pacific presence with Mumbai office and 24/7 global operations.',
      milestone: '120+ team members',
    },
    {
      year: '2023',
      title: 'Complete Portfolio',
      description: 'Launched NEXUS™ and VECTOR™, completing the 6-division ecosystem.',
      milestone: '180+ enterprise clients',
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Achieved SOC 2 Type II and ISO 27001 certifications, recognized as top enterprise technology provider.',
      milestone: '$120M+ annual revenue',
    },
    {
      year: '2025',
      title: 'Continued Innovation',
      description: 'Expanding AI capabilities, deepening industry expertise, and scaling global operations.',
      milestone: '250+ enterprise clients',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver consultant-grade solutions that exceed enterprise standards.',
      color: '#6E33FF',
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to solve complex business challenges.',
      color: '#1565C0',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with transparency, security, and ethical business practices.',
      color: '#9AE66E',
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We build long-term relationships based on trust and mutual success.',
      color: '#F2A71B',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing markets and client needs.',
      color: '#E53935',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We bring diverse, international expertise to every engagement.',
      color: '#FF6A00',
    },
  ];

  const locations = [
    {
      city: 'Vancouver',
      country: 'Canada',
      role: 'Global Headquarters',
      established: '2018',
      team: '85 professionals',
      focus: 'AI & Automation, Software Development, Strategic Leadership',
      icon: Building2,
      color: '#1565C0',
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      role: 'MENA Regional Hub',
      established: '2020',
      team: '42 professionals',
      focus: 'Cybersecurity, Digital Marketing, Regional Partnerships',
      icon: Globe,
      color: '#F2A71B',
    },
    {
      city: 'Mumbai',
      country: 'India',
      role: 'Asia-Pacific Center',
      established: '2022',
      team: '78 professionals',
      focus: 'Talent Solutions, Logistics, 24/7 Support Operations',
      icon: MapPin,
      color: '#9AE66E',
    },
  ];

  const stats = [
    { value: '250+', label: 'Enterprise Clients', description: 'Across 6 industries' },
    { value: '205', label: 'Team Members', description: 'Global professionals' },
    { value: '3', label: 'Global Offices', description: 'Vancouver, Dubai, Mumbai' },
    { value: '8', label: 'Years of Excellence', description: 'Since 2018' },
    { value: '6', label: 'Specialized Divisions', description: 'Comprehensive solutions' },
    { value: '$120M+', label: 'Annual Revenue', description: '2024 performance' },
  ];

  const certifications = [
    { name: 'SOC 2 Type II', issuer: 'AICPA', year: '2024' },
    { name: 'ISO 27001:2022', issuer: 'ISO/IEC', year: '2024' },
    { name: 'GDPR Compliant', issuer: 'EU Commission', year: 'Ongoing' },
    { name: 'PIPEDA Compliant', issuer: 'OPC Canada', year: 'Ongoing' },
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
              <Building2 className="h-4 w-4 text-accent-blue" />
              <span className="text-sm font-semibold text-slate-300">About AdaptUs Group</span>
            </div>
            <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
              Enterprise Technology. <span className="text-gradient">Global Scale.</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300 leading-relaxed">
              A global enterprise technology holding company delivering specialized solutions across AI, cybersecurity, software development, marketing, talent, and logistics. Headquartered in Vancouver with offices in Dubai and Mumbai.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#timeline"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                Our Journey
              </Link>
              <Link
                href="#locations"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800"
              >
                <Globe className="h-5 w-5" />
                Global Presence
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="mb-3 text-6xl font-black text-accent-blue">{stat.value}</div>
                <div className="mb-2 text-xl font-bold text-white">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-background p-12"
            >
              <Target className="mb-6 h-16 w-16 text-accent-blue" />
              <h2 className="mb-4 text-4xl font-bold text-white">Our Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To empower enterprises with specialized technology solutions that drive measurable business outcomes. We combine deep industry expertise with cutting-edge technology to deliver consultant-grade results at scale.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-background p-12"
            >
              <TrendingUp className="mb-6 h-16 w-16 text-kinetic" />
              <h2 className="mb-4 text-4xl font-bold text-white">Our Vision</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To be the global leader in specialized enterprise technology, recognized for innovation, integrity, and exceptional client outcomes. We envision a future where every business has access to world-class technology expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Our Core Values</h2>
            <p className="text-xl text-slate-400">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-800 bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="h-7 w-7" style={{ color: value.color }} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Our Journey</h2>
            <p className="text-xl text-slate-400">
              8 years of innovation and growth
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-accent-blue via-kinetic to-accent-gold" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-8"
                >
                  {/* Year marker */}
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-accent-blue text-xl font-black text-white">
                    {item.year.slice(2)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border border-slate-800 bg-background p-8">
                    <div className="mb-3 flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <span className="rounded-full bg-kinetic/20 px-3 py-1 text-sm font-semibold text-kinetic">
                        {item.milestone}
                      </span>
                    </div>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Locations */}
      <section id="locations" className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Global Presence</h2>
            <p className="text-xl text-slate-400">
              3 strategic locations serving clients worldwide
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-800 bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${location.color}20` }}
                >
                  <location.icon className="h-8 w-8" style={{ color: location.color }} />
                </div>
                <h3 className="mb-2 text-3xl font-bold text-white">{location.city}</h3>
                <p className="mb-4 text-lg text-slate-400">{location.country}</p>
                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-semibold text-white">{location.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-400">Established {location.established}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-400">{location.team}</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-900/50 p-4">
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-white">Focus:</span> {location.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Certifications & Compliance</h2>
            <p className="text-xl text-slate-400">
              Independently verified security and compliance standards
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <Award className="mx-auto mb-4 h-12 w-12 text-accent-gold" />
                <h3 className="mb-2 text-lg font-bold text-white">{cert.name}</h3>
                <p className="mb-1 text-sm text-slate-400">{cert.issuer}</p>
                <p className="text-xs text-slate-500">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/5 p-16 text-center">
            <Users className="mx-auto mb-6 h-20 w-20 text-accent-blue" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Join Our Growing Team
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              We're always looking for talented professionals to join our global team
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
              >
                <Briefcase className="h-5 w-5" />
                View Open Positions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent-blue px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-blue/10"
              >
                <Globe className="h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
