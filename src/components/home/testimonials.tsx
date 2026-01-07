'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/section';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechCorp Global',
    image: '/images/testimonials/professional_business_team_por_bing_0001_d1b9e1c8.jpeg',
    quote: 'AdaptUs transformed our entire infrastructure. Their AI solutions reduced our operational costs by 42% while improving performance by 3x. Absolutely game-changing.',
    rating: 5,
    industry: 'Enterprise SaaS',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'VP of Engineering',
    company: 'FinanceHub Inc',
    image: '/images/testimonials/professional_business_team_por_bing_0002_46e85e37.jpeg',
    quote: 'The security implementation was flawless. We achieved SOC 2 compliance in record time, and their ongoing support has been exceptional. True partners in our success.',
    rating: 5,
    industry: 'Financial Services',
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Chief Digital Officer',
    company: 'RetailMax',
    image: '/images/testimonials/professional_business_team_por_bing_0003_7d02bac7.jpeg',
    quote: 'From legacy systems to cloud-native architecture in 6 months. Their team\'s expertise and dedication exceeded all expectations. Revenue up 340% since launch.',
    rating: 5,
    industry: 'Retail & E-commerce',
  },
];

export function Testimonials() {
  return (
    <Section background="grid">
      <SectionHeader
        subtitle="Client Testimonials"
        title="Trusted by Industry Leaders"
        description="Don't just take our word for it. Hear from the executives who've transformed their businesses with AdaptUs."
        centered
      />

      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 opacity-10">
                <Quote className="h-32 w-32 text-primary" />
              </div>

              {/* Rating Stars */}
              <div className="relative mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                  >
                    <Star className="h-5 w-5 fill-accent-gold text-accent-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative mb-6 text-lg leading-relaxed text-white/90">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="relative flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={90}
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-50">{testimonial.name}</div>
                  <div className="text-sm text-white/70">{testimonial.role}</div>
                  <div className="text-xs text-primary">{testimonial.company}</div>
                </div>
              </div>

              {/* Industry Badge */}
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                  {testimonial.industry}
                </span>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm md:grid-cols-4"
        >
          {[
            { value: '4.9/5', label: 'Client Rating' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '500+', label: 'Projects Delivered' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-black bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
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
