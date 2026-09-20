import React from 'react';
import SubsidiariesSection from '../components/SubsidiariesSection';
import CateringIntroSection from '../components/CateringIntroSection';
import BricksIntroSection from '../components/BricksIntroSection';

export default function SubsidiariesPage() {
  return (
    <div className="py-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <span className="font-mono text-xs text-terracotta-500 uppercase tracking-widest block mb-2">
          Holdings &amp; Lifestyle Ventures
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-ink-900 tracking-tight">
          Our Premier Subsidiaries
        </h1>
        <p className="font-typewriter text-xs text-ink-600 mt-2 max-w-xl mx-auto">
          Explore Ela Trading PLC's world-class commercial hospitality and institutional culinary divisions.
        </p>
      </div>

      <SubsidiariesSection />
      <CateringIntroSection />
      <BricksIntroSection />
    </div>
  );
}
