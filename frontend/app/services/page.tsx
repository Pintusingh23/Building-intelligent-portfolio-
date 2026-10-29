import { Metadata } from "next";
import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import ProcessSection from "./components/process-section";
import FAQSection from "./components/FAQs-section";
import CTASection from "./components/CTA-section";

export const metadata: Metadata = {
  title: "Services | Pintu Singh - Full-Stack AI Engineer & Founder of DeCodeTech",
  description:
    "End-to-end full-stack software development, generative AI integrations, LLM & RAG pipelines, and modern web engineering services by Pintu Singh.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}