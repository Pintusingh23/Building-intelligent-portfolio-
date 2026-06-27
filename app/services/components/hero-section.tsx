'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap, Star } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { icon: Globe, label: 'Clients Worldwide', value: '20+' },
  { icon: Zap, label: 'Avg. Delivery', value: '14 days' },
  { icon: Star, label: 'Satisfaction', value: '100%' },
];

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden py-28 md:py-40 px-4">
    {/* Ambient glow */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-accent/6 blur-[100px]" />
    </div>

    <div className="mx-auto max-w-4xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
        Available for new projects
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="mb-8 font-black leading-none tracking-tight"
        style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
      >
        <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
          Craft Digital
        </span>
        <br />
        <span className="text-foreground">Experiences</span>
        <br />
        <span className="text-muted-foreground" style={{ fontSize: '55%', fontWeight: 600 }}>
          that convert.
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.22 }}
        className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
      >
        Full-stack development, AI integration, and performance engineering —
        delivered to teams worldwide with precision and speed.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.35 }}
        className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Link
          href="/contact"
          className="group flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start a Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link
          href="#services"
          className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium text-foreground transition-colors hover:bg-muted"
        >
          Explore Services
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-10 text-sm"
      >
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-primary" />
            <span className="font-bold text-foreground">{value}</span>
            <span className="text-muted-foreground">{label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
