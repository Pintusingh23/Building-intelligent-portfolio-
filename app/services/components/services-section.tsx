'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Code, Zap, Database, ArrowRight, Check, X, Mail } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  longDescription: string;
  technologies: string[];
  gradient: string;
  deliveryTime: string;
  popular: boolean;
  tiers: { name: string; features: string[] }[];
}

const services: Service[] = [
  {
    id: 'ai-agent',
    title: 'AI Agent Development',
    icon: <Bot className="w-8 h-8" />,
    description: 'Autonomous AI agents that research, respond, and act — so you don\'t have to.',
    longDescription: 'Build production-grade AI agents powered by LangChain and Groq LLMs. From social DM automation with human-takeover protocols to autonomous research agents that generate content and push to Telegram — I build agents that handle real workflows, not just demos.',
    technologies: ['LangChain', 'FastAPI', 'Groq LLM', 'Supabase', 'Meta Graph API', 'Telegram API'],
    gradient: 'bg-gradient-to-br from-violet-500/20 to-purple-500/20',
    deliveryTime: '10–30 days',
    popular: true,
    tiers: [
      { name: 'Starter', features: ['Single-tool Agent', 'LLM Integration', 'Basic Conversation Flow', 'REST API endpoint'] },
      { name: 'Professional', features: ['Multi-tool Orchestration', 'Context Memory', 'Human-Takeover Protocol', 'Webhook Integration', 'Error Handling'] },
      { name: 'Enterprise', features: ['Multi-agent Pipeline', 'RAG Knowledge Base', 'Scheduler & Triggers', 'Approval UI', 'Custom Integrations'] },
    ],
  },
  {
    id: 'rag-llm',
    title: 'RAG & LLM Integration',
    icon: <Database className="w-8 h-8" />,
    description: 'Give your app a memory — integrate your documents into any LLM.',
    longDescription: 'Build Retrieval-Augmented Generation pipelines that let LLMs answer questions from your own knowledge base, PDFs, or databases. Whether it\'s a support bot or a document Q&A tool, I build pipelines that are fast, accurate, and production-ready.',
    technologies: ['LangChain', 'Groq', 'PostgreSQL', 'Supabase Vector', 'FastAPI', 'Python'],
    gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20',
    deliveryTime: '7–21 days',
    popular: false,
    tiers: [
      { name: 'Starter', features: ['PDF / Text Ingestion', 'Embedding Pipeline', 'Simple Q&A API'] },
      { name: 'Professional', features: ['Multi-source Ingestion', 'Vector DB Setup', 'Semantic Search', 'Streaming Responses', 'API + Frontend'] },
      { name: 'Enterprise', features: ['Custom Chunking Strategy', 'Hybrid Search', 'Re-ranking', 'Auth & Rate Limiting', 'Monitoring Dashboard'] },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Web Application',
    icon: <Code className="w-8 h-8" />,
    description: 'End-to-end web apps — from database schema to deployed frontend.',
    longDescription: 'Production-grade full-stack applications built with Django/FastAPI backends and React frontends. I handle everything: PostgreSQL schemas, JWT auth, REST APIs, and responsive UI — deployed to Vercel/Render with Docker where needed.',
    technologies: ['React', 'Next.js', 'Django', 'FastAPI', 'PostgreSQL', 'Docker', 'Vercel'],
    gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-400/20',
    deliveryTime: '14–45 days',
    popular: false,
    tiers: [
      { name: 'Starter', features: ['Single-page Frontend', 'REST API (3–5 endpoints)', 'Database Setup', 'Auth (JWT)'] },
      { name: 'Professional', features: ['Multi-page React Frontend', 'Django/FastAPI Backend', 'PostgreSQL + Migrations', 'Role-based Auth', 'Deployment'] },
      { name: 'Enterprise', features: ['Complex Business Logic', 'Admin Dashboard', 'File Uploads / S3', 'Email Notifications', 'Docker + CI/CD'] },
    ],
  },
  {
    id: 'automation',
    title: 'Automation Pipelines',
    icon: <Zap className="w-8 h-8" />,
    description: 'Automate repetitive business workflows with n8n and custom scripts.',
    longDescription: 'Build no-code/low-code automation pipelines with n8n, or fully custom Python scripts, that connect your tools — CRMs, spreadsheets, APIs, messaging apps — and eliminate manual work. From lead qualification to report generation, I automate it.',
    technologies: ['n8n', 'Python', 'Zapier', 'REST APIs', 'Webhooks', 'Google Sheets API'],
    gradient: 'bg-gradient-to-br from-orange-500/20 to-amber-400/20',
    deliveryTime: '5–15 days',
    popular: false,
    tiers: [
      { name: 'Starter', features: ['2–3 Step Automation', 'Webhook Trigger', 'Basic Data Mapping'] },
      { name: 'Professional', features: ['Multi-step Workflow', 'Conditional Logic', 'Error Handling', 'Scheduling', 'Multiple Integrations'] },
      { name: 'Enterprise', features: ['Complex Business Logic', 'Custom API Connectors', 'Data Transformation', 'Monitoring & Alerts', 'Documentation'] },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Services that{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                deliver results
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Precision-engineered solutions for teams that move fast and build for the long term.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl border border-border bg-card p-7 cursor-pointer group${service.popular ? ' ring-2 ring-primary/40' : ''}`}
                onClick={() => setSelectedService(service)}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`inline-flex p-3 rounded-xl mb-5 ${service.gradient}`}>
                  <div className="text-primary">{service.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{service.deliveryTime}</span>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium">
                    Details
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-5 right-5 z-10 h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setSelectedService(null)}
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className={`rounded-xl p-4 ${selectedService.gradient} flex-shrink-0`}>
                    <div className="text-primary">{selectedService.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{selectedService.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedService.longDescription}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedService.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tiers */}
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                  {selectedService.tiers.map((tier, idx) => (
                    <div
                      key={tier.name}
                      className={`rounded-xl border p-6 ${idx === 1 ? 'border-primary/50 bg-primary/5 ring-1 ring-primary/20' : 'border-border bg-background'}`}
                    >
                      {idx === 1 && (
                        <div className="text-xs font-semibold text-primary mb-3 uppercase tracking-wide">Recommended</div>
                      )}
                      <h4 className="font-bold text-foreground mb-4">{tier.name}</h4>
                      <ul className="space-y-2.5">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Pricing is project-scoped. Let's discuss what you're building.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                    onClick={() => setSelectedService(null)}
                  >
                    <Mail className="h-4 w-4" />
                    Get a Custom Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
