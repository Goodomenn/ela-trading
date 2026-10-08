import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Utensils, Wine, Star } from "lucide-react";

const cards = [
  { icon:Utensils, title:"Tasting Menu",  desc:"A curated 7-course journey through seasonal ingredients. Wed–Sun only.",                    tag:"Chef Curated",  href:"/menu" },
  { icon:Star,     title:"À La Carte",    desc:"The full Bricks menu — starters, mains, desserts and our award-winning cocktails.",           tag:"Most Popular",  href:"/menu" },
  { icon:Wine,     title:"Cocktail Bar",  desc:"Craft cocktails by Head Mixologist Sofia Castillo. Opens at 5 PM, runs until close.",         tag:"Award Winning", href:"/reservations" },
];

export default function DiningSection() {
  return (
    <section id="dining" className="relative py-24"
      style={{backgroundImage:"url('/textures/plaster.png')", backgroundSize:"cover"}}>
      <div className="absolute inset-0" style={{background:"rgba(245,240,232,0.87)"}}/>
      <div className="relative z-10 section-inner">
        <div className="mb-14">
          <span className="section-label-dark">The Restaurant</span>
          <div className="divider-red"/>
          <h2 className="font-serif text-4xl md:text-5xl" style={{color:"#1a0505"}}>
            The Art of <em style={{color:"#C41E3A"}}>Fine Dining</em>
          </h2>
          <p className="font-sans text-sm mt-4 max-w-md leading-relaxed" style={{color:"#6A5A55"}}>
            Executive Chef Marco Bellini brings Lyon-trained precision to a Miami kitchen. Every plate is a statement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c,i)=>(
            <motion.div key={i}
              whileInView={{opacity:1,y:0}} initial={{opacity:0,y:30}}
              viewport={{once:true}} transition={{duration:0.5,delay:i*0.12}}
              className="card-on-plaster p-8 transition-all duration-300 group">
              <div className="w-12 h-12 flex items-center justify-center mb-5 transition-colors"
                style={{border:"1.5px solid rgba(196,30,58,0.35)", color:"#C41E3A"}}>
                <c.icon size={20}/>
              </div>
              <span className="text-xs tracking-widest uppercase font-sans" style={{color:"#C41E3A"}}>{c.tag}</span>
              <h3 className="font-serif text-xl mt-2 mb-3" style={{color:"#1a0505"}}>{c.title}</h3>
              <p className="font-sans text-sm leading-relaxed mb-6" style={{color:"#6A5A55"}}>{c.desc}</p>
              <Link to={c.href} className="font-sans text-xs tracking-widest uppercase transition-colors"
                style={{color:"#C41E3A"}}>
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
