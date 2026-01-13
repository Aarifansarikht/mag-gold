"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { PRODUCTS } from '@/lib/constants';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export const ProductOverview: React.FC = () => {
  return (
    <section className="py-48 relative overflow-hidden bg-black">
      <div className="absolute inset-0 industrial-grid opacity-[0.03] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-32">
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-gold font-bold text-[8px] uppercase tracking-[0.8em] block mb-6 font-heading"
            >
              Engineering Portfolio 2025
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight font-heading uppercase"
            >
              Precision Flow <br />
              <span className="gold-shimmer italic font-light">Infrastructure.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-white/30 text-lg leading-relaxed font-medium border-l border-brand-gold/20 pl-10 max-w-sm font-sans">
              Critical drainage assets engineered for architectural durability and hydraulic performance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <GlassCard className="p-0 rounded-xl overflow-hidden hover:border-brand-gold/20">
                <div className="h-80 relative overflow-hidden">
                   <Image 
                      src={item.image} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 brightness-75 group-hover:brightness-100" 
                      alt={item.title} 
                    />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                   
                   <div className="absolute top-6 left-6">
                      <div className="px-3 py-1 glass-premium rounded-md text-[7px] font-black uppercase tracking-[0.3em] text-brand-gold border-brand-gold/10 font-heading">
                        {item.category}
                      </div>
                   </div>

                   <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center space-x-5 mb-6">
                        <div className="w-10 h-10 glass-premium rounded-lg flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-colors">
                          {React.cloneElement(item.icon as React.ReactElement, { size: 20, strokeWidth: 1.5 })}
                        </div>
                        <h4 className="text-2xl font-black text-white tracking-tight font-heading uppercase">{item.title}</h4>
                      </div>
                      
                      <div className="h-0 group-hover:h-14 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500">
                        <p className="text-white/40 text-xs leading-relaxed font-medium mb-6 font-sans">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                         <span className="text-[6px] font-bold uppercase tracking-[0.4em] text-white/20 font-heading">EN-124 Standard Compliance</span>
                         <button className="flex items-center space-x-2 text-brand-gold font-bold group/btn font-heading">
                            <span className="text-[7px] uppercase tracking-widest">Specifications</span>
                            <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                         </button>
                      </div>
                   </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};