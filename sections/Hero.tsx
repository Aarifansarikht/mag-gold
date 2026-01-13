"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/Button';
import { HERO_SLIDES } from '@/lib/constants';
import Image from 'next/image';

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(handleNext, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[850px] w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image 
            src={HERO_SLIDES[current].image} 
            fill 
            priority
            className="object-cover brightness-[0.40] " 
            alt="MAG Industrial Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black" />
          <div className="absolute inset-0 industrial-grid opacity-[0.1]" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-20 max-w-screen-2xl">
        <div className="max-w-5xl mx-auto lg:mx-0">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center space-x-8 mb-10">
              <span className="w-16 h-[1px] bg-brand-gold" />
              <span className="label-technical tracking-[0.6em] text-[10px] md:text-[12px]">
                {HERO_SLIDES[current].subtitle}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-14 text-white text-reveal font-heading uppercase">
              {HERO_SLIDES[current].title} <br />
              <span className="gold-shimmer italic font-light">{HERO_SLIDES[current].highlight}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed mb-16 font-light tracking-wide font-sans">
              {HERO_SLIDES[current].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="secondary" size="sm">
                Engineering Portal <ArrowRight className="ml-4 w-4 h-4" />
              </Button>
              <Button variant="glass" size="sm">
                <Play className="mr-4 fill-white" size={16}/> View Capability
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Structural Pagination */}
      <div className="absolute bottom-16 left-12 z-30 flex items-center space-x-6">
        {HERO_SLIDES.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[1px] transition-all duration-1000 ${current === i ? 'w-24 bg-brand-gold' : 'w-8 bg-white/10 hover:bg-white/40'}`} 
          />
        ))}
      </div>

      {/* Nav Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex items-center space-x-1">
        <button onClick={handlePrev} className="p-6 glass-premium rounded-sm text-white/30 hover:text-brand-gold hover:border-brand-gold/40 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={handleNext} className="p-6 glass-premium rounded-sm text-white/30 hover:text-brand-gold hover:border-brand-gold/40 transition-all">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};