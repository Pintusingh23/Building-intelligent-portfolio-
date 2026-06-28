"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Define types for the data structures
interface Experience {
    role: string;
    company: string;
    program?: string;
    duration: string;
    description: string;
    skills: string[];
}

interface Hackathon {
    name: string;
    date: string;
    organizer: string;
    achievement: string;
    description: string;
    technologies: string[];
}


// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};


// EXPERIENCE DATA
const experiences = [
  {
    role: "Software Engineer Intern",
    company: "AcdyOn Technologies",
    duration: "2025 - Present",
    description: "Building production-grade AI integration layers, RAG pipelines, and automated business workflows. Delivering custom agentic AI solutions — from LLM-powered backend systems to multi-step automation pipelines — for real product operations.",
    skills: ["Agentic AI", "FastAPI", "LangChain", "RAG Pipelines", "n8n Automation", "Full-Stack Development"]
  },
  {
    role: "Student Intern",
    company: "Scaler School of Technology",
    program: "YIIP Program",
    duration: "Summer 2024",
    description: "Participated in the Young Innovator Internship Program focused on full-stack development using modern technologies. Collaborated with senior developers to build and ship educational tech features.",
    skills: ["No-Code Development", "Extension Development", "Artificial Intelligence", "Team Collaboration"]
  }
];

// HACKATHON DATA
const hackathons = [
    {
        name: "India Innovates '26",
        organizer: "Bharat Mandapam, India",
        date: "2025",
        achievement: "National Finalist — Top teams out of ~1,400 entries",
        description: "Built Castly — a cryptographically secure e-voting platform with AES-256 Fernet encryption, tamper-evident chain hashing, Aadhaar OTP MFA, and JWT + append-only storage architecture.",
        technologies: ["React", "Django REST", "PostgreSQL", "AES-256", "JWT", "Chain Hashing"]
    },
    {
        name: "HackSpire Hackathon",
        organizer: "Inderprastha Engineering College",
        date: "December 2024",
        achievement: "Top 15 Finalist",
        description: "Developed an Android application for patient appointment management and on-device lung cancer prediction from X-ray images using TensorFlow Lite.",
        technologies: ["Kotlin", "TensorFlow Lite", "Firebase", "Google Cloud Healthcare API"]
    },
    {
        name: "Python Park — Compunnel Inc.",
        organizer: "Compunnel Inc.",
        date: "June 2024",
        achievement: "Top 10 — PySpark Track",
        description: "Built a resume extractor using Python, PDFPlumber, and regex to parse and extract structured information from PDF and DOCX files.",
        technologies: ["Python", "PDFPlumber", "python-docx", "re"]
    }
];


function ExpandableDescription({ text }: { text: string }) {
    const [expanded, setExpanded] = useState(false);
    const limit = 120;
    if (text.length <= limit) return <p className="text-sm text-muted-foreground mb-4">{text}</p>;
    return (
        <p className="text-sm text-muted-foreground mb-4">
            {expanded ? text : `${text.slice(0, limit)}…`}
            <button
                onClick={() => setExpanded(!expanded)}
                className="ml-1 text-primary text-xs font-medium md:hidden"
            >
                {expanded ? "Show less" : "Show more"}
            </button>
            <span className="hidden md:inline">{!expanded && text.slice(limit)}</span>
        </p>
    );
}

export function ExperienceSection() {
    return (
        <Section 
            id="experience" 
            title="Experience" 
            icon={<Briefcase className="h-6 w-6 text-primary" />}
        >
            <div className="max-w-4xl mx-auto">
                {/* Work Experience — single continuous animated timeline */}
                <div className="relative">
                    {/* Single line spanning all cards */}
                    <motion.div
                        className="absolute left-3 top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent/50 to-transparent origin-top"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-10 pb-6 last:pb-0">
                            {/* Animated blob dot */}
                            <motion.div
                                className="absolute left-3 top-4 -translate-x-1/2"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.25, type: "spring", stiffness: 260, damping: 18 }}
                            >
                                {/* Glow pulse ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-primary/40"
                                    animate={{ scale: [1, 2.8, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.6, ease: "easeInOut" }}
                                />
                                <div className="relative w-3.5 h-3.5 rounded-full bg-primary border-2 border-background ring-2 ring-primary/30" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-background rounded-xl p-4 md:p-6 border shadow-sm relative overflow-hidden"
                                whileHover={{ boxShadow: "0 10px 30px -5px hsl(var(--primary)/0.2)", y: -3, transition: { duration: 0.3 } }}
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full filter blur-2xl -mr-20 -mt-20 opacity-70 pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="flex flex-wrap gap-3 sm:gap-0 justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-base md:text-xl font-semibold">{exp.role}</h3>
                                            <p className="text-primary font-medium mt-0.5 text-sm md:text-base">{exp.company}</p>
                                            {exp.program && <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{exp.program}</p>}
                                        </div>
                                        <div className="bg-primary/10 text-primary py-1 px-3 rounded-full text-xs md:text-sm font-medium shrink-0">
                                            {exp.duration}
                                        </div>
                                    </div>
                                    <ExpandableDescription text={exp.description} />
                                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                                        {exp.skills.map((skill, i) => (
                                            <span key={i} className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}

                    {/* Community Experience — desktop only */}
                    <div className="hidden md:block relative pl-10 pb-0">
                        <motion.div
                            className="absolute left-3 top-4 -translate-x-1/2"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 18 }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-full bg-accent/40"
                                animate={{ scale: [1, 2.8, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2.8, repeat: Infinity, delay: 1.2, ease: "easeInOut" }}
                            />
                            <div className="relative w-3.5 h-3.5 rounded-full bg-accent border-2 border-background ring-2 ring-accent/30" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5 }}
                            className="bg-background rounded-xl p-4 md:p-6 border shadow-sm relative overflow-hidden"
                            whileHover={{ boxShadow: "0 10px 30px -5px hsl(var(--primary)/0.2)", y: -3, transition: { duration: 0.3 } }}
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full filter blur-2xl -mr-20 -mt-20 opacity-70 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex flex-wrap gap-3 sm:gap-0 justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-xl font-semibold">Co-Founder & Community Manager</h3>
                                        <p className="text-primary font-medium mt-0.5">Tech Community</p>
                                    </div>
                                    <div className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm font-medium">2024 - Present</div>
                                </div>
                                <ExpandableDescription text="Co-founded and manage a thriving tech community with over 170+ developers and creators from diverse backgrounds. Foster collaboration, knowledge sharing, and professional growth through organized events and mentorship programs." />
                                <div className="flex flex-wrap gap-2">
                                    {["Community Management","Event Organization","Mentorship","Leadership"].map(s => (
                                        <span key={s} className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Hackathon Experience */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span>Hackathon Experience</span>
                    </h3>
                    
                    {/* Desktop */}
                    <div className="hidden md:grid md:grid-cols-3 gap-6">
                        {hackathons.map((hackathon, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="bg-background rounded-xl border overflow-hidden shadow relative"
                            >
                                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                                <div className="p-5">
                                    <div className="mb-3 flex items-start justify-between">
                                        <h4 className="font-semibold text-lg">{hackathon.name}</h4>
                                        <span className="text-xs text-muted-foreground">{hackathon.date}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">{hackathon.organizer}</p>
                                    <div className="mb-3 inline-block px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                                        {hackathon.achievement}
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">{hackathon.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {hackathon.technologies.slice(0, 3).map((tech, j) => (
                                            <span key={j} className="text-xs px-2 py-0.5 bg-secondary rounded">{tech}</span>
                                        ))}
                                        {hackathon.technologies.length > 3 && (
                                            <span className="text-xs px-2 py-0.5 bg-secondary rounded">+{hackathon.technologies.length - 3}</span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile carousel */}
                    <div className="md:hidden">
                        <Carousel opts={{ align: "start", loop: true }}>
                            <CarouselContent className="-ml-3">
                                {hackathons.map((hackathon, i) => (
                                    <CarouselItem key={i} className="pl-3 basis-[88%]">
                                        <div className="bg-background rounded-xl border overflow-hidden shadow h-full">
                                            <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                                            <div className="p-5">
                                                <div className="mb-3 flex items-start justify-between">
                                                    <h4 className="font-semibold">{hackathon.name}</h4>
                                                    <span className="text-xs text-muted-foreground">{hackathon.date}</span>
                                                </div>
                                                <p className="text-xs text-muted-foreground mb-2">{hackathon.organizer}</p>
                                                <div className="mb-3 inline-block px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                                                    {hackathon.achievement}
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-4">{hackathon.description}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {hackathon.technologies.slice(0, 3).map((tech, j) => (
                                                        <span key={j} className="text-xs px-2 py-0.5 bg-secondary rounded">{tech}</span>
                                                    ))}
                                                    {hackathon.technologies.length > 3 && (
                                                        <span className="text-xs px-2 py-0.5 bg-secondary rounded">+{hackathon.technologies.length - 3}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex justify-center gap-3 mt-4">
                                <CarouselPrevious className="static translate-y-0 h-9 w-9 border-primary/30 hover:bg-primary/10 hover:border-primary/60" />
                                <CarouselNext className="static translate-y-0 h-9 w-9 border-primary/30 hover:bg-primary/10 hover:border-primary/60" />
                            </div>
                        </Carousel>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}