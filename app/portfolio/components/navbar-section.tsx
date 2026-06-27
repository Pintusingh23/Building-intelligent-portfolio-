"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import OptimizedHeroSection from './hero-section';
import { SkillsSection } from './skills-section';
import TechSection from './tech-stack-section';
import ProjectsSection from './project-section';
import EducationSection from './education-section';
import { ExperienceSection } from './experiance-section';
import ContactSection from './contact-section';
import { Menu, Home, User, Code, Briefcase, GraduationCap, Mail, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import CommunitySection from './community-section';
import Dock from '@/components/Dock';


const EnhancedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [mobileDockOpen, setMobileDockOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;
      const isDark = html.classList.contains('dark') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches && 
                     !html.classList.contains('light'));
      setIsDarkTheme(isDark);
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkTheme);
    };
  }, []);

  // Dynamic styles based on theme
  const getNavStyles = useCallback(() => {
    if (isDarkTheme) {
      return {
        background: 'bg-card/80 backdrop-blur-md border border-border',
        text: 'text-foreground',
        hoverText: 'hover:text-primary',
        hoverBg: 'hover:bg-muted/60',
        activeText: 'text-primary',
        activeBg: 'bg-primary/10',
        buttonGradient: 'bg-primary hover:bg-primary/90'
      };
    } else {
      return {
        background: 'bg-card/90 backdrop-blur-md border border-border shadow-lg',
        text: 'text-foreground',
        hoverText: 'hover:text-primary',
        hoverBg: 'hover:bg-muted/60',
        activeText: 'text-primary',
        activeBg: 'bg-primary/10',
        buttonGradient: 'bg-primary hover:bg-primary/90'
      };
    }
  }, [isDarkTheme]);

  const navStyles = useMemo(() => getNavStyles(), [getNavStyles]);
  
  // Handle navigation clicks
  const handleNavClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Navigation items with icons for better UX
  const navItems = useMemo(() => [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'tech', label: 'Tech', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail }
  ], []);

  // Create dock items from nav items
  const dockItems = useMemo(() => 
    navItems.map((item) => ({
      icon: <item.icon size={18} />,
      label: item.label,
      onClick: () => handleNavClick(item.id)
    })), [navItems, handleNavClick]
  );

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.8;
    
    setIsScrolled(scrollY > heroHeight);
    
    // Update active section based on scroll position
    const sections = navItems.map(item => item.id);
    let current = 'hero';
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section;
          break;
        }
      }
    }
    
    setActiveSection(current);
  }, [navItems]);

  // Throttled scroll event listener
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Call once to set initial state
    handleScroll();
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Handle desktop widget toggle
  const toggleDesktopNav = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <>
      {/* Desktop Dock — fixed bottom, visible always */}
      <div
        className={`hidden md:flex fixed bottom-0 left-0 right-0 z-50 justify-center transition-all duration-700 ease-out ${
          !isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ height: '160px', pointerEvents: isScrolled ? 'none' : 'auto' }}
      >
        <Dock
          items={dockItems}
          panelHeight={60}
          dockHeight={160}
          baseItemSize={44}
          magnification={68}
          distance={180}
        />
      </div>

      {/* Desktop — Collapsed Left Widget (visible when scrolled) */}
      <div
        className={`hidden md:block fixed left-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-700 ease-out ${
          isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <button
          onClick={toggleDesktopNav}
          className={`${navStyles.buttonGradient} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${!isCollapsed ? 'rotate-180' : ''}`}
          type="button"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div
          className={`absolute left-full ml-4 top-1/2 transform -translate-y-1/2 ${navStyles.background} rounded-2xl shadow-xl transition-all duration-500 ease-out ${
            !isCollapsed ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'
          }`}
        >
          <div className="p-4 min-w-[200px]">
            <ul className="space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    className={`transition-all duration-300 ${!isCollapsed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? `${navStyles.activeBg} ${navStyles.activeText} shadow-sm`
                          : `${navStyles.text} ${navStyles.hoverText} ${navStyles.hoverBg}`
                      }`}
                      type="button"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile — full dock when at hero */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center transition-all duration-400 ${
          isScrolled ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'
        }`}
        style={{ height: '80px' }}
      >
        <Dock
          items={dockItems.filter((_, i) => [0, 3, 4, 5, 6].includes(i))}
          panelHeight={56}
          dockHeight={80}
          baseItemSize={38}
          magnification={38}
          distance={0}
        />
      </div>

      {/* Mobile — FAB when scrolled past hero */}
      <div className={`md:hidden fixed bottom-5 right-5 z-50 transition-all duration-400 ${
        isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}>
        {/* Popup menu */}
        {mobileDockOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setMobileDockOpen(false)}
            />
            <div className="absolute bottom-14 right-0 z-50 rounded-2xl shadow-2xl overflow-hidden border border-border/60"
              style={{ background: 'transparent', backdropFilter: 'blur(20px)', minWidth: '160px' }}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => { handleNavClick(item.id); setMobileDockOpen(false); }}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-colors text-left ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:bg-muted'
                    }`}
                    type="button"
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </>
        )}
        {/* FAB button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileDockOpen(!mobileDockOpen)}
          className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-white transition-all ${navStyles.buttonGradient}`}
          type="button"
        >
          <motion.div animate={{ rotate: mobileDockOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
            <Menu className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>

      {/* Actual Portfolio Sections */}
      <div className="space-y-0">
        <section id="hero">
          <OptimizedHeroSection />
        </section>
        
        <section id="skills">
          <SkillsSection/>
        </section>
        
        <section id="tech">
          <TechSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="community">
          <CommunitySection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default EnhancedNavbar;
