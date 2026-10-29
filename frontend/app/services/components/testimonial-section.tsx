'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: '[Client / Collaborator 1]',
    position: '[Client Role / Company]',
    text: "[Client Feedback: Add your verified client or team recommendation quote here.]",
    rating: 5,
  },
  {
    name: '[Client / Collaborator 2]',
    position: '[Client Role / Company]',
    text: '[Client Feedback: Add your verified client or team recommendation quote here.]',
    rating: 5,
  },
  {
    name: '[Client / Collaborator 3]',
    position: '[Client Role / Company]',
    text: '[Client Feedback: Add your verified client or team recommendation quote here.]',
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What Clients Say</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-accent fill-current" />
                ))}
              </div>
              <div className="relative mb-6">
                <Quote className="h-6 w-6 text-primary/20 absolute -top-1 -left-1" />
                <p className="text-muted-foreground text-sm leading-relaxed pl-4">{t.text}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                <p className="text-xs text-muted-foreground">{t.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
