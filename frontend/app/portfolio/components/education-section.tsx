import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import {Section} from '@/components/ui/section';

interface Education {
    institution: string;
    duration: string;
    degree: string;
    field: string;
    location: string;
}

const education = [
  {
    institution: "Newton School of Technology",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Artificial Intelligence",
    duration: "Graduation: 2027",
    location: "India",
  }
];

export default function EducationSection() {
    return (
        <Section 
            id="education" 
            title="Education" 
            icon={<GraduationCap className="h-6 w-6 text-primary" />}
        >
            <div className="max-w-3xl mx-auto">
                {education.map((edu: Education, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="relative pb-10 last:pb-0"
                    >
                        <div className="bg-muted/50 p-4 md:p-6 rounded-xl">
                            <div className="flex flex-wrap justify-between gap-2 md:gap-4 mb-2">
                                <h3 className="text-base md:text-xl font-bold text-foreground leading-tight">{edu.institution}</h3>
                                <span className="text-xs md:text-sm font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full shrink-0">
                                    {edu.duration}
                                </span>
                            </div>
                            <p className="text-sm md:text-lg font-medium text-foreground">{edu.degree} in {edu.field}</p>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">Location: {edu.location}</p>
                            <div className="mt-4 pt-4 border-t border-border/50">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                    <span>Specialized in Artificial Intelligence, Machine Learning, and Agentic Systems</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                    <span>Hands-on full-stack engineering with modern frameworks, Python, and distributed systems</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                    <span>Founder of DeCodeTech startup focused on intelligent technology solutions</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}