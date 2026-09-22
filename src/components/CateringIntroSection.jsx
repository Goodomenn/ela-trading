import React from 'react';

export default function CateringIntroSection() {
  return (
    <section id="catering-intro" className="py-12 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-terracotta-500 tracking-tight uppercase">
          ELA CATERING SERVICES
        </h2>
      </div>

      {/* Signature Structure: Left Capsule Image + Right Editorial Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Compact Stadium/Capsule Photo of Banquet / Gourmet Culinary */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="capsule-card-lg w-full max-w-[360px] h-[450px] shadow-xl relative group overflow-hidden bg-ink-900">
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80" 
              alt="Ela Catering Services Diplomatic Banquet" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 inset-x-4 text-center text-cream-100 font-typewriter text-[11px]">
              Diplomatic Silver Service &amp; Bespoke Banquets
            </div>
          </div>
        </div>

        {/* Right: Typewriter Editorial Overview & Key Offerings */}
        <div className="lg:col-span-7 space-y-5 pt-1">
          <div>
            <span className="text-[11px] text-sage-500 font-mono uppercase tracking-widest block mb-1">
              Subsidiary Venture • Banqueting Division
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink-900">
              Culinary Artistry on a Grand Scale
            </h3>
            <p className="font-typewriter text-xs text-ink-700 leading-relaxed mt-2.5">
              <strong>Ela Catering Services</strong> delivers exceptional institutional and event catering across Addis Ababa and beyond. From high-level diplomatic state banquets and embassy receptions to large-scale corporate culinary management, we blend international culinary standards with certified HACCP hygiene protocols.
            </p>
          </div>

          {/* Structured Key Capabilities (Holding Typewriter Structure) */}
          <div className="space-y-3 font-typewriter text-xs border-t border-cream-300/80 pt-4">
            <div className="flex justify-between items-baseline">
              <span className="font-display font-bold text-ink-900 uppercase tracking-wide">
                <span className="text-sage-500 font-mono mr-1">01</span> Diplomatic &amp; Embassy Banquets
              </span>
              <span className="font-bold text-terracotta-600 font-mono text-[11px]">Silver Service</span>
            </div>
            <p className="text-[11px] text-ink-600 pl-4">
              Customized multi-course menus tailored to international dietary requirements and protocol standards.
            </p>

            <div className="flex justify-between items-baseline pt-2">
              <span className="font-display font-bold text-ink-900 uppercase tracking-wide">
                <span className="text-sage-500 font-mono mr-1">02</span> Institutional Corporate Dining
              </span>
              <span className="font-bold text-terracotta-600 font-mono text-[11px]">1,000+ Covers/Day</span>
            </div>
            <p className="text-[11px] text-ink-600 pl-4">
              Nutritionally balanced daily rotational executive menus, corporate cafeterias, and institutional meal plans.
            </p>

            <div className="flex justify-between items-baseline pt-2">
              <span className="font-display font-bold text-ink-900 uppercase tracking-wide">
                <span className="text-sage-500 font-mono mr-1">03</span> Mobile Live Cooking Units
              </span>
              <span className="font-bold text-terracotta-600 font-mono text-[11px]">On-Site Execution</span>
            </div>
            <p className="text-[11px] text-ink-600 pl-4">
              Fully equipped mobile kitchen trucks and certified chef teams for private outdoor and estate galas.
            </p>
          </div>

          {/* Visit Action Link */}
          <div className="pt-2">
            <a 
              href="https://ela-catering.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-lg bg-ink-900 text-cream-100 font-display font-bold text-xs uppercase tracking-wider hover:bg-terracotta-500 transition shadow-sm"
            >
              <span>Explore Ela Catering</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>

      {/* Fine Dotted Horizontal Divider */}
      <div className="border-paper-dotted mt-12" />
    </section>
  );
}
