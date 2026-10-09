import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarCheck, Star, CheckCircle, Clock, Users, Phone, Mail } from "lucide-react";

function Toast({ msg }) {
  return (
    <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:30 }}
      className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 bg-bl-card border border-bl-brick/40 text-bl-cream px-6 py-4 shadow-2xl max-w-sm w-full" role="alert">
      <CheckCircle size={20} className="text-bl-brick flex-shrink-0" />
      <p className="font-sans text-sm">{msg}</p>
    </motion.div>
  );
}

const inputDark = "w-full bg-black/50 border border-bl-brick/20 text-bl-cream placeholder:text-bl-dimmed font-sans text-sm px-4 py-3 focus:outline-none focus:border-bl-brick transition-colors";
const inputRed  = "w-full bg-bl-brick/10 border border-bl-brick/40 text-bl-cream placeholder:text-bl-dimmed font-sans text-sm px-4 py-3 focus:outline-none focus:border-bl-brick transition-colors";
const lbl       = "block text-xs tracking-widest text-bl-muted uppercase font-sans mb-2";
const lblRed    = "block text-xs tracking-widest text-bl-brick/80 uppercase font-sans mb-2";
const err       = "text-red-400 text-xs mt-1 font-sans";

function DiningForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = () => { setSent(true); reset(); setTimeout(() => setSent(false), 5000); };
  return (
    <>
      <AnimatePresence>{sent && <Toast msg="Reservation confirmed! Check your email." />}</AnimatePresence>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div><label className={lbl}>Full Name</label>
            <input {...register("name",{required:true})} placeholder="Jane Smith" className={inputDark}/>
            {errors.name && <p className={err}>Name required</p>}</div>
          <div><label className={lbl}>Email</label>
            <input {...register("email",{required:true,pattern:/^\S+@\S+$/i})} placeholder="jane@email.com" type="email" className={inputDark}/>
            {errors.email && <p className={err}>Valid email required</p>}</div>
        </div>
        <div><label className={lbl}>Phone (optional)</label>
          <input {...register("phone")} placeholder="+1 555 000 0000" type="tel" className={inputDark}/></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div><label className={lbl}>Date</label>
            <input {...register("date",{required:true})} type="date" className={inputDark}/>
            {errors.date && <p className={err}>Date required</p>}</div>
          <div><label className={lbl}>Time</label>
            <select {...register("time",{required:true})} className={inputDark}>
              <option value="">Select time</option>
              {["5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM"].map(t=><option key={t}>{t}</option>)}
            </select>
            {errors.time && <p className={err}>Time required</p>}</div>
        </div>
        <div><label className={lbl}>Guests</label>
          <select {...register("guests",{required:true})} className={inputDark}>
            <option value="">Select party size</option>
            {["1","2","3","4","5","6","6+ (Private Dining)"].map(g=><option key={g}>{g}</option>)}
          </select>
          {errors.guests && <p className={err}>Party size required</p>}</div>
        <div><label className={lbl}>Special Requests</label>
          <textarea {...register("notes")} rows={3} placeholder="Dietary requirements, celebrations..." className={inputDark+" resize-none"}/></div>
        <button type="submit" className="w-full btn-wood py-4 text-sm flex items-center justify-center gap-2">
          <CalendarCheck size={16}/> Confirm Reservation
        </button>
        <p className="text-xs text-bl-dimmed text-center font-sans">⚡ Instant confirmation · Free cancellation up to 24h</p>
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
      <AnimatePresence>{sent && <Toast msg="VIP request received! Our concierge will contact you within 2 hours." />}</AnimatePresence>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div><label className={lblRed}>Full Name</label>
            <input {...register("name",{required:true})} placeholder="Jane Smith" className={inputRed}/>
            {errors.name && <p className={err}>Name required</p>}</div>
          <div><label className={lblRed}>Phone</label>
            <input {...register("phone",{required:true})} placeholder="+1 555 000 0000" type="tel" className={inputRed}/>
            {errors.phone && <p className={err}>Phone required</p>}</div>
        </div>
        <div><label className={lblRed}>Email</label>
          <input {...register("email",{required:true,pattern:/^\S+@\S+$/i})} placeholder="jane@email.com" type="email" className={inputRed}/>
          {errors.email && <p className={err}>Valid email required</p>}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div><label className={lblRed}>Event Date</label>
            <input {...register("date",{required:true})} type="date" className={inputRed}/>
            {errors.date && <p className={err}>Date required</p>}</div>
          <div><label className={lblRed}>Party Size</label>
            <select {...register("party",{required:true})} className={inputRed}>
              <option value="">Select size</option>
              {["2–4","5–8","9–15","16+ (Full buyout)"].map(s=><option key={s}>{s}</option>)}
            </select>
            {errors.party && <p className={err}>Size required</p>}</div>
        </div>
        <div><label className={lblRed}>Bottle Package</label>
          <select {...register("package")} className={inputRed}>
            <option value="">Select package (optional)</option>
            <option>Brick — $500 min (1 premium bottle + mixers)</option>
            <option>Stone — $1,200 min (3 bottles + champagne)</option>
            <option>Arch — $2,500 min (5 bottles + full service)</option>
            <option>Custom — Build your experience</option>
          </select></div>
        <div><label className={lblRed}>Special Requests</label>
          <textarea {...register("notes")} rows={3} placeholder="Birthday setup, specific DJs, dietary needs..."
            className={inputRed+" resize-none"}/></div>
        <button type="submit" className="w-full btn-brick py-4 text-sm flex items-center justify-center gap-2">
          <Star size={14} fill="currentColor"/> Request VIP Booking
        </button>
        <p className="text-xs text-bl-dimmed text-center font-sans">🔒 Our concierge contacts you within 2 hours</p>
      </form>
    </>
  );
}

const policies = [
  { icon:Clock, title:"Dining Hours",  body:"Tue–Sun 5 PM – 10 PM" },
  { icon:Users, title:"Large Groups",  body:"Private dining for 7+. Call us to arrange." },
  { icon:Phone, title:"By Phone",      body:"+1 (555) 204-8800 · 2 PM–9 PM daily" },
  { icon:Mail,  title:"By Email",      body:"reservations@brickslounge.com" },
];

export default function ReservationPage() {
  const [activeTab, setActiveTab] = useState("dining");
  return (
    <>
      <Helmet>
        <title>Reservations &amp; VIP Bottle Service | Bricks Lounge Miami</title>
        <meta
          name="description"
          content="Reserve your dining table or secure exclusive VIP bottle service booths at Bricks Lounge Miami. Direct booking with no third-party booking fees."
        />
        <meta
          name="keywords"
          content="Bricks Lounge reservations, table booking Miami, VIP bottle service Miami, fine dining reservations Miami"
        />
        <link rel="canonical" href="https://www.brickslounge.com/reservations" />
        <meta property="og:title" content="Reservations &amp; VIP Bottle Service | Bricks Lounge Miami" />
        <meta
          property="og:description"
          content="Reserve your dining table or secure exclusive VIP bottle service booths at Bricks Lounge Miami. Direct booking with no third-party booking fees."
        />
        <meta property="og:url" content="https://www.brickslounge.com/reservations" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.brickslounge.com/textures/brick.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reservations &amp; VIP Bottle Service | Bricks Lounge Miami" />
        <meta
          name="twitter:description"
          content="Reserve your dining table or secure exclusive VIP bottle service booths at Bricks Lounge Miami. Direct booking with no third-party booking fees."
        />
        <meta name="twitter:image" content="https://www.brickslounge.com/textures/brick.jpg" />
      </Helmet>
      {/* Hero */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-bl-brick/30">
        <div className="absolute inset-0" style={{ backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover", backgroundPosition:"center" }}/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/70 to-black/82"/>
        <div className="section-inner relative z-10 text-center">
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            className="text-xs tracking-[0.4em] text-bl-brick uppercase font-sans mb-4">Reservations</motion.p>
          <div className="divider-brick"/>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
            className="font-serif text-5xl md:text-6xl text-bl-cream mb-4">
            Secure Your <em className="text-bl-brick">Experience</em>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.35 }}
            className="font-sans text-bl-muted max-w-lg mx-auto text-sm leading-relaxed">
            Book directly — no third-party fees. Your data stays with us.
          </motion.p>
        </div>
      </div>

      {/* Forms — wood texture */}
      <section className="relative py-16">
        <div className="absolute inset-0" style={{ backgroundImage:"url('/textures/wood.jpg')", backgroundSize:"cover" }}/>
        <div className="absolute inset-0 bg-black/80"/>
        <div className="relative z-10 section-inner max-w-4xl mx-auto">
          {/* Toggle */}
          <div className="flex border border-bl-brick/30 mb-12 max-w-sm mx-auto overflow-hidden">
            {[["dining","🍽 Dining"],["vip","★ VIP Service"]].map(([key,label])=>(
              <button key={key} onClick={()=>setActiveTab(key)}
                className={`flex-1 py-3.5 text-xs tracking-widest uppercase font-sans transition-all ${
                  activeTab===key ? (key==="vip"?"bg-bl-brick text-white font-semibold":"bg-white/10 text-bl-cream") : "text-bl-muted hover:text-bl-cream"
                }`}>{label}</button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab==="dining" ? (
              <motion.div key="dining"
                initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
                transition={{ duration:0.25 }}
                className="bg-black/60 border border-bl-brick/20 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-2">
                  <CalendarCheck size={20} className="text-bl-cream"/>
                  <p className="text-xs tracking-widest text-bl-muted uppercase font-sans">Fine Dining</p>
                </div>
                <h2 className="font-serif text-3xl text-bl-cream mb-2">Reserve a Table</h2>
                <p className="font-sans text-sm text-bl-muted mb-8 pb-8 border-b border-bl-brick/20">
                  Tables available Tuesday through Sunday, 5 PM – 10 PM.
                </p>
                <DiningForm/>
              </motion.div>
            ) : (
              <motion.div key="vip"
                initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
                transition={{ duration:0.25 }}
                className="bg-bl-brick/10 border border-bl-brick/40 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-2">
                  <Star size={20} className="text-bl-brick" fill="currentColor"/>
                  <p className="text-xs tracking-widest text-bl-brick/80 uppercase font-sans">VIP Lounge</p>
                </div>
                <h2 className="font-serif text-3xl text-bl-cream mb-2">Book VIP Experience</h2>
                <p className="font-sans text-sm text-bl-muted mb-8 pb-8 border-b border-bl-brick/30">
                  Exclusive booths with bottle service — Fri &amp; Sat, 10 PM – 3 AM.
                </p>
                <VIPForm/>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            {policies.map(({icon:Icon,title,body})=>(
              <div key={title} className="border border-bl-brick/20 bg-black/50 p-5 flex gap-4">
                <Icon size={18} className="text-bl-brick flex-shrink-0 mt-0.5"/>
                <div>
                  <h5 className="font-sans text-sm text-bl-cream mb-1">{title}</h5>
                  <p className="font-sans text-xs text-bl-muted leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10">
            <Link to="/menu" className="font-sans text-sm text-bl-brick hover:text-bl-brick-light transition-colors tracking-widest uppercase">
              ← View Our Full Menu
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
