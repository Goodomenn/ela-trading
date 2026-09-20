import React, { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-cream-300/80 bg-cream-100/95 backdrop-blur-sm px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
      {/* Top Small Utility Line */}
      <div className="max-w-6xl mx-auto py-2 border-b border-cream-300/60 flex justify-between items-center text-[11px] font-typewriter text-ink-700">
        <div className="flex items-center space-x-3">
          <a href="#about" className="hover:text-terracotta-500 transition underline underline-offset-2">Our Story</a>
          <span>•</span>
          <span>Addis Ababa, Ethiopia</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">ISO 22000 & HACCP Compliant</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#contact" className="hover:text-terracotta-500 transition">Global Desk: info@elatradingplc.com</a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-4 sm:py-5">
          
          {/* Left Nav Links */}
          <nav className="hidden lg:flex items-center space-x-5 text-[11px] font-bold uppercase tracking-wider text-ink-800">
            <a href="#featured" className="hover:text-terracotta-500 transition">Featured</a>
            <a href="#specials" className="hover:text-terracotta-500 transition">Specials</a>
            <a href="#shareables" className="hover:text-terracotta-500 transition">Subsidiaries</a>
            <a href="#commodities" className="hover:text-terracotta-500 transition">Quality Specs</a>
            <a href="#about" className="hover:text-terracotta-500 transition">About Us</a>
          </nav>

          {/* Center Brand Logo (Clean, elegant, compact double-line frame) */}
          <div className="text-center">
            <a href="#" className="inline-block group">
              <div className="border-2 border-ink-800 px-4 py-1 rounded-sm group-hover:border-terracotta-500 transition">
                <span className="font-display font-black text-xl sm:text-2xl tracking-widest text-ink-900 block leading-tight group-hover:text-terracotta-500 transition">
                  ELA
                </span>
              </div>
              <span className="block text-[8.5px] font-mono tracking-[0.25em] text-ink-700 mt-1 uppercase">
                Trading PLC • Global & Ventures
              </span>
            </a>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <a 
              href="https://brickslounge.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-900 border border-ink-800 rounded hover:bg-ink-900 hover:text-cream-100 transition shadow-sm"
            >
              Bricks Lounge ↗
            </a>
            <a 
              href="https://elacatering.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-900 border border-ink-800 rounded hover:bg-ink-900 hover:text-cream-100 transition shadow-sm"
            >
              Ela Catering ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              aria-label="Toggle Menu" 
              className="text-ink-900 p-1.5 text-2xl focus:outline-none"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream-200 border-b border-cream-300 px-4 py-3 space-y-2 text-xs font-bold uppercase tracking-wider">
          <a href="#featured" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">Featured</a>
          <a href="#specials" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">Specials (Export Commodities)</a>
          <a href="#shareables" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">Shareables (Bricks & Catering)</a>
          <a href="#commodities" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">Quality Specifications</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">About Us</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">Inquiry & RFQ</a>
          <div className="pt-2 flex flex-col space-y-2">
            <a href="https://brickslounge.com" target="_blank" rel="noopener noreferrer" className="text-center py-2 border border-ink-800 rounded text-ink-900 font-bold">
              Bricks Lounge ↗
            </a>
            <a href="https://elacatering.com" target="_blank" rel="noopener noreferrer" className="text-center py-2 border border-ink-800 rounded text-ink-900 font-bold">
              Ela Catering ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
