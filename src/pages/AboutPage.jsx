import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Award, Heart, Users } from "lucide-react";

const values = [
  { icon: Leaf,  title: "Farm-to-Table",       desc: "We source our ingredients from local farms and sustainable purveyors, ensuring every dish reflects the season at its peak." },
  { icon: Award, title: "Award-Winning",        desc: "Recognised by the James Beard Foundation and Miami's dining press as a benchmark for culinary excellence." },
  { icon: Heart, title: "Crafted with Soul",    desc: "Every plate, every pour, every detail is executed with genuine passion by a team that truly loves what it does." },
  { icon: Users, title: "Community First",      desc: "From neighbourhood gatherings to charity dinners, Bricks is woven into the fabric of the Miami community." },
];

const timeline = [
  { year: "2018", title: "Doors Open",                  desc: "Chef Marco Bellini and partners open Bricks Lounge on Velvet Boulevard, instantly drawing Miami's food-lovers." },
  { year: "2019", title: "Best New Restaurant",         desc: "Miami New Times crowns us Best New Restaurant; reservations sell out weeks in advance." },
  { year: "2021", title: "The Lounge Is Born",          desc: "The ground-floor lounge launches with a cocktail program by Sofia Castillo, redefining late-night dining in the city." },
  { year: "2023", title: "Wine Award",                  desc: "Wine Spectator Award of Excellence — our 400-label cellar earns international recognition." },
  { year: "2024", title: "James Beard Semifinalist",    desc: "Chef Bellini named a James Beard Outstanding Chef semifinalist, a milestone for the whole team." },
  { year: "2026", title: "Today",                       desc: "Still cooking with the same fire. Still pouring with the same care. Still yours." },
];

const team = [
  { name: "Marco Bellini",    role: "Executive Chef & Co-Founder", bio: "A Milanese native trained under three Michelin-starred mentors, Marco brings old-world technique to New World ingredients.", color: "from-bl-brick to-bl-brick-deep" },
  { name: "Sofia Castillo",   role: "Head of Cocktails",           bio: "Sofia spent a decade behind bars in Buenos Aires and Barcelona before crafting the most talked-about cocktail menu in Miami.", color: "from-amber-700 to-amber-900" },
  { name: "Antoine Rousseau", role: "Maître d'",                   bio: "Antoine's decades of front-of-house experience in Paris and New York ensure every guest feels like a VIP from the moment they arrive.", color: "from-slate-600 to-slate-800" },
  { name: "Leila Khoury",     role: "VIP & Events Director",       bio: "Leila curates private experiences for Miami's most discerning clientele, from intimate dinners to full venue takeovers.", color: "from-purple-700 to-purple-900" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function AboutPage() {
  return (
    <main className="bg-bl-brick-bg text-bl-cream min-h-screen">
      {/* ─── HERO ─── */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-bl-brick/30">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/70 to-black/82" />
        <div className="section-inner relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="section-label mb-4">
            Our Story
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Born from a Love of Food, Night &amp; People
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65, delay: 0.25 }} className="text-bl-muted text-lg max-w-2xl mx-auto">
            Bricks Lounge started as a dream on a napkin and became Miami&apos;s most beloved dining experience. Here&apos;s how.
          </motion.p>
        </div>
      </div>

      {/* ─── VALUES ─── */}
      <section className="relative py-20">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/textures/wood.jpg')", backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="section-inner relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="section-label text-center mb-3">What We Stand For</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-14">Our Core Values</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="bg-bl-card border border-bl-brick/20 rounded-xl p-8 hover:border-bl-brick/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-bl-brick/15 flex items-center justify-center mb-5 group-hover:bg-bl-brick/30 transition-colors">
                    <Icon className="text-bl-brick" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{title}</h3>
                  <p className="text-bl-muted text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-20 bg-bl-brick-bg">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="section-label text-center mb-3">Our Journey</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-16">A Timeline of Milestones</motion.h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-bl-brick/30" />
              <div className="space-y-10">
                {timeline.map(({ year, title, desc }, i) => (
                  <motion.div key={year} variants={fadeUp} className="flex gap-8 pl-16 relative">
                    <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-bl-card border-2 border-bl-brick flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-bl-brick text-xs font-bold leading-none text-center">{year}</span>
                    </div>
                    <div className="bg-bl-card border border-bl-brick/20 rounded-xl p-6 flex-1 hover:border-bl-brick/40 transition-colors">
                      <h3 className="font-semibold text-bl-cream mb-2">{title}</h3>
                      <p className="text-bl-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="relative py-20">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/textures/wood.jpg')", backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="section-inner relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="section-label text-center mb-3">The People</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-14">Meet the Team</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map(({ name, role, bio, color }) => (
                <motion.div key={name} variants={fadeUp} className="bg-bl-card border border-bl-brick/20 rounded-xl p-7 hover:border-bl-brick/40 transition-colors text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 text-3xl font-bold text-white`}>
                    {name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-bl-cream mb-1">{name}</h3>
                  <p className="text-bl-brick text-xs font-medium uppercase tracking-wider mb-4">{role}</p>
                  <p className="text-bl-muted text-sm leading-relaxed">{bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-bl-brick-bg">
        <div className="section-inner text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="section-label mb-4">Join Us</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Bricks?</motion.h2>
            <motion.p variants={fadeUp} className="text-bl-muted max-w-xl mx-auto mb-10 text-lg">Reserve your table or explore our menus — every visit is a new chapter.</motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservations" className="btn-brick">Reserve a Table</Link>
              <Link to="/menu" className="btn-wood">View the Menu</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}