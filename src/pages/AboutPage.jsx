import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Award, Heart, Sparkles, CalendarCheck } from "lucide-react";

const values = [
  { icon: Leaf,     title: "Heritage & Terroir",   desc: "Honoring ancient Ethiopian culinary roots, highland organic spices, and premier sustainable purveyors to bring pure flavor to every plate." },
  { icon: Award,    title: "Gastronomic Artistry", desc: "Applying refined international culinary techniques to authentic recipes, delivering an unforgettable and elevated feast for the senses." },
  { icon: Heart,    title: "Soulful Hospitality",  desc: "Warm, attentive, and anticipatory service rooted in genuine passion, treating every guest to an extraordinary and memorable evening." },
  { icon: Sparkles, title: "After-Dark Energy",    desc: "Seamlessly transitioning from relaxed gourmet dining into Miami's most sought-after late-night lounge with world-class live DJs." },
];


const team = [
  { name: "Executive Chef",      role: "Culinary Director",     bio: "Bringing decades of international mastery and deep reverence for Ethiopian spice architecture to every signature creation." },
  { name: "Head of Mixology",    role: "Beverage Director",     bio: "Crafting bespoke cocktails featuring spiced honey wine reductions, single-origin coffee infusions, and rare spirits." },
  { name: "VIP Concierge Lead",  role: "Guest Experience",      bio: "Dedicated to curating flawless private booth evenings, seamless arrivals, and bespoke bottle service presentations." },
  { name: "Resident Sound Lead", role: "Music & Programming",   bio: "Curating international headliners and resident electronic tastemakers for our weekend soundscapes." },
];

const fadeUp = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function AboutPage() {
  return (
    <main className="bg-[#080A0E] text-[#FAF6EE] min-h-screen">
      <Helmet>
        <title>Our Story &amp; Philosophy | Bricks Lounge Miami</title>
        <meta
          name="description"
          content="Discover the journey behind Bricks Lounge Miami. Step into a dining experience where time-honored Ethiopian culinary traditions meet world-class international gastronomy."
        />
        <meta
          name="keywords"
          content="about Bricks Lounge, Ethiopian fine dining Miami, Miami upscale dining story, VIP lounge Miami, Bricks Lounge history"
        />
        <link rel="canonical" href="https://www.brickslounge.com/about" />
        <meta property="og:title" content="Our Story &amp; Philosophy | Bricks Lounge Miami" />
        <meta
          property="og:description"
          content="Where time-honored Ethiopian culinary traditions meet world-class international gastronomy."
        />
        <meta property="og:url" content="https://www.brickslounge.com/about" />
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
            Our Story &amp; Vision
          </motion.span>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-wide mb-6 max-w-4xl mx-auto leading-tight text-[#FAF6EE]">
            Tradition Meets <span className="font-script text-5xl md:text-7xl font-normal italic" style={{ color: "#E5C378", textShadow: "0 0 18px rgba(229,195,120,0.35)" }}>Gastronomy</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans text-sm md:text-base text-[#FAF6EE]/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Step into a dining experience where time-honored Ethiopian culinary traditions meet world-class international gastronomy. Our chefs artfully harmonize vibrant local spices and authentic recipes with refined global techniques to deliver an unforgettable feast for the senses.
          </motion.p>
        </div>
      </div>

      {/* ─── VALUES ─── */}
      <section className="relative py-24"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.88)" }} />
        <div className="section-inner relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <span className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-3 block">
              What We Stand For
            </span>
            <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-5" />
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-[#FAF6EE]">
              Our Core <span className="font-script text-4xl md:text-6xl font-normal italic" style={{ color: "#E5C378" }}>Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title}
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 25 }}
                viewport={{ once: true }} transition={{ duration: 0.4 }}
                className="p-7 rounded-sm transition-all duration-300 group hover:-translate-y-1 shadow-2xl flex flex-col justify-between"
                style={{
                  backgroundColor: "#172022",
                  border: "1.5px solid rgba(229,195,120,0.50)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.45), 0 0 15px rgba(229,195,120,0.10)"
                }}>
                <div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{
                      border: "1.5px solid #C5A059",
                      background: "rgba(197,160,89,0.18)",
                      color: "#E5C378"
                    }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3 tracking-wide text-[#FAF6EE]">
                    {title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm leading-relaxed text-[#FAF6EE]/75 font-normal">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── TEAM ─── */}
      <section className="relative py-24 border-t border-[#E5C378]/20"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.88)" }} />
        <div className="section-inner relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-3 block">
              The Leadership
            </span>
            <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-5" />
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-[#FAF6EE]">
              Behind the <span className="font-script text-4xl md:text-6xl font-normal italic" style={{ color: "#E5C378" }}>Craft</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio }) => (
              <div key={name}
                className="p-7 text-center rounded-sm transition-all duration-300 shadow-xl hover:-translate-y-1"
                style={{
                  backgroundColor: "#172022",
                  border: "1.5px solid rgba(229,195,120,0.50)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.40)"
                }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl text-[#E5C378]"
                  style={{
                    border: "1.5px solid #C5A059",
                    background: "rgba(197,160,89,0.18)"
                  }}>
                  {name.charAt(0)}
                </div>
                <h3 className="font-display font-bold text-lg text-[#FAF6EE] mb-1">{name}</h3>
                <p className="text-[#E5C378] font-sans text-xs font-semibold uppercase tracking-wider mb-3">{role}</p>
                <p className="font-sans text-xs text-[#FAF6EE]/75 leading-relaxed font-normal">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-20 border-t border-[#E5C378]/25"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.92)" }} />
        <div className="section-inner text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-3 block">
              Experience Bricks
            </span>
            <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-5" />
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#FAF6EE]">
              Join Us for an <span className="font-script text-4xl md:text-6xl font-normal italic" style={{ color: "#E5C378" }}>Unforgettable Night</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-[#FAF6EE]/75 max-w-lg mx-auto mb-8 font-medium">
              Reserve your dining table or private VIP booth — let our culinary team and dedicated hosts immerse you in luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservations" className="btn-brick inline-flex items-center gap-2">
                <CalendarCheck size={16} /> Reserve a Table
              </Link>
              <Link to="/menu" className="btn-ghost-white inline-flex items-center gap-2">
                Explore the Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}