import React from "react";
import { Icon } from "@iconify/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "glass";
  icon?: string;
  children: React.ReactNode;
}

export const Badge = ({ className, variant = "primary", icon, children, ...props }: BadgeProps) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-medium rounded-full transition-colors";
  
  const variants = {
    primary: "bg-primary/10 text-primary border border-primary/20",
    secondary: "bg-secondary/10 text-secondary border border-secondary/20",
    accent: "bg-accent/10 text-accent border border-accent/20",
    outline: "bg-transparent text-text border border-border",
    ghost: "bg-gray-100 text-text-secondary border border-transparent",
    glass: "bg-white/80 backdrop-blur-md text-primary border border-white/20 shadow-sm",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {icon && <Icon icon={icon} className="w-4 h-4" />}
      {children}
    </span>
  );
};
