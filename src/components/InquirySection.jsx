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
    <section id="contact" className="py-12 bg-cream-200/50 border-t border-cream-300 rounded-3xl my-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Info & Venture Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-mono text-xs font-bold text-terracotta-500 uppercase tracking-widest block mb-1">
                Global Desk &amp; Venue Booking
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-ink-900">
                Contact Ela Trading
              </h2>
              <p className="font-typewriter text-[11px] text-ink-700 mt-1.5 leading-relaxed">
                Connect with our trade desk for commodity lots or inquire regarding our hospitality venues.
              </p>
            </div>

            {/* Direct Office Cards */}
            <div className="space-y-3 font-typewriter text-[11px]">
              <div className="bg-cream-50 p-4 sm:p-5 rounded-2xl border border-cream-300 shadow-sm">
                <h4 className="font-display font-bold text-ink-900 text-xs mb-1.5">📍 Corporate Headquarters</h4>
                <p className="text-ink-700">Ela Trading PLC Building, Bole Sub-City</p>
                <p className="text-ink-700">Addis Ababa, Ethiopia</p>
                <p className="text-ink-600 mt-2">📞 Phone: +251 11 6XX XXXX</p>
                <p className="text-ink-600">✉️ Trade: info@elatradingplc.com</p>
              </div>

              <div className="bg-cream-50 p-4 sm:p-5 rounded-2xl border border-cream-300 shadow-sm">
                <h4 className="font-display font-bold text-ink-900 text-xs mb-1.5">🍸 Hospitality Contacts</h4>
                <div className="space-y-2 mt-2">
                  <div className="flex justify-between items-center border-b border-cream-300 pb-1.5">
                    <div>
                      <span className="font-bold text-ink-900 block">Bricks Lounge</span>
                      <span className="text-ink-600 text-[10px]">VIP Table Reservations</span>
                    </div>
                    <a 
                      href="https://minnnn.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-2.5 py-1 border border-ink-800 rounded font-mono text-[9px] font-bold uppercase hover:bg-ink-900 hover:text-cream-100 transition"
                    >
                      Website ↗
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-ink-900 block">Ela Catering</span>
                      <span className="text-ink-600 text-[10px]">Banqueting &amp; Corporate</span>
                    </div>
                    <a 
                      href="https://ela-catering.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-2.5 py-1 border border-ink-800 rounded font-mono text-[9px] font-bold uppercase hover:bg-ink-900 hover:text-cream-100 transition"
                    >
                      Website ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic RFQ / Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-cream-50 p-6 sm:p-8 rounded-2xl border border-cream-300 shadow-md">
            <h3 className="font-display font-black text-xl sm:text-2xl text-ink-900 mb-1">Request a Quote / Inquiry</h3>
            <p className="font-typewriter text-[11px] text-ink-600 mb-5">
              Complete the form below and our managers will respond within 24 hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3.5 font-typewriter text-[11px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-ink-800 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className="w-full bg-cream-100 border border-cream-300 rounded-lg p-2.5 text-ink-900 focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 focus:outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-ink-800 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@company.com" 
                      className="w-full bg-cream-100 border border-cream-300 rounded-lg p-2.5 text-ink-900 focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 focus:outline-none" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-ink-800 mb-1">Category *</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full bg-cream-100 border border-cream-300 rounded-lg p-2.5 text-ink-900 focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 focus:outline-none"
                    >
                      <option value="commodity">Agro-Commodity Export</option>
                      <option value="import">Import Procurement</option>
                      <option value="bricks">Bricks Lounge (VIP Table)</option>
                      <option value="catering">Ela Catering (Banquet Inquiry)</option>
                      <option value="general">Corporate Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-ink-800 mb-1">Estimated Volume / Date</label>
                    <input 
                      type="text" 
                      value={formData.volume}
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                      placeholder="e.g. 10 FCL or Oct 25" 
                      className="w-full bg-cream-100 border border-cream-300 rounded-lg p-2.5 text-ink-900 focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 focus:outline-none" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-ink-800 mb-1">Specifications *</label>
                  <textarea 
                    rows="3" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Specify target commodity grade, destination port, or requirements..." 
                    className="w-full bg-cream-100 border border-cream-300 rounded-lg p-2.5 text-ink-900 focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 focus:outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 rounded-xl bg-terracotta-500 text-cream-100 font-display font-black text-xs uppercase tracking-wider hover:bg-terracotta-600 transition shadow-md"
                >
                  Submit Inquiry ➔
                </button>
              </form>
            ) : (
              <div className="p-5 bg-cream-200 border border-terracotta-500/40 rounded-xl text-center font-typewriter text-xs text-terracotta-600 font-bold space-y-1.5">
                <p className="text-sm font-display text-ink-900">Thank you, {formData.name || 'Partner'}!</p>
                <p>Your message has been routed to the appropriate division at Ela Trading PLC.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-2 inline-block underline text-ink-800 hover:text-terracotta-600 font-mono text-[10.5px]"
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
