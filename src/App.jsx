import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SubsidiariesPage from './pages/SubsidiariesPage';
import QualitySpecsPage from './pages/QualitySpecsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const handleSelectFilter = (filterKey) => {
    setActiveFilter(filterKey);
    if (filterKey === 'export') {
      navigate('/commodities');
    } else if (filterKey === 'hospitality') {
      navigate('/subsidiaries');
    } else if (filterKey === 'import') {
      navigate('/commodities');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative font-sans bg-[#FAF5EC] text-[#193238]">
      {/* Background Subtle Texture */}
      <div className="fixed inset-0 paper-texture pointer-events-none z-0" />

      {/* Top Header (Clean Nav, No Utility Line) */}
      <Header />

      {/* Main Content with Generous Margins */}
      <main className="flex-grow relative z-10 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                activeFilter={activeFilter} 
                onSelectFilter={handleSelectFilter} 
              />
            } 
          />
          <Route path="/subsidiaries" element={<SubsidiariesPage />} />
          <Route path="/commodities" element={<QualitySpecsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route 
            path="*" 
            element={
              <HomePage 
                activeFilter={activeFilter} 
                onSelectFilter={handleSelectFilter} 
              />
            } 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
