'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  Clock,
  CheckCircle2,
  Brain,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Target,
} from 'lucide-react';

export default function ContactPage() {
  const offices = [
    {
      city: 'Vancouver',
      country: 'Canada',
      role: 'Global Headquarters',
      address: '1055 W Georgia St, Suite 2400\nVancouver, BC V6E 3P3\nCanada',
      phone: '+1 (604) 555-0100',
      email: 'vancouver@adaptusgroup.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM PST',
      color: '#1565C0',
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      role: 'MENA Regional Hub',
      address: 'Dubai Internet City\nBuilding 10, Office 501\nDubai, UAE',
      phone: '+971 4 555 0100',
      email: 'dubai@adaptusgroup.com',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM GST',
      color: '#F2A71B',
    },
    {
      city: 'Mumbai',
      country: 'India',
      role: 'Asia-Pacific Center',
      address: 'Bandra Kurla Complex\nUnit 1201, Tower A\nMumbai 400051, India',
      phone: '+91 22 5555 0100',
      email: 'mumbai@adaptusgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST',
      color: '#9AE66E',
    },
  ];

  const divisions = [
    { name: 'ADAPTUS CORTEX™', icon: Brain, color: '#6E33FF' },
    { name: 'ADAPTUS SENTINEL™', icon: Shield, color: '#1565C0' },
    { name: 'ADAPTUS FORGE™', icon: Zap, color: '#FF6A00' },
    { name: 'ADAPTUS KINETIC™', icon: TrendingUp, color: '#9AE66E' },
    { name: 'ADAPTUS NEXUS™', icon: Users, color: '#F2A71B' },
    { name: 'ADAPTUS VECTOR™', icon: Target, color: '#E53935' },
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
              <Mail className="h-4 w-4 text-accent-blue" />
              <span className="text-sm font-semibold text-slate-300">Contact Us</span>
            </div>
            <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
              Let's Build Something <span className="text-gradient">Extraordinary</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300 leading-relaxed">
              Get in touch with our team to discuss your enterprise technology needs. We're here to help you transform your business with specialized solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-slate-800 bg-surface p-8"
            >
              <h2 className="mb-6 text-3xl font-bold text-white">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">First Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-700 bg-background px-4 py-3 text-white focus:border-accent-blue focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">Last Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-700 bg-background px-4 py-3 text-white focus:border-accent-blue focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-700 bg-background px-4 py-3 text-white focus:border-accent-blue focus:outline-none"
                    placeholder="john.doe@company.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Company</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-700 bg-background px-4 py-3 text-white focus:border-accent-blue focus:outline-none"
                    placeholder="Your Company Inc."
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Division of Interest</label>
                  <select className="w-full rounded-lg border border-slate-700 bg-background px-4 py-3 text-white focus:border-accent-blue focus:outline-none">
                    <option>Select a division</option>
                    {divisions.map((div) => (
                      <option key={div.name}>{div.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Message</label>
                  <textarea
                    rows={6}
                    className="w-full rounded-lg border border-slate-700 bg-background px-4 py-3 text-white focus:border-accent-blue focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-blue px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-slate-800 bg-surface p-8">
                <h3 className="mb-6 text-2xl font-bold text-white">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-blue/20">
                      <Mail className="h-6 w-6 text-accent-blue" />
                    </div>
                    <div>
                      <div className="mb-1 font-semibold text-white">Email</div>
                      <a href="mailto:contact@adaptusgroup.com" className="text-slate-400 hover:text-accent-blue">
                        contact@adaptusgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-blue/20">
                      <Phone className="h-6 w-6 text-accent-blue" />
                    </div>
                    <div>
                      <div className="mb-1 font-semibold text-white">Phone</div>
                      <a href="tel:+16045550100" className="text-slate-400 hover:text-accent-blue">
                        +1 (604) 555-0100
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-blue/20">
                      <Clock className="h-6 w-6 text-accent-blue" />
                    </div>
                    <div>
                      <div className="mb-1 font-semibold text-white">Business Hours</div>
                      <div className="text-slate-400">24/7 Global Support</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-surface p-8">
                <h3 className="mb-6 text-2xl font-bold text-white">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    'Response within 24 hours',
                    'Free initial consultation',
                    'Customized solution proposal',
                    'Transparent pricing',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent-gold" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Our Global Offices</h2>
            <p className="text-xl text-slate-400">
              Visit us at one of our locations worldwide
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
                className="rounded-2xl border border-slate-800 bg-background p-8"
              >
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${office.color}20` }}
                >
                  <Building2 className="h-7 w-7" style={{ color: office.color }} />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">{office.city}</h3>
                <p className="mb-4 text-lg text-slate-400">{office.role}</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-slate-500" />
                    <span className="whitespace-pre-line text-sm text-slate-400">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <a href={`tel:${office.phone}`} className="text-sm text-slate-400 hover:text-accent-blue">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <a href={`mailto:${office.email}`} className="text-sm text-slate-400 hover:text-accent-blue">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-400">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white">Our Divisions</h2>
            <p className="text-xl text-slate-400">
              Specialized solutions across 6 divisions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division, index) => (
              <motion.div
                key={division.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${division.color}20` }}
                >
                  <division.icon className="h-6 w-6" style={{ color: division.color }} />
                </div>
                <h3 className="font-bold text-white">{division.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
