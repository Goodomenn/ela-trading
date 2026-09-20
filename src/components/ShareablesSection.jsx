import React from 'react';
import { SHAREABLES_ITEMS } from '../data/menuData';

export default function ShareablesSection() {
  return (
    <section id="shareables" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-terracotta-500 tracking-tight uppercase">
          SHAREABLES
        </h2>
      </div>

      {/* Inverted Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Typewriter Itemized Menu */}
        <div className="lg:col-span-6 space-y-6 pt-2 order-2 lg:order-1">
          {SHAREABLES_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className={`space-y-0.5 ${item.isSubsidiary && idx === 6 ? 'pt-3 border-t border-cream-300' : ''}`}
            >
              <div className="flex justify-between items-baseline">
                <h3 className="font-display font-black text-base sm:text-lg text-ink-900 uppercase tracking-wide">
                  {item.title}
                </h3>
                <span className="font-typewriter font-bold text-sm text-ink-900 ml-4">{item.price}</span>
              </div>
              <p className="font-typewriter text-xs text-ink-600">
                {item.description}
              </p>
            </div>
          ))}

          {/* Cute line art doodle at bottom left (folding camp chair in reference) */}
          <div className="pt-6 flex justify-center lg:justify-start">
            <svg width="70" height="85" viewBox="0 0 60 75" fill="none" stroke="#233F46" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="opacity-75">
              <circle cx="30" cy="12" r="5" />
              <path d="M22 18 Q30 22 38 18" />
              <line x1="20" y1="24" x2="40" y2="24" />
              <line x1="16" y1="36" x2="44" y2="36" />
              <line x1="22" y1="24" x2="14" y2="65" />
              <line x1="38" y1="24" x2="46" y2="65" />
              <line x1="18" y1="36" x2="42" y2="65" />
              <line x1="42" y1="36" x2="18" y2="65" />
              <circle cx="14" cy="65" r="2.5" fill="#233F46" />
              <circle cx="46" cy="65" r="2.5" fill="#233F46" />
              <circle cx="18" cy="65" r="2.5" fill="#233F46" />
              <circle cx="42" cy="65" r="2.5" fill="#233F46" />
            </svg>
          </div>
        </div>

        {/* Right: Big Stadium/Capsule Photo */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="capsule-card-lg w-full max-w-[500px] h-[580px] shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80" 
              alt="Smoked Salmon Dip and Tortilla Chips" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 inset-x-6 text-center text-cream-100 font-typewriter text-xs">
              Smoked Salmon Dip &amp; House-Crisped Tortillas
            </div>
          </div>
        </div>

      </div>

      {/* Fine Dotted Horizontal Divider */}
      <div className="border-paper-dotted mt-16" />
    </section>
  );
}
