"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "@iconify/react";

const EXPERIENCES = [
  {
    date: "August 2023 – Present", // Updated date from user instruction, though user said "August 2025" in prompt, let's use prompt text literally just in case
    dateToRender: "August 2023 – Present",
    company: "YALPRO",
    location: "Spain (Remote)",
    icon: "mdi:office-building-outline",
    role: "AI Automation & Web Development Specialist",
    description: "Building and maintaining production-level AI automation workflows for a Spain-based SaaS platform. Responsibilities include WooCommerce post-purchase email automations, client intake systems, subscription management workflows, and internal notification systems using n8n.",
    statusBadge: {
      icon: "mdi:circle",
      text: "Currently Active",
      color: "text-green-500",
      bgClass: "bg-green-50 text-green-700 border-green-200"
    }
  },
  {
    dateToRender: "Freelancing",
    company: "Independent Freelance",
    location: "Madurai, India (Remote)",
    icon: "mdi:laptop",
    role: "AI Automation & Web Development Specialist",
    description: "Working with clients across industries to design, build, and deploy AI automation systems and production websites. Projects span lead generation automation, AI voice agents, WhatsApp AI, GST consulting automation, social media pipelines, and full-stack WordPress development.",
    statusBadge: {
      icon: "mdi:star-outline",
      text: "Ongoing",
      color: "text-accent",
      bgClass: "bg-amber-50 text-amber-700 border-amber-200"
    }
  }
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Correct date fallback
  EXPERIENCES[0].dateToRender = "August 2025 – Present";

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          label="Experience"
          icon="mdi:briefcase-outline"
          title="My Professional Journey"
        />

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Animated SVG Line */}
          <div className="absolute left-[31px] md:left-[39px] top-4 bottom-4 w-1 hidden sm:block">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 4 100" fill="none">
              <line x1="2" y1="0" x2="2" y2="100" stroke="#e5e7eb" strokeWidth="4" />
              <motion.line 
                x1="2" y1="0" x2="2" y2="100" 
                stroke="url(#violet-gradient)" 
                strokeWidth="4" 
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="violet-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2D1B8E" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row gap-6 md:gap-10 items-start">
                
                {/* Timeline Dot & Icon */}
                <div className="hidden sm:flex relative z-10 w-[80px] flex-shrink-0 flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 rounded-full bg-white border-[4px] border-secondary shadow-md flex items-center justify-center text-secondary"
                  >
                    <Icon icon={exp.icon} className="w-7 h-7" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-full bg-white rounded-xl border border-border shadow-sm p-6 md:p-8 hover:-translate-y-1 hover:shadow-hover transition-all duration-300"
                >
                  <div className="flex flex-wrap flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl md:text-2xl mb-1">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-text-secondary text-sm font-medium">
                        <span className="text-primary font-bold">{exp.company}</span>
                        <span className="hidden md:inline">•</span>
                        <span className="flex items-center gap-1"><Icon icon="mdi:map-marker-outline" /> {exp.location}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{exp.dateToRender}</span>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${exp.statusBadge.bgClass} whitespace-nowrap`}>
                      <Icon icon={exp.statusBadge.icon} className={`w-3 h-3 ${exp.statusBadge.color}`} />
                      {exp.statusBadge.text}
                    </div>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
