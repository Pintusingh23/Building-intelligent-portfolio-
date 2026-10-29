import { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { CtaSection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Pintu Singh | Full-Stack AI Engineer & Founder of DeCodeTech",
  description: "Full-Stack AI Engineer & Founder of DeCodeTech. Building intelligent AI systems, LLM & RAG pipelines, and modern full-stack web applications.",
};

export default function Home() {
  return (
    <div className="lg:cursor-none">
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <CtaSection />
    </div>
  );
}
