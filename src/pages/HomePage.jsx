import React from 'react';
import DivisionFilter from '../components/DivisionFilter';
import FeaturedSection from '../components/FeaturedSection';
import CateringIntroSection from '../components/CateringIntroSection';
import BricksIntroSection from '../components/BricksIntroSection';

export default function HomePage({ activeFilter, onSelectFilter }) {
  return (
    <>
      {/* Page Title & Division Filter Pills */}
      <DivisionFilter 
        activeFilter={activeFilter} 
        onSelectFilter={onSelectFilter} 
      />

      {/* 3 Arched Capsule Cards (Bricks, Catering, Coming Soon with Hover Visit Animation) */}
      <FeaturedSection />

      {/* Introduction to Ela Catering Services */}
      <CateringIntroSection />

      {/* Introduction to Bricks Lounge */}
      <BricksIntroSection />
    </>
  );
}
