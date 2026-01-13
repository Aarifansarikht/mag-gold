"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { NAV_ITEMS } from '@/lib/constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-1000 ${scrolled ? 'py-4' : 'py-12'}`}>
      <div className="container mx-auto px-6 max-w-screen-2xl">
        <div className={`glass-premium px-10 py-5 flex items-center justify-between transition-all duration-700 rounded-md ${scrolled ? 'bg-black/95 backdrop-blur-3xl border-white/15' : 'bg-transparent border-transparent shadow-none'}`}>
          <Link href="/" className="flex flex-col group select-none">
            <span className="text-2xl md:text-3xl font-black tracking-tight text-white leading-none font-heading uppercase">
              MAG <span className="text-brand-gold">&</span> DMAG
            </span>
            <div className="flex items-center space-x-3 mt-2">
              <span className="w-6 h-[1px] bg-brand-gold/80" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold font-sans">Engineering Elite</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`text-[12px] uppercase tracking-[0.3em] font-bold transition-all hover:text-brand-gold relative group py-2 font-heading ${
                  pathname === item.path ? 'text-brand-gold' : 'text-white/60'
                }`}
              >
                {item.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-gold origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: pathname === item.path ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/contact" className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white flex items-center transition-colors font-heading group">
              Portal <ArrowUpRight size={14} className="ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"/>
            </Link>
            <Button variant="secondary" size="xs">Initiate Bid</Button>
          </div>

          <button 
            className="lg:hidden p-3 text-white/50 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 lg:hidden glass-premium mt-6 p-12 rounded-lg shadow-2xl"
          >
            <div className="flex flex-col space-y-8">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-black tracking-tighter uppercase font-heading ${
                    pathname === item.path ? 'text-brand-gold' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Button variant="secondary" className="w-full" size="md">Technical Request</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};