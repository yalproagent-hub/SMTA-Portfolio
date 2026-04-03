"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "@iconify/react";

const CATEGORIES = ["AI Agents", "CRM & Leads", "Social Media", "E-Commerce", "Consulting"];

interface Project {
  id: number;
  category: string;
  // ✅ NEW: Array of images (main workflow + subworkflow screenshots)
  // OLD was: workflowImage?: string  (single image)
  workflowImages?: string[];
  categoryLabel?: string;
  categoryIcon?: string;
  title: string;
  outcome: string;
  description: string;
  tags: string[];
  imageText: string;
  bulletPoints: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    category: "CRM & Leads",
    title: "Lead Magnet Intelligence Engine",
    outcome: "90-Day Email Drip",
    // ✅ NEW: Multiple images — main workflow + subworkflow screenshots
    // OLD was: workflowImage: "/images/workflows/workflow-lead-magnet.png"
    workflowImages: [
       "/images/workflows/LM1.png",
      "/images/workflows/LM2.png",
      "/images/workflows/LM3.png",
      "/images/workflows/LM4.png",
      "/images/workflows/LM5.png",
      "/images/workflows/LM6.png",
      "/images/workflows/LM7.png",
    ],
    description:
      "Full-stack lead generation system: user submits website URL → AI scrapes and analyzes site data → generates personalized marketing strategy → creates styled PDF → sends HTML email → upserts contact in GHL CRM → triggers 90-day email nurture sequence + LinkedIn content plan.",
    tags: ["n8n", "GHL CRM", "Claude AI", "Firecrawl", "OpenAI"],
    imageText: "Workflow: Lead Magnet Engine",
    bulletPoints: [
      "Website URL submitted → AI extracts and analyzes business data in real time",  
"Generates a personalized marketing strategy and converts it into a premium, styled PDF report",
"Sends branded HTML email with strategy document and tracks engagement",  
"Creates and updates contact and opportunity in GHL CRM automatically",  
"Detects email replies and triggers conditional workflows using n8n + GHL",  
"Generates LinkedIn headline, About section, and content strategy tailored to the business",  
"Produces 9-week LinkedIn content plan with structured post generation",  
"Creates 3 lead magnet ideas with detailed breakdown and positioning",  
"Generates YouTube video scripts and Instagram/Reels content for multi-platform growth",
"Identifies target audience segments and builds outreach messaging (intro + follow-ups)",   
"Suggests offer strategy and conversion-focused messaging frameworks",  
"Runs production-level email drip sequences with daily and weekly logic automation",  
"Automates weekly content delivery and nurture workflows without manual intervention"
    ],
  },
  {
    id: 2,
    category: "Social Media",
    title: "Social Media Autopilot System",
    outcome: "3 Platforms Auto-Published",
    workflowImages: [
      "/images/workflows/SM1.png",
      "/images/workflows/SM2.png",
      "/images/workflows/SM3.png",
      "/images/workflows/SM4.png",
    
    ],
    description:
      "AI-powered social media automation system that plans, creates, and publishes content automatically,  generating high-engagement posts with real-time trending insights and zero manual effort.",
    tags: ["n8n", "Meta API", "LinkedIn API", "OpenAI"],
    imageText: "Workflow: Social Media Engine",
    bulletPoints: [
      "Generates a full monthly content calendar using trending and high-engagement topic research",
"Runs daily automation at scheduled time (9 AM) to execute content based on calendar",
"Fetches real-time insights using built-in search to keep content relevant and up-to-date",
"Creates AI-written captions with high-performing and trending hashtags",
"Generates single-post and carousel images automatically based on daily content plan",
"Publishes posts automatically to Instagram, Facebook, and LinkedIn",
"Ensures consistent posting without any manual intervention after setup",
"Tracks published content by updating Google Sheets with post URLs and status",
"Maintains structured content workflow with full visibility and tracking",
"Built as a production-level automation system for scalable social media management"
    ],
  },
  {
    id: 3,
    category: "AI Agents",
    categoryLabel: "AI AGENTS",
    categoryIcon: "mdi:robot-outline",
    title: "AI Voice Agent — Instant Lead Response",
    outcome: "Calls in Under 60 Seconds",
    workflowImages: [
      "/images/workflows/voice1.png",
      "/images/workflows/voice2.png",
    ],
    description:
      "When a contact form is submitted on a client's website, an AI voice agent calls the lead within 60 seconds. The agent uses the company knowledge base to answer questions, books appointments, and transfers hot leads to the sales team in real-time.",
    tags: ["Retell AI", "Twilio", "n8n", "GHL"],
    imageText: "Workflow: AI Voice Agent",
    bulletPoints: [
      "Contact form submitted → triggers instant outbound call using Twilio verified number",
"AI voice agent responds within seconds using Retell AI with custom conversational prompts",
"Follows structured conversation flow to qualify leads and understand requirements",
"Answers queries naturally using business knowledge base without sounding scripted",
"Books appointments based on real-time availability and confirms user details",
"Handles objections and guides users towards conversion-focused outcomes",
"Transfers high-intent leads directly to sales team when required",
"Captures and stores all call data, responses, and booking details in google sheet automatically",
"Supports both inbound and outbound call handling with consistent experience",
"Built as a production-level workflow using n8n for orchestration and automation logic"
    ],
  },
  {
    id: 4,
    category: "E-Commerce",
    title: "WooCommerce Post-Purchase Automation",
    outcome: "Zero Manual Follow-Ups",
    workflowImages: [
      "/images/workflows/WOO1.png",
      
    ],
    description:
      "Automated post-purchase workflow that ensures every customer is onboarded instantly, followed up systematically, and tracked until completion reducing drop-offs and improving operational efficiency.",
    tags: ["WooCommerce", "n8n", "HTML Email","Wordpress"],
    imageText: "Workflow: Post-Purchase Automation",
    bulletPoints: [
      "Purchase confirmed → triggers branded HTML confirmation email instantly",
"Guides customers to complete intake or onboarding forms without manual follow-up",
"Automatically sends 4-hour follow-up if required details are not submitted",
"Triggers 6-hour internal team notification for pending customer actions",
"Implements escalation logic for non-responsive customers to avoid drop-offs",
"Ensures consistent post-purchase communication and customer experience",
"Reduces manual tracking and follow-up workload for operations teams",
"Tracks customer progress and response status throughout the workflow"

    ],
  },
  {
    id: 5,
    category: "Consulting",
    title: "GST Consulting AI Agent System",
    outcome: "Full CA Firm Automated",
    workflowImages: [
      "/images/workflows/GST1.png",
      "/images/workflows/GST2.png",
      "/images/workflows/GST3.png",
      "/images/workflows/GST4.png",
      "/images/workflows/GST5.png",
      "/images/workflows/GST6.png",
      "/images/workflows/GST7.png",
      "/images/workflows/GST8.png",

    ],
    description:
      "End-to-end GST practice automation: WhatsApp AI chatbot handles client queries and Google Sheets data, sends month-end document reminders, payment reminder sequences for unpaid clients, GSTR filing status tracking, and monthly dashboard summary — all accessible via WhatsApp.",
    tags: ["WhatsApp AI", "Google Sheets", "n8n", "OpenAI"],
    imageText: "Workflow: GST Bot Architecture",
    bulletPoints: [
      "WhatsApp AI agent handles client queries and document requests in real time",
"Sends automated month-start and month-end reminders for GST document submission",
"Triggers HTML email reminders for pending documents on Day 2 and Day 5",
"Allows bill submission tracking via WhatsApp using simple serial number input",
"Updates bill received status directly in Google Sheets through WhatsApp AI",
"Enables GSTR1 filing status updates via WhatsApp integrated with Google Sheets",
"Sends payment reminder emails between Day 14 to Day 18 for pending invoices",
"Manages GSTR3B filing status updates through WhatsApp-based workflow",
"Provides monthly GST dashboard and summary reports accessible via WhatsApp AI agent",
"Maintains centralized tracking of all client data, filings, and payment status",
"Runs as a production-level monthly automation system without manual intervention"
    ],
  },
  {
    id: 6,
    category: "AI Agents",
    categoryLabel: "AI AGENTS",
    categoryIcon: "mdi:robot-outline",
    title: "Resume Shortlisting AI Agent — Xpress Jobs",
    outcome: "Screening Automated End-to-End",
    workflowImages: [
      "/images/workflows/JOB.png",
      
    ],
    description:
      "Candidate applies → AI evaluates resume against job criteria → shortlisted candidates receive an interview scheduling email with availability check → rejected candidates receive a professional decline email → shortlisted candidates get meeting link automatically.",
    tags: ["n8n", "OpenAI", "Google Calender", "Email","Google Meet"],
    imageText: "Workflow: Resume Screening",
    bulletPoints: [
      "Application received → AI evaluates and scores resumes based on defined job criteria",
"Automatically filters and shortlists high-potential candidates",
"Sends interview scheduling emails with availability check to shortlisted candidates",
"Delivers professional rejection emails to non-selected applicants",
"Generates and shares meeting links automatically for confirmed interviews",
"Ensures consistent and unbiased candidate evaluation process",
"Reduces manual screening time and speeds up hiring workflow",
"Tracks candidate status and updates data in Google Sheets automatically",
"Handles end-to-end communication without manual intervention"
    ],
  },
];

// ─────────────────────────────────────────────
// ✅ NEW COMPONENT: Auto-looping image carousel
// OLD: no such component existed — was just a plain <img> or placeholder div
// ─────────────────────────────────────────────
interface CarouselProps {
  images: string[];
  altText: string;
  placeholderText: string;
  intervalMs?: number;
}

const WorkflowCarousel: React.FC<CarouselProps> = ({
  images,
  altText,
  placeholderText,
  intervalMs = 3000,
}) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const hasImages = images && images.length > 0;

  // Auto-advance
  useEffect(() => {
    if (!hasImages || images.length <= 1 || paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images, paused, intervalMs, hasImages]);

  if (!hasImages) {
    // Placeholder (same as old fallback)
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
        <div className="flex flex-col items-center text-primary/60">
          <Icon icon="mdi:sitemap-outline" className="w-16 h-16 mb-2" />
          <span className="font-sora font-semibold text-lg max-w-[80%] text-center">
            {placeholderText}
          </span>
          <span className="text-sm mt-1 opacity-70">Image will be added</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 bg-[#111]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Crossfade slides — no dots, no counter */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={images[current]}
          alt={altText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-contain blur-[0px]"
        />
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────
// Main Showcase Component
// ─────────────────────────────────────────────
export const Showcase = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Automation Projects"
          icon="mdi:cog-outline"
          title="Real Automations. Real Results."
          subtitle="Every workflow below was built for a live client or real use case."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                filter === cat
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-text-secondary border-border hover:border-primary/30 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-xl border border-border overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(45,27,142,0.08)] transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* ✅ NEW: Carousel replaces single image / placeholder */}
                {/* OLD: was a single <img> tag or plain placeholder div */}
                <div className="relative h-60 w-full overflow-hidden border-b border-border">
                  <WorkflowCarousel
                    images={project.workflowImages ?? []}
                    altText={project.title}
                    placeholderText={project.imageText}
                  />

                  {/* Hover overlay — same as before */}
                  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Icon icon="mdi:eye-outline" className="w-5 h-5" /> View
                      Details
                    </span>
                  </div>
                </div>

                {/* Content — unchanged */}
                <div className="p-6 md:p-8 flex flex-col grow">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                      {project.categoryLabel || project.category}
                    </span>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Icon icon="mdi:check-decagram" /> {project.outcome}
                    </span>
                  </div>

                  <h3 className="mb-3 leading-snug">{project.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-50 text-text-muted border border-border px-2.5 py-1 text-[11px] font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      className="text-primary font-semibold text-sm flex items-center gap-1 hover:text-secondary transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      View Details{" "}
                      <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal — unchanged from original */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-[16px] w-full max-w-[600px] p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-text-muted hover:text-primary transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              >
                <Icon icon="mdi:close" className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-3 mb-6 pr-12">
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                  {selectedProject.categoryLabel || selectedProject.category}
                </span>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Icon icon="mdi:check-decagram" /> {selectedProject.outcome}
                </span>
              </div>

              {/* ✅ NEW: Carousel inside modal too — full-width preview */}
              {/* OLD: no image shown inside modal at all */}
              {selectedProject.workflowImages &&
                selectedProject.workflowImages.length > 0 && (
                  <div className="relative h-52 w-full rounded-xl overflow-hidden mb-6 border border-border">
                    <WorkflowCarousel
                      images={selectedProject.workflowImages}
                      altText={selectedProject.title}
                      placeholderText={selectedProject.imageText}
                      intervalMs={2500}
                    />
                  </div>
                )}

              <h2 className="text-[28px] font-bold text-[#2D1B8E] mb-4 leading-tight">
                {selectedProject.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-50 text-text-secondary border border-border px-3 py-1.5 text-[12px] font-medium rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-text-secondary leading-relaxed mb-8 text-[15px]">
                {selectedProject.description}
              </p>

              {selectedProject.bulletPoints &&
                selectedProject.bulletPoints.length > 0 && (
                  <div className="bg-background-secondary p-6 rounded-xl border border-border">
                    <h4 className="font-sora font-semibold text-primary mb-4 flex items-center gap-2">
                      <Icon icon="mdi:cog-outline" className="w-5 h-5" /> What
                      This Automates:
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.bulletPoints.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-text-secondary"
                        >
                          <Icon
                            icon="mdi:check-circle"
                            className="text-secondary w-5 h-5 shrink-0 mt-0.5"
                          />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};