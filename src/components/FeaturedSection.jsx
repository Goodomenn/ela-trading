import React from 'react';
import { FEATURED_CARDS } from '../data/menuData';

export default function FeaturedSection() {
  return (
    <section id="featured" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-terracotta-500 tracking-tight uppercase">
          FEATURED
        </h2>
      </div>

      {/* 5 Arched Capsule Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {FEATURED_CARDS.map((card) => (
          <div key={card.id} className="capsule-card h-[460px] shadow-lg group relative">
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />

            {/* Hand-drawn doodle overlay for Burger (card 2) */}
            {card.type === 'doodle' && (
              <div className="absolute top-12 right-6 pointer-events-none opacity-80">
                <svg width="48" height="64" viewBox="0 0 48 64" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M24 4 C24 16, 20 20, 24 32 C28 44, 20 52, 24 60" strokeDasharray="2 2" />
                  <circle cx="24" cy="8" r="4" />
                  <path d="M16 24 Q24 20 32 24" />
                  <path d="M14 36 Q24 32 34 36" />
                </svg>
              </div>
            )}

            {/* Repeating Typography for Spices (card 3) */}
            {card.type === 'repeat-text' && (
              <>
                <div className="absolute inset-0 bg-ink-900/30" />
                <div className="absolute top-16 inset-x-0 text-center pointer-events-none px-2">
                  <h3 className="text-stencil-repeat text-white text-3xl sm:text-4xl drop-shadow-md">
                    {card.repeatText.map((text, idx) => (
                      <React.Fragment key={idx}>
                        {text}<br />
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
              </>
            )}

            {/* Dark gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />

            {/* Bottom Caption */}
            <div className="absolute bottom-6 inset-x-4 text-center">
              <span className="font-typewriter text-[11px] text-cream-100 tracking-wider block">
                {card.title}
              </span>
              <span className="font-mono text-[9px] text-cream-300 uppercase tracking-widest mt-0.5 block">
                {card.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
