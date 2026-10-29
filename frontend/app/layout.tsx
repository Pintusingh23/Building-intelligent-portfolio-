import './globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-jakarta' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pintu Singh | Full-Stack AI Engineer & Founder of DeCodeTech" />
        <meta name="keywords" content="Pintu Singh, DeCodeTech, Full-Stack AI Engineer, React, Python, Node.js, LLMs, RAG, Agentic AI, Next.js" />
        <meta name="author" content="Pintu Singh" />
        <link rel="icon" href="/Portfolio_logo.webp" />
        <link rel="preload" as="image" href="/pintu.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://decodetech.online" />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          {/* desktop-only smooth cursor — hidden on touch devices */}
          <div className="hidden md:block">
            <SmoothCursor />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
