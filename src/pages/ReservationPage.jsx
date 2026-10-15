import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarCheck, Star, CheckCircle, Clock, Users, Phone, Mail } from "lucide-react";

function Toast({ msg }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}
      className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 bg-[#080A0E] border border-[#E5C378] text-[#FAF6EE] px-6 py-4 shadow-2xl max-w-sm w-full rounded-sm" role="alert">
      <CheckCircle size={20} className="text-[#E5C378] flex-shrink-0" />
      <p className="font-sans text-sm font-medium">{msg}</p>
    </motion.div>
  );
}

const inputStyle = "w-full bg-[#141C1E] border border-[#C5A059]/50 text-[#FAF6EE] placeholder:text-[#FAF6EE]/40 font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#E5C378] focus:bg-[#182224] transition-colors rounded-sm";
const lblStyle   = "block text-xs tracking-widest text-[#E5C378] uppercase font-sans font-semibold mb-2";
const errStyle   = "text-amber-400 text-xs mt-1 font-sans font-medium";

function DiningForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = () => { setSent(true); reset(); setTimeout(() => setSent(false), 5000); };

  return (
    <>
      <AnimatePresence>{sent && <Toast msg="Reservation confirmed! Check your email for details." />}</AnimatePresence>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={lblStyle}>Full Name</label>
            <input {...register("name", { required: true })} placeholder="Jane Smith" className={inputStyle} />
            {errors.name && <p className={errStyle}>Name required</p>}
          </div>
          <div>
            <label className={lblStyle}>Email Address</label>
            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="jane@example.com" type="email" className={inputStyle} />
            {errors.email && <p className={errStyle}>Valid email required</p>}
          </div>
        </div>
        <div>
          <label className={lblStyle}>Phone (optional)</label>
          <input {...register("phone")} placeholder="+1 (555) 000-0000" type="tel" className={inputStyle} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={lblStyle}>Reservation Date</label>
            <input {...register("date", { required: true })} type="date" className={inputStyle} />
            {errors.date && <p className={errStyle}>Date required</p>}
          </div>
          <div>
            <label className={lblStyle}>Seating Time</label>
            <select {...register("time", { required: true })} className={inputStyle}>
              <option value="">Select time</option>
              {["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"].map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.time && <p className={errStyle}>Time required</p>}
          </div>
        </div>
        <div>
          <label className={lblStyle}>Number of Guests</label>
          <select {...register("guests", { required: true })} className={inputStyle}>
            <option value="">Select party size</option>
            {["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests", "7+ (Private Dining Room)"].map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          {errors.guests && <p className={errStyle}>Party size required</p>}
        </div>
        <div>
          <label className={lblStyle}>Special Requests &amp; Dietary Notes</label>
          <textarea {...register("notes")} rows={3} placeholder="Dietary requirements, anniversary celebration, seating preferences..." className={inputStyle + " resize-none"} />
        </div>
        <button type="submit" className="w-full btn-brick py-4 text-xs font-semibold flex items-center justify-center gap-2">
          <CalendarCheck size={16} /> Confirm Dining Reservation
        </button>
        <p className="text-xs text-[#6B5A52] text-center font-sans font-medium">⚡ Instant confirmation · Complimentary cancellation up to 24h</p>
      </form>
    </>
  );
}

function VIPForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = () => { setSent(true); reset(); setTimeout(() => setSent(false), 5000); };

  return (
    <>
      <AnimatePresence>{sent && <Toast msg="VIP booth request received! Our VIP host will contact you within 2 hours." />}</AnimatePresence>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={lblStyle}>Full Name</label>
            <input {...register("name", { required: true })} placeholder="Jane Smith" className={inputStyle} />
            {errors.name && <p className={errStyle}>Name required</p>}
          </div>
          <div>
            <label className={lblStyle}>Direct Phone</label>
            <input {...register("phone", { required: true })} placeholder="+1 (555) 000-0000" type="tel" className={inputStyle} />
            {errors.phone && <p className={errStyle}>Phone required</p>}
          </div>
        </div>
        <div>
          <label className={lblStyle}>Email Address</label>
          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="jane@example.com" type="email" className={inputStyle} />
          {errors.email && <p className={errStyle}>Valid email required</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={lblStyle}>Event Date (Fri or Sat)</label>
            <input {...register("date", { required: true })} type="date" className={inputStyle} />
            {errors.date && <p className={errStyle}>Date required</p>}
          </div>
          <div>
            <label className={lblStyle}>Party Size</label>
            <select {...register("party", { required: true })} className={inputStyle}>
              <option value="">Select size</option>
              {["2–4 Guests", "5–8 Guests", "9–15 Guests", "16+ (Full Venue / Mezzanine)"].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.party && <p className={errStyle}>Size required</p>}
          </div>
        </div>
        <div>
          <label className={lblStyle}>Booth Tier &amp; Bottle Service</label>
          <select {...register("package")} className={inputStyle}>
            <option value="">Select preference (optional)</option>
            <option value="Brick">Brick — 1 Premium Bottle + Mixers + Express Entry</option>
            <option value="Stone">Stone — 3 Bottles + Champagne Toast + Full Booth Service</option>
            <option value="Arch">Arch — 5 Bottles + Dedicated Host + Prime DJ Sightline</option>
            <option value="Custom">Custom — Curate Bespoke Experience</option>
          </select>
        </div>
        <div>
          <label className={lblStyle}>Special Requests &amp; DJ Lineup Inquiries</label>
          <textarea {...register("notes")} rows={3} placeholder="Celebrations, preferred spirits, DJ requests, security requirements..."
            className={inputStyle + " resize-none"} />
        </div>
        <button type="submit" className="w-full btn-brick py-4 text-xs font-semibold flex items-center justify-center gap-2">
          <Star size={16} fill="currentColor" /> Request VIP Booth Booking
        </button>
        <p className="text-xs text-[#6B5A52] text-center font-sans font-medium">🔒 Our private host confirms availability within 2 hours</p>
      </form>
    </>
  );
}

const policies = [
  { icon: Clock, title: "Dining Hours", body: "Tue–Sun 5:00 PM – 10:00 PM (Late-night lounge after 10 PM)" },
  { icon: Users, title: "Private Dining", body: "Private culinary journeys for 7+ guests. Contact us for custom menus." },
  { icon: Phone, title: "Direct Host", body: "+1 (555) 204-8800 · Daily concierge service 2 PM – 10 PM" },
  { icon: Mail,  title: "Email Concierge", body: "reservations@brickslounge.com" },
];

export default function ReservationPage() {
  const [activeTab, setActiveTab] = useState("dining");

  return (
    <main className="bg-[#080A0E] text-[#FAF6EE] min-h-screen">
      <Helmet>
        <title>Reservations &amp; VIP Booths | Bricks Lounge Miami</title>
        <meta
          name="description"
          content="Reserve your dining table or secure exclusive VIP bottle service booths at Bricks Lounge Miami. Direct booking with no third-party booking fees."
        />
        <meta
          name="keywords"
          content="Bricks Lounge reservations, table booking Miami, VIP bottle service Miami, fine dining reservations Miami"
        />
        <link rel="canonical" href="https://www.brickslounge.com/reservations" />
        <meta property="og:title" content="Reservations &amp; VIP Booths | Bricks Lounge Miami" />
        <meta
          property="og:description"
          content="Reserve your dining table or secure exclusive VIP bottle service booths at Bricks Lounge Miami."
        />
        <meta property="og:url" content="https://www.brickslounge.com/reservations" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.brickslounge.com/textures/brick.jpg" />
      </Helmet>

      {/* Hero */}
      <div className="relative pt-36 pb-20 overflow-hidden border-b border-[#E5C378]/25"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.85)" }} />
        <div className="section-inner relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-4 block">
            Direct Reservations
          </motion.span>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-wide mb-6 max-w-3xl mx-auto leading-tight text-[#FAF6EE]">
            Secure Your <span className="font-script text-5xl md:text-7xl font-normal italic" style={{ color: "#E5C378", textShadow: "0 0 18px rgba(229,195,120,0.35)" }}>Experience</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans text-sm md:text-base text-[#FAF6EE]/75 max-w-lg mx-auto leading-relaxed font-normal">
            Book directly with our host team with no third-party fees. Tables for fine dining and secluded booths for after-dark nightlife.
          </motion.p>
        </div>
      </div>

      {/* Form Section */}
      <section className="relative py-20"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.90)" }} />
        <div className="relative z-10 section-inner max-w-4xl mx-auto">
          {/* Toggle */}
          <div className="flex border border-[#E5C378]/40 mb-12 max-w-md mx-auto overflow-hidden rounded-sm p-1 bg-black/50">
            {[["dining", "🍽 Dining Reservation"], ["vip", "★ Private VIP Booth"]].map(([key, label]) => (
              <button key={key} onClick={() => setActiveTab(key)}
                className={`flex-1 py-3.5 text-xs tracking-widest uppercase font-sans font-semibold transition-all rounded-sm ${
                  activeTab === key
                    ? "text-[#1a0505] shadow-md"
                    : "text-[#FAF6EE]/70 hover:text-[#FAF6EE]"
                }`}
                style={activeTab === key ? {
                  background: "linear-gradient(135deg, #ECC880 0%, #C59B4E 100%)",
                } : {}}>
                {label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="p-8 md:p-12 rounded-sm relative overflow-hidden shadow-2xl"
              style={{
                backgroundColor: "#172022",
                border: "1.5px solid rgba(229,195,120,0.55)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.5), 0 0 20px rgba(229,195,120,0.12)"
              }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs tracking-widest text-[#E5C378] uppercase font-sans font-semibold">
                  {activeTab === "dining" ? "Fine Dining Service" : "VIP Lounge & Nightlife"}
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#FAF6EE] mb-2 tracking-wide">
                {activeTab === "dining" ? "Reserve a Dining Table" : "Request Private VIP Booth"}
              </h2>
              <p className="font-sans text-xs md:text-sm text-[#FAF6EE]/75 mb-8 pb-6 border-b border-[#C5A059]/30 font-normal leading-relaxed">
                {activeTab === "dining"
                  ? "Dinner service available Tuesday through Sunday from 5:00 PM to 10:00 PM."
                  : "Elevated booths with dedicated bottle service and prime live DJ sightlines — Fri & Sat, 10 PM till late."}
              </p>
              {activeTab === "dining" ? <DiningForm /> : <VIPForm />}
            </motion.div>
          </AnimatePresence>

          {/* Info Policies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
            {policies.map(({ icon: Icon, title, body }) => (
              <div key={title}
                className="p-5 rounded-sm flex gap-4 transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: "#172022",
                  border: "1.5px solid rgba(229,195,120,0.50)"
                }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    border: "1.5px solid #C5A059",
                    background: "rgba(197,160,89,0.18)",
                    color: "#E5C378"
                  }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h5 className="font-display font-bold text-sm text-[#FAF6EE] mb-1">{title}</h5>
                  <p className="font-sans text-xs text-[#FAF6EE]/75 leading-relaxed font-normal">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10">
            <Link to="/menu"
              className="font-sans text-xs tracking-widest uppercase font-semibold text-[#E5C378] hover:text-[#FAF6EE] transition-colors inline-flex items-center gap-2">
              ← View Our Full Culinary &amp; Drink Menu
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
