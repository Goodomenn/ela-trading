import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-300 py-10 text-ink-700 font-typewriter text-xs px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-cream-300 pb-6">
          
          {/* Logo & Subtitle */}
          <div className="text-center md:text-left">
            <span className="font-display font-black text-lg text-ink-900 block">ELA TRADING PLC</span>
            <p className="text-ink-600 text-[10.5px] mt-0.5">Connecting East African Agricultural Excellence to Global Markets</p>
          </div>

          {/* Footer Nav Links */}
          <div className="flex flex-wrap justify-center gap-5 font-mono text-[10.5px] uppercase tracking-wider text-ink-800">
            <Link to="/" className="hover:text-terracotta-500 transition">Home</Link>
            <Link to="/subsidiaries" className="hover:text-terracotta-500 transition">Subsidiaries</Link>
            <Link to="/commodities" className="hover:text-terracotta-500 transition">Quality Specs</Link>
            <a href="https://minnnn.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-terracotta-500 hover:underline">Bricks Lounge ↗</a>
            <a href="https://ela-catering.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-terracotta-500 hover:underline">Ela Catering ↗</a>
            <Link to="/about" className="hover:text-terracotta-500 transition">About Us</Link>
            <Link to="/contact" className="hover:text-terracotta-500 transition">Contact / RFQ</Link>
          </div>

        </div>

        <div className="pt-5 flex flex-col sm:flex-row justify-between items-center text-[9.5px] text-ink-500 gap-2">
          <span>© 2026 Ela Trading PLC. All Rights Reserved.</span>
          <span>Designed with authentic heritage craft aesthetic</span>
        </div>
      </div>
    </footer>
  );
}
