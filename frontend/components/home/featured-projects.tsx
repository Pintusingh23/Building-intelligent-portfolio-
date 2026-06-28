"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Castly",
    description: "Cryptographically secure e-voting platform with AES-256 encryption, tamper-evident chain hashing, and Aadhaar OTP multi-factor verification. National Finalist at Bharat Mandapam out of ~1,400 teams.",
    image: "https://opengraph.githubassets.com/1/nitin-hackgramer/castly",
    tags: ["React", "Django REST", "PostgreSQL", "JWT"],
    link: "https://castly-sigma.vercel.app",
    githubLink: "https://github.com/nitin-hackgramer/castly",
    accent: "from-primary/30 to-accent/10",
  },
  {
    title: "AgentX",
    description: "Autonomous AI agent that researches tech news and viral GitHub repos, generates X posts, and sends them to Telegram for approval/edit/rejection with a 5-posts-per-day intelligent scheduler.",
    image: "https://opengraph.githubassets.com/1/nitin-hackgramer/Agent-X",
    tags: ["Python", "LangChain", "Telegram API", "n8n"],
    link: "https://github.com/nitin-hackgramer/Agent-X",
    accent: "from-accent/30 to-primary/10",
  },
  {
    title: "PromptDitch",
    description: "Browser extension that auto-detects Claude, ChatGPT, Gemini, and Grok interfaces, then intercepts and upgrades informal prompts into model-optimized structured templates on click.",
    image: "https://opengraph.githubassets.com/1/nitin-hackgramer/PromptDitch",
    tags: ["React", "FastAPI", "LangChain", "Chrome API"],
    link: "https://github.com/nitin-hackgramer/PromptDitch",
    accent: "from-primary/20 to-primary/5",
  },
];

// Desktop: stacked alternating layout (unchanged)
function DesktopProjects({ isInView }: { isInView: boolean }) {
  return (
    <div className="hidden md:block space-y-20 mb-16">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <div className={cn("grid md:grid-cols-2 gap-8 items-center", index % 2 === 1 && "md:grid-flow-dense")}>
            <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
              >
                <h3 className="h3 mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Button asChild variant="outline" className="rounded-full group">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    </Link>
                  </Button>
                  {"githubLink" in project && (
                    <Button asChild variant="ghost" className="rounded-full">
                      <Link href={(project as { githubLink: string }).githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
            <div className={cn(index % 2 === 1 ? "md:col-start-1" : "")}>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block group relative">
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative rounded-2xl overflow-hidden border border-border shadow-lg"
                >
                  {/* Gradient glow on hover */}
                  <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br", project.accent)} />
                  <div className="aspect-video bg-muted/50 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-2"
                      unoptimized
                    />
                  </div>
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Mobile: arrow-nav card carousel with premium slide animation
function MobileProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((next: number) => {
    const bounded = (next + projects.length) % projects.length;
    setDirection(next > current ? 1 : -1);
    setCurrent(bounded);
  }, [current]);

  const project = projects[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 18 : -18, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -18 : 18, opacity: 0 }),
  };

  return (
    <div className="md:hidden mb-10">
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
              {/* Image */}
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="aspect-video bg-muted/30 relative overflow-hidden">
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-30", project.accent)} />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-3"
                    unoptimized
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs rounded-full px-2.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="rounded-full flex-1">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  {"githubLink" in project && (
                    <Button asChild size="sm" variant="outline" className="rounded-full">
                      <Link href={(project as { githubLink: string }).githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow controls */}
      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={() => go(current - 1)}
          className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
          aria-label="Previous project"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <span className="flex items-center text-sm text-muted-foreground font-medium">
          {current + 1} / {projects.length}
        </span>
        <button
          onClick={() => go(current + 1)}
          className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
          aria-label="Next project"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work. Each project represents unique challenges and solutions."
          centered
        />

        <MobileProjectCarousel />
        <DesktopProjects isInView={isInView} />

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/portfolio#projects" className="flex items-center">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
