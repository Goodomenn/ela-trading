import React, { useState } from 'react';

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'commodity',
    volume: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-cream-200/60 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info & Venture Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs font-bold text-terracotta-500 uppercase tracking-widest block mb-1">
                Global Desk &amp; Venue Booking
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-ink-900">
                Contact Ela Trading PLC
              </h2>
              <p className="font-typewriter text-xs text-ink-700 mt-2">
                Connect with our international trade desk for commodity quotations or inquire directly regarding our hospitality subsidiaries.
              </p>
            </div>

            {/* Direct Office Cards */}
            <div className="space-y-4 font-typewriter text-xs">
              <div className="bg-cream-50 p-6 rounded-2xl border border-cream-300 shadow-sm">
                <h4 className="font-display font-bold text-ink-900 text-sm mb-2">📍 Corporate Headquarters</h4>
                <p className="text-ink-700">Ela Trading PLC Building, Bole Sub-City</p>
                <p className="text-ink-700">Addis Ababa, Ethiopia</p>
                <p className="text-ink-600 mt-3">📞 Phone: +251 11 6XX XXXX / +251 91 1XX XXXX</p>
                <p className="text-ink-600">✉️ Trade Inquiry: info@elatradingplc.com</p>
              </div>

              <div className="bg-cream-50 p-6 rounded-2xl border border-cream-300 shadow-sm">
                <h4 className="font-display font-bold text-ink-900 text-sm mb-2">🍸 Hospitality &amp; Venue Contacts</h4>
                <div className="space-y-3 mt-3">
                  <div className="flex justify-between items-center border-b border-cream-300 pb-2">
                    <div>
                      <span className="font-bold text-ink-900 block">Bricks Lounge</span>
                      <span className="text-ink-600 text-[11px]">VIP Table Reservations &amp; Events</span>
                    </div>
                    <a 
                      href="https://brickslounge.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-1.5 border border-ink-800 rounded font-mono text-[10px] font-bold uppercase hover:bg-ink-900 hover:text-cream-100 transition"
                    >
                      Website ↗
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-ink-900 block">Ela Catering Services</span>
                      <span className="text-ink-600 text-[11px]">Banquets &amp; Corporate Catering</span>
                    </div>
                    <a 
                      href="https://elacatering.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-1.5 border border-ink-800 rounded font-mono text-[10px] font-bold uppercase hover:bg-ink-900 hover:text-cream-100 transition"
                    >
                      Website ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic RFQ / Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-cream-50 p-8 sm:p-10 rounded-3xl border border-cream-300 shadow-md">
            <h3 className="font-display font-black text-2xl text-ink-900 mb-1">Request a Quote or Send Inquiry</h3>
            <p className="font-typewriter text-xs text-ink-600 mb-6">
              Complete the form below and our international trade desk or venue managers will respond within 24 hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 font-typewriter text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-ink-800 mb-1.5">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className="w-full bg-cream-100 border border-cream-300 rounded-lg p-3 text-ink-900 focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 focus:outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-ink-800 mb-1.5">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@company.com" 
                      className="w-full bg-cream-100 border border-cream-300 rounded-lg p-3 text-ink-900 focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 focus:outline-none" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-ink-800 mb-1.5">Inquiry Category *</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full bg-cream-100 border border-cream-300 rounded-lg p-3 text-ink-900 focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 focus:outline-none"
                    >
                      <option value="commodity">Agro-Commodity Export (Spices, Coffee, Oilseeds)</option>
                      <option value="import">Import Procurement &amp; Sourcing</option>
                      <option value="bricks">Bricks Lounge (VIP Table / Nightlife Reservation)</option>
                      <option value="catering">Ela Catering Services (Diplomatic / Banquet Inquiry)</option>
                      <option value="general">General Partnership / Corporate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-ink-800 mb-1.5">Estimated Volume / Event Date</label>
                    <input 
                      type="text" 
                      value={formData.volume}
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                      placeholder="e.g. 10 FCL Containers or Oct 25 Gala" 
                      className="w-full bg-cream-100 border border-cream-300 rounded-lg p-3 text-ink-900 focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 focus:outline-none" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-ink-800 mb-1.5">Detailed Message / Specifications *</label>
                  <textarea 
                    rows="4" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Specify target commodity grade, required port of destination (FOB/CIF), or catering specifications..." 
                    className="w-full bg-cream-100 border border-cream-300 rounded-lg p-3 text-ink-900 focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 focus:outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-terracotta-500 text-cream-100 font-display font-black text-sm uppercase tracking-wider hover:bg-terracotta-600 transition shadow-md"
                >
                  Submit Inquiry ➔
                </button>
              </form>
            ) : (
              <div className="p-6 bg-cream-200 border border-terracotta-500/40 rounded-xl text-center font-typewriter text-xs text-terracotta-600 font-bold space-y-2">
                <p className="text-sm font-display text-ink-900">Thank you, {formData.name || 'Partner'}!</p>
                <p>Your message has been routed to the appropriate division at Ela Trading PLC. We will respond within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-3 inline-block underline text-ink-800 hover:text-terracotta-600 font-mono"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
