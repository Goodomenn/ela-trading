import React from 'react';
import FeaturedSection from '../components/FeaturedSection';
import CateringIntroSection from '../components/CateringIntroSection';
import BricksIntroSection from '../components/BricksIntroSection';

export default function HomePage() {
  return (
    <>
      {/* 3 Arched Capsule Cards (Bricks Lounge, Ela Catering, Coming Soon) */}
      <FeaturedSection />

      {/* Introduction to Ela Catering Services */}
      <CateringIntroSection />

      {/* Introduction to Bricks Lounge */}
      <BricksIntroSection />
    </>
  );
}
