"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';

type TechCategory = "AI & Automation" | "Programming Languages" | "Backend" | "Frontend" | "Databases & DevOps";

interface Tech {
  name: string;
  level: number;
}

const techStack: Record<TechCategory, Tech[]> = {
  "AI & Automation": [
    { name: "LangChain", level: 88 },
    { name: "RAG Pipelines", level: 82 },
    { name: "Groq LLM", level: 85 },
    { name: "n8n", level: 78 },
    { name: "AI Agents", level: 85 },
  ],
  "Programming Languages": [
    { name: "Python", level: 92 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 75 },
    { name: "C/C++", level: 72 },
  ],
  "Backend": [
    { name: "FastAPI", level: 88 },
    { name: "Django & DRF", level: 82 },
    { name: "REST APIs", level: 90 },
    { name: "WebHooks", level: 80 },
  ],
  "Frontend": [
    { name: "React", level: 82 },
    { name: "Next.js", level: 78 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Framer Motion", level: 75 },
  ],
  "Databases & DevOps": [
    { name: "PostgreSQL", level: 80 },
    { name: "Supabase", level: 78 },
    { name: "MongoDB", level: 65 },
    { name: "Docker", level: 72 },
  ]
};


const Section: React.FC<{ id: string; title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ id, title, icon, children }) => (
    <section id={id} className="py-10 md:py-16">
    <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6 md:mb-8">
        {icon}
        <h2 className="text-2xl md:text-3xl font-bold ml-3">{title}</h2>
        </div>
        {children}
    </div>
    </section>
);

export const TechStackSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TechCategory>('AI & Automation');

    return (
    <Section
        id="tech"
        title="Tech Stack"
        icon={<Layers className="h-6 w-6 text-primary" />}
    >
        <div className="flex gap-2 overflow-x-auto pb-2 justify-start md:justify-center mb-6 md:mb-8 scrollbar-none snap-x snap-mandatory">
            {Object.keys(techStack).map((category) => (
            <motion.button
                key={category}
                onClick={() => setActiveTab(category as TechCategory)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 snap-start px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeTab === category
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-muted hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20"
                }`}
            >
                {category}
            </motion.button>
            ))}
        </div>

        <AnimatePresence mode="wait">
            <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
            {techStack[activeTab].map((tech: Tech, i: number) => (
                <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                    transition: { duration: 0.2 }
                }}
                className="bg-background p-4 md:p-5 rounded-lg border shadow-sm"
                >
                <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm md:text-base">{tech.name}</span>
                    <span className="text-xs md:text-sm text-muted-foreground">{tech.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 md:h-2.5 overflow-hidden">
                    <motion.div
                    key={`${activeTab}-${tech.name}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.08 }}
                    className="bg-gradient-to-r from-primary to-accent h-2 md:h-2.5 rounded-full"
                    />
                </div>
                </motion.div>
            ))}
            </motion.div>
        </AnimatePresence>
    </Section>
    );
};

export default TechStackSection;