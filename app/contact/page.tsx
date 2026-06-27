'use client';
import React, { useState } from 'react';
import { MessageSquare, User, Mail, Phone, Send, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nitin-sharma-a1a1a62ab/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/nitin-hackgramer' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/NitinSh60345544' },
  { icon: Mail, label: 'Email', href: 'mailto:nitinkumar12082005@gmail.com' },
];

const faqs = [
  { q: 'What services do you offer?', a: 'Full-stack development, AI agent systems, RAG pipelines, and automation workflows.' },
  { q: 'How quickly do you respond?', a: 'Within 24 hours on business days.' },
  { q: 'Do you work with international clients?', a: 'Yes — I work globally and can accommodate different time zones.' },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Required';
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (name in errors) setErrors(er => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const inputClass = (err?: string) =>
    `w-full bg-muted border ${err ? 'border-destructive' : 'border-border'} rounded-lg py-3 px-4 pl-11 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`;

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
          Open to new projects
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-4"
        >
          Let's{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Collaborate
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto"
        >
          Have a project in mind? I'd love to hear from you.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
              <MessageSquare className="h-5 w-5 text-primary" />
              Send a Message
            </h2>

            {submitted ? (
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-1">Message Sent!</h3>
                <p className="text-sm text-muted-foreground">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'name', type: 'text', placeholder: 'Your Name', icon: User },
                  { name: 'email', type: 'email', placeholder: 'Your Email', icon: Mail },
                  { name: 'phone', type: 'tel', placeholder: 'Phone (Optional)', icon: Phone },
                  { name: 'subject', type: 'text', placeholder: 'Subject', icon: MessageSquare },
                ].map(({ name, type, placeholder, icon: Icon }) => (
                  <div key={name}>
                    <div className="relative">
                      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        name={name}
                        type={type}
                        value={form[name as keyof FormState]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className={inputClass(errors[name as keyof FormState])}
                      />
                    </div>
                    {errors[name as keyof FormState] && (
                      <p className="text-destructive text-xs mt-1">{errors[name as keyof FormState]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className={`w-full bg-muted border ${errors.message ? 'border-destructive' : 'border-border'} rounded-lg py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {loading ? (
                    <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send className="h-4 w-4" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-xl font-bold mb-6 text-foreground">Contact Details</h2>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'nitinkumar12082005@gmail.com', color: 'text-primary' },
                  { icon: Phone, label: 'Phone', value: '+91 9968358455', color: 'text-primary' },
                  { icon: MapPin, label: 'Location', value: 'Delhi, India', color: 'text-primary' },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-2.5">
                      <Icon className={`h-5 w-5 ${color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-xl font-bold mb-5 text-foreground">Connect</h2>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm font-medium text-foreground hover:bg-muted hover:border-primary/30 transition-all"
                  >
                    <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-xl font-bold mb-5 text-foreground">Quick Answers</h2>
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
      </div>
    </div>
  );
}
