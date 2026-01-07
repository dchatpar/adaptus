'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "AdaptUs transformed our logistics operations. We reduced delivery times by 31% and saved $2.1M annually in fuel costs. Their VECTOR division delivered beyond expectations.",
      author: 'Sarah Mitchell',
      role: 'VP Operations',
      company: 'National Retail Chain',
      rating: 5,
      color: '#E53935',
    },
    {
      quote: "The AI-powered fraud detection from CORTEX caught 94% of fraudulent transactions, saving us $8.7M annually. Best investment we've made in cybersecurity.",
      author: 'James Chen',
      role: 'Chief Information Security Officer',
      company: 'Regional Credit Union',
      rating: 5,
      color: '#6E33FF',
    },
    {
      quote: "Our conversion rate jumped from 1.9% to 4.7% after implementing their personalization engine. Revenue increased 51% in just 6 months. Incredible results.",
      author: 'Emily Rodriguez',
      role: 'CEO',
      company: 'Fashion Ecommerce Brand',
      rating: 5,
      color: '#9AE66E',
    },
  ];

  return (
    <section className="section bg-surface">
      <div className="container">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-5xl font-bold text-white"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            Trusted by enterprise leaders worldwide
          </motion.p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="absolute right-0 top-0 h-32 w-32 opacity-5"
                style={{ color: testimonial.color }}
              >
                <Quote className="h-full w-full" />
              </div>
              <div className="relative">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent-gold text-accent-gold"
                    />
                  ))}
                </div>
                <p className="mb-6 text-lg leading-relaxed text-slate-300">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-800 pt-6">
                  <div className="mb-1 font-bold text-white">{testimonial.author}</div>
                  <div className="mb-1 text-sm text-slate-400">{testimonial.role}</div>
                  <div className="text-sm font-semibold" style={{ color: testimonial.color }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
