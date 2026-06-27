'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How does pricing work?',
    answer: 'Pricing is scoped per project — no fixed packages. After a discovery call, I send a detailed proposal with timeline and cost based on your requirements.',
  },
  {
    question: 'How long does a project typically take?',
    answer: 'Simple landing pages: 5–7 days. Full-stack apps: 14–45 days. AI agents and automations: 10–30 days. I provide an exact timeline after scoping.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes. All projects include a handoff period with documentation. Ongoing maintenance and feature work is available on a retainer or time-based basis.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'React, Next.js, TypeScript, Python, Django, FastAPI, PostgreSQL, LangChain, Docker, and more. I choose the right tool for the job, not the trendy one.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes — I work with clients globally and am experienced with async communication across timezones. Payments via international transfer, Wise, or Stripe.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">Everything you need to know</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-muted/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3 className="font-medium text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200',
                    open === i && 'rotate-180'
                  )}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
