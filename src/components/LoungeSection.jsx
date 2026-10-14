import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Shield, Music, Sparkles, AlertTriangle } from "lucide-react";

const perks = [
  { icon:Star,     title:"Private Booths",      desc:"Exclusive raised seating with panoramic views of the main floor." },
  { icon:Shield,   title:"Priority Entry",       desc:"No queues. Your name at the door means direct access, always." },
  { icon:Music,    title:"Live DJs",             desc:"International acts and live performers curated every weekend." },
  { icon:Sparkles, title:"Personal Concierge",   desc:"Your dedicated host from arrival to farewell." },
];

const packages = [
  { name:"Brick",  price:"$500",   desc:"1 premium bottle + mixers + priority entry",          highlight:false },
  { name:"Stone",  price:"$1,200", desc:"3 bottles + champagne toast + full booth service",    highlight:true  },
  { name:"Arch",   price:"$2,500", desc:"5 bottles + full table service + private host",       highlight:false },
];

export default function LoungeSection() {
  return (
    <section id="lounge" className="relative py-24"
      style={{backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover", backgroundAttachment:"fixed"}}>
      <div className="absolute inset-0" style={{background:"rgba(8,10,14,0.82)"}}/>
      <div className="relative z-10 section-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label-light">VIP Lounge</span>
          <div className="divider-white mx-auto"/>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide" style={{color:"#FAF6EE"}}>
            The <span className="font-script text-5xl md:text-6xl font-normal italic" style={{color:"#E5C378", textShadow:"0 0 16px rgba(229,195,120,0.35)"}}>After-Dark</span> Experience
          </h2>
          <p className="font-sans text-sm mt-4 max-w-xl mx-auto leading-relaxed" style={{color:"rgba(250,246,238,0.75)"}}>
            After 10 PM, Bricks Lounge transforms into Miami's most sought-after VIP destination.
          </p>
        </div>

        {/* Perks grid — cards have the cream plaster texture background */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {perks.map((p,i)=>(
            <motion.div key={i}
              whileInView={{opacity:1,y:0}} initial={{opacity:0,y:20}}
              viewport={{once:true}} transition={{delay:i*0.1}}
              className="p-6 text-center transition-all duration-300 shadow-2xl shadow-black/50 rounded-sm relative overflow-hidden group hover:-translate-y-1"
              style={{
                backgroundImage: "url('/textures/cream-plaster.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1.5px solid rgba(229,195,120,0.60)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(229,195,120,0.15)"
              }}>
              <div className="w-11 h-11 flex items-center justify-center mx-auto mb-4 rounded-full transition-transform group-hover:scale-110"
                style={{
                  border: "1.5px solid #C5A059",
                  background: "rgba(197,160,89,0.20)",
                  color: "#8E6E28"
                }}>
                <p.icon size={19} />
              </div>
              <h4 className="font-display font-bold text-base mb-2 tracking-wider text-[#1a0505]">
                {p.title}
              </h4>
              <p className="font-sans text-xs leading-relaxed text-[#4A3B34] font-medium">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg,i)=>(
            <motion.div key={i}
              whileInView={{opacity:1,scale:1}} initial={{opacity:0,scale:0.97}}
              viewport={{once:true}} transition={{delay:i*0.12}}
              className={`p-8 text-center transition-all duration-300 rounded-sm relative overflow-hidden group hover:-translate-y-1 ${
                pkg.highlight
                  ? "scale-105 shadow-2xl shadow-black/60"
                  : "shadow-2xl shadow-black/50"
              }`}
              style={{
                backgroundImage: "url('/textures/cream-plaster.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: pkg.highlight
                  ? "2px solid #E5C378"
                  : "1.5px solid rgba(229,195,120,0.60)",
                boxShadow: pkg.highlight
                  ? "0 15px 40px rgba(0,0,0,0.6), 0 0 25px rgba(229,195,120,0.25)"
                  : "0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(229,195,120,0.10)"
              }}>
              {pkg.highlight && (
                <span className="inline-block text-xs tracking-[0.25em] uppercase font-sans font-semibold mb-3 px-4 py-1 rounded-full bg-[#8B0000] text-[#FAF6EE] border border-[#E5C378]/60 shadow-md">
                  Most Popular
                </span>
              )}
              <h3 className={`font-display font-bold text-2xl mb-1 tracking-wider ${pkg.highlight ? "text-[#8B0000]" : "text-[#1a0505]"}`}>
                {pkg.name}
              </h3>
              <p className="font-serif text-4xl mb-4 font-bold text-[#8E6E28]">
                {pkg.price}<span className="text-lg font-sans font-normal text-[#5C4A42]"> min</span>
              </p>
              <p className="font-sans text-xs leading-relaxed mb-6 text-[#4A3B34] font-medium">
                {pkg.desc}
              </p>
              <Link to="/reservations"
                className="font-sans text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  display: "inline-block",
                  padding: "10px 28px",
                  border: pkg.highlight
                    ? "1.5px solid rgba(229,195,120,0.60)"
                    : "1.5px solid #8E6E28",
                  background: pkg.highlight
                    ? "linear-gradient(135deg, #991428 0%, #750A19 100%)"
                    : "rgba(197,160,89,0.15)",
                  color: pkg.highlight ? "#FAF6EE" : "#1a0505",
                  boxShadow: pkg.highlight ? "0 4px 16px rgba(117,10,25,0.4)" : "none"
                }}
                onMouseEnter={e => {
                  if (!pkg.highlight) {
                    e.currentTarget.style.background = "rgba(197,160,89,0.30)";
                    e.currentTarget.style.borderColor = "#C5A059";
                  }
                }}
                onMouseLeave={e => {
                  if (!pkg.highlight) {
                    e.currentTarget.style.background = "rgba(197,160,89,0.15)";
                    e.currentTarget.style.borderColor = "#8E6E28";
                  }
                }}>
                Book Package →
              </Link>
            </motion.div>
          ))}
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
