"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { ShieldCheck, Award, FileCheck, CheckCircle2, Factory, Microscope, ClipboardCheck, Globe2 } from 'lucide-react';
import Image from 'next/image';
import { ACCREDITATIONS } from '@/lib/constants';

export default function AccreditationPage() {
  return (
    <main className="pt-48 pb-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-screen-2xl">
        {/* Header Section */}
        <div className="max-w-5xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-6 mb-10"
          >
            <span className="w-12 h-[1px] bg-brand-gold" />
            <span className="label-technical">Quality Assurance Framework</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-[120px] font-black leading-[0.85] tracking-tighter text-white font-heading uppercase mb-16">
            Certified <br />
            <span className="gold-shimmer italic font-light">Compliance.</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/40 leading-relaxed font-light font-sans max-w-4xl">
            MAG & DMAG operate under a unified global standard matrix, ensuring that every cast and fabrication meets the rigorous safety and performance benchmarks of the GCC infrastructure landscape.
          </p>
        </div>

        {/* Global Standards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-40">
          <GlassCard className="p-16 border-brand-gold/15">
            <div className="flex items-start justify-between mb-16">
              <div className="w-20 h-20 glass-premium rounded-lg flex items-center justify-center text-brand-gold border-brand-gold/30">
                <ShieldCheck size={40} strokeWidth={1.5} />
              </div>
              <span className="text-[12px] font-black text-brand-gold/40 tracking-[0.5em] font-heading uppercase">Standard 01</span>
            </div>
            
            <h2 className="text-4xl font-black text-white mb-8 font-heading uppercase tracking-tight">ISO 9001:2015 Hub</h2>
            <p className="text-white/50 text-xl leading-relaxed font-light mb-12">
              Our Quality Management System is externally audited to ensure peak efficiency in industrial trading and specialized manufacturing processes.
            </p>
            
            <div className="space-y-6">
              {['Continuous Process Optimization', 'Supply Chain Traceability', 'Stakeholder Risk Assessment'].map((item) => (
                <div key={item} className="flex items-center space-x-4 text-white/80">
                  <CheckCircle2 size={18} className="text-brand-gold" />
                  <span className="text-[13px] font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-16 border-brand-gold/15">
            <div className="flex items-start justify-between mb-16">
              <div className="w-20 h-20 glass-premium rounded-lg flex items-center justify-center text-brand-gold border-brand-gold/30">
                <Globe2 size={40} strokeWidth={1.5} />
              </div>
              <span className="text-[12px] font-black text-brand-gold/40 tracking-[0.5em] font-heading uppercase">Standard 02</span>
            </div>
            
            <h2 className="text-4xl font-black text-white mb-8 font-heading uppercase tracking-tight">Environmental Stewardship</h2>
            <p className="text-white/50 text-xl leading-relaxed font-light mb-12">
              ISO 14001 certification underscores our commitment to sustainable manufacturing and reduced ecological impact across our GCC plants.
            </p>
            
            <div className="space-y-6">
              {['Material Waste Minimization', 'Energy Efficient Fabrication', 'Eco-compliant Logistics'].map((item) => (
                <div key={item} className="flex items-center space-x-4 text-white/80">
                  <CheckCircle2 size={18} className="text-brand-gold" />
                  <span className="text-[13px] font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Technical Verification Timeline */}
        <section className="mb-40">
          <div className="text-center mb-24">
            <span className="label-technical mb-6 block">Validation Workflow</span>
            <h3 className="text-5xl font-black text-white font-heading uppercase tracking-tighter">Manufacturing Rigor</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: 'Material Testing', icon: <Microscope />, desc: 'Spectral analysis of raw ingots.' },
              { title: 'Load Batching', icon: <Factory />, desc: 'EN-124 structural load validation.' },
              { title: 'Dimensions', icon: <ClipboardCheck />, desc: 'High-precision laser measurement.' },
              { title: 'Final Certification', icon: <FileCheck />, desc: 'Batch-specific technical passports.' }
            ].map((step, idx) => (
              <div key={idx} className="glass-premium p-10 rounded-sm relative group hover:border-brand-gold/40 transition-all">
                <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 32, strokeWidth: 1.2 })}
                </div>
                <div className="text-[10px] text-white/20 font-black mb-4 font-heading tracking-[0.4em]">PHASE 0{idx + 1}</div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Logistics & Compliance Hub */}
        <div className="glass-premium p-20 rounded-md border-white/5 bg-white/[0.01]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <h3 className="text-4xl font-black text-white mb-8 font-heading uppercase">Certificate Archive</h3>
              <p className="text-white/40 text-lg leading-relaxed font-light mb-12">
                Download verified documentation for your technical bids. Our repository contains full EN, BS, and ISO compliance dossiers.
              </p>
              <button className="flex items-center space-x-4 text-brand-gold font-bold group">
                <span className="text-[14px] uppercase tracking-widest">Access Documentation Vault</span>
                <Award size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-12">
              {ACCREDITATIONS.map((acc, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="relative w-24 h-24 mb-6 transition-all duration-500 group-hover:scale-110 opacity-30 group-hover:opacity-100 grayscale invert brightness-200">
                    <Image src={acc.logo} fill className="object-contain" alt={acc.name} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 text-center">{acc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}