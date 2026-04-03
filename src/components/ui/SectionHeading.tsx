"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  label: string;
  icon: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ label, icon, title, subtitle, align = "center" }: SectionHeadingProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} mb-12 lg:mb-16`}
    >
      <Badge variant="primary" icon={icon} className="mb-6">
        {label}
      </Badge>
      <h2 className="mb-4">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
