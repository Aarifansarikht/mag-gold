
import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Factory, Target, ShieldCheck, Globe, Milestone, Cpu, Zap, Microscope, Wrench, Building2 } from 'lucide-react';

export const About: React.FC = () => {
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
            Engineering Legacy
          </motion.span>
          <h1 className="text-7xl md:text-9xl font-heading font-black dark:text-white text-brand-navy mb-12 leading-[0.8] tracking-tighter text-reveal">
            Industrial <br /><span className="gold-shimmer italic">Foundations.</span>
          </h1>
          <p className="text-3xl dark:text-white/90 text-slate-800 leading-relaxed font-light tracking-tight max-w-3xl">
            Established in 1998, MAG & DMAG represent the pinnacle of Middle Eastern industrial manufacturing, bridging the gap between raw engineering and architectural vision.
          </p>
        </div>

        {/* Strength Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          <GlassCard className="p-16 border-brand-gold/10">
            <div className="w-16 h-16 glass-premium rounded-2xl flex items-center justify-center text-brand-gold mb-10 shadow-lg border-brand-gold/20">
              <Factory size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-black dark:text-white text-brand-navy mb-8 tracking-tighter">Manufacturing Prowess</h2>
            <p className="dark:text-white text-slate-700 text-xl leading-relaxed mb-10 font-light">
              Our facilities in Doha and Dubai are equipped with high-precision CNC automation and ASME-certified fabrication units, ensuring every component meets global BS/EN standards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Automated CNC', icon: <Cpu size={16}/> },
                { label: 'ASME Welding', icon: <ShieldCheck size={16}/> },
                { label: 'QA Lab Testing', icon: <Microscope size={16}/> },
                { label: 'Epoxy Coating', icon: <Zap size={16}/> }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-brand-gold">
                  <span className="p-2 bg-brand-gold/10 rounded-lg">{item.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest dark:text-white text-brand-navy">{item.label}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-16 border-brand-gold/10">
            <div className="w-16 h-16 glass-premium rounded-2xl flex items-center justify-center text-brand-gold mb-10 shadow-lg border-brand-gold/20">
              <Target size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-black dark:text-white text-brand-navy mb-8 tracking-tighter">Custom Engineering</h2>
            <p className="dark:text-white text-slate-700 text-xl leading-relaxed mb-10 font-light">
              We translate complex architectural requirements into load-bearing realities. Our "made-to-order" philosophy ensures that no project is too complex for our technical team.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                { label: 'Bespoke Design', icon: <Wrench size={16}/> },
                { label: 'Load Analysis', icon: <Globe size={16}/> },
                { label: 'Site Technicals', icon: <Building2 size={16}/> },
                { label: 'Fast Fabrication', icon: <Factory size={16}/> }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-brand-gold">
                  <span className="p-2 bg-brand-gold/10 rounded-lg">{item.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest dark:text-white text-brand-navy">{item.label}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Timeline Hub */}
        <div className="relative py-48 glass-premium rounded-[40px] overflow-hidden brushed-metal border-brand-gold/5">
           <div className="absolute inset-0 bg-gold-shimmer opacity-[0.02] pointer-events-none" />
           <div className="relative z-10 px-16">
              <h3 className="text-center text-5xl md:text-7xl font-black dark:text-white text-brand-navy mb-32 tracking-tighter">
                Chronicles of <span className="gold-shimmer italic">Impact.</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                {[
                  { year: '1998', title: 'MAG Doha', desc: 'Inauguration of the Qatar base focusing on drainage infrastructure imports.' },
                  { year: '2005', title: 'DMAG Dubai', desc: 'Expansion into the UAE with a dedicated industrial trade and supply hub.' },
                  { year: '2012', title: 'Production Pivot', desc: 'Commissioning of our first heavy fabrication plant in the Doha Industrial Area.' },
                  { year: '2020', title: 'Steel Systems', desc: 'Launch of advanced structural steel and industrial mezzanine divisions.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className="relative group cursor-default"
                  >
                    <div className="text-6xl font-black text-brand-gold/30 group-hover:text-brand-gold transition-colors mb-8 tracking-tighter leading-none">{item.year}</div>
                    <div className="w-8 h-[2px] bg-brand-gold mb-6 group-hover:w-full transition-all duration-700" />
                    <h4 className="text-2xl font-black dark:text-white text-brand-navy mb-4 tracking-tight">{item.title}</h4>
                    <p className="dark:text-white/80 text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </main>
  );
};
