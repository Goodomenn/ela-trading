import React from 'react';
import QualityInspector from '../components/QualityInspector';
import ErrorBoundary from '../components/ErrorBoundary';

export default function QualitySpecsPage() {
  return (
    <div className="py-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <span className="font-mono text-xs text-terracotta-500 uppercase tracking-widest block mb-2">
          Agricultural Export Division
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-ink-900 tracking-tight">
          Export Quality &amp; Specifications
        </h1>
        <p className="font-typewriter text-xs text-ink-600 mt-2 max-w-xl mx-auto">
          Laboratory analytics, physical grade tolerances, and purity radar benchmarks for our East African export lots.
        </p>
      </div>

      <ErrorBoundary>
        <QualityInspector />
      </ErrorBoundary>
    </div>
  );
}
