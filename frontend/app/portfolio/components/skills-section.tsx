import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { Section } from '@/components/ui/section';

const skills = {
    "AI & Agents": ["LangChain Orchestration", "RAG Pipelines", "LLM Integration", "n8n Automation", "AI Agent Design", "Human-Takeover Protocols"],
    "Backend": ["FastAPI", "Django & DRF", "REST APIs", "JWT Auth", "BackgroundTasks", "WebHooks"],
    "Frontend": ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    "Soft Skills": ["Technical Communication", "Freelance Delivery", "Technical Writing", "Problem Solving"]
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const glowVariants = {
    hover: { 
        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
        scale: 1.02,
        transition: { duration: 0.3 }
    }
};

export function SkillsSection() {
    return (
        <div className="hidden md:block">
        <Section
            id="skills"
            title="My Skills"
            icon={<BadgeCheck className="h-6 w-6 text-primary" />}
        >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {Object.entries(skills).map(([category, categorySkills]) => (
                    <motion.div
                        key={category}
                        variants={itemVariants}
                        whileHover={glowVariants?.hover}
                        className="bg-gradient-to-br from-background to-muted p-4 md:p-6 rounded-xl border shadow-sm transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-foreground border-b pb-2">{category}</h3>
                        <ul className="space-y-3">
                            {categorySkills.map((skilla, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 3, color: "#3b82f6", transition: { duration: 0.2 } }}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-primary">•</span>
                                    <span className="text-muted-foreground">{skilla}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
        </div>
    );
}