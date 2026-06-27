import { Metadata } from "next";
import EnhancedNavbar from "./components/navbar-section";
export const metadata: Metadata = {
    title: "Portfolio | Nitin Sharma - Full-Stack AI Engineer",
    description:
        "AI systems, agentic pipelines, and full-stack applications — portfolio of Nitin Sharma, SWE Intern @ AcdyOn Technologies. National hackathon finalist.",
};

export default function PortfolioPage() {
    return (
        <>
            <EnhancedNavbar />
        </>
    );
}
