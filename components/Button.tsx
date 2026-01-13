"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'sm', 
  children, 
  className = '', 
  ...props 
}) => {
 const baseStyles =
  "relative inline-flex items-center justify-center font-bold tracking-[0.22em] uppercase transition-all duration-500 overflow-hidden focus:outline-none disabled:opacity-50 select-none whitespace-nowrap group font-heading border border-transparent";

  
  const variants = {
    primary: "bg-white text-black border-white hover:bg-brand-gold hover:text-white hover:border-brand-gold",
    secondary: "bg-brand-gold text-black border-brand-gold hover:brightness-110 shadow-xl shadow-brand-gold/10",
    outline: "border-white/30 text-white hover:border-brand-gold hover:text-brand-gold bg-transparent",
    glass: "glass-premium text-white border-white/20 hover:bg-white/10 hover:border-white/40",
  };

const sizes = {
  xs: "px-6 py-3 text-[11px] min-w-[160px] rounded-sm",
  sm: "px-8 py-4 text-[12px] min-w-[200px] rounded-sm",
  md: "px-12 py-5 text-[14px] min-w-[280px] rounded-sm",
  lg: "px-16 py-6 text-[16px] min-w-[340px] rounded-sm",
};


  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent  -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      
      {/* Precision Notches */}
      <div className="absolute top-0 left-0 w-3 h-[1px] bg-current opacity-40" />
      <div className="absolute top-0 left-0 w-[1px] h-3 bg-current opacity-40" />
      <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-current opacity-40" />
      <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-current opacity-40" />
    </motion.button>
  );
};