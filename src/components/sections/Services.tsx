"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "@iconify/react";

const SERVICES = [
  {
    icon: "mdi:phone-in-talk-outline",
    title: "AI Voice Agent",
    description: "Implements AI-powered outbound calling systems triggered instantly when a lead submits a form. Handles appointment booking, basic objections, and call routing using Retell AI and Twilio.",
    tags: [],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/10",
  },
  {
    icon: "mdi:whatsapp",
    title: "WhatsApp AI Automation",
    description: "Builds WhatsApp-based AI systems to manage client communication, send reminders, process Google Sheets data, and handle recurring workflows through chat.",
    tags: [],
    colorClass: "text-green-500",
    bgClass: "bg-green-500/10",
  },
  {
    icon: "mdi:magnet-on",
    title: "Lead Magnet Automation",
    description: "Develops end-to-end lead generation workflows including website data extraction, personalized strategy generation, HTML email delivery, CRM integration, and automated follow-up sequences.",
    tags: [],
    colorClass: "text-accent",
    bgClass: "bg-accent/10",
  },
  {
    icon: "mdi:instagram",
    title: "Social Media Automation",
    description: "Creates automated social media pipelines for content planning, caption writing, single-post and carousel image generation, hashtag research, and scheduled publishing across Instagram, Facebook, and LinkedIn.",
    tags: [],
    colorClass: "text-pink-500",
    bgClass: "bg-pink-500/10",
  },
  {
    icon: "mdi:file-chart-outline",
    title: "GST Consulting AI Agent",
    description: "Designs automation systems for GST workflows, including GSTR reminders, payment follow-ups, document tracking, and client communication via WhatsApp.",
    tags: [],
    colorClass: "text-teal-500",
    bgClass: "bg-teal-500/10",
  },
  {
    icon: "mdi:chat-processing-outline",
    title: "AI Chatbot (RAG-Based)",
    description: "Builds AI chatbots trained on business-specific data using vector databases to handle queries, assist users, and support appointment booking with accurate responses.",
    tags: [],
    colorClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
  {
    icon: "mdi:email-fast-outline",
    title: "Behaviour-Based Nurture",
    description: "Implements behaviour-driven email automation systems that adapt based on user interactions, improving engagement and converting leads into customers.",
    tags: [],
    colorClass: "text-rose-500",
    bgClass: "bg-rose-500/10",
  },
  {
    icon: "mdi:calendar-check-outline",
    title: "Appointment Booking",
    description: "Develops AI-driven scheduling systems that manage availability, confirmations, reminders, and calendar synchronization with WhatsApp and voice integrations.",
    tags: [],
    colorClass: "text-purple-500",
    bgClass: "bg-purple-500/10",
  },
  {
    icon: "mdi:cog-sync-outline",
    title: "Custom Workflow Automation",
    description: "Analyzes business processes and builds custom automation systems to eliminate repetitive tasks such as data entry, follow-ups, reporting, and internal notifications.",
    tags: [],
    colorClass: "text-[#2D1B8E]",
    bgClass: "bg-[#2D1B8E]/10",
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background-secondary relative border-y border-border/50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          label="What I Build"
          icon="mdi:lightning-bolt"
          title="Replace Manual Work with Intelligent Automation Systems"
          subtitle="Each system is custom-built to solve real business problems, not based on generic templates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 border border-border shadow-sm group hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(45,27,142,0.08)] transition-all duration-200 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-105 ${service.bgClass}`}>
                <Icon icon={service.icon} className={`w-8 h-8 ${service.colorClass}`} />
              </div>
              
              <h3 className="mb-3 text-primary">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-text-secondary px-3 py-1 text-xs rounded-full font-medium transition-colors group-hover:bg-primary/5 group-hover:text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
