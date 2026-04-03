"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background-secondary border-t border-border py-12 relative">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="font-sora font-bold text-3xl text-primary mb-2">SMTA</div>
        <p className="text-text-secondary font-medium mb-8">AI Automation & Web Development</p>
        
        <div className="flex items-center gap-6 mb-8">
          <a href="https://linkedin.com/in/mohamed-thameem-ansari-22b336247" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
            <Icon icon="mdi:linkedin" className="w-6 h-6" />
          </a>
          <a href="https://wa.me/919943757236" className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
            <Icon icon="mdi:whatsapp" className="w-6 h-6" />
          </a>
          <a href="mailto:thameemansarivrn@gmail.com" className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
            <Icon icon="mdi:email-outline" className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Mohamed Thameem Ansari. All rights reserved.
        </p>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button 
              onClick={scrollToTop}
              style={{
  background: '#2D1B8E',
  color: 'white',
  padding: '12px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 16px rgba(45,27,142,0.35)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease'
}}
onMouseEnter={e => (e.currentTarget.style.background = '#7C3AED')}
onMouseLeave={e => (e.currentTarget.style.background = '#2D1B8E')}
              aria-label="Back to top"
            >
              <Icon icon="mdi:arrow-up" className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
