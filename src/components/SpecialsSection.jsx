import React from 'react';
import { SPECIALS_ITEMS } from '../data/menuData';

export default function SpecialsSection() {
  return (
    <section id="specials" className="py-12 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-terracotta-500 tracking-tight uppercase">
          SPECIALS
        </h2>
      </div>

      {/* Asymmetric Grid: Left Capsule Image + Right Itemized Menu */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Compact Stadium/Capsule Photo */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="capsule-card-lg w-full max-w-[360px] h-[450px] shadow-xl relative">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
              alt="Table Spread of Asian Fusion Dishes" 
              loading="lazy"
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 inset-x-4 text-center text-cream-100 font-typewriter text-[11px]">
              Sun-Drenched Tasting Table • Origin Harvest
            </div>
          </div>
        </div>

        {/* Right: Typewriter Itemized Menu (More compact & refined) */}
        <div className="lg:col-span-7 space-y-6 pt-1">
          {SPECIALS_ITEMS.map((item, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-display font-black text-sm sm:text-base text-ink-900 uppercase tracking-wide">
                  <span className="text-[11px] text-sage-500 mr-1 font-mono">{item.prefix}</span> {item.title}
                </h3>
                <span className="font-typewriter font-bold text-xs sm:text-sm text-ink-900 ml-3">{item.price}</span>
              </div>
              <p className="font-typewriter text-[11px] text-ink-600">
                {item.availability}
              </p>
              <p className="font-typewriter text-[11px] text-ink-700">
                {item.description}
              </p>
              {item.choice && (
                <p className="font-typewriter text-[10.5px] text-ink-600 italic">
                  {item.choice}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Fine Dotted Horizontal Divider */}
      <div className="border-paper-dotted mt-12" />
    </section>
  );
}
