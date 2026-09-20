import React from 'react';

export default function FeaturedSection() {
  const cards = [
    {
      id: 'bricks',
      title: 'Bricks Lounge',
      subtitle: 'Luxury Nightlife & Fine Dining',
      image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80',
      link: 'https://minnnn.vercel.app/',
      isComingSoon: false
    },
    {
      id: 'catering',
      title: 'Ela Catering Services',
      subtitle: 'Diplomatic & Institutional Banquets',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
      link: 'https://elacatering.com',
      isComingSoon: false
    },
    {
      id: 'coming-soon',
      title: 'Next Enterprise',
      subtitle: 'Coming Soon • Expanding Horizons',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      link: null,
      isComingSoon: true
    }
  ];

  return (
    <section id="featured" className="py-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-terracotta-500 tracking-tight uppercase">
          FEATURED VENTURES
        </h2>
      </div>

      {/* 3 Arched Capsule Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="capsule-card h-[400px] sm:h-[420px] shadow-lg group relative overflow-hidden bg-ink-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
          >
            {/* Background Image with Zoom on Hover */}
            <img 
              src={card.image} 
              alt={card.title} 
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                card.isComingSoon ? 'opacity-40 grayscale contrast-125' : 'opacity-85 group-hover:opacity-95'
              }`}
            />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent transition-opacity duration-500 group-hover:from-ink-950/95" />

            {/* Coming Soon Badge Overlay */}
            {card.isComingSoon && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                <div className="px-4 py-1.5 rounded-full border border-terracotta-500/60 bg-ink-950/80 backdrop-blur-sm mb-2 shadow-inner">
                  <span className="font-mono text-[10px] font-bold text-terracotta-500 uppercase tracking-[0.25em] animate-pulse">
                    IN DEVELOPMENT
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl text-cream-100 uppercase tracking-wider drop-shadow-md">
                  COMING SOON
                </h3>
                <p className="font-typewriter text-[11px] text-cream-300 mt-1 max-w-[200px]">
                  New agro-processing &amp; cold-chain export facility
                </p>
              </div>
            )}

            {/* Hover Action: Animated "Visit" Button */}
            {!card.isComingSoon && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <a 
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto opacity-0 translate-y-6 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out px-6 py-2.5 rounded-full bg-terracotta-500 text-cream-100 font-display font-black text-xs uppercase tracking-widest shadow-xl hover:bg-terracotta-600 hover:scale-105 active:scale-95 flex items-center space-x-2 border-2 border-cream-100/30"
                >
                  <span>Visit</span>
                  <span className="text-sm">↗</span>
                </a>
              </div>
            )}

            {/* Bottom Caption Block */}
            <div className="absolute bottom-6 inset-x-4 text-center transition-transform duration-500 group-hover:-translate-y-1">
              <span className="font-typewriter text-xs text-cream-100 tracking-wider block font-bold">
                {card.title}
              </span>
              <span className="font-mono text-[9px] text-cream-300 uppercase tracking-widest mt-1 block">
                {card.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
