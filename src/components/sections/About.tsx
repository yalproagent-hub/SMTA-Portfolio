"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/Badge";
import { Icon } from "@iconify/react";
import { FlowDiagram } from "../ui/FlowDiagram";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="secondary" icon="mdi:account-outline" className="mb-6">
                About Me
              </Badge>
              <h2 className="mb-6 leading-tight">
                I Turn Complex Business Processes Into Scalable AI Automation Systems
              </h2>
              
              <div className="space-y-4 text-text-secondary mb-8 leading-relaxed">
                <p>
                  Based in Madurai, Tamil Nadu, I build AI-powered automation systems that eliminate manual work, reduce operational load, and help businesses scale without increasing headcount.

                </p>
                <p>
                  I don’t just connect tools. I design complete systems that handle your workflows, capture and follow up with leads, manage communication, and keep your operations running 24/7 without human dependency.

                </p>
                <p>
                  From WhatsApp AI agents and voice bots that respond instantly, to end-to-end lead generation and social media automation pipelines, every solution is built to improve speed, consistency, and revenue.

                </p>
                
                  

                <p>
                  I develop high-performance websites that not only look great but are built to convert visitors into customers and support business growth.
                </p>

                <p>
                  If your business is still running on manual processes, you're losing time, leads, and money. I build systems that fix that.
                </p>

                
                
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 bg-gray-50 border border-border rounded-lg px-4 py-2 text-sm font-medium text-text">
                  <Icon icon="mdi:map-marker-outline" className="w-5 h-5 text-secondary" />
                  Madurai, Tamil Nadu, India
                </div>
                <div className="inline-flex items-center gap-2 bg-gray-50 border border-border rounded-lg px-4 py-2 text-sm font-medium text-text">
                  <Icon icon="mdi:briefcase-outline" className="w-5 h-5 text-accent" />
                  Available for Freelance
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right SVG Flow Diagram */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FlowDiagram />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
