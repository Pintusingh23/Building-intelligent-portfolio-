"use client";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Play, ChevronDown } from 'lucide-react';

import TiltedCard from '@/components/ui/TiltedCard';

// Optimized tech stack display with AnimatePresence
const TechStack = React.memo(() => {
    const [visibleTechs, setVisibleTechs] = useState(6);
    const techs = useMemo(() => [
        { name: 'Python', color: 'from-yellow-400 to-orange-400' },
        { name: 'React', color: 'from-blue-400 to-cyan-400' },
        { name: 'FastAPI', color: 'from-green-400 to-emerald-400' },
        { name: 'LangChain', color: 'from-purple-400 to-violet-400' },
        { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-500' },
        { name: 'Docker', color: 'from-blue-600 to-blue-400' },
        { name: 'n8n', color: 'from-pink-400 to-rose-400' },
        { name: 'AWS', color: 'from-orange-400 to-red-400' }
    ], []);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleTechs(prev => prev === techs.length ? 6 : techs.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [techs.length]);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap gap-2 mt-6"
        >
            <AnimatePresence mode="wait">
                {techs.slice(0, visibleTechs).map((tech, index) => (
                    <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${tech.color} text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default`}
                    >
                        {tech.name}
                    </motion.span>
                ))}
            </AnimatePresence>
        </motion.div>
    );
});

// Simple static image component with just TiltedCard
const SimpleAvatar = React.memo(() => {
    return (
        <div className="relative w-full max-w-lg mx-auto lg:max-w-lg">
            <div className="relative rounded-2xl"> 
                <div className="relative z-20 w-full h-full rounded-2xl">
                    <TiltedCard
                        imageSrc="/pintu.png"
                        altText="Pintu Singh — Full-Stack AI Engineer"
                        captionText="Pintu Singh — Full-Stack AI Engineer"
                        containerHeight="400px"
                        containerWidth="400px"
                        imageHeight="400px"
                        imageWidth="400px"
                        rotateAmplitude={12}
                        scaleOnHover={1}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <div className="absolute top-80 left-11 -translate-x-1/2 w-full flex justify-start">
                                <div className="flex items-center justify-center bg-gray-700 bg-opacity-50 rounded-lg px-4 py-2 shadow-lg">
                                    <p 
                                        className="text-white font-semibold text-sm tracking-wide text-center" 
                                        style={{ fontFamily: 'monospace', whiteSpace: 'nowrap' }}
                                    >
                                        Pintu Singh — Full-Stack AI Engineer
                                    </p>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
});

// Mobile Avatar — static round image, no tilt
const MobileAvatar = React.memo(() => (
    <div className="relative mx-auto w-24 h-24">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 to-accent/30 blur-2xl scale-150 opacity-50" />
        <img
            src="/pintu.png"
            alt="Pintu Singh"
            width={96}
            height={96}
            fetchPriority="high"
            decoding="async"
            className="relative z-10 w-24 h-24 rounded-full object-cover border-2 border-primary/20 shadow-xl"
        />
    </div>
));

// Main hero component
const OptimizedHeroSection = () => {
        return (
            <section className="lg:min-h-screen lg:flex lg:items-center lg:justify-center lg:py-12 lg:px-8 overflow-hidden relative lg:bg-background">
                {/* Desktop background elements only */}
                <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.07)_0%,_transparent_70%)]" />
                <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.06)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.06)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] opacity-60" />

                <div className="relative z-10 lg:max-w-7xl lg:mx-auto lg:w-full w-full">
                    {/* Desktop Layout - Unchanged */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left content - Desktop */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                            className="space-y-8"
                        >
                            {/* Status badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                                className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium shadow-lg bg-primary/5 text-primary"
                            >
                                <Sparkles className="h-4 w-4" />
                                Full-Stack AI Engineer & Founder @ DeCodeTech
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-2 h-2 bg-green-400 rounded-full"
                                />
                            </motion.div>

                            {/* Main heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-foreground"
                            >
                                Creating{' '}
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                        modern
                                    </span>
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-gradient-to-r from-primary to-accent"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                    />
                                </span>
                                <br />
                                web experiences
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="text-lg lg:text-xl max-w-2xl leading-relaxed text-muted-foreground"
                            >
                                I build{' '}
                                <span className="font-semibold text-primary">agentic AI systems</span>,{' '}
                                <span className="font-semibold text-accent">intelligent automation pipelines</span>, and{' '}
                                <span className="font-semibold text-primary/80">secure full-stack applications</span>.{' '}
                                Founder of DeCodeTech. B.Tech CS & AI at Newton School of Technology.
                            </motion.p>

                            {/* CTA buttons */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(var(--primary)/0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative text-primary-foreground px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-primary"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <Link href="/contact">Get in touch</Link>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-foreground" />
                                </motion.button>
                            </motion.div>

                            {/* Social links */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="flex gap-6 pt-4"
                            >
                                {[
                                    { 
                                        icon: () => (
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        ),
                                        href: "https://github.com/Pintusingh23", 
                                        color: "hover:text-primary"
                                    },
                                    { 
                                        icon: () => (
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                            </svg>
                                        ),
                                        href: "https://decodetech.online",
                                        color: "hover:text-primary"
                                    }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="transition-all duration-300 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                                    >
                                        <social.icon />
                                    </motion.a>
                                ))}
                            </motion.div>

                            {/* Tech stack */}
                            <TechStack />
                        </motion.div>

                        {/* Right content - Desktop Avatar */}
                        <div className="flex justify-center lg:justify-end">
                            <SimpleAvatar />
                        </div>
                    </div>

                    {/* ─── MOBILE — Premium (OLED dark / rich light) ─── */}
                    <div className="lg:hidden min-h-screen flex flex-col relative overflow-hidden bg-background dark:bg-[#050505]">

                        {/* Mesh gradient blobs */}
                        <div className="pointer-events-none absolute inset-0 -z-0">
                            <div className="absolute -top-20 right-0 h-[380px] w-[380px] rounded-full bg-primary/8 blur-[140px]" />
                            <div className="absolute bottom-1/3 -left-20 h-[260px] w-[260px] rounded-full bg-accent/5 blur-[100px]" />
                            {/* Noise mesh overlay */}
                            <div className="absolute inset-0 opacity-[0.03]"
                                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: '200px 200px' }}
                            />
                        </div>

                        {/* ══ ABOVE FOLD ══ */}
                        <div className="relative z-10 flex flex-col flex-1 px-6 pt-28 pb-8 justify-between">

                            <div className="space-y-6">
                                {/* Available badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: -12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border dark:border-white/10 bg-muted/60 dark:bg-white/5 backdrop-blur-md text-xs font-medium text-muted-foreground dark:text-white/60">
                                        <motion.span
                                            animate={{ opacity: [1, 0.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-1.5 h-1.5 rounded-full bg-green-400"
                                        />
                                        Open to opportunities
                                    </span>
                                </motion.div>

                                {/* Oversized name */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <h1 className="text-[clamp(52px,15vw,72px)] font-black leading-[0.9] tracking-tighter text-foreground dark:text-white">
                                        PINTU<br />
                                        <span
                                            className="bg-clip-text text-transparent"
                                            style={{ backgroundImage: 'linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 60%, hsl(var(--accent)) 100%)' }}
                                        >
                                            SINGH
                                        </span>
                                    </h1>
                                    <p className="mt-3 text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground dark:text-white/40">
                                        Full-Stack AI Engineer
                                    </p>
                                </motion.div>

                                {/* Glow divider */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
                                    className="h-px origin-left"
                                    style={{ background: 'linear-gradient(90deg, hsl(var(--primary)/0.8) 0%, hsl(var(--accent)/0.4) 50%, transparent 100%)' }}
                                />
                                <br />
                                {/* Value prop */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.35, duration: 0.6 }}
                                    className="text-[15px] leading-relaxed text-foreground/60 dark:text-white/55"
                                >
                                    Building{' '}
                                    <span className="text-foreground dark:text-white/90 font-semibold">agentic AI systems</span>{' '}
                                    and{' '}
                                    <span className="text-foreground dark:text-white/90 font-semibold">production-grade apps</span>{' '}
                                    that ship fast and scale.
                                </motion.p>

                                {/* Neo-glass identity card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45, duration: 0.55 }}
                                    className="flex items-center gap-3 p-3 rounded-2xl border border-border dark:border-white/[0.08] bg-card/60 dark:bg-white/[0.04]"
                                    style={{ backdropFilter: 'blur(16px)' }}
                                >
                                    <div className="relative shrink-0">
                                        <div className="absolute inset-0 rounded-full blur-lg opacity-60"
                                            style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' }} />
                                        <img
                                            src="/pintu.png"
                                            alt="Pintu Singh"
                                            width={56}
                                            height={56}
                                            loading="lazy"
                                            decoding="async"
                                            className="relative z-10 w-14 h-14 rounded-full object-cover border border-primary/20 dark:border-white/20"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-foreground/90 dark:text-white/90">Founder @ DeCodeTech</p>
                                        <p className="text-[11px] text-muted-foreground dark:text-white/40 mt-0.5">B.Tech CS & AI · NST · 2027</p>
                                        <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium"
                                            style={{ background: 'hsl(var(--primary)/0.15)', color: 'hsl(var(--primary))' }}>
                                            <Sparkles className="h-2.5 w-2.5" />
                                            Full-Stack AI Engineer
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Magnetic CTAs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.55, duration: 0.55 }}
                                    className="flex gap-3"
                                >
                                    <Link href="/contact" className="flex-1">
                                        <motion.button
                                            whileTap={{ scale: 0.96 }}
                                            className="w-full py-3.5 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all duration-200"
                                            style={{
                                                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)/0.8))',
                                                boxShadow: '0 0 24px hsl(var(--primary)/0.35), inset 0 1px 0 rgba(255,255,255,0.1)',
                                            }}
                                            onTouchStart={(e) => (e.currentTarget.style.boxShadow = '0 0 40px hsl(var(--primary)/0.6), inset 0 1px 0 rgba(255,255,255,0.15)')}
                                            onTouchEnd={(e) => (e.currentTarget.style.boxShadow = '0 0 24px hsl(var(--primary)/0.35), inset 0 1px 0 rgba(255,255,255,0.1)')}
                                        >
                                            Get in Touch <ArrowRight className="h-3.5 w-3.5" />
                                        </motion.button>
                                    </Link>
                                    <Link href="/contact" className="flex-1">
                                        <motion.button
                                            whileTap={{ scale: 0.96 }}
                                            className="w-full py-3.5 rounded-2xl text-sm font-bold text-foreground/80 dark:text-white/80 flex items-center justify-center gap-2 bg-muted/50 dark:bg-white/[0.05] border border-border/60 dark:border-white/[0.12]"
                                            style={{ backdropFilter: 'blur(12px)' }}
                                        >
                                            <Play className="h-3.5 w-3.5" /> Contact / CV
                                        </motion.button>
                                    </Link>
                                </motion.div>

                                {/* Social icons */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.65, duration: 0.5 }}
                                    className="flex gap-2"
                                >
                                    {[
                                        { href: "https://github.com/Pintusingh23", d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", label: "GitHub" },
                                        { href: "https://decodetech.online", d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z", label: "DeCodeTech Website" },
                                    ].map(({ href, d, label }) => (
                                        <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                            whileTap={{ scale: 0.92 }}
                                            className="p-2.5 rounded-xl text-muted-foreground dark:text-white/40 transition-colors bg-muted/40 dark:bg-white/[0.05] border border-border/60 dark:border-white/[0.08]"
                                        >
                                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Scroll hint — anchors to bottom of above-fold */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="flex flex-col items-center gap-1.5 pt-6 text-muted-foreground/40 dark:text-white/20"
                            >
                                <span className="text-[10px] tracking-widest uppercase">Scroll</span>
                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    export default OptimizedHeroSection;