import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name:"Amara T.",  init:"AT", color:"#8E6E28", rating:5, text:"The brick walls give it incredible raw energy — the food is Michelin-level refined. The contrast is stunning.", source:"Google" },
  { name:"Daniel R.", init:"DR", color:"#5C2E0A", rating:5, text:"VIP booth on a Friday night — bottle service was flawless. Best night out in Miami, period.", source:"TripAdvisor" },
  { name:"Layla M.",  init:"LM", color:"#6B3520", rating:5, text:"The tasting menu was a 7-course revelation. Chef Marco is a genius. We will be back every month.", source:"Yelp" },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24"
      style={{backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover", backgroundAttachment:"fixed"}}>
      <div className="absolute inset-0" style={{background:"rgba(8,10,14,0.84)"}}/>
      <div className="relative z-10 section-inner">
        <div className="text-center mb-14">
          <span className="section-label-light">Guest Reviews</span>
          <div className="divider-white mx-auto"/>
          <div className="flex justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_,i)=><Star key={i} size={22} style={{color:"#E5C378"}} fill="#E5C378"/>)}
          </div>
          <p className="font-display font-bold text-5xl" style={{color:"#FAF6EE"}}>
            4.8<span style={{color:"#E5C378",fontSize:"2.2rem",marginLeft:"4px"}}>/5</span>
          </p>
          <p className="font-sans text-xs tracking-[0.25em] uppercase mt-2" style={{color:"rgba(250,246,238,0.55)"}}>
            Based on 800+ verified guest experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r,i)=>(
            <motion.div key={i}
              whileInView={{opacity:1,y:0}} initial={{opacity:0,y:30}}
              viewport={{once:true}} transition={{delay:i*0.12}}
              className="card-on-brick p-7 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_,j)=><Star key={j} size={14} style={{color:"#E5C378"}} fill="#E5C378"/>)}
              </div>
              <p className="font-serif text-base leading-relaxed mb-6 italic" style={{color:"rgba(250,246,238,0.85)"}}>
                "{r.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-bl-gold/15">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#FAF6EE] text-xs font-semibold font-sans border border-[#E5C378]/30"
                    style={{backgroundColor:r.color}}>{r.init}</div>
                  <span className="font-sans text-sm font-medium" style={{color:"#FAF6EE"}}>{r.name}</span>
                </div>
                <span className="font-sans text-xs tracking-wider" style={{color:"#E5C378"}}>{r.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
