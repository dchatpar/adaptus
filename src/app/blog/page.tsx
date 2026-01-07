'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FileText,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Brain,
  Shield,
  Zap,
  Target,
  Globe,
} from 'lucide-react';

export default function BlogPage() {
  const categories = [
    { name: 'All Posts', count: 47, slug: 'all' },
    { name: 'AI & Automation', count: 12, slug: 'ai', icon: Brain, color: '#6E33FF' },
    { name: 'Cybersecurity', count: 9, slug: 'security', icon: Shield, color: '#1565C0' },
    { name: 'Software Development', count: 11, slug: 'development', icon: Zap, color: '#FF6A00' },
    { name: 'Digital Marketing', count: 8, slug: 'marketing', icon: TrendingUp, color: '#9AE66E' },
    { name: 'Industry Insights', count: 7, slug: 'industry', icon: Target, color: '#F2A71B' },
  ];

  const featuredPost = {
    title: 'The Future of Enterprise AI: 2025 Trends and Predictions',
    excerpt: 'Explore the latest trends in enterprise AI, from generative models to autonomous agents, and how they\'re transforming business operations.',
    author: 'Dr. James Liu',
    role: 'VP, AI & Automation',
    date: 'January 5, 2025',
    readTime: '12 min read',
    category: 'AI & Automation',
    image: '/blog/ai-trends-2025.jpg',
    slug: 'future-of-enterprise-ai-2025',
  };

  const posts = [
    {
      title: 'How to Achieve SOC 2 Compliance in 90 Days',
      excerpt: 'A step-by-step guide to achieving SOC 2 Type II certification for SaaS companies.',
      author: 'David Kim',
      date: 'January 3, 2025',
      readTime: '8 min read',
      category: 'Cybersecurity',
      slug: 'soc2-compliance-90-days',
      color: '#1565C0',
    },
    {
      title: 'Building Scalable Microservices with Kubernetes',
      excerpt: 'Best practices for deploying and managing microservices at enterprise scale.',
      author: 'Alex Thompson',
      date: 'December 28, 2024',
      readTime: '10 min read',
      category: 'Software Development',
      slug: 'scalable-microservices-kubernetes',
      color: '#FF6A00',
    },
    {
      title: 'The ROI of Marketing Automation: Real Numbers',
      excerpt: 'Data-driven analysis of marketing automation impact on B2B SaaS growth.',
      author: 'Emily Rodriguez',
      date: 'December 22, 2024',
      readTime: '7 min read',
      category: 'Digital Marketing',
      slug: 'roi-marketing-automation',
      color: '#9AE66E',
    },
    {
      title: 'Supply Chain Resilience in 2025',
      excerpt: 'How AI and predictive analytics are transforming logistics operations.',
      author: 'Lisa Anderson',
      date: 'December 18, 2024',
      readTime: '9 min read',
      category: 'Industry Insights',
      slug: 'supply-chain-resilience-2025',
      color: '#F2A71B',
    },
    {
      title: 'Zero Trust Architecture: Implementation Guide',
      excerpt: 'Comprehensive guide to implementing zero trust security in enterprise environments.',
      author: 'Maria Santos',
      date: 'December 15, 2024',
      readTime: '11 min read',
      category: 'Cybersecurity',
      slug: 'zero-trust-implementation-guide',
      color: '#1565C0',
    },
    {
      title: 'Generative AI for Enterprise: Use Cases and ROI',
      excerpt: 'Real-world applications of generative AI in enterprise settings with measurable ROI.',
      author: 'Dr. James Liu',
      date: 'December 10, 2024',
      readTime: '13 min read',
      category: 'AI & Automation',
      slug: 'generative-ai-enterprise-use-cases',
      color: '#6E33FF',
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
              <FileText className="h-4 w-4 text-accent-blue" />
              <span className="text-sm font-semibold text-slate-300">Blog & Insights</span>
            </div>
            <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
              Enterprise Technology <span className="text-gradient">Insights</span>
            </h1>
            <p className="mb-8 text-xl text-slate-300 leading-relaxed">
              Expert perspectives on AI, cybersecurity, software development, and digital transformation from our leadership team and industry experts.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:border-accent-blue focus:outline-none"
                />
              </div>
              <button className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-700 px-6 py-3 font-semibold text-white transition-all hover:bg-slate-800">
                <Filter className="h-5 w-5" />
                Filter
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-all ${
                  category.slug === 'all'
                    ? 'border-accent-blue bg-accent-blue text-white'
                    : 'border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600'
                }`}
              >
                {category.icon && <category.icon className="h-4 w-4" />}
                <span>{category.name}</span>
                <span className="rounded-full bg-slate-700 px-2 py-0.5 text-xs">{category.count}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-surface">
        <div className="container">
          <div className="mb-8 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-accent-gold" />
            <h2 className="text-2xl font-bold text-white">Featured Article</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-2xl border border-slate-800 bg-background transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="aspect-video bg-gradient-to-br from-cortex/20 to-accent-blue/20 lg:aspect-auto" />
              <div className="p-8 lg:py-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cortex/20 px-3 py-1 text-sm font-semibold text-cortex">
                  <Brain className="h-4 w-4" />
                  {featuredPost.category}
                </div>
                <h3 className="mb-4 text-4xl font-bold text-white">{featuredPost.title}</h3>
                <p className="mb-6 text-lg text-slate-300">{featuredPost.excerpt}</p>
                <div className="mb-6 flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white transition-all hover:scale-105"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-bold text-white">Recent Articles</h2>
            <Link
              href="/blog/archive"
              className="inline-flex items-center gap-2 text-accent-blue hover:underline"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-800 bg-surface transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900" />
                <div className="p-6">
                  <div
                    className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: `${post.color}20`, color: post.color }}
                  >
                    {post.category}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white group-hover:text-accent-blue">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-400">{post.excerpt}</p>
                  <div className="mb-4 flex items-center gap-3 text-xs text-slate-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:underline"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-surface">
        <div className="container">
          <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/5 p-16 text-center">
            <Globe className="mx-auto mb-6 h-20 w-20 text-accent-blue" />
            <h2 className="mb-4 text-4xl font-bold text-white">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              Get the latest insights delivered to your inbox every week
            </p>
            <div className="mx-auto flex max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 focus:border-accent-blue focus:outline-none"
              />
              <button className="rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
