import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown } from "lucide-react";

const faqs = [
  { q: "Can I book the venue for a private event or celebration?", a: "Absolutely. Bricks Lounge offers bespoke private dining buyouts and full venue takeovers for celebrations, corporate entertaining, and milestone gatherings. Contact our concierge at reservations@brickslounge.com for a custom proposal." },
  { q: "What is the dress code?",                                   a: "Upscale fashionable to elegant chic. We celebrate personal style that complements our refined atmosphere. Athletic sportswear, beachwear, and flip-flops are strictly prohibited." },
  { q: "How do your culinary traditions blend with modern dining?", a: "Our executive kitchen crafts a one-of-a-kind harmony between authentic Ethiopian spice architecture (such as artisanal niter kibbeh, mitmita, and berbere) and world-class French and international culinary methods." },
  { q: "What are your VIP Booth minimums and bottle service options?", a: "VIP booths feature dedicated tableside service, premium spirits, vintage champagnes, and prime sightlines of the live DJ stage. Inquire directly or request a reservation online." },
  { q: "Is valet parking available?",                              a: "Valet parking is available at our main entrance Tuesday through Sunday from 5:00 PM until close. Complimentary for VIP booth patrons." },
];

const subjectOptions = ["Dining Reservations", "Private VIP Booths", "Private Events & Buyouts", "Press & Media Inquiries", "General Inquiries"];

const fadeUp = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E5C378]/35 rounded-sm overflow-hidden bg-black/40 transition-colors hover:border-[#E5C378]/60">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#E5C378]/10 transition-colors">
        <span className="font-display font-bold text-sm md:text-base text-[#FAF6EE]">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="text-[#E5C378] flex-shrink-0" size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-6 pb-5 text-[#FAF6EE]/75 font-sans text-xs md:text-sm leading-relaxed font-normal">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  function onSubmit(data) {
    console.log("Contact form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <main className="bg-[#080A0E] text-[#FAF6EE] min-h-screen">
      <Helmet>
        <title>Contact &amp; Location | Bricks Lounge Miami</title>
        <meta
          name="description"
          content="Contact Bricks Lounge in Miami. Reach our host team for dinner reservations, private VIP booth inquiries, venue buyouts, and directions."
        />
        <meta
          name="keywords"
          content="contact Bricks Lounge, Miami private events venue, Bricks Lounge address, VIP booths Miami"
        />
        <link rel="canonical" href="https://www.brickslounge.com/contact" />
        <meta property="og:title" content="Contact &amp; Location | Bricks Lounge Miami" />
        <meta
          property="og:description"
          content="Contact Bricks Lounge in Miami for reservations, private booths, and venue buyouts."
        />
        <meta property="og:url" content="https://www.brickslounge.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.brickslounge.com/textures/brick.jpg" />
      </Helmet>

      {/* ─── HERO ─── */}
      <div className="relative pt-36 pb-20 overflow-hidden border-b border-[#E5C378]/25"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.85)" }} />
        <div className="section-inner relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-4 block">
            Concierge &amp; Private Inquiries
          </motion.span>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-wide mb-6 max-w-3xl mx-auto leading-tight text-[#FAF6EE]">
            We&apos;d Love to <span className="font-script text-5xl md:text-7xl font-normal italic" style={{ color: "#E5C378", textShadow: "0 0 18px rgba(229,195,120,0.35)" }}>Connect</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans text-sm md:text-base text-[#FAF6EE]/75 max-w-xl mx-auto leading-relaxed font-normal">
            Whether inquiring about an upcoming dinner, securing a private VIP booth, or curating a corporate buyout, our concierge is at your service.
          </motion.p>
        </div>
      </div>

      {/* ─── DETAILS + FORM ─── */}
      <section className="relative py-20"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.90)" }} />
        <div className="section-inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT — Contact details */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="p-8 md:p-10 rounded-sm shadow-2xl flex flex-col justify-between"
              style={{
                backgroundColor: "#172022",
                border: "1.5px solid rgba(229,195,120,0.55)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.5), 0 0 20px rgba(229,195,120,0.12)"
              }}>
              <div>
                <span className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-2 block">
                  Find Us in Miami
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#FAF6EE] mb-8 tracking-wide">
                  Direct Contact &amp; Hours
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ border: "1.5px solid #C5A059", background: "rgba(197,160,89,0.18)", color: "#E5C378" }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-[#FAF6EE] text-base mb-1">Location</p>
                      <p className="text-[#FAF6EE]/75 text-xs md:text-sm font-normal leading-relaxed">
                        14 Velvet Boulevard<br />Miami, FL 33101 (Valet Parking Available)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ border: "1.5px solid #C5A059", background: "rgba(197,160,89,0.18)", color: "#E5C378" }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-[#FAF6EE] text-base mb-1">Direct Phone</p>
                      <a href="tel:+15552048800" className="text-[#E5C378] hover:text-[#FAF6EE] font-sans text-sm font-semibold transition-colors">
                        +1 (555) 204-8800
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ border: "1.5px solid #C5A059", background: "rgba(197,160,89,0.18)", color: "#E5C378" }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-[#FAF6EE] text-base mb-1">Email Inquiries</p>
                      <div className="space-y-1 font-sans text-xs md:text-sm">
                        <p className="text-[#FAF6EE]/75 font-normal"><strong className="text-[#FAF6EE]">Dining:</strong> reservations@brickslounge.com</p>
                        <p className="text-[#FAF6EE]/75 font-normal"><strong className="text-[#FAF6EE]">VIP Booths:</strong> vip@brickslounge.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ border: "1.5px solid #C5A059", background: "rgba(197,160,89,0.18)", color: "#E5C378" }}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-[#FAF6EE] text-base mb-1">Operating Hours</p>
                      <div className="space-y-1 font-sans text-xs md:text-sm text-[#FAF6EE]/75 font-normal">
                        <p><strong className="text-[#FAF6EE]">Tue – Thu:</strong> 5:00 PM – 1:00 AM</p>
                        <p><strong className="text-[#FAF6EE]">Fri – Sat:</strong> 5:00 PM – 3:00 AM (VIP Lounge from 10 PM)</p>
                        <p><strong className="text-[#FAF6EE]">Sunday:</strong> 5:00 PM – Midnight</p>
                        <p><strong className="text-[#FAF6EE]">Monday:</strong> Closed for private events</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="p-8 md:p-10 rounded-sm shadow-2xl relative overflow-hidden"
                style={{
                  backgroundColor: "#172022",
                  border: "1.5px solid rgba(229,195,120,0.55)",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.5), 0 0 20px rgba(229,195,120,0.12)"
                }}>
                <span className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-2 block">
                  Get in Touch
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#FAF6EE] mb-6 tracking-wide">
                  Send a Message
                </h2>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-16 text-center">
                      <CheckCircle className="text-[#E5C378] mb-4" size={52} />
                      <h3 className="font-display font-bold text-xl text-[#FAF6EE] mb-2">Message Received</h3>
                      <p className="font-sans text-xs md:text-sm text-[#FAF6EE]/75 max-w-xs font-normal">Thank you for reaching out. Our concierge will respond to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-sans uppercase tracking-widest text-[#E5C378] font-semibold mb-1.5">Full Name</label>
                          <input {...register("name", { required: "Name is required" })} placeholder="Your full name"
                            className="w-full bg-[#141C1E] border border-[#C5A059]/50 rounded-sm px-4 py-3 text-xs md:text-sm text-[#FAF6EE] placeholder:text-[#FAF6EE]/40 focus:outline-none focus:border-[#E5C378] focus:bg-[#182224] transition-colors" />
                          {errors.name && <p className="text-amber-400 text-xs mt-1 font-sans">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-sans uppercase tracking-widest text-[#E5C378] font-semibold mb-1.5">Email Address</label>
                          <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })} placeholder="you@example.com"
                            className="w-full bg-[#141C1E] border border-[#C5A059]/50 rounded-sm px-4 py-3 text-xs md:text-sm text-[#FAF6EE] placeholder:text-[#FAF6EE]/40 focus:outline-none focus:border-[#E5C378] focus:bg-[#182224] transition-colors" />
                          {errors.email && <p className="text-amber-400 text-xs mt-1 font-sans">{errors.email.message}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-sans uppercase tracking-widest text-[#E5C378] font-semibold mb-1.5">Inquiry Subject</label>
                        <select {...register("subject", { required: true })}
                          className="w-full bg-[#141C1E] border border-[#C5A059]/50 rounded-sm px-4 py-3 text-xs md:text-sm text-[#FAF6EE] focus:outline-none focus:border-[#E5C378] transition-colors">
                          <option value="">Select subject…</option>
                          {subjectOptions.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.subject && <p className="text-amber-400 text-xs mt-1 font-sans">Please select a subject</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-sans uppercase tracking-widest text-[#E5C378] font-semibold mb-1.5">Your Message</label>
                        <textarea {...register("message", { required: "Message is required", minLength: { value: 15, message: "Please provide a little more detail" } })} rows={4} placeholder="How can our concierge assist you?"
                          className="w-full bg-[#141C1E] border border-[#C5A059]/50 rounded-sm px-4 py-3 text-xs md:text-sm text-[#FAF6EE] placeholder:text-[#FAF6EE]/40 focus:outline-none focus:border-[#E5C378] focus:bg-[#182224] transition-colors resize-none" />
                        {errors.message && <p className="text-amber-400 text-xs mt-1 font-sans">{errors.message.message}</p>}
                      </div>
                      <button type="submit" className="btn-brick w-full flex items-center justify-center gap-2 py-3.5 text-xs font-semibold">
                        <Send size={15} /> Send Message
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MAP / LOCATION CARD ─── */}
      <section className="relative py-20 border-t border-[#E5C378]/20"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.92)" }} />
        <div className="section-inner relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative h-72 md:h-96 rounded-sm overflow-hidden border border-[#E5C378]/40 shadow-2xl bg-[#080A0E]">
              {/* Subtle gold grid */}
              <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C5A059" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              {/* Pin */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
                  <MapPin className="text-[#E5C378] drop-shadow-xl" size={48} />
                </motion.div>
                <div className="text-center">
                  <p className="font-display font-bold text-[#FAF6EE] text-lg">14 Velvet Boulevard</p>
                  <p className="font-sans text-[#FAF6EE]/75 text-xs md:text-sm">Miami, FL 33101 · Dedicated Valet Entrance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative py-20 border-t border-[#E5C378]/20"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.90)" }} />
        <div className="section-inner relative z-10 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="text-center mb-14">
              <span className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-3 block">
                Quick Answers
              </span>
              <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-5" />
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-[#FAF6EE]">
                Frequently Asked <span className="font-script text-4xl md:text-6xl font-normal italic" style={{ color: "#E5C378" }}>Questions</span>
              </h2>
            </div>
            <motion.div variants={fadeUp} className="space-y-4">
              {faqs.map(item => <FaqItem key={item.q} {...item} />)}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}