"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "@iconify/react";

const PORTFOLIO = [
  {
    client: "Wedding Planner Website",
    tags: ["WordPress", "Elementor", "Custom CSS"],
    domain: "natashazwaga.com",
    category: "Wedding & Events",
    image: "/images/web/wedding.png",
    color: "bg-rose-50 text-rose-600 border-rose-200",
  },
  {
    client: "Swimming Pool Builder",
    tags: ["WordPress", "Elementor", "Parallax", "WooCommerce"],
    domain: "gunitadoslamarina.com",
    category: "Construction & Lifestyle",
    image: "/images/web/pool.png",
    color: "bg-cyan-50 text-cyan-600 border-cyan-200",
  },
  {
    client: "Subscription-Based Platform",
    tags: ["WordPress", "WooCommerce", "Subscriptions", "Custom Plugin"],
    domain: "yalpro.com",
    category: "E-Commerce & SaaS",
    image: "/images/web/yalpro.png",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
  {
    client: "Non-Profit Foundation",
    tags: ["WordPress", "Elementor", "Donation Integration"],
    domain: "bluemagpiefoundation.com",
    category: "Non-Profit & NGO",
    image: "/images/web/foundation.png",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    client: "Education Institute Website",
    tags: ["WordPress", "Elementor", "LMS Integration"],
    domain: "brightmindsinstitute.org",
    category: "Education",
    image: "/images/web/education.png",
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
];

export const Portfolio = () => {
  return (
    <section id="web-dev" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          label="Website Projects"
          icon="mdi:web"
          title="Production Websites I've Built"
          subtitle="From wedding planners to subscription platforms — every site is crafted for performance and conversion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-xl shadow-sm border border-border hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Browser Mockup Header */}
              <div className="bg-gray-100 border-b border-border px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto bg-white border border-border/50 text-text-muted text-[10px] sm:text-xs px-3 py-0.5 rounded-md truncate max-w-[150px] sm:max-w-[200px]">
                  {item.domain}
                </div>
              </div>

              {/* Placeholder Image */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-border bg-gray-100">
  {item.image ? (
    <img
      src={item.image}
      alt={item.client}
      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
    />
  ) : (
    <div className="flex flex-col items-center justify-center h-full text-text-muted">
      <Icon icon="mdi:monitor-dashboard" className="w-16 h-16 mb-3 opacity-40" />
      <span className="text-sm opacity-50">Screenshot coming soon</span>
    </div>
  )}
</div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className={`mb-4 w-fit px-3 py-1 rounded-full text-[11px] font-bold border uppercase tracking-wide ${item.color}`}>
                  {item.category}
                </div>
                
                <h3 className="mb-4 text-xl">{item.client}</h3>
                
                <div className="flex flex-wrap gap-2 mt-auto mb-5">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-50 border border-gray-100 text-text-secondary px-2.5 py-1 text-xs rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={`https://${item.domain}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-primary transition-colors mt-2"
                >
                  Visit Website <Icon icon="mdi:open-in-new" className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
