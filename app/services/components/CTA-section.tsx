'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => (
  <section className="py-20 px-4 md:px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl border border-border bg-card overflow-hidden px-10 py-16 text-center"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/8 blur-[80px]" />
          <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-accent/6 blur-[60px]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ready to build{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              something great?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Let's scope your project, align on timelines, and ship something
            you're proud of.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="mailto:nitinkumar12082005@gmail.com"
              className="flex items-center gap-2 rounded-full border border-border px-8 py-3.5 font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Mail className="h-4 w-4" />
              Send an Email
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            Typically respond within 24 hours
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
