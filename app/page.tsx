import React from 'react';
import { Hero } from '@/sections/Hero';
import { ProductOverview } from '@/sections/ProductOverview';
import { Button } from '@/components/Button';
import { ACCREDITATIONS, STATS, SERVICES } from '@/lib/constants';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Cinematic Hero */}
      <Hero />
      
      {/* Precision Metrics - Reduced negative margin to prevent button overlap */}
      <section className="relative z-30 -mt-12 md:-mt-16 lg:-mt-20 pb-32 container mx-auto px-6 max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="glass-premium p-12 md:p-14 rounded-sm flex flex-col items-center text-center group hover:bg-white/[0.04] transition-all duration-700 border-white/10"
            >
              <div className="text-brand-gold/40 mb-10 group-hover:scale-110 group-hover:text-brand-gold transition-all duration-500">
                {React.cloneElement(stat.icon as React.ReactElement, { size: 44, strokeWidth: 1 })}
              </div>
              <div className="text-5xl lg:text-7xl font-black mb-4 tracking-tighter text-white font-heading">
                {stat.value}
              </div>
              <div className="label-technical opacity-40 group-hover:opacity-100 transition-colors text-[11px] tracking-[0.5em] font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Sections */}
      <ProductOverview />

      {/* Structural Excellence Showcase */}
      <section className="py-64 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-48 items-center mb-40">
            <div>
              <span className="label-technical mb-12 block">Engineering Excellence Hub</span>
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-[0.85] mb-14 font-heading uppercase">
                Structural <br /><span className="gold-shimmer italic font-light">Integrity Systems.</span>
              </h2>
              <p className="text-white/30 text-2xl font-light leading-relaxed max-w-2xl mb-20 font-sans">
                Supplying the structural core for the Middle East's most ambitious projects. We fuse advanced metallurgy with architectural precision.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button variant="secondary" size="sm">Technical Catalog</Button>
                <Button variant="outline" size="sm">Capability Review</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.slice(0, 2).map((service) => (
                <div key={service.id} className="relative h-[650px] rounded-md overflow-hidden group border border-white/10">
                  <Image 
                    src={service.image} 
                    fill 
                    className="object-cover grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105" 
                    alt={service.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-16 left-12 right-12">
                     <h3 className="text-3xl font-black text-white mb-8 tracking-tight font-heading uppercase leading-none">{service.title}</h3>
                     <p className="text-white/40 mb-12 text-sm leading-relaxed font-light line-clamp-2 font-sans">{service.description}</p>
                     <Button variant="glass" size="xs" className="w-full">Technical Data <ChevronRight size={18} className="ml-4"/></Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Network */}
      <section className="py-40">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-20 border-t border-white/5 pt-40">
            <div className="max-w-md text-center md:text-left">
               <span className="label-technical mb-8 block">Regional Standards</span>
               <h3 className="text-5xl font-black text-white tracking-tighter font-heading uppercase">Certified Excellence.</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-20 opacity-20 hover:opacity-100 transition-all duration-1000 grayscale invert brightness-200">
              {ACCREDITATIONS.map((acc, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="relative w-20 h-20 mb-8 transition-transform group-hover:scale-110">
                    <Image src={acc.logo} fill className="object-contain" alt={acc.name} />
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-white font-heading">{acc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Anchor */}
      <section className="py-64 relative">
        <div className="container mx-auto px-6">
          <div className="glass-premium rounded-md p-32 md:p-48 lg:p-64 text-center relative overflow-hidden group border-brand-gold/20">
            <div className="absolute inset-0 bg-gold-shimmer opacity-[0.04] pointer-events-none" />
            <div className="absolute inset-0 industrial-grid opacity-5 pointer-events-none" />
            
            <h2 className="text-6xl md:text-[140px] font-black tracking-tight mb-20 leading-[0.75] text-white font-heading uppercase">
              Engineered <br /> <span className="gold-shimmer italic font-light">Stability.</span>
            </h2>
            <p className="text-white/20 text-3xl font-light mb-28 max-w-5xl mx-auto leading-relaxed font-sans">
              Partner with the GCC's manufacturing elite. We anchor the future of regional architecture.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-10">
              <Link href="/contact">
                <Button variant="secondary" size="md">Initiate Technical Bid</Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="md">Engineering Vault</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}