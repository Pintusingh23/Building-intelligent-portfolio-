"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { ArrowRight, Code, Palette, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern frameworks like React and Next.js, optimized for performance and SEO.",
    href: "/services#web-development",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive user interfaces and engaging user experiences that convert visitors into customers.",
    href: "/services#ui-ux-design",
    accent: "from-accent/20 to-accent/5",
  },
  {
    icon: LineChart,
    title: "Performance Optimization",
    description: "Speed up your existing website with modern optimization techniques for better user experience.",
    href: "/services#performance",
    accent: "from-primary/20 to-accent/10",
  },
];

function ServiceCard({ service, visible, delay }: { service: typeof services[0]; visible: boolean; delay: number }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-7 shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1 group h-full",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <div className={cn("mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br", service.accent)}>
        <service.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="h4 mb-3">{service.title}</h3>
      <p className="mb-5 text-muted-foreground text-sm leading-relaxed">{service.description}</p>
      <Link
        href={service.href}
        className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
      >
        Learn more
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          title="Services I offer"
          subtitle="End-to-end web development services to help businesses build their online presence with modern, performant websites."
          centered
        />

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              visible={isInView}
              delay={index * 120}
            />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mb-10 px-1">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-3">
              {services.map((service) => (
                <CarouselItem key={service.title} className="pl-3 basis-[85%]">
                  <ServiceCard service={service} visible delay={0} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-5">
              <CarouselPrevious className="static translate-y-0 h-9 w-9 border-primary/30 hover:bg-primary/10 hover:border-primary/60" />
              <CarouselNext className="static translate-y-0 h-9 w-9 border-primary/30 hover:bg-primary/10 hover:border-primary/60" />
            </div>
          </Carousel>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/services">
              View all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
