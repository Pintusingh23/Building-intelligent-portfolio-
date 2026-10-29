import { Metadata } from "next";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Details | Pintu Singh",
  description: "Get in touch via email, phone, or LinkedIn.",
};

export default function ContactDetailsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Details</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Mail className="h-6 w-6 text-primary" />
          <a href="mailto:decode82183@gmail.com" className="text-primary hover:underline">
            decode82183@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="h-6 w-6 text-primary" />
          <a href="tel:+918218377064" className="text-primary hover:underline">
            +91 82183 77064
          </a>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="h-6 w-6 text-primary" />
          <span>India</span>
        </div>
        <div className="flex items-center gap-4">
          <Linkedin className="h-6 w-6 text-primary" />
          <a href="https://www.linkedin.com/in/pintu-singh-42b1962b8/" target="_blank" rel="noreferrer" className="text-primary hover:underline">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}
