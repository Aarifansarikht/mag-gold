
import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../sections/Hero';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { PRODUCTS, SERVICES, ACCREDITATIONS, STATS, STEEL_SYSTEMS } from '../constants';
import { ArrowRight, ChevronRight, Factory, Globe2, ShieldCheck, Wrench } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen selection:bg-brand-gold selection:text-brand-navy overflow-hidden">
      {/* 1. Cinematic Hero Slider */}
      <Hero />
      
      {/* 2. Intelligence Section - Impactful Stats */}
      <section className="relative -mt-16 z-20 container mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-premium p-10 md:p-12 rounded-3xl flex flex-col items-center text-center group hover:border-brand-gold/40 transition-all duration-700 shadow-2xl"
            >
              <div className="mb-8 text-brand-gold opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
                {React.cloneElement(stat.icon as React.ReactElement, { size: 48, strokeWidth: 1 })}
              </div>
              <div className="text-5xl md:text-7xl font-black dark:text-white text-brand-navy tracking-tighter mb-3 transition-colors">{stat.value}</div>
              <div className="text-[11px] uppercase tracking-[0.6em] font-black dark:text-white text-slate-500 transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Drainage Solutions Portfolio */}
      <section className="py-48 relative overflow-hidden industrial-grid transition-colors">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-16 border-b dark:border-white/20 border-black/10 pb-24">
            <div className="max-w-4xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-brand-gold font-black text-[11px] uppercase tracking-[1em] block mb-10"
              >
                Global Engineering Standards
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl lg:text-9xl font-heading font-black dark:text-white text-brand-navy leading-[0.85] tracking-tighter text-reveal transition-colors"
              >
                Industrial <br /><span className="gold-shimmer italic">Systems.</span>
              </motion.h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mb-4">
              <Button  size="lg" className="rounded-full px-12 group py-12">
                Full Systems <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-12 dark:border-white border-slate-400 transition-colors">Technical Catalog</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product, idx) => (
              <GlassCard key={product.id} delay={idx * 0.1} className="group hover:bg-brand-gold/[0.04] p-10">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-12 border dark:border-white/10 border-slate-200">
                  <img src={product.image} className="w-full h-full object-cover grayscale brightness-50 dark:brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110" alt={product.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-transparent to-transparent opacity-90" />
                  <div className="absolute top-8 right-8 p-4 glass-premium rounded-2xl text-brand-gold border-white/10 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500 shadow-2xl">
                    {product.icon}
                  </div>
                </div>
                <h4 className="text-3xl md:text-4xl font-black dark:text-white text-brand-navy mb-6 tracking-tighter transition-colors">{product.title}</h4>
                <p className="dark:text-white/80 text-slate-700 mb-12 text-lg leading-relaxed font-light tracking-tight transition-colors">{product.description}</p>
                <div className="mt-auto pt-10 border-t dark:border-white/10 border-slate-200 flex items-center justify-between transition-colors">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] dark:text-white/60 text-slate-500 transition-colors">BS EN SERIES</span>
                  </div>
                  <button className="flex items-center space-x-3 text-brand-gold font-bold group/btn">
                    <span className="text-[11px] uppercase tracking-widest">Enquiry</span>
                    <ChevronRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Steel Fabrications Mastery */}
      <section className="py-48 dark:bg-titanium bg-slate-50 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 industrial-grid opacity-[0.05] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 items-center">
            <div className="relative group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[40px] overflow-hidden border dark:border-white/20 border-slate-200 p-3 bg-white/5 shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070" 
                  className="w-full h-[600px] md:h-[850px] object-cover rounded-[32px] grayscale dark:brightness-50 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  alt="Steel Engineering"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-12 -right-12 glass-premium rounded-[32px] p-12 md:p-16 border-brand-gold/30 shadow-2xl max-w-sm hidden lg:block"
              >
                <div className="text-7xl font-black text-brand-gold mb-4 leading-none tracking-tighter">100%</div>
                <div className="text-[11px] font-black uppercase tracking-[0.6em] dark:text-white/80 text-slate-600 transition-colors">Precision Casting</div>
                <p className="dark:text-white text-slate-700 text-sm mt-8 leading-relaxed font-light italic transition-colors">Bespoke heavy-duty systems engineered for the GCC's most challenging architectures.</p>
              </motion.div>
            </div>

            <div className="pt-20 lg:pt-0">
              <span className="text-brand-gold font-black text-[11px] uppercase tracking-[1em] block mb-12">Industrial Fabrication Excellence</span>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black dark:text-white text-brand-navy leading-[0.8] mb-16 tracking-tighter transition-colors">
                Structural <br />
                <span className="gold-shimmer italic">Integrity.</span>
              </h2>
              <p className="dark:text-white/90 text-slate-900 text-2xl md:text-3xl leading-relaxed mb-20 font-light tracking-tight max-w-xl transition-colors">
                Mastering the core of infrastructure through advanced steel fabrication and integrated architectural solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {STEEL_SYSTEMS.slice(0, 8).map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center space-x-6 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full border dark:border-brand-gold border-brand-gold/40 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500 shadow-xl">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 20, className: "text-brand-gold group-hover:text-brand-navy" })}
                    </div>
                    <span className="dark:text-white text-slate-900 font-black text-[11px] uppercase tracking-[0.3em] group-hover:text-brand-gold transition-colors">{item.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-24">
                <Button variant="secondary" size="lg" className="min-w-[340px] rounded-full shadow-2xl shadow-brand-gold/20">Request Bid</Button>
                <Button variant="outline" size="lg" className="min-w-[340px] rounded-full dark:border-white border-slate-400 transition-colors">Facility Tour</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Logo Hub */}
      <section className="py-48 dark:bg-brand bg-white relative transition-colors">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-32 text-center">
            <span className="text-brand-gold font-black text-[11px] uppercase tracking-[1em] mb-8">Accredited Operations</span>
            <h3 className="text-4xl md:text-6xl font-black dark:text-white text-brand-navy tracking-tighter transition-colors leading-tight">Certified Excellence Network</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-32 opacity-70 transition-all duration-1000 hover:opacity-100 items-center">
            {ACCREDITATIONS.map((acc, i) => (
              <motion.div key={i} whileHover={{ scale: 1.15 }} className="flex flex-col items-center group cursor-default">
                <img 
                  src={acc.logo} 
                  alt={acc.name} 
                  className="h-24 w-auto mb-10 filter grayscale dark:invert" 
                />
                <span className="text-[10px] dark:text-white text-brand-navy font-black tracking-[0.6em] uppercase transition-colors">{acc.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Hub */}
      <section className="py-48 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="relative rounded-[60px] overflow-hidden glass-premium border-brand-gold/20 p-20 md:p-32 lg:p-64 text-center group">
            <div className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl lg:text-[140px] font-heading font-black dark:text-white text-brand-navy mb-16 tracking-tighter leading-[0.8] transition-colors">
                Forge your <br />
                <span className="gold-shimmer italic">Vision.</span>
              </h2>
              <p className="dark:text-white text-slate-500 max-w-4xl mx-auto mb-20 text-xl md:text-3xl font-light leading-relaxed tracking-tight transition-colors">
                Partner with the GCC's manufacturing elite. We are ready to translate your engineering blueprints into industrial-grade reality.
              </p>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                <Button variant="secondary" size="lg" className="min-w-[420px] rounded-full shadow-2xl shadow-brand-gold/20">Submit Technical Enquiry</Button>
                <Button variant="outline" size="lg" className="min-w-[420px] rounded-full dark:border-white border-slate-400 transition-colors">Download Specs Hub</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
