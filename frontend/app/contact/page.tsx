'use client';
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const socials = [
  { icon: Globe, label: 'Website', value: 'decodetech.online', href: 'https://decodetech.online' },
  { icon: Github, label: 'GitHub', value: 'github.com/Pintusingh23', href: 'https://github.com/Pintusingh23' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/pintu-singh', href: 'https://www.linkedin.com/in/pintu-singh-42b1962b8/' },
  { icon: Instagram, label: 'Instagram', value: '@pintusingh4559', href: 'https://www.instagram.com/pintusingh4559/' },
  { icon: Mail, label: 'Email', value: 'decode82183@gmail.com', href: 'mailto:decode82183@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 82183 77064', href: 'tel:+918218377064' },
];

const faqs = [
  { q: 'What services do you offer?', a: 'Full-stack software engineering, AI agent systems, RAG pipelines, and automated cloud workflows.' },
  { q: 'How quickly do you respond?', a: 'Within 24 hours on business days.' },
  { q: 'Do you work with international clients?', a: 'Yes — I work globally and can accommodate different time zones.' },
];

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <div className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Available for new projects & collaborations
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-4"
        >
          Let's{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Connect
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto"
        >
          Have a project in mind or want to collaborate? Reach out directly through any channel below.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24 space-y-10">
        {/* Contact Details Card Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-5"
        >
          <a
            href="mailto:decode82183@gmail.com"
            className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/50 hover:bg-muted/40 transition-all duration-300"
          >
            <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Direct Email</p>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">decode82183@gmail.com</h3>
              <p className="text-xs text-muted-foreground mt-1">Click to compose an email</p>
            </div>
          </a>

          <a
            href="tel:+918218377064"
            className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/50 hover:bg-muted/40 transition-all duration-300"
          >
            <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Phone / WhatsApp</p>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">+91 82183 77064</h3>
              <p className="text-xs text-muted-foreground mt-1">Click to call directly</p>
            </div>
          </a>

          <a
            href="https://decodetech.online"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/50 hover:bg-muted/40 transition-all duration-300"
          >
            <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Startup</p>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">DeCodeTech</h3>
              <p className="text-xs text-muted-foreground mt-1">Founder @ decodetech.online</p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</p>
              <h3 className="text-lg font-bold text-foreground">India</h3>
              <p className="text-xs text-muted-foreground mt-1">Open to remote & on-site worldwide</p>
            </div>
          </div>
        </motion.div>

        {/* Social Accounts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-card border border-border rounded-2xl p-8 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Connect Across Platforms</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {socials.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 p-4 hover:border-primary/40 hover:bg-muted transition-all duration-200 group"
              >
                <div className="rounded-lg bg-primary/10 p-2 text-primary group-hover:scale-110 transition-transform">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground truncate">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Answers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-card border border-border rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-xl font-bold mb-6 text-foreground">Quick Answers</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <h3 className="text-sm font-semibold text-foreground mb-1">{q}</h3>
                <p className="text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
