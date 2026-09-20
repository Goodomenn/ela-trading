import React from 'react';

export default function SubsidiariesSection() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Subsidiary Card 1: Bricks Lounge */}
        <div className="bg-cream-50 rounded-3xl p-8 border border-cream-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-terracotta-500 bg-terracotta-500/10 px-3 py-1 rounded-full">
                Hospitality &amp; Nightlife
              </span>
              <span className="text-xs font-typewriter text-ink-600">Addis Ababa, Ethiopia</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink-900 mb-2">
              Bricks Lounge
            </h3>
            <p className="font-typewriter text-xs text-ink-700 leading-relaxed mb-6">
              The crown jewel of Ela Trading's hospitality portfolio. Bricks Lounge offers a sophisticated fusion of international mixology, culinary fine dining, live entertainment, and exclusive VIP bottle service.
            </p>
            <div className="bg-cream-200/60 p-4 rounded-xl border border-cream-300 space-y-2 font-typewriter text-xs text-ink-800 mb-6">
              <div className="flex justify-between"><span>• VIP Table Reservations</span><span className="font-bold">Available</span></div>
              <div className="flex justify-between"><span>• Chef's Fusion Tasting Menu</span><span className="font-bold">Nightly</span></div>
              <div className="flex justify-between"><span>• Private Executive Event Space</span><span className="font-bold">Up to 250 Guests</span></div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-typewriter text-ink-600 block">Official Website</span>
              <span className="text-xs font-mono font-bold text-ink-900">www.brickslounge.com</span>
            </div>
            <a 
              href="https://brickslounge.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-ink-900 text-cream-100 font-display font-bold text-xs text-center hover:bg-terracotta-500 transition shadow flex items-center justify-center gap-2"
            >
              <span>Visit Bricks Lounge</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Subsidiary Card 2: Ela Catering Services */}
        <div className="bg-cream-50 rounded-3xl p-8 border border-cream-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-terracotta-500 bg-terracotta-500/10 px-3 py-1 rounded-full">
                Banqueting &amp; Catering
              </span>
              <span className="text-xs font-typewriter text-ink-600">Institutional &amp; Diplomatic</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink-900 mb-2">
              Ela Catering Services
            </h3>
            <p className="font-typewriter text-xs text-ink-700 leading-relaxed mb-6">
              Full-service institutional and event catering providing bespoke banqueting, corporate lunches, diplomatic galas, and large-scale event food operations with certified HACCP hygiene protocols.
            </p>
            <div className="bg-cream-200/60 p-4 rounded-xl border border-cream-300 space-y-2 font-typewriter text-xs text-ink-800 mb-6">
              <div className="flex justify-between"><span>• Diplomatic &amp; Corporate Banquets</span><span className="font-bold">Custom Menus</span></div>
              <div className="flex justify-between"><span>• Institutional Food Service</span><span className="font-bold">1,000+ Covers/Day</span></div>
              <div className="flex justify-between"><span>• Live Cooking &amp; Mobile Units</span><span className="font-bold">Full On-Site</span></div>
            </div>
          </div>

          <div className="pt-4 border-t border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-typewriter text-ink-600 block">Official Website</span>
              <span className="text-xs font-mono font-bold text-ink-900">www.elacatering.com</span>
            </div>
            <a 
              href="https://elacatering.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-ink-900 text-cream-100 font-display font-bold text-xs text-center hover:bg-terracotta-500 transition shadow flex items-center justify-center gap-2"
            >
              <span>Visit Ela Catering</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
