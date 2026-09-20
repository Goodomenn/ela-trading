import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="relative z-50 border-b border-cream-300/80 bg-cream-100/95 backdrop-blur-sm px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-4 sm:py-5">
          
          {/* Left Nav Links - Linked to dedicated pages */}
          <nav className="hidden lg:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-wider text-ink-800">
            <Link 
              to="/" 
              className={`transition hover:text-terracotta-500 ${isActive('/') ? 'text-terracotta-500 font-black border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/subsidiaries" 
              className={`transition hover:text-terracotta-500 ${isActive('/subsidiaries') ? 'text-terracotta-500 font-black border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              Subsidiaries
            </Link>
            <Link 
              to="/commodities" 
              className={`transition hover:text-terracotta-500 ${isActive('/commodities') ? 'text-terracotta-500 font-black border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              Quality Specs
            </Link>
            <Link 
              to="/about" 
              className={`transition hover:text-terracotta-500 ${isActive('/about') ? 'text-terracotta-500 font-black border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`transition hover:text-terracotta-500 ${isActive('/contact') ? 'text-terracotta-500 font-black border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              Contact / RFQ
            </Link>
          </nav>

          {/* Center Brand Logo (Clean, elegant, compact double-line frame) */}
          <div className="text-center">
            <Link to="/" className="inline-block group">
              <div className="border-2 border-ink-800 px-4 py-1 rounded-sm group-hover:border-terracotta-500 transition">
                <span className="font-display font-black text-xl sm:text-2xl tracking-widest text-ink-900 block leading-tight group-hover:text-terracotta-500 transition">
                  ELA
                </span>
              </div>
              <span className="block text-[8.5px] font-mono tracking-[0.25em] text-ink-700 mt-1 uppercase">
                Trading PLC • Global &amp; Ventures
              </span>
            </Link>
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
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">Home</Link>
          <Link to="/subsidiaries" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">Subsidiaries</Link>
          <Link to="/commodities" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">Quality Specifications</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">About Us</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-1 text-ink-800 hover:text-terracotta-500">Contact / RFQ</Link>
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
