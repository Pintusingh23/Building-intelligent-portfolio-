import { motion } from "framer-motion";
import { Coffee, Github, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { Section } from "@/components/ui/section"; // Adjust import path as needed

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
    }
};

export function ContactSection() {
    return (
        <Section 
            id="contact" 
            title="Get In Touch" 
            icon={<Coffee className="h-6 w-6 text-primary" />}
        >
            <div className="max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <p className="text-lg text-muted-foreground mb-6">
                        Have a project in mind or want to discuss potential collaborations? 
                        I'd love to hear from you! Feel free to reach out through any of the channels below.
                    </p>
                </motion.div>
                
                {/* Mobile: compact list */}
                <div className="md:hidden bg-card rounded-xl border shadow-sm divide-y divide-border overflow-hidden mb-6">
                    {[
                        { href: "mailto:decode82183@gmail.com", label: "Email", value: "decode82183@gmail.com", icon: <Mail className="h-4 w-4 text-primary" /> },
                        { href: "tel:+918218377064", label: "Phone", value: "+91 82183 77064", icon: <Phone className="h-4 w-4 text-primary" /> },
                        { href: "https://www.linkedin.com/in/pintu-singh-42b1962b8/", label: "LinkedIn", value: "pintu-singh", icon: <Linkedin className="h-4 w-4 text-primary" /> },
                        { href: "https://decodetech.online", label: "DeCodeTech", value: "decodetech.online", icon: <Globe className="h-4 w-4 text-primary" /> },
                        { href: "https://github.com/Pintusingh23", label: "GitHub", value: "Pintusingh23", icon: <Github className="h-4 w-4 text-primary" /> },
                    ].map(({ href, label, value, icon }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors">
                            <div className="bg-primary/10 p-2 rounded-lg shrink-0">{icon}</div>
                            <div className="min-w-0">
                                <p className="text-xs font-medium text-foreground">{label}</p>
                                <p className="text-xs text-muted-foreground truncate">{value}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Desktop: card grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="hidden md:grid md:grid-cols-4 gap-4"
                >
                    <motion.a
                        href="mailto:decode82183@gmail.com"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)", transition: { duration: 0.3 } }}
                        className="bg-background rounded-xl p-5 border shadow-sm text-center flex flex-col items-center justify-center"
                    >
                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                            <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium mb-1 text-sm">Email</h3>
                        <p className="text-xs text-muted-foreground">decode82183@gmail.com</p>
                    </motion.a>
                    <motion.a
                        href="tel:+918218377064"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)", transition: { duration: 0.3 } }}
                        className="bg-background rounded-xl p-5 border shadow-sm text-center flex flex-col items-center justify-center"
                    >
                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                            <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium mb-1 text-sm">Phone</h3>
                        <p className="text-xs text-muted-foreground">+91 82183 77064</p>
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/pintu-singh-42b1962b8/"
                        target="_blank" rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)", transition: { duration: 0.3 } }}
                        className="bg-background rounded-xl p-5 border shadow-sm text-center flex flex-col items-center justify-center"
                    >
                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                            <Linkedin className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium mb-1 text-sm">LinkedIn</h3>
                        <p className="text-xs text-muted-foreground">pintu-singh</p>
                    </motion.a>
                    <motion.a
                        href="https://decodetech.online"
                        target="_blank" rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)", transition: { duration: 0.3 } }}
                        className="bg-background rounded-xl p-5 border shadow-sm text-center flex flex-col items-center justify-center"
                    >
                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                            <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium mb-1 text-sm">Startup</h3>
                        <p className="text-xs text-muted-foreground">decodetech.online</p>
                    </motion.a>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-lg mt-12 border border-primary/20"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold mb-2">Let's Build Something Amazing Together</h3>
                        <p className="text-muted-foreground">
                            I'm currently available for full-stack, AI, and startup collaboration opportunities.
                        </p>
                    </div>
                    
                    <div className="flex justify-center">
                        <motion.a 
                            whileHover={{ 
                                scale: 1.05, 
                                boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" 
                            }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact" 
                            className="bg-primary text-white px-8 py-3 rounded-xl text-sm font-medium shadow-md hover:bg-primary/90 transition flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Send Me a Message
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

export default ContactSection;