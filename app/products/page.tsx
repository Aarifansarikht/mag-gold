
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, SERVICES, STEEL_SYSTEMS } from '../../lib/constants';
// Fix: Corrected import paths based on project structure
import { GlassCard } from '../../components/GlassCard';
import { Button } from '../../components/Button';
import { Droplets, TowerControl } from 'lucide-react';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<'drainage' | 'steel'>('drainage');

  return (
    <main className="pt-40 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-[0.05] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-gold font-black text-[10px] uppercase tracking-[1em] block mb-8"
          >
            Technical Portfolio
          </motion.span>
          <h1 className="text-7xl md:text-9xl font-heading font-black dark:text-white text-brand-navy mb-12 leading-[0.8] tracking-tighter text-reveal">
            Industrial <br /><span className="gold-shimmer italic">Catalog.</span>
          </h1>
          <p className="text-2xl dark:text-white/80 text-brand-navy leading-relaxed font-light tracking-tight max-w-3xl">
            Explore our precision-engineered solutions, from specialized drainage outlets to heavy-duty structural steel frameworks designed for high-load operational environments.
          </p>
        </div>

        {/* Premium Tab Control */}
        <div className="flex justify-start space-x-6 mb-24 border-b border-white/5 pb-8">
          <button 
            onClick={() => setActiveTab('drainage')}
            className={`group relative px-12 py-5 rounded-xs text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-700 overflow-hidden ${
              activeTab === 'drainage' ? 'bg-brand-gold text-brand-navy shadow-2xl' : 'glass-premium dark:text-white text-brand-navy border-white/5 hover:bg-white/5'
            }`}
          >
            <span className="relative z-10 flex items-center"><Droplets size={14} className="mr-3"/> Drainage Accessories</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
          <button 
            onClick={() => setActiveTab('steel')}
            className={`group relative px-12 py-5 rounded-xs text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-700 overflow-hidden ${
              activeTab === 'steel' ? 'bg-brand-gold text-brand-navy shadow-2xl' : 'glass-premium dark:text-white text-brand-navy border-white/5 hover:bg-white/5'
            }`}
          >
            <span className="relative z-10 flex items-center"><TowerControl size={14} className="mr-3"/> Steel Fabrication</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'drainage' ? (
            <motion.div 
              key="drainage"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {PRODUCTS.map((product) => (
                <GlassCard key={product.id} className="group hover:bg-brand-gold/5">
                  <div className="h-80 rounded-2xl overflow-hidden mb-10 relative">
                    <img src={product.image} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110" alt={product.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent" />
                  </div>
                  <div className="flex items-center space-x-5 mb-8">
                    <div className="p-4 glass-premium rounded-xl text-brand-gold border-brand-gold/20">
                      {product.icon}
                    </div>
                    <h3 className="text-3xl font-black dark:text-white text-brand-navy tracking-tight">{product.title}</h3>
                  </div>
                  <p className="dark:text-white/70 text-brand-navy/80 mb-10 text-lg leading-relaxed font-light">{product.description}</p>
                  <Button variant="outline" size="lg" className="w-full rounded-xl">Technical Specs Sheet</Button>
                </GlassCard>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="steel"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="lg:col-span-2 glass-premium p-16 rounded-[40px] border-brand-gold/10 mb-12">
                <h3 className="text-4xl font-black dark:text-white text-brand-navy mb-16 tracking-tighter">Comprehensive Steel Systems</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {STEEL_SYSTEMS.map((item, i) => (
                    <div key={i} className="flex items-center space-x-5 group p-4 rounded-xl hover:bg-brand-gold/10 transition-all duration-500">
                      <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                        {item.icon}
                      </div>
                      <span className="dark:text-white text-brand-navy font-black text-[10px] uppercase tracking-widest">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {SERVICES.map((service) => (
                <div key={service.id} className="glass-premium rounded-[40px] overflow-hidden group h-full flex flex-col border-brand-gold/5">
                  <div className="h-[500px] overflow-hidden relative">
                    <img src={service.image} className="w-full h-full object-cover transition-all duration-1000 grayscale brightness-75 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100" alt={service.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 flex gap-3">
                      {service.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-5 py-2 glass-premium text-brand-gold rounded-full border border-brand-gold/30">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-16 flex flex-col flex-grow">
                    <h3 className="text-5xl font-black dark:text-white text-brand-navy mb-6 tracking-tighter">{service.title}</h3>
                    <p className="dark:text-white/80 text-brand-navy mb-12 text-xl leading-relaxed font-light flex-grow tracking-tight">{service.description}</p>
                    <Button variant="secondary" size="lg" className="w-full rounded-full shadow-gold-glow">Request Project Engineering Consultation</Button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
