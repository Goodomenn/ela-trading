import React from 'react';

export default function DivisionFilter({ activeFilter, onSelectFilter }) {
  return (
    <section className="pt-12 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Big Serif Headline */}
      <h1 className="font-display font-black text-4xl sm:text-6xl text-ink-900 tracking-tight text-center md:text-left mb-6">
        Addis Ababa &amp; Global Operations
      </h1>

      {/* Division Filter Pills (like FOOD | DRINK | HAPPY HOUR) */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-6">
        <button 
          onClick={() => onSelectFilter('all')} 
          className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded border border-ink-800 transition shadow-sm ${
            activeFilter === 'all' 
              ? 'bg-ink-900 text-cream-100' 
              : 'text-ink-800 hover:bg-ink-900 hover:text-cream-100'
          }`}
        >
          All Divisions
        </button>
        <button 
          onClick={() => onSelectFilter('export')} 
          className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded border border-ink-800 transition shadow-sm ${
            activeFilter === 'export' 
              ? 'bg-ink-900 text-cream-100' 
              : 'text-ink-800 hover:bg-ink-900 hover:text-cream-100'
          }`}
        >
          Agro Export
        </button>
        <button 
          onClick={() => onSelectFilter('hospitality')} 
          className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded border border-ink-800 transition shadow-sm ${
            activeFilter === 'hospitality' 
              ? 'bg-ink-900 text-cream-100' 
              : 'text-ink-800 hover:bg-ink-900 hover:text-cream-100'
          }`}
        >
          Hospitality &amp; Dining
        </button>
        <button 
          onClick={() => onSelectFilter('import')} 
          className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded border border-ink-800 transition shadow-sm ${
            activeFilter === 'import' 
              ? 'bg-ink-900 text-cream-100' 
              : 'text-ink-800 hover:bg-ink-900 hover:text-cream-100'
          }`}
        >
          Import Logistics
        </button>
      </div>

      {/* Subcategory Navigation Ticker */}
      <div className="border-t border-cream-300/80 pt-4 flex flex-wrap gap-4 sm:gap-6 text-[11px] font-mono uppercase tracking-widest text-ink-700">
        <a href="#featured" className="text-terracotta-500 font-bold border-b border-terracotta-500 pb-0.5">Featured</a>
        <a href="#specials" className="hover:text-terracotta-500 transition">Specials</a>
        <a href="#shareables" className="hover:text-terracotta-500 transition">Shareables</a>
        <a href="#commodities" className="hover:text-terracotta-500 transition">Quality Specs</a>
        <a href="#about" className="hover:text-terracotta-500 transition">About Us</a>
        <a href="#contact" className="hover:text-terracotta-500 transition">Inquiry / RFQ</a>
      </div>
    </section>
  );
}
