"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link href="/" className="flex flex-col mb-8 group">
              <span className="text-2xl font-black tracking-tighter text-white font-heading">
                MAG <span className="text-brand-gold">&</span> DMAG
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">General Trading & Manufacturing</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Industrial leaders in specialized manufacturing and trading. Serving the GCC with premium drainage solutions and steel fabrication for over two decades.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[11px]">Head Offices</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white text-sm font-bold tracking-tight">Qatar Branch</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">Industrial Area, Street 41, Gate 05 <br />Doha, Qatar</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white text-sm font-bold tracking-tight">UAE Branch</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">Al Quoz Industrial Area 3 <br />Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[11px]">Technical Desks</h4>
            <div className="space-y-4">
              <a href="mailto:info@maggroup.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-gold" />
                <span className="text-sm font-light">info@maggroup.com</span>
              </a>
              <a href="tel:+9744444444" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand-gold" />
                <span className="text-sm font-light">+974 4444 4444 (Qatar)</span>
              </a>
              <a href="tel:+9714444444" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand-gold" />
                <span className="text-sm font-light">+971 4 444 4444 (UAE)</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[11px]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Accreditation', path: '/accreditation' },
                { label: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-medium">
            © 2025 MAG & DMAG INDUSTRIAL GROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="p-3 glass-premium rounded-full hover:bg-brand-gold/20 hover:text-brand-gold transition-colors text-white/40">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-3 glass-premium rounded-full hover:bg-brand-gold/20 hover:text-brand-gold transition-colors text-white/40">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-3 glass-premium rounded-full hover:bg-brand-gold/20 hover:text-brand-gold transition-colors text-white/40">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};