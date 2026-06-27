'use client';
import { motion } from 'framer-motion';
import { MessageCircle, Target, Palette, Rocket } from 'lucide-react';

const processSteps = [
  { icon: <MessageCircle className="w-6 h-6" />, title: 'Discovery', desc: 'Align on vision, goals, and scope' },
  { icon: <Target className="w-6 h-6" />, title: 'Strategy', desc: 'Roadmap, timeline, and deliverables' },
  { icon: <Palette className="w-6 h-6" />, title: 'Build', desc: 'Pixel-perfect design and engineering' },
  { icon: <Rocket className="w-6 h-6" />, title: 'Launch', desc: 'Deploy, test, and provide ongoing support' },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">How I Work</h2>
          <p className="text-muted-foreground">Transparent process from idea to launch</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary">
                {step.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
