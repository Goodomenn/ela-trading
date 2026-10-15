import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Music, Star, AlertTriangle, Disc, Sparkles } from "lucide-react";

export default function LoungeSection() {
  return (
    <section id="lounge" className="relative py-24"
      style={{backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover", backgroundAttachment:"fixed"}}>
      <div className="absolute inset-0" style={{background:"rgba(8,10,14,0.82)"}}/>
      <div className="relative z-10 section-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label-light">VIP Lounge & Nightlife</span>
          <div className="divider-white mx-auto"/>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide" style={{color:"#FAF6EE"}}>
            Live DJs & <span className="font-script text-5xl md:text-6xl font-normal italic" style={{color:"#E5C378", textShadow:"0 0 16px rgba(229,195,120,0.35)"}}>Private Booths</span>
          </h2>
          <p className="font-sans text-sm mt-4 max-w-2xl mx-auto leading-relaxed" style={{color:"rgba(250,246,238,0.75)"}}>
            When the dining room dims, Bricks Lounge elevates into Miami's premier after-dark destination. Experience world-class electronic soundscapes alongside secluded VIP booth sanctuaries.
          </p>
        </div>

        {/* 2 Focused Feature Showcases: Private Booths & Live DJs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Private VIP Booths Card */}
          <motion.div
            whileInView={{opacity:1, y:0}} initial={{opacity:0, y:25}}
            viewport={{once:true}} transition={{duration:0.4}}
            className="p-8 md:p-10 rounded-sm relative overflow-hidden transition-all duration-300 shadow-2xl flex flex-col justify-between group hover:-translate-y-1"
            style={{
              backgroundImage: "url('/textures/cream-plaster.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1.5px solid rgba(229,195,120,0.70)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.55), 0 0 20px rgba(229,195,120,0.18)"
            }}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full"
                  style={{
                    border: "1.5px solid #C5A059",
                    background: "rgba(197,160,89,0.22)",
                    color: "#8E6E28"
                  }}>
                  <Star size={22} />
                </div>
                <span className="inline-block text-[11px] tracking-[0.22em] uppercase font-sans font-semibold px-3.5 py-1 rounded-full bg-[#8B0000] text-[#FAF6EE] border border-[#E5C378]/60 shadow-sm">
                  Exclusive Reserve
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl md:text-3xl mb-3 tracking-wider text-[#1a0505]">
                Private VIP Booths
              </h3>

              <p className="font-sans text-sm leading-relaxed mb-6 text-[#4A3B34] font-medium">
                Secluded within custom masonry alcoves, our private booths offer an unparalleled vantage point overlooking the entire lounge and DJ stage. Designed for celebratory gatherings, high-profile guests, and discerning nightlife connoisseurs seeking privacy without missing a moment of the energy.
              </p>

              <div className="space-y-3.5 mb-8 pt-4 border-t border-[#C5A059]/30">
                <div className="flex items-start gap-3">
                  <Sparkles size={16} className="text-[#8E6E28] flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-[#4A3B34] leading-relaxed">
                    <strong className="text-[#1a0505] font-semibold">Elevated Sightlines:</strong> Raised, velvet-tufted banquettes providing commanding views of the room while maintaining intimate seclusion.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles size={16} className="text-[#8E6E28] flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-[#4A3B34] leading-relaxed">
                    <strong className="text-[#1a0505] font-semibold">Bespoke Bottle Service:</strong> Dedicated tableside mixology, rare vintage champagnes, top-shelf spirits, and artisanal mixers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles size={16} className="text-[#8E6E28] flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-[#4A3B34] leading-relaxed">
                    <strong className="text-[#1a0505] font-semibold">Personal Concierge & Security:</strong> Discreet host from door to departure, private express entry, and customized celebratory presentations.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C5A059]/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="block text-[11px] font-sans uppercase tracking-widest text-[#6B5A52]">Reservations</span>
                <span className="font-display font-bold text-lg text-[#8B0000]">Custom Booth Packages</span>
              </div>
              <Link to="/reservations"
                className="font-sans text-xs tracking-widest uppercase transition-all duration-200 px-6 py-3 rounded-sm font-semibold"
                style={{
                  border: "1.5px solid rgba(229,195,120,0.70)",
                  background: "linear-gradient(135deg, #991428 0%, #750A19 100%)",
                  color: "#FAF6EE",
                  boxShadow: "0 4px 18px rgba(117,10,25,0.45)"
                }}>
                Reserve Private Booth →
              </Link>
            </div>
          </motion.div>

          {/* Live DJs & Sound Card */}
          <motion.div
            whileInView={{opacity:1, y:0}} initial={{opacity:0, y:25}}
            viewport={{once:true}} transition={{duration:0.4, delay:0.15}}
            className="p-8 md:p-10 rounded-sm relative overflow-hidden transition-all duration-300 shadow-2xl flex flex-col justify-between group hover:-translate-y-1"
            style={{
              backgroundImage: "url('/textures/cream-plaster.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1.5px solid rgba(229,195,120,0.70)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.55), 0 0 20px rgba(229,195,120,0.18)"
            }}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full"
                  style={{
                    border: "1.5px solid #C5A059",
                    background: "rgba(197,160,89,0.22)",
                    color: "#8E6E28"
                  }}>
                  <Music size={22} />
                </div>
                <span className="inline-block text-[11px] tracking-[0.22em] uppercase font-sans font-semibold px-3.5 py-1 rounded-full bg-[#1a0505] text-[#E5C378] border border-[#E5C378]/50 shadow-sm">
                  Live Performances
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl md:text-3xl mb-3 tracking-wider text-[#1a0505]">
                World-Class Live DJs
              </h3>

              <p className="font-sans text-sm leading-relaxed mb-6 text-[#4A3B34] font-medium">
                Every weekend, Bricks stages an extraordinary lineup of international headliners, premier resident selectors, and live instrumentalists. Our sonic identity merges deep melodic house, soulful afro-electronic grooves, and open-format nocturnal anthems.
              </p>

              <div className="space-y-3.5 mb-8 pt-4 border-t border-[#C5A059]/30">
                <div className="flex items-start gap-3">
                  <Disc size={16} className="text-[#8E6E28] flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-[#4A3B34] leading-relaxed">
                    <strong className="text-[#1a0505] font-semibold">Curated Lineup:</strong> Hand-selected global talent, weekly guest sets, and unannounced celebrity surprise performances.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Disc size={16} className="text-[#8E6E28] flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-[#4A3B34] leading-relaxed">
                    <strong className="text-[#1a0505] font-semibold">Custom Acoustic Engineering:</strong> State-of-the-art sound system calibrated specifically to our natural brick and stone masonry acoustics.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Disc size={16} className="text-[#8E6E28] flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-[#4A3B34] leading-relaxed">
                    <strong className="text-[#1a0505] font-semibold">Immersive Production:</strong> Kinetic atmospheric lighting and deep, rich bass that pulses through the room without overpowering conversation.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C5A059]/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="block text-[11px] font-sans uppercase tracking-widest text-[#6B5A52]">Programming</span>
                <span className="font-display font-bold text-lg text-[#1a0505]">Thu – Sun · 10 PM Till Late</span>
              </div>
              <Link to="/reservations"
                className="font-sans text-xs tracking-widest uppercase transition-all duration-200 px-6 py-3 rounded-sm font-semibold"
                style={{
                  border: "1.5px solid #8E6E28",
                  background: "rgba(197,160,89,0.18)",
                  color: "#1a0505",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(197,160,89,0.32)";
                  e.currentTarget.style.borderColor = "#C5A059";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(197,160,89,0.18)";
                  e.currentTarget.style.borderColor = "#8E6E28";
                }}>
                Inquire DJ Guestlist →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Fine print */}
        <div className="flex items-center justify-center gap-2 text-xs font-sans text-center"
          style={{color:"rgba(250,246,238,0.55)"}}>
          <AlertTriangle size={13} style={{color:"#E5C378"}}/>
          <span>21+ only after 10 PM · Strict upscale dress code strictly enforced</span>
        </div>
      </div>
    </section>
  );
}
