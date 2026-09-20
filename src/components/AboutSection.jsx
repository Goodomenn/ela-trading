import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Narrative (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <span className="font-mono text-xs font-bold text-terracotta-500 uppercase tracking-widest block">
            Company Heritage &amp; Vision
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-ink-900 tracking-tight">
            About Ela Trading PLC
          </h2>
          <p className="font-typewriter text-xs text-ink-800 leading-relaxed">
            Established with a commitment to quality, origin integrity, and agricultural excellence, <strong>Ela Trading PLC</strong> operates a fully integrated supply chain that spans direct farm cooperative sourcing, state-of-the-art cleaning, international maritime logistics, and high-end commercial hospitality.
          </p>
          <p className="font-typewriter text-[11px] text-ink-700 leading-relaxed">
            Our agricultural export division works in close partnership with regional farmer cooperatives across Yirgacheffe, Sidamo, Humera, and Tepi, ensuring fair pricing, sustainable cultivation practices, and complete batch traceability. Simultaneously, our lifestyle subsidiaries—including <strong>Bricks Lounge</strong> and <strong>Ela Catering Services</strong>—set the gold standard for hospitality in East Africa.
          </p>

          {/* Core Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 bg-cream-50 rounded-xl border border-cream-300 shadow-sm">
              <div className="font-display font-bold text-xs text-ink-900 mb-1">Direct Origin</div>
              <p className="font-typewriter text-[10.5px] text-ink-600">100% traceable sourcing from vetted farm cooperatives.</p>
            </div>
            <div className="p-3.5 bg-cream-50 rounded-xl border border-cream-300 shadow-sm">
              <div className="font-display font-bold text-xs text-ink-900 mb-1">Quality Rigor</div>
              <p className="font-typewriter text-[10.5px] text-ink-600">Multi-stage cleaning, Sortex optical sorting &amp; lab testing.</p>
            </div>
            <div className="p-3.5 bg-cream-50 rounded-xl border border-cream-300 shadow-sm">
              <div className="font-display font-bold text-xs text-ink-900 mb-1">Global Scale</div>
              <p className="font-typewriter text-[10.5px] text-ink-600">Delivering to 35+ international maritime ports smoothly.</p>
            </div>
          </div>
        </div>

        {/* Right Accreditations & Quality Card (5 Cols) */}
        <div className="lg:col-span-5 bg-cream-50 rounded-2xl p-6 border border-cream-300 shadow-lg space-y-4">
          <h3 className="font-display font-bold text-lg text-ink-900 border-b border-cream-300 pb-3">
            Certifications &amp; Trade Compliance
          </h3>
          <p className="font-typewriter text-[11px] text-ink-700 leading-relaxed">
            Ela Trading PLC maintains strict adherence to global food safety, phytosanitary standards, and corporate governance frameworks.
          </p>

          <div className="space-y-2.5 font-typewriter text-[11px]">
            <div className="flex items-center justify-between p-2.5 bg-cream-200/70 rounded-lg border border-cream-300">
              <span className="font-bold text-ink-900">ISO 22000 Food Safety</span>
              <span className="font-mono text-terracotta-600 font-bold">Certified</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-cream-200/70 rounded-lg border border-cream-300">
              <span className="font-bold text-ink-900">Phytosanitary Certification</span>
              <span className="font-mono text-terracotta-600 font-bold">Accredited</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-cream-200/70 rounded-lg border border-cream-300">
              <span className="font-bold text-ink-900">USDA / EU Organic</span>
              <span className="font-mono text-terracotta-600 font-bold">Verified</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-cream-200/70 rounded-lg border border-cream-300">
              <span className="font-bold text-ink-900">HACCP Hygiene</span>
              <span className="font-mono text-terracotta-600 font-bold">Compliant</span>
            </div>
          </div>

          <div className="pt-1">
            <a 
              href="#contact" 
              className="inline-block w-full py-2.5 rounded-xl bg-ink-900 text-cream-100 font-display font-bold text-[11px] text-center hover:bg-terracotta-500 transition shadow"
            >
              Request Documentation &amp; Certificates ➔
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
