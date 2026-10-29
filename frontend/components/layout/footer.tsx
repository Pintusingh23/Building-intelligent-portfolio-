import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl">
              <h2 className="text-xl font-bold flex items-center">
              <Cpu className="mr-2 h-5 w-5 text-primary" />
                Pintu Singh
              <span className="text-accent">.</span>
              </h2>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Full-Stack AI Engineer & Founder of <a href="https://decodetech.online" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">DeCodeTech</a>. Building intelligent agentic systems, LLM/RAG pipelines, and scalable web apps.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                <Link href="https://github.com/Pintusingh23" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                <Link href="https://www.linkedin.com/in/pintu-singh-42b1962b8/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Instagram">
                <Link href="https://www.instagram.com/pintusingh4559/" target="_blank" rel="noreferrer">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Email">
                <a href="mailto:decode82183@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://decodetech.online" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">decodetech.online</a></li>
              <li><a href="mailto:decode82183@gmail.com" className="hover:text-primary transition-colors">decode82183@gmail.com</a></li>
              <li><a href="tel:+918218377064" className="hover:text-primary transition-colors">+91 82183 77064</a></li>
              <li className="text-sm">Location: India</li>
              <li className="pt-2">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Available for work
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pintu Singh. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}