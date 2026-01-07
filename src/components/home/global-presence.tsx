'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Users, Building2, Globe, ArrowRight } from 'lucide-react';

export function GlobalPresence() {
  const locations = [
    {
      city: 'Vancouver',
      country: 'Canada',
      role: 'Global Headquarters',
      team: '85 professionals',
      focus: 'AI & Automation, Software Development',
      color: '#1565C0',
      coordinates: { x: '20%', y: '25%' },
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      role: 'MENA Regional Hub',
      team: '42 professionals',
      focus: 'Cybersecurity, Digital Marketing',
      color: '#F2A71B',
      coordinates: { x: '55%', y: '45%' },
    },
    {
      city: 'Mumbai',
      country: 'India',
      role: 'Asia-Pacific Center',
      team: '78 professionals',
      focus: 'Talent Solutions, Logistics',
      color: '#9AE66E',
      coordinates: { x: '70%', y: '50%' },
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-5xl font-bold text-white"
          >
            Global Presence, Local Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            3 strategic locations serving clients worldwide
          </motion.p>
        </div>

        {/* Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mb-12 overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-12"
        >
          <div className="absolute inset-0 opacity-10">
            <Globe className="h-full w-full text-accent-blue" />
          </div>
          <div className="relative aspect-[2/1]">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="absolute"
                style={{ left: location.coordinates.x, top: location.coordinates.y }}
              >
                <div className="group relative">
                  <div
                    className="h-4 w-4 animate-pulse rounded-full"
                    style={{ backgroundColor: location.color }}
                  />
                  <div
                    className="absolute h-8 w-8 -translate-x-2 -translate-y-2 animate-ping rounded-full opacity-75"
                    style={{ backgroundColor: location.color }}
                  />
                  <div className="pointer-events-none absolute left-6 top-0 w-48 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="rounded-lg border border-slate-700 bg-slate-900 p-4 shadow-xl">
                      <div className="mb-2 text-sm font-bold text-white">{location.city}</div>
                      <div className="text-xs text-slate-400">{location.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Cards */}
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
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${location.color}20` }}
              >
                <Building2 className="h-7 w-7" style={{ color: location.color }} />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">{location.city}</h3>
              <p className="mb-4 text-lg text-slate-400">{location.role}</p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4" />
                  <span>{location.country}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Users className="h-4 w-4" />
                  <span>{location.team}</span>
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

        <div className="mt-12 text-center">
          <Link
            href="/about#locations"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-accent-blue px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-blue/10"
          >
            <Globe className="h-5 w-5" />
            Learn More About Our Offices
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
