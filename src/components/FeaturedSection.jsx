import React from 'react';
import { FEATURED_CARDS } from '../data/menuData';

export default function FeaturedSection() {
  return (
    <section id="featured" className="py-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-terracotta-500 tracking-tight uppercase">
          FEATURED
        </h2>
      </div>

      {/* 5 Arched Capsule Cards Grid (Slender, Smaller & Centered) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {FEATURED_CARDS.map((card) => (
          <div key={card.id} className="capsule-card h-[360px] sm:h-[370px] shadow-md group relative">
            <img 
              src={card.image} 
              alt={card.title} 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />

            {/* Hand-drawn doodle overlay for Burger (card 2) */}
            {card.type === 'doodle' && (
              <div className="absolute top-8 right-4 pointer-events-none opacity-80 scale-90">
                <svg width="42" height="56" viewBox="0 0 48 64" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                <div className="absolute inset-0 bg-ink-900/35" />
                <div className="absolute top-12 inset-x-0 text-center pointer-events-none px-1">
                  <h3 className="text-stencil-repeat text-white text-2xl sm:text-3xl drop-shadow-md">
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
            <div className="absolute bottom-5 inset-x-3 text-center">
              <span className="font-typewriter text-[10.5px] text-cream-100 tracking-wider block leading-tight">
                {card.title}
              </span>
              <span className="font-mono text-[8.5px] text-cream-300 uppercase tracking-widest mt-0.5 block">
                {card.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
