'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/section';
import { COMPANY_INFO } from '@/lib/constants';

export function About() {
  const stats = [
    { label: 'Years of Excellence', value: new Date().getFullYear() - COMPANY_INFO.founded },
    { label: 'Global Locations', value: COMPANY_INFO.locations.length },
    { label: 'Specialized Divisions', value: 6 },
    { label: 'Enterprise Clients', value: '100+' },
  ];

  return (
    <Section id="about" background="elevated">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Content */}
        <div>
          <SectionHeader
            subtitle="About Us"
            title="Global Enterprise Technology Leadership"
            description="AdaptUs Group Inc. is a premier enterprise technology holding company, delivering integrated solutions across six specialized divisions."
          />

          <div className="space-y-6 text-slate-400">
            <p>
              Headquartered in Vancouver, Canada, with operations spanning Dubai and Mumbai, we
              serve mid-market, enterprise, and government clients worldwide.
            </p>
            <p>
              Our divisions operate as independent, product-grade brands while leveraging the
              collective strength of our unified platform. This structure enables us to deliver
              specialized expertise with enterprise-scale resources.
            </p>
            <p>
              From AI-powered automation to defense-grade cybersecurity, from custom software
              development to data-driven marketing, from talent acquisition to supply chain
              optimization—we provide the complete technology infrastructure modern enterprises
              demand.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-2"
            >
              <div className="text-5xl font-black text-primary">{stat.value}</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
