
"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Fix: Corrected import paths based on project structure
import { GlassCard } from '../../components/GlassCard';
import { Button } from '../../components/Button';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-40 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-[0.05] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-gold font-black text-[10px] uppercase tracking-[1em] block mb-8"
          >
            Regional Inquiries
          </motion.span>
          <h1 className="text-7xl md:text-9xl font-heading font-black dark:text-white text-brand-navy mb-12 leading-[0.8] tracking-tighter text-reveal">
            Engineering <br /><span className="gold-shimmer italic">Concierge.</span>
          </h1>
          <p className="text-3xl dark:text-white/40 text-brand-navy/60 leading-relaxed font-light tracking-tight max-w-3xl">
            Our specialized engineering desks in Doha and Dubai are available for technical design consultations, project bids, and manufacturing inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <GlassCard className="p-16 border-brand-gold/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Send size={240} strokeWidth={1} className="text-brand-gold"/>
              </div>
              <h2 className="text-5xl font-black dark:text-white text-brand-navy mb-16 tracking-tighter">Submit Tender Request</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <label className="text-[10px] font-black dark:text-white/40 text-brand-navy/60 uppercase tracking-[0.4em]">Full Name / Corporate Agent</label>
                  <input type="text" className="w-full glass-premium dark:bg-white/5 bg-black/5 rounded-2xl p-6 dark:text-white text-brand-navy focus:outline-none focus:border-brand-gold/50 transition-all font-bold" placeholder="E.g. David Sterling" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black dark:text-white/40 text-brand-navy/60 uppercase tracking-[0.4em]">Professional Email</label>
                  <input type="email" className="w-full glass-premium dark:bg-white/5 bg-black/5 rounded-2xl p-6 dark:text-white text-brand-navy focus:outline-none focus:border-brand-gold/50 transition-all font-bold" placeholder="agent@corp.com" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black dark:text-white/40 text-brand-navy/60 uppercase tracking-[0.4em]">Service Division</label>
                  <select className="w-full glass-premium dark:bg-white/5 bg-black/5 rounded-2xl p-6 dark:text-white text-brand-navy focus:outline-none focus:border-brand-gold/50 transition-all font-black appearance-none">
                    <option className="bg-brand-navy">Structural Steel Systems</option>
                    <option className="bg-brand-navy">Drainage Accessories</option>
                    <option className="bg-brand-navy">Industrial Doors & Shutters</option>
                    <option className="bg-brand-navy">Custom Fabrication</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black dark:text-white/40 text-brand-navy/60 uppercase tracking-[0.4em]">Operational Phone</label>
                  <input type="tel" className="w-full glass-premium dark:bg-white/5 bg-black/5 rounded-2xl p-6 dark:text-white text-brand-navy focus:outline-none focus:border-brand-gold/50 transition-all font-bold" placeholder="+974 / +971 ..." />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <label className="text-[10px] font-black dark:text-white/40 text-brand-navy/60 uppercase tracking-[0.4em]">Technical Requirements Summary</label>
                  <textarea rows={6} className="w-full glass-premium dark:bg-white/5 bg-black/5 rounded-2xl p-8 dark:text-white text-brand-navy focus:outline-none focus:border-brand-gold/50 transition-all font-medium leading-relaxed" placeholder="Describe the project scope, specifications, or drainage flow requirements..."></textarea>
                </div>
                <div className="md:col-span-2 pt-8">
                  <Button variant="secondary" size="lg" className="w-full rounded-2xl shadow-gold-glow">
                    Initiate Technical Bid <ArrowRight className="ml-4 w-6 h-6" />
                  </Button>
                </div>
              </form>
            </GlassCard>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <GlassCard className="p-12 border-brand-gold/10">
              <h3 className="text-3xl font-black dark:text-white text-brand-navy mb-12 tracking-tighter">GCC Branch Offices</h3>
              <div className="space-y-16">
                <div className="group">
                  <div className="flex items-center space-x-4 mb-4 text-brand-gold">
                    <MapPin size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Doha HQ - Qatar</span>
                  </div>
                  <p className="dark:text-white text-brand-navy font-black text-2xl mb-2 tracking-tight">MAG GENERAL TRADING WLL</p>
                  <p className="dark:text-white/40 text-brand-navy/60 text-base mb-8 leading-relaxed font-light">Industrial Area, Street 41, Gate 05 <br />Doha, Qatar</p>
                  <a href="tel:+97444444444" className="text-brand-gold font-black text-sm flex items-center group-hover:underline uppercase tracking-widest">
                    +974 4444 4444 <ArrowUpRight size={14} className="ml-2" />
                  </a>
                </div>

                <div className="h-px bg-white/5" />

                <div className="group">
                  <div className="flex items-center space-x-4 mb-4 text-brand-gold">
                    <MapPin size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Dubai HQ - UAE</span>
                  </div>
                  <p className="dark:text-white text-brand-navy font-black text-2xl mb-2 tracking-tight">DMAG TRADING CO WLL</p>
                  <p className="dark:text-white/40 text-brand-navy/60 text-base mb-8 leading-relaxed font-light">Al Quoz Industrial Area 3 <br />Dubai, UAE</p>
                  <a href="tel:+97144444444" className="text-brand-gold font-black text-sm flex items-center group-hover:underline uppercase tracking-widest">
                    +971 4 444 4444 <ArrowUpRight size={14} className="ml-2" />
                  </a>
                </div>
              </div>
            </GlassCard>

            <motion.a 
              href="https://wa.me/97455555555"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              className="block glass-premium p-10 bg-brand-gold/5 border-brand-gold/20 group relative overflow-hidden rounded-[32px]"
            >
              <div className="flex items-center space-x-6 relative z-10">
                <div className="w-16 h-16 bg-brand-gold rounded-2xl text-brand-navy flex items-center justify-center shadow-gold-glow">
                  <MessageSquare size={32} strokeWidth={2.5}/>
                </div>
                <div>
                  <p className="dark:text-white text-brand-navy font-black text-lg tracking-tight">Technical WhatsApp</p>
                  <p className="text-[10px] text-brand-gold font-black uppercase tracking-[0.2em]">Real-time Project Engineering</p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </main>
  );
}
