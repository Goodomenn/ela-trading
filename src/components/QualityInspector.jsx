import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { COMMODITY_DATA } from '../data/commoditiesData';

export default function QualityInspector() {
  const [selectedKey, setSelectedKey] = useState('coffee');
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const activeData = COMMODITY_DATA[selectedKey];

  useEffect(() => {
    if (!chartRef.current || !activeData) return;

    // Ensure any existing chart attached to this canvas is destroyed first
    try {
      const existing = Chart.getChart(chartRef.current);
      if (existing) {
        existing.destroy();
      }
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    } catch (e) {
      console.warn('Chart cleanup warning:', e);
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    try {
      chartInstance.current = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: activeData.labels,
          datasets: [
            {
              label: 'Ela Trading Export Grade',
              data: activeData.values,
              backgroundColor: 'rgba(220, 93, 69, 0.25)',
              borderColor: '#DC5D45',
              borderWidth: 2,
              pointBackgroundColor: '#DC5D45',
              pointBorderColor: '#FAF5EC',
              pointHoverBackgroundColor: '#FAF5EC',
              pointHoverBorderColor: '#DC5D45'
            },
            {
              label: 'Standard Market Baseline',
              data: activeData.baselines,
              backgroundColor: 'rgba(113, 135, 114, 0.15)',
              borderColor: '#718772',
              borderWidth: 1.5,
              borderDash: [4, 4],
              pointBackgroundColor: '#718772'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { color: 'rgba(25, 50, 56, 0.12)' },
              grid: { color: 'rgba(25, 50, 56, 0.12)' },
              ticks: { display: false },
              suggestedMin: 0,
              suggestedMax: 10,
              pointLabels: {
                color: '#193238',
                font: {
                  family: '"Space Mono", monospace',
                  size: 10
                }
              }
            }
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 12,
                color: '#193238',
                font: {
                  family: '"Courier Prime", monospace',
                  size: 11
                }
              }
            }
          }
        }
      });
    } catch (err) {
      console.error('Failed to initialize radar chart:', err);
    }

    return () => {
      try {
        if (chartInstance.current) {
          chartInstance.current.destroy();
          chartInstance.current = null;
        }
      } catch (e) {
        // ignore cleanup error
      }
    };
  }, [activeData]);

  return (
    <section id="commodities" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-cream-300 pb-6 mb-8">
        <div>
          <span className="font-mono text-xs text-terracotta-500 uppercase tracking-widest block mb-1">
            Laboratory Analytics
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink-900 tracking-tight">
            Commodity Quality Inspector
          </h2>
          <p className="font-typewriter text-xs text-ink-600 mt-2 max-w-xl">
            Select a commodity lot below to inspect grade standards, physical tolerances, and export testing benchmarks against international import criteria.
          </p>
        </div>

        {/* Commodity Selector Tab Buttons */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(COMMODITY_DATA).map(([key, item]) => {
            const labelsMap = {
              coffee: "Coffee Beans",
              sesame: "Sesame Seeds",
              turmeric: "Turmeric & Spices",
              pulses: "Pulses & Beans"
            };
            const isSelected = selectedKey === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`px-4 py-2 text-xs font-mono font-bold rounded border border-ink-800 transition shadow-sm ${
                  isSelected
                    ? 'bg-ink-900 text-cream-100'
                    : 'text-ink-800 hover:bg-ink-900 hover:text-cream-100'
                }`}
              >
                {labelsMap[key]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Grid: Technical Table + Chart.js Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Commodity Specs Details & Table (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Title & Summary Card */}
          <div className="bg-cream-50 p-6 rounded-2xl border border-cream-300 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="font-display font-black text-2xl text-ink-900">
                  {activeData.name}
                </h3>
                <span className="font-typewriter text-xs text-ink-600 block mt-1">
                  {activeData.origin}
                </span>
              </div>
              <span className="px-3 py-1 bg-terracotta-500/15 text-terracotta-600 rounded text-xs font-mono font-bold self-start">
                {activeData.grade}
              </span>
            </div>
            <p className="font-typewriter text-xs text-ink-700 mt-4 leading-relaxed">
              {activeData.desc}
            </p>
          </div>

          {/* Technical Parameter Table */}
          <div className="bg-cream-50 rounded-2xl border border-cream-300 overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs font-typewriter">
              <thead>
                <tr className="bg-cream-200 text-ink-900 font-bold border-b border-cream-300">
                  <th className="p-3.5">Parameter</th>
                  <th className="p-3.5">Export Specification Standard</th>
                  <th className="p-3.5">Testing Protocol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-300/70 text-ink-800">
                {activeData.table.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-3.5 font-bold text-ink-900">{row.param}</td>
                    <td className="p-3.5 text-terracotta-600 font-bold">{row.spec}</td>
                    <td className="p-3.5 text-ink-600">{row.std}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Right: Chart.js Radar Visualization (5 cols) */}
        <div className="lg:col-span-5 bg-cream-50 p-6 sm:p-8 rounded-3xl border border-cream-300 shadow-md flex flex-col items-center">
          <span className="font-mono text-xs font-bold text-terracotta-500 uppercase tracking-wider mb-2">
            Export Purity vs Baseline Criteria
          </span>
          <div className="chart-container">
            <canvas ref={chartRef}></canvas>
          </div>
          <p className="font-typewriter text-[11px] text-ink-600 text-center mt-3 italic">
            Guaranteed compliance against international import tolerances (EU, US FDA, EFSA).
          </p>
        </div>

      </div>

      {/* Fine Dotted Horizontal Divider */}
      <div className="border-paper-dotted mt-16" />
    </section>
  );
}
