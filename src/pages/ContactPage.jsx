import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  { q: "Can I book the venue for a private event?",    a: "Absolutely. Bricks Lounge offers full and partial venue buyouts for corporate events, brand activations, milestone dinners, and more. Contact our events team at hello@brickslounge.com for a bespoke quote." },
  { q: "What is the dress code?",                     a: "Smart-casual to upscale. We love seeing our guests dress for the occasion — think elegant and expressive. Sportswear and flip-flops are kindly discouraged." },
  { q: "Do you accommodate dietary requirements?",    a: "Yes. Our kitchen caters to vegetarian, vegan, gluten-free, and most allergen-related requirements with advance notice. Please note your needs when reserving or email us beforehand." },
  { q: "Is parking available?",                       a: "Valet parking is available Wednesday through Sunday from 6 PM. There is also a public garage on 2nd Avenue, a short walk from the restaurant." },
  { q: "Do you sell gift cards?",                     a: "We do! Bricks Lounge gift cards are available in any denomination at the host stand or online. They make perfect presents for any food lover." },
];

const subjectOptions = ["General Inquiry", "Reservations", "Private Events", "Press & Media", "Feedback", "Careers"];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-bl-brick/20 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-bl-elevated transition-colors">
        <span className="font-medium text-bl-cream">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="text-bl-brick flex-shrink-0" size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-6 pb-5 text-bl-muted text-sm leading-relaxed">{a}</p>
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
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <main className="bg-bl-brick-bg text-bl-cream min-h-screen">
      <Helmet>
        <title>Contact, Location &amp; Private Events | Bricks Lounge Miami</title>
        <meta
          name="description"
          content="Contact Bricks Lounge on Velvet Boulevard, Miami. Reach our team for table inquiries, private dining buyouts, press inquiries, valet parking info, and directions."
        />
        <meta
          name="keywords"
          content="contact Bricks Lounge, Miami private events venue, Bricks Lounge address, Velvet Boulevard Miami, venue buyout Miami"
        />
        <link rel="canonical" href="https://www.brickslounge.com/contact" />
        <meta property="og:title" content="Contact, Location &amp; Private Events | Bricks Lounge Miami" />
        <meta
          property="og:description"
          content="Contact Bricks Lounge on Velvet Boulevard, Miami. Reach our team for table inquiries, private dining buyouts, press inquiries, valet parking info, and directions."
        />
        <meta property="og:url" content="https://www.brickslounge.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.brickslounge.com/textures/brick.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact, Location &amp; Private Events | Bricks Lounge Miami" />
        <meta
          name="twitter:description"
          content="Contact Bricks Lounge on Velvet Boulevard, Miami. Reach our team for table inquiries, private dining buyouts, press inquiries, valet parking info, and directions."
        />
        <meta name="twitter:image" content="https://www.brickslounge.com/textures/brick.jpg" />
      </Helmet>
      {/* ─── HERO ─── */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-bl-brick/30">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/70 to-black/82" />
        <div className="section-inner relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="section-label mb-4">
            Get in Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            We&apos;d Love to Hear from You
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65, delay: 0.25 }} className="text-bl-muted text-lg max-w-xl mx-auto">
            Whether you have a question, a special request, or just want to say hello — our team is here.
          </motion.p>
        </div>
      </div>

      {/* ─── DETAILS + FORM ─── */}
      <section className="relative py-20">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/textures/wood.jpg')", backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="section-inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* LEFT — Contact details */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-10">
              <motion.div variants={fadeUp}>
                <p className="section-label mb-3">Find Us</p>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-bl-brick/15 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="text-bl-brick" size={18} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-bl-muted text-sm leading-relaxed">14 Velvet Boulevard<br />Miami, FL 33101</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-bl-brick/15 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="text-bl-brick" size={18} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+15552048800" className="text-bl-muted hover:text-bl-cream text-sm transition-colors">+1 555 204-8800</a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-bl-brick/15 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="text-bl-brick" size={18} />
                </div>
                <div>
                  <p className="font-semibold mb-2">Email</p>
                  <div className="space-y-1.5">
                    {[["General", "hello@brickslounge.com"], ["Reservations", "reservations@brickslounge.com"], ["Press", "press@brickslounge.com"]].map(([label, email]) => (
                      <div key={email} className="flex items-center gap-2 text-sm">
                        <span className="text-bl-dimmed w-24">{label}</span>
                        <a href={`mailto:${email}`} className="text-bl-muted hover:text-bl-cream transition-colors">{email}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-bl-brick/15 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="text-bl-brick" size={18} />
                </div>
                <div>
                  <p className="font-semibold mb-2">Hours</p>
                  <div className="space-y-1.5 text-sm">
                    {[["Tue – Thu", "5 PM – 1 AM"], ["Fri – Sat", "5 PM – 3 AM"], ["Sunday", "5 PM – Midnight"], ["Monday", "Closed"]].map(([day, hrs]) => (
                      <div key={day} className="flex gap-4">
                        <span className="text-bl-dimmed w-20">{day}</span>
                        <span className={hrs === "Closed" ? "text-bl-dimmed" : "text-bl-muted"}>{hrs}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-bl-card border border-bl-brick/20 rounded-2xl p-8">
                <h2 className="text-xl font-bold mb-6">Send a Message</h2>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-16 text-center">
                      <CheckCircle className="text-green-500 mb-4" size={52} />
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-bl-muted text-sm max-w-xs">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm text-bl-muted mb-1.5">Full Name</label>
                          <input {...register("name", { required: "Name is required" })} placeholder="Your name" className="w-full bg-bl-elevated border border-bl-brick/20 rounded-lg px-4 py-3 text-sm text-bl-cream placeholder-bl-dimmed focus:outline-none focus:border-bl-brick transition-colors" />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm text-bl-muted mb-1.5">Email Address</label>
                          <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })} placeholder="you@example.com" className="w-full bg-bl-elevated border border-bl-brick/20 rounded-lg px-4 py-3 text-sm text-bl-cream placeholder-bl-dimmed focus:outline-none focus:border-bl-brick transition-colors" />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-bl-muted mb-1.5">Subject</label>
                        <select {...register("subject", { required: true })} className="w-full bg-bl-elevated border border-bl-brick/20 rounded-lg px-4 py-3 text-sm text-bl-cream focus:outline-none focus:border-bl-brick transition-colors">
                          <option value="">Select a subject…</option>
                          {subjectOptions.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.subject && <p className="text-red-400 text-xs mt-1">Please select a subject</p>}
                      </div>
                      <div>
                        <label className="block text-sm text-bl-muted mb-1.5">Message</label>
                        <textarea {...register("message", { required: "Message is required", minLength: { value: 20, message: "At least 20 characters please" } })} rows={5} placeholder="Tell us what's on your mind…" className="w-full bg-bl-elevated border border-bl-brick/20 rounded-lg px-4 py-3 text-sm text-bl-cream placeholder-bl-dimmed focus:outline-none focus:border-bl-brick transition-colors resize-none" />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                      </div>
                      <button type="submit" className="btn-brick w-full flex items-center justify-center gap-2">
                        <Send size={16} /> Send Message
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MAP PLACEHOLDER ─── */}
      <section className="py-20 bg-bl-brick-bg">
        <div className="section-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-bl-brick/20 bg-bl-card">
              {/* Grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C41E3A" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              {/* Animated pin */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                  <MapPin className="text-bl-brick drop-shadow-lg" size={48} />
                </motion.div>
                <div className="text-center">
                  <p className="font-semibold text-bl-cream">14 Velvet Boulevard</p>
                  <p className="text-bl-muted text-sm">Miami, FL 33101</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative py-20">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/textures/wood.jpg')", backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="section-inner relative z-10 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="section-label mb-3">Quick Answers</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</motion.h2>
            <motion.div variants={fadeUp} className="space-y-4">
              {faqs.map(item => <FaqItem key={item.q} {...item} />)}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}