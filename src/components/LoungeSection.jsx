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
      <div className="absolute inset-0" style={{background:"rgba(8,2,2,0.72)"}}/>
      <div className="relative z-10 section-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label-light">VIP Lounge</span>
          <div className="divider-white mx-auto"/>
          <h2 className="font-serif text-4xl md:text-5xl" style={{color:"#fff"}}>
            The <em style={{color:"#C41E3A"}}>After-Dark</em> Experience
          </h2>
          <p className="font-sans text-sm mt-4 max-w-xl mx-auto leading-relaxed" style={{color:"rgba(255,255,255,0.65)"}}>
            After 10 PM, Bricks Lounge transforms into Miami's most sought-after VIP destination.
          </p>
        </div>

        {/* Perks grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {perks.map((p,i)=>(
            <motion.div key={i}
              whileInView={{opacity:1,y:0}} initial={{opacity:0,y:20}}
              viewport={{once:true}} transition={{delay:i*0.1}}
              className="card-on-brick p-6 text-center transition-all duration-300">
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-4" style={{border:"1px solid rgba(196,30,58,0.4)", color:"#C41E3A"}}>
                <p.icon size={18}/>
              </div>
              <h4 className="font-serif text-base mb-2" style={{color:"#fff"}}>{p.title}</h4>
              <p className="font-sans text-xs leading-relaxed" style={{color:"rgba(255,255,255,0.55)"}}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg,i)=>(
            <motion.div key={i}
              whileInView={{opacity:1,scale:1}} initial={{opacity:0,scale:0.97}}
              viewport={{once:true}} transition={{delay:i*0.12}}
              className={`p-8 text-center transition-all duration-300 ${pkg.highlight ? "scale-105" : ""}`}
              style={{
                background: pkg.highlight ? "#C41E3A" : "rgba(10,2,2,0.6)",
                border: pkg.highlight ? "2px solid #C41E3A" : "1px solid rgba(255,255,255,0.15)",
                backdropFilter:"blur(8px)"
              }}>
              {pkg.highlight && <span className="block text-xs tracking-widest uppercase font-sans mb-3" style={{color:"rgba(255,255,255,0.7)"}}>Most Popular</span>}
              <h3 className="font-serif text-2xl mb-1" style={{color:"#fff"}}>{pkg.name}</h3>
              <p className="font-serif text-4xl mb-4" style={{color: pkg.highlight ? "#fff" : "#C41E3A"}}>
                {pkg.price}<span className="text-lg font-sans"> min</span>
              </p>
              <p className="font-sans text-xs leading-relaxed mb-6" style={{color: pkg.highlight ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.55)"}}>
                {pkg.desc}
              </p>
              <Link to="/reservations"
                className="font-sans text-xs tracking-widest uppercase transition-all"
                style={{
                  display:"inline-block", padding:"8px 24px",
                  border: pkg.highlight ? "1.5px solid rgba(255,255,255,0.7)" : "1.5px solid #C41E3A",
                  color: pkg.highlight ? "#fff" : "#C41E3A"
                }}>
                Book This
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Dress code */}
        <div className="flex items-start gap-4 p-5" style={{border:"1px solid rgba(255,255,255,0.12)", background:"rgba(0,0,0,0.4)"}}>
          <AlertTriangle size={18} style={{color:"#C41E3A", flexShrink:0, marginTop:2}}/>
          <p className="font-sans text-sm leading-relaxed" style={{color:"rgba(255,255,255,0.65)"}}>
            <span style={{color:"#fff", fontWeight:600}}>Dress Code: </span>
            Smart-casual upscale for the VIP lounge (10 PM+). No athletic wear, shorts, or open-toed shoes for gentlemen.
          </p>
        </div>
      </div>
    </section>
  );
}
