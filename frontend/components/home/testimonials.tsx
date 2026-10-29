"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "[Client / Collaborator Recommendation: Add your verified client or team recommendation quote here]",
    author: "[Client / Peer Name]",
    role: "[Role / Organization]",
    avatar: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
  },
  {
    quote: "[Client / Collaborator Recommendation: Add your verified client or team recommendation quote here]",
    author: "[Client / Peer Name]",
    role: "[Role / Organization]",
    avatar: "https://images.pexels.com/photos/4100667/pexels-photo-4100667.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
  },
  {
    quote: "[Client / Collaborator Recommendation: Add your verified client or team recommendation quote here]",
    author: "[Client / Peer Name]",
    role: "[Role / Organization]",
    avatar: "https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
  },
];

function TestimonialCard({ testimonial, visible, delay }: {
  testimonial: typeof testimonials[0];
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      className={cn(
        "bg-card border rounded-2xl p-7 shadow-sm relative transition-all duration-500 h-full",
        "hover:shadow-md hover:-translate-y-1",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {/* Quote icon */}
      <div className="absolute -top-5 left-7 bg-primary rounded-full p-2.5 text-primary-foreground shadow-md">
        <Quote className="h-4 w-4" />
      </div>

      <p className="mt-6 mb-7 text-muted-foreground italic leading-relaxed text-sm">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-full overflow-hidden ring-2 ring-border flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            width={44}
            height={44}
            className="object-cover h-full w-full"
            unoptimized
          />
        </div>
        <div>
          <h4 className="font-semibold text-sm">{testimonial.author}</h4>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 3s
  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => api.scrollNext(), 3000);
    return () => clearInterval(timer);
  }, [api]);

  // Track active dot
  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          title="Client Testimonials"
          subtitle="Don't just take my word for it. Here's what my clients have to say about working with me."
          centered
        />

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <TestimonialCard testimonial={t} visible delay={0} />
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel — auto-scrolling */}
        <div className="md:hidden">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="-ml-3">
              {testimonials.map((t) => (
                <CarouselItem key={t.author} className="pl-3 basis-[88%] pt-6">
                  <TestimonialCard testimonial={t} visible delay={0} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === current
                    ? "w-4 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
