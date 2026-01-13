"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-premium p-8 md:p-10 rounded-xl relative overflow-hidden group transition-all duration-500 ${className}`}
    >
      {/* Technical Hardpoints */}
      <div className="absolute top-3 left-3 w-1 h-1 rounded-sm bg-brand-gold/20" />
      <div className="absolute top-3 right-3 w-1 h-1 rounded-sm bg-brand-gold/20" />
      <div className="absolute bottom-3 left-3 w-1 h-1 rounded-sm bg-brand-gold/20" />
      <div className="absolute bottom-3 right-3 w-1 h-1 rounded-sm bg-brand-gold/20" />

      {/* Edge Polish */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="relative z-10 h-full flex flex-col font-sans">
        {children}
      </div>
    </motion.div>
  );
};