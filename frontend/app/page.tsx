import { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { TestimonialsSection } from "@/components/home/testimonials";
import { CtaSection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Nitin Sharma | Full-Stack AI Engineer",
  description: "Building agentic AI systems, RAG pipelines, and production-grade full-stack apps. National hackathon finalist.",
};

export default function Home() {
  return (
    <div className="lg:cursor-none">
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
