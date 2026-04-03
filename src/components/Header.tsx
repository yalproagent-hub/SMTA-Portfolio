"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Web Dev", href: "#web-dev" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Simple section tracking
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-4 shadow-sm" : "glass-nav-transparent py-6"}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <button onClick={() => scrollTo('#top')} aria-label="Home">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '45px',
                height: '36px',
                background: 'linear-gradient(135deg, #2D1B8E 0%, #7C3AED 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 800,
                fontSize: '14px',
                letterSpacing: '-0.5px'
              }}>SMTA</div>
              <span style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#2D1B8E',
                letterSpacing: '-0.2px'
              }}></span>
            </div>
          </button>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  activeSection === link.href.substring(1) ? "text-secondary font-semibold" : "text-text"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="h-0.5 w-full bg-secondary mt-1 rounded-full" 
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <Icon icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"} className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-2xl font-sora font-semibold text-left transition-colors ${
                    activeSection === link.href.substring(1) ? "text-secondary" : "text-primary"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="mt-12">
              <p className="text-text-secondary text-sm font-medium mb-4">Let's connect</p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/mohamed-thameem-ansari-22b336247" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/5 text-primary rounded-full">
                  <Icon icon="mdi:linkedin" className="w-6 h-6" />
                </a>
                <a href="https://wa.me/919943757236" className="p-3 bg-primary/5 text-primary rounded-full">
                  <Icon icon="mdi:whatsapp" className="w-6 h-6" />
                </a>
                <a href="mailto:thameemansarivrn@gmail.com" className="p-3 bg-primary/5 text-primary rounded-full">
                  <Icon icon="mdi:email-outline" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
