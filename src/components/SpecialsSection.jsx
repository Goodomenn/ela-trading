import React from 'react';
import { SPECIALS_ITEMS } from '../data/menuData';

export default function SpecialsSection() {
  return (
    <section id="specials" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-terracotta-500 tracking-tight uppercase">
          SPECIALS
        </h2>
      </div>

      {/* Asymmetric Grid: Left Large Capsule Image + Right Itemized Menu */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Big Stadium/Capsule Photo */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
          <div className="capsule-card-lg w-full max-w-[500px] h-[580px] shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80" 
              alt="Table Spread of Asian Fusion Dishes" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 inset-x-6 text-center text-cream-100 font-typewriter text-xs">
              Sun-Drenched Tasting Table • Origin Harvest &amp; Artisanal Plates
            </div>
          </div>
        </div>

        {/* Right: Typewriter Itemized Menu */}
        <div className="lg:col-span-6 space-y-8 pt-2">
          {SPECIALS_ITEMS.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-display font-black text-base sm:text-lg text-ink-900 uppercase tracking-wide">
                  <span className="text-xs text-sage-500 mr-1 font-mono">{item.prefix}</span> {item.title}
                </h3>
                <span className="font-typewriter font-bold text-sm text-ink-900 ml-4">{item.price}</span>
              </div>
              <p className="font-typewriter text-xs text-ink-600">
                {item.availability}
              </p>
              <p className="font-typewriter text-xs text-ink-700">
                {item.description}
              </p>
              {item.choice && (
                <p className="font-typewriter text-xs text-ink-600 italic">
                  {item.choice}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Fine Dotted Horizontal Divider */}
      <div className="border-paper-dotted mt-16" />
    </section>
  );
}
