import React from 'react';
import HowToTrade from '../components/HowToTrade';
import DivisionFilter from '../components/DivisionFilter';
import FeaturedSection from '../components/FeaturedSection';
import CateringIntroSection from '../components/CateringIntroSection';
import BricksIntroSection from '../components/BricksIntroSection';

export default function HomePage({ activeFilter, onSelectFilter }) {
  return (
    <>
      {/* 3-Step Process Ribbon */}
      <HowToTrade />

      {/* Page Title & Division Filter Pills (No subcategory ticker as requested) */}
      <DivisionFilter 
        activeFilter={activeFilter} 
        onSelectFilter={onSelectFilter} 
      />

      {/* 3 Arched Capsule Cards (Bricks, Catering, Coming Soon with Hover Visit Animation) */}
      <FeaturedSection />

      {/* Introduction to Ela Catering Services (holding the signature structure) */}
      <CateringIntroSection />

      {/* Below Catering: Introduction to Bricks Lounge (holding the signature structure) */}
      <BricksIntroSection />
    </>
  );
}
