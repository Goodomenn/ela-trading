import React from 'react';

export default function HowToTrade() {
  return (
    <section className="border-b border-cream-300/90 py-5 bg-cream-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Title Box: "HOW TO / TRADE" */}
          <div className="md:col-span-3 text-center md:text-left flex md:block items-center justify-center space-x-2 md:space-x-0">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-ink-900 tracking-tight leading-none uppercase">
              HOW TO<br className="hidden md:inline" /> TRADE
            </h2>
          </div>

          {/* Step 1 */}
          <div className="md:col-span-3 flex items-center space-x-4 border-t md:border-t-0 md:border-l border-cream-300/80 pt-3 md:pt-0 md:pl-6">
            <span className="font-display font-bold text-4xl sm:text-5xl text-sage-400 leading-none select-none">
              1
            </span>
            <p className="font-typewriter text-xs text-ink-700 leading-snug">
              Review export commodities &amp; origin quality specs
            </p>
          </div>

          {/* Step 2 */}
          <div className="md:col-span-3 flex items-center space-x-4 border-t md:border-t-0 md:border-l border-cream-300/80 pt-3 md:pt-0 md:pl-6">
            <span className="font-display font-bold text-4xl sm:text-5xl text-sage-400 leading-none select-none">
              2
            </span>
            <p className="font-typewriter text-xs text-ink-700 leading-snug">
              Request lab-tested sample lots &amp; FOB/CIF quotation
            </p>
          </div>

          {/* Step 3 */}
          <div className="md:col-span-3 flex items-center space-x-4 border-t md:border-t-0 md:border-l border-cream-300/80 pt-3 md:pt-0 md:pl-6">
            <span className="font-display font-bold text-4xl sm:text-5xl text-sage-400 leading-none select-none">
              3
            </span>
            <p className="font-typewriter text-xs text-ink-700 leading-snug">
              Confirm vessel shipment or reserve venue VIP tables
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
