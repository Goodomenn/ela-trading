import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-300 py-12 text-ink-700 font-typewriter text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-cream-300 pb-8">
          
          {/* Logo & Subtitle */}
          <div className="text-center md:text-left">
            <span className="font-display font-black text-xl text-ink-900 block">ELA TRADING PLC</span>
            <p className="text-ink-600 text-[11px] mt-1">Connecting East African Agricultural Excellence to Global Markets</p>
          </div>

          {/* Footer Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 font-mono text-[11px] uppercase tracking-wider text-ink-800">
            <a href="#featured" className="hover:text-terracotta-500 transition">Featured</a>
            <a href="#specials" className="hover:text-terracotta-500 transition">Specials</a>
            <a href="#shareables" className="hover:text-terracotta-500 transition">Shareables</a>
            <a href="https://brickslounge.com" target="_blank" rel="noopener noreferrer" className="text-terracotta-500 hover:underline">Bricks Lounge ↗</a>
            <a href="https://elacatering.com" target="_blank" rel="noopener noreferrer" className="text-terracotta-500 hover:underline">Ela Catering ↗</a>
            <a href="#about" className="hover:text-terracotta-500 transition">About Us</a>
            <a href="#contact" className="hover:text-terracotta-500 transition">Contact</a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-ink-500 gap-2">
          <span>© 2026 Ela Trading PLC. All Rights Reserved.</span>
          <span>Designed with authentic heritage craft aesthetic</span>
        </div>
      </div>
    </footer>
  );
}
