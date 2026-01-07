'use client';

import { Section, SectionHeader } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { DIVISIONS } from '@/lib/constants';

export function Divisions() {
  return (
    <Section id="divisions" background="grid">
      <SectionHeader
        subtitle="Our Divisions"
        title="Specialized Solutions for Enterprise"
        description="Six integrated divisions delivering comprehensive technology services across AI, security, development, marketing, talent, and logistics."
        centered
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {DIVISIONS.map((division, index) => (
          <Card
            key={division.id}
            title={division.name}
            tagline={division.tagline}
            description={division.description}
            icon={division.icon}
            href={division.href}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
