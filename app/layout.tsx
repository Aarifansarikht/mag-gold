import React from 'react';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/sections/Footer';
import { MessageCircle } from 'lucide-react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MAG & DMAG | Industrial Engineering Excellence',
  description: 'Premium industrial manufacturing and trading corporate website for MAG General Trading and DMAG Trading.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased overflow-x-hidden bg-brand-navy text-white`}>
        <div className="grain-texture" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        
        {/* Floating WhatsApp CTA */}
        <a
          href="https://wa.me/97455555555"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[100] p-4 bg-green-500 text-white rounded-lg shadow-2xl hover:scale-105 transition-transform flex items-center group"
          aria-label="Chat with technical support on WhatsApp"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold text-xs uppercase tracking-widest">
            Support
          </span>
          <MessageCircle className="w-5 h-5 ml-0 group-hover:ml-3" />
        </a>
      </body>
    </html>
  );
}