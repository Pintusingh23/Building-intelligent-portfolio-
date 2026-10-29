import { Metadata } from "next";
import EnhancedNavbar from "./components/navbar-section";
export const metadata: Metadata = {
    title: "Portfolio | Pintu Singh - Full-Stack AI Engineer & Founder of DeCodeTech",
    description:
        "Full-Stack AI Engineer, Founder of DeCodeTech, and B.Tech CS & AI student at Newton School of Technology. Building intelligent AI systems, RAG pipelines, and full-stack solutions.",
};

export default function PortfolioPage() {
    return (
        <>
            <EnhancedNavbar />
        </>
    );
}
