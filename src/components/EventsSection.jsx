import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

const events = [
  { month:"OCT", day:"10", title:"Friday Night Session",  desc:"Miami top DJs take the decks. VIP tables selling fast.",              featured:true,  href:"/reservations" },
  { month:"OCT", day:"18", title:"Wine & Dine Evening",   desc:"5-course tasting paired with sommelier-selected wines.",              featured:false, href:"/reservations" },
  { month:"OCT", day:"25", title:"Halloween Masquerade",  desc:"Costume ball in the lounge. Bottle packages include themed cocktails.", featured:false, href:"/reservations" },
];

export default function EventsSection() {
  return (
    <section id="events" className="relative py-24"
      style={{backgroundColor: "#1E2729", backgroundImage:"url('/textures/plaster.png')", backgroundBlendMode: "multiply", backgroundSize:"cover"}}>
      <div className="absolute inset-0" style={{background:"rgba(30, 39, 41, 0.94)"}}/>
      <div className="relative z-10 section-inner">
        <div className="mb-14">
          <span className="section-label-dark">Upcoming Events</span>
          <div className="divider-red"/>
          <h2 className="font-serif text-4xl md:text-5xl" style={{color:"#1a0505"}}>
            What's <em style={{color:"#C5A059"}}>On</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e,i)=>(
            <motion.div key={i}
              whileInView={{opacity:1,y:0}} initial={{opacity:0,y:30}}
              viewport={{once:true}} transition={{delay:i*0.12}}
              className="card-on-plaster p-7 transition-all duration-300">
              {e.featured && (
                <div className="flex items-center gap-2 mb-3">
                  <Flame size={14} style={{color:"#C5A059"}} fill="#C5A059"/>
                  <span className="text-xs tracking-widest uppercase font-sans" style={{color:"#C5A059"}}>Selling Fast</span>
                </div>
              )}
              <div className="flex items-start gap-5 mb-5">
                <div className="text-center px-3 py-2 flex-shrink-0" style={{border:"1.5px solid rgba(196,30,58,0.35)"}}>
                  <p className="font-sans text-xs uppercase tracking-wider" style={{color:"#C5A059"}}>{e.month}</p>
                  <p className="font-serif text-2xl" style={{color:"#1a0505"}}>{e.day}</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2" style={{color:"#1a0505"}}>{e.title}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{color:"#6A5A55"}}>{e.desc}</p>
                </div>
              </div>
              <Link to={e.href} className="font-sans text-xs tracking-widest uppercase transition-colors" style={{color:"#C5A059"}}>
                Reserve Now →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
