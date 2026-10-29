"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "@/components/ui/section";

// Define types for the data structures
interface Experience {
    role: string;
    company: string;
    program?: string;
    duration: string;
    description: string;
    skills: string[];
}

// EXPERIENCE DATA
const experiences: Experience[] = [
  {
    role: "Founder & Lead Engineer",
    company: "DeCodeTech",
    duration: "2024 - Present",
    description: "Founded and actively architecting DeCodeTech (decodetech.online). Leading the design and engineering of intelligent full-stack applications, custom agentic AI systems, RAG workflows, and responsive modern web solutions.",
    skills: ["Full-Stack Development", "React.js", "Python", "Node.js", "Agentic AI", "LLMs & RAG"]
  },
  {
    role: "Software Developer (MERN Stack)",
    company: "Parnets Digital Advertisements Pvt Ltd",
    program: "Bengaluru, Karnataka, India · On-site",
    duration: "Jan 2025 - Jul 2025",
    description: "Delivered 9 real-world projects with hands-on experience in full-stack development and client requirements. Built a PG Rental Web Application using the MERN stack, developed 2 responsive Laundry Service Websites, and contributed to MahakisanMela in collaboration with the Asian PGPR Society for Sustainable Agriculture.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "MERN Stack", "REST APIs"]
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
                </div>
            </div>
        </Section>
    );
}