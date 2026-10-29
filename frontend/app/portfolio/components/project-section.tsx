'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/section';

interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  link: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    name: 'DeCodeTech (DeCode Academy)',
    description: 'Interactive learning and software platform founded by Pintu Singh. Featuring comprehensive bootcamps, coding challenges, system design, and AI/ML placement tracks with hands-on practice.',
    technologies: ['Next.js', 'React.js', 'Python', 'Full-Stack', 'EdTech'],
    features: ['Startup Platform', 'DeCode Academy', 'Full-Stack Tracks', 'Live Deployment'],
    image: '/decodetech.png',
    link: 'https://github.com/Pintusingh23',
    liveLink: 'https://decodetech.online',
  },
  {
    name: 'Instagram DM AI Agent',
    description: 'Autonomous AI agent for social media direct messaging and lead automation. Built with LangChain, FastAPI, Meta Graph API, and Groq LLMs with smart context memory and human takeover protocol.',
    technologies: ['Python', 'LangChain', 'FastAPI', 'Meta Graph API', 'Groq LLM'],
    features: ['Autonomous DM Replies', 'Context Memory', 'Human Takeover', 'Webhook Integration'],
    image: '/AgentX.png',
    link: 'https://github.com/Pintusingh23/Instagram-DM-Agent',
  },
  {
    name: 'Dynamic Trend & Event Detector',
    description: 'Real-time event and dynamic trend detection system using data mining, NLP, and anomaly detection algorithms to identify emerging discussions and topic spikes.',
    technologies: ['Python', 'NLP', 'Data Mining', 'Machine Learning', 'FastAPI'],
    features: ['Real-Time Stream Analysis', 'Topic Clustering', 'Anomaly Detection', 'Event Extraction'],
    image: '/castly.png',
    link: 'https://github.com/Pintusingh23/Dynamic-Trend-Event-Detector',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-background rounded-xl border shadow-sm overflow-hidden flex flex-col relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative w-full aspect-video overflow-hidden bg-muted/30">
        <motion.img
          initial={{ scale: 1.05, filter: 'blur(4px)' }}
          whileInView={{ scale: 1, filter: 'blur(0px)' }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6 }}
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none transition-opacity duration-300" />
      </div>
      <div className="p-5 flex flex-col flex-grow relative z-10 bg-background/80 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded-md">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 bg-secondary rounded-md">+{project.technologies.length - 3}</span>
          )}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary text-sm font-medium">
            GitHub <ChevronRight className="h-4 w-4 ml-1" />
          </a>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-emerald-500 text-sm font-medium">
              Live Demo <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 18 : -18, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -18 : 18, opacity: 0 }),
};

function MobileProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((next: number) => {
    const bounded = (next + projects.length) % projects.length;
    setDirection(next > current ? 1 : -1);
    setCurrent(bounded);
  }, [current]);

  return (
    <div className="sm:hidden">
      <div className="relative overflow-hidden rounded-xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
          >
            <ProjectCard project={projects[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-4 mt-5">
        <button
          onClick={() => go(current - 1)}
          className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all"
          aria-label="Previous project"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <span className="text-sm text-muted-foreground font-medium tabular-nums">
          {current + 1} / {projects.length}
        </span>
        <button
          onClick={() => go(current + 1)}
          className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all"
          aria-label="Next project"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export const ProjectSection: React.FC = () => {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      icon={<Rocket className="h-6 w-6 text-primary" />}
    >
      {/* Mobile carousel */}
      <MobileProjectCarousel />

      {/* Desktop/tablet grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ProjectSection;
