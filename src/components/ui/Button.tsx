"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon, iconPosition = "right", children, asChild, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-inter font-medium rounded-lg transition-all duration-150 smooth-transition focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:pointer-events-none group";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_4px_14px_rgba(45,27,142,0.2)] hover:shadow-[0_6px_20px_rgba(45,27,142,0.25)] hover:-translate-y-0.5",
      secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-[0_4px_14px_rgba(124,58,237,0.2)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.25)] hover:-translate-y-0.5",
      outline: "bg-transparent border border-border text-primary hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5",
      ghost: "bg-transparent text-text-secondary hover:bg-gray-100 hover:text-primary",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <Icon icon={icon} className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
        )}
        {children}
        {icon && iconPosition === "right" && (
          <Icon icon={icon} className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
