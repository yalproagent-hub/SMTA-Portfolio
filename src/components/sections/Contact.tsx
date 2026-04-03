"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "@iconify/react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle Geometric Pattern Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: "radial-gradient(#2D1B8E 2px, transparent 2px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <SectionHeading 
              label="Get In Touch"
              icon="mdi:email-outline"
              title="Ready to Automate Your Business?"
              subtitle="Whether you need an AI agent, a workflow, or a full website — let's talk."
              align="left"
            />
            
            <motion.div 
              className="space-y-6 mt-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <a href="https://linkedin.com/in/mohamed-thameem-ansari-22b336247" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-background-secondary transition-colors border border-transparent hover:border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon icon="mdi:linkedin" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary font-medium">Connect on LinkedIn</div>
                  <div className="font-semibold text-primary group-hover:text-secondary transition-colors">linkedin.com/in/mohamed-thameem-ansari-22b336247</div>
                </div>
              </a>

              <a href="https://wa.me/919943757236" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-background-secondary transition-colors border border-transparent hover:border-border">
                <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon icon="mdi:whatsapp" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary font-medium">Call / WhatsApp</div>
                  <div className="font-semibold text-primary group-hover:text-secondary transition-colors">+91 99437 57236</div>
                </div>
              </a>

              <a href="mailto:thameemansarivrn@gmail.com" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-background-secondary transition-colors border border-transparent hover:border-border">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon icon="mdi:email-outline" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary font-medium">Email</div>
                  <div className="font-semibold text-primary group-hover:text-secondary transition-colors whitespace-pre-wrap word-break">thameemansarivrn@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-transparent">
                <div className="w-12 h-12 rounded-full bg-gray-100 text-text-secondary flex items-center justify-center">
                  <Icon icon="mdi:map-marker-outline" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary font-medium">Location</div>
                  <div className="font-semibold text-primary">Madurai, Tamil Nadu, India</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - CTA Panel */}
          <div className="w-full lg:w-1/2 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full bg-white rounded-2xl border-y border-r border-border shadow-lg p-8 sm:p-10 relative overflow-hidden"
            >
              {/* Violet Gradient left border */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-secondary" />

              <h3 className="mb-4 text-2xl">Let's Build Your Automation System</h3>
              <p className="text-text-secondary mb-10 leading-relaxed font-medium">
                I typically respond within 24 hours. For urgent projects, WhatsApp is fastest.
              </p>

              <div className="flex flex-col gap-4">
                <a 
                  href="https://wa.me/919943757236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_8px_20px_rgba(34,197,94,0.3)] hover:-translate-y-1 w-full"
                >
                  <Icon icon="mdi:whatsapp" className="w-6 h-6" /> Message on WhatsApp
                </a>
                
                <a 
                  href="https://linkedin.com/in/mohamed-thameem-ansari-22b336247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all w-full"
                >
                  <Icon icon="mdi:linkedin" className="w-6 h-6" /> Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
