'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/section';
import { MapPin, Users, Building2, Globe2 } from 'lucide-react';

const locations = [
  {
    city: 'San Francisco',
    country: 'United States',
    image: '/images/global/modern_office_building_citysca_bing_0001_75f1fcbe.jpeg',
    employees: '120+',
    type: 'Headquarters',
    coordinates: { x: '20%', y: '35%' },
    color: 'from-primary/40 to-accent-gold/40',
  },
  {
    city: 'Toronto',
    country: 'Canada',
    image: '/images/global/modern_office_building_citysca_bing_0004_4dcdbde3.jpeg',
    employees: '85+',
    type: 'Development Hub',
    coordinates: { x: '25%', y: '30%' },
    color: 'from-kinetic/40 to-primary/40',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    image: '/images/global/modern_office_building_citysca_bing_0005_9415c8f1.jpeg',
    employees: '65+',
    type: 'European Office',
    coordinates: { x: '48%', y: '28%' },
    color: 'from-sentinel/40 to-nexus/40',
  },
];

export function GlobalPresence() {
  return (
    <Section background="elevated">
      <SectionHeader
        subtitle="Global Reach"
        title="Worldwide Operations"
        description="Strategic locations across North America and Europe, delivering 24/7 support and local expertise."
        centered
      />

      <div className="container">
        {/* Location Cards */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Background Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={location.image}
                  alt={`${location.city} Office`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${location.color} to-background/95`} />

                {/* Location Pin */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="rounded-full bg-primary p-2 shadow-lg shadow-primary/50"
                  >
                    <MapPin className="h-5 w-5 text-white" />
                  </motion.div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                    {location.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-black tracking-tight text-slate-50">
                  {location.city}
                </h3>
                <p className="mb-4 text-sm text-slate-400">{location.country}</p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-slate-300">{location.employees} Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-slate-300">Office</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 gap-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm md:grid-cols-4"
        >
          {[
            { icon: Globe2, value: '3', label: 'Global Offices' },
            { icon: Users, value: '270+', label: 'Team Members' },
            { icon: MapPin, value: '24/7', label: 'Support Coverage' },
            { icon: Building2, value: '15+', label: 'Countries Served' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="mb-3 flex justify-center">
                <div className="rounded-xl bg-primary/10 p-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="mb-1 text-3xl font-black bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
