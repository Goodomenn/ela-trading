import React, { useState } from 'react';
import Header from './components/Header';
import HowToTrade from './components/HowToTrade';
import DivisionFilter from './components/DivisionFilter';
import FeaturedSection from './components/FeaturedSection';
import SpecialsSection from './components/SpecialsSection';
import ShareablesSection from './components/ShareablesSection';
import QualityInspector from './components/QualityInspector';
import SubsidiariesSection from './components/SubsidiariesSection';
import AboutSection from './components/AboutSection';
import InquirySection from './components/InquirySection';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSelectFilter = (filterKey) => {
    setActiveFilter(filterKey);
    if (filterKey === 'export') {
      document.getElementById('specials')?.scrollIntoView({ behavior: 'smooth' });
    } else if (filterKey === 'hospitality') {
      document.getElementById('shareables')?.scrollIntoView({ behavior: 'smooth' });
    } else if (filterKey === 'import') {
      document.getElementById('commodities')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative font-sans bg-[#FAF5EC] text-[#193238]">
      {/* Background Subtle Texture */}
      <div className="fixed inset-0 paper-texture pointer-events-none z-0" />

      {/* Top Header */}
      <Header />

      <main className="flex-grow relative z-10">
        {/* 3-Step Process Ribbon */}
        <HowToTrade />

        {/* Page Title & Division Filter Pills */}
        <DivisionFilter 
          activeFilter={activeFilter} 
          onSelectFilter={handleSelectFilter} 
        />

        {/* 5 Capsule Cards Row */}
        <FeaturedSection />

        {/* Specials (Agro-Export Showcase) */}
        <SpecialsSection />

        {/* Shareables (Hospitality Showcase) */}
        <ShareablesSection />

        {/* Technical Quality Inspector & Chart.js Radar */}
        <ErrorBoundary>
          <QualityInspector />
        </ErrorBoundary>

        {/* Subsidiary Highlights: Bricks Lounge & Ela Catering */}
        <SubsidiariesSection />

        {/* Company Profile & Certifications */}
        <AboutSection />

        {/* Inquiry & RFQ Form */}
        <InquirySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
