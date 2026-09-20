import React from 'react';

export default function BricksIntroSection() {
  return (
    <section id="bricks-intro" className="py-12 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-terracotta-500 tracking-tight uppercase">
          BRICKS LOUNGE
        </h2>
      </div>

      {/* Signature Inverted Structure: Left Editorial Presentation + Right Capsule Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Typewriter Editorial Overview & Key Offerings */}
        <div className="lg:col-span-7 space-y-5 pt-1 order-2 lg:order-1">
          <div>
            <span className="text-[11px] text-sage-500 font-mono uppercase tracking-widest block mb-1">
              Subsidiary Venture • Hospitality &amp; Nightlife
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink-900">
              Addis Ababa's Premier Nightlife &amp; Dining Destination
            </h3>
            <p className="font-typewriter text-xs text-ink-700 leading-relaxed mt-2.5">
              <strong>Bricks Lounge</strong> stands as the pinnacle of refined hospitality, craft mixology, and high-energy entertainment in the heart of Addis Ababa. Seamlessly fusing world-class gastronomy, private executive VIP suites, and live musical showcases, Bricks Lounge caters to discerning guests and global travelers.
            </p>
          </div>

          {/* Structured Key Offerings (Holding Typewriter Structure) */}
          <div className="space-y-3 font-typewriter text-xs border-t border-cream-300/80 pt-4">
            <div className="flex justify-between items-baseline">
              <span className="font-display font-bold text-ink-900 uppercase tracking-wide">
                <span className="text-sage-500 font-mono mr-1">01</span> Chef's Signature Tasting Menu
              </span>
              <span className="font-bold text-terracotta-600 font-mono text-[11px]">Nightly Dining</span>
            </div>
            <p className="text-[11px] text-ink-600 pl-4">
              Artisan wagyu sliders, fusion skewers, truffle accompaniments, and internationally inspired shareable plates.
            </p>

            <div className="flex justify-between items-baseline pt-2">
              <span className="font-display font-bold text-ink-900 uppercase tracking-wide">
                <span className="text-sage-500 font-mono mr-1">02</span> Executive VIP Bottle Service &amp; Lounges
              </span>
              <span className="font-bold text-terracotta-600 font-mono text-[11px]">Reservations</span>
            </div>
            <p className="text-[11px] text-ink-600 pl-4">
              Exclusive private booth seating, personal cocktail mixologists, and bespoke security for executive gatherings.
            </p>

            <div className="flex justify-between items-baseline pt-2">
              <span className="font-display font-bold text-ink-900 uppercase tracking-wide">
                <span className="text-sage-500 font-mono mr-1">03</span> Curated Live Entertainment &amp; Skyline Terrace
              </span>
              <span className="font-bold text-terracotta-600 font-mono text-[11px]">Atmosphere</span>
            </div>
            <p className="text-[11px] text-ink-600 pl-4">
              Resident DJs, acoustic sessions, and an outdoor terrace with panoramic skyline views of the Bole district.
            </p>
          </div>

          {/* Visit Action Link */}
          <div className="pt-2">
            <a 
              href="https://minnnn.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-lg bg-ink-900 text-cream-100 font-display font-bold text-xs uppercase tracking-wider hover:bg-terracotta-500 transition shadow-sm"
            >
              <span>Explore Bricks Lounge</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Right: Compact Stadium/Capsule Photo of Luxury Nightlife / Mixology */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="capsule-card-lg w-full max-w-[360px] h-[450px] shadow-xl relative group overflow-hidden bg-ink-900">
            <img 
              src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80" 
              alt="Bricks Lounge Luxury Nightlife" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 inset-x-4 text-center text-cream-100 font-typewriter text-[11px]">
              Bricks Lounge • Mixology &amp; VIP Suites
            </div>
          </div>
        </div>

      </div>

      {/* Fine Dotted Horizontal Divider */}
      <div className="border-paper-dotted mt-12" />
    </section>
  );
}
