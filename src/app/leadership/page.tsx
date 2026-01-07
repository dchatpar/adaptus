'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Users,
  Linkedin,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
  TrendingUp,
  Brain,
  Shield,
  Zap,
  Target,
} from 'lucide-react';

export default function LeadershipPage() {
  const leaders = [
    {
      name: 'Michael Chen',
      title: 'Chief Executive Officer',
      location: 'Vancouver, BC',
      bio: '15+ years leading enterprise technology companies. Former VP at Salesforce, MBA from Stanford GSB.',
      expertise: ['Strategic Leadership', 'M&A', 'Enterprise Sales'],
      linkedin: 'https://linkedin.com/in/michaelchen',
      image: '/team/ceo.jpg',
      color: '#6E33FF',
    },
    {
      name: 'Sarah Williams',
      title: 'Chief Technology Officer',
      location: 'Vancouver, BC',
      bio: 'Former Principal Engineer at Google. PhD in Computer Science from MIT. 20+ patents in AI/ML.',
      expertise: ['AI & Machine Learning', 'Cloud Architecture', 'Innovation'],
      linkedin: 'https://linkedin.com/in/sarahwilliams',
      image: '/team/cto.jpg',
      color: '#1565C0',
    },
    {
      name: 'Rajesh Patel',
      title: 'Chief Operating Officer',
      location: 'Mumbai, India',
      bio: 'Former COO at Infosys. Expert in global operations and process optimization. MBA from IIM Ahmedabad.',
      expertise: ['Operations Excellence', 'Process Optimization', 'Global Scaling'],
      linkedin: 'https://linkedin.com/in/rajeshpatel',
      image: '/team/coo.jpg',
      color: '#9AE66E',
    },
    {
      name: 'Fatima Al-Rashid',
      title: 'Chief Financial Officer',
      location: 'Dubai, UAE',
      bio: 'Former CFO at Careem. CPA, CFA. Expert in fintech and growth-stage finance.',
      expertise: ['Financial Strategy', 'M&A', 'Investor Relations'],
      linkedin: 'https://linkedin.com/in/fatimaalrashid',
      image: '/team/cfo.jpg',
      color: '#F2A71B',
    },
    {
      name: 'David Kim',
      title: 'Chief Security Officer',
      location: 'Vancouver, BC',
      bio: 'Former CISO at Microsoft Azure. CISSP, CISM. 18+ years in enterprise cybersecurity.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
      linkedin: 'https://linkedin.com/in/davidkim',
      image: '/team/cso.jpg',
      color: '#E53935',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Chief Marketing Officer',
      location: 'Vancouver, BC',
      bio: 'Former VP Marketing at HubSpot. Expert in B2B SaaS growth marketing.',
      expertise: ['Growth Marketing', 'Brand Strategy', 'Demand Generation'],
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      image: '/team/cmo.jpg',
      color: '#FF6A00',
    },
  ];

  const divisionLeaders = [
    {
      division: 'ADAPTUS CORTEX™',
      leader: 'Dr. James Liu',
      title: 'VP, AI & Automation',
      location: 'Vancouver',
      icon: Brain,
      color: '#6E33FF',
    },
    {
      division: 'ADAPTUS SENTINEL™',
      leader: 'Maria Santos',
      title: 'VP, Cybersecurity',
      location: 'Dubai',
      icon: Shield,
      color: '#1565C0',
    },
    {
      division: 'ADAPTUS FORGE™',
      leader: 'Alex Thompson',
      title: 'VP, Software Development',
      location: 'Vancouver',
      icon: Zap,
      color: '#FF6A00',
    },
    {
      division: 'ADAPTUS KINETIC™',
      leader: 'Priya Sharma',
      title: 'VP, Digital Marketing',
      location: 'Mumbai',
      icon: TrendingUp,
      color: '#9AE66E',
    },
    {
      division: 'ADAPTUS NEXUS™',
      leader: 'Omar Hassan',
      title: 'VP, Talent Solutions',
      location: 'Dubai',
      icon: Users,
      color: '#F2A71B',
    },
    {
      division: 'ADAPTUS VECTOR™',
      leader: 'Lisa Anderson',
      title: 'VP, Logistics',
      location: 'Vancouver',
      icon: Target,
      color: '#E53935',
    },
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
              <Users className="h-4 w-4 text-accent-blue" />
              <span className="text-sm font-semibold text-slate-300">Leadership Team</span>
            </div>
            <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
              Meet the Leaders Driving <span className="text-gradient">Global Innovation</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300 leading-relaxed">
              Our executive team brings together decades of experience from Google, Microsoft, Salesforce, and other leading technology companies. Combined expertise spanning AI, cybersecurity, enterprise software, and global operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Executive Leadership</h2>
            <p className="text-xl text-slate-400">
              C-suite executives guiding our global strategy
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-800 bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6">
                  <div
                    className="mb-4 flex h-24 w-24 items-center justify-center rounded-full text-4xl font-black text-white"
                    style={{ backgroundColor: leader.color }}
                  >
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="mb-1 text-2xl font-bold text-white">{leader.name}</h3>
                  <p className="mb-2 text-lg font-semibold" style={{ color: leader.color }}>
                    {leader.title}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Globe className="h-4 w-4" />
                    <span>{leader.location}</span>
                  </div>
                </div>
                <p className="mb-6 text-slate-300">{leader.bio}</p>
                <div className="mb-6 space-y-2">
                  {leader.expertise.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent-gold" />
                      <span className="text-sm text-slate-400">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${leader.name.toLowerCase().replace(' ', '.')}@adaptusgroup.com`}
                    className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Division Leaders */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Division Leadership</h2>
            <p className="text-xl text-slate-400">
              Vice Presidents leading our 6 specialized divisions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisionLeaders.map((leader, index) => (
              <motion.div
                key={leader.division}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-background p-8"
              >
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${leader.color}20` }}
                >
                  <leader.icon className="h-7 w-7" style={{ color: leader.color }} />
                </div>
                <h3 className="mb-2 text-xl font-bold" style={{ color: leader.color }}>
                  {leader.division}
                </h3>
                <p className="mb-1 text-lg font-semibold text-white">{leader.leader}</p>
                <p className="mb-3 text-sm text-slate-400">{leader.title}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Globe className="h-4 w-4" />
                  <span>{leader.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/5 p-16 text-center">
            <Briefcase className="mx-auto mb-6 h-20 w-20 text-accent-blue" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Join Our Leadership Team
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              We're always looking for exceptional leaders to join our executive team
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
            >
              <Users className="h-5 w-5" />
              View Executive Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
