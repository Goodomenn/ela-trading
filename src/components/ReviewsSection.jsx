import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name:"Amara T.",  init:"AT", color:"#8B0000", rating:5, text:"The brick walls give it incredible raw energy — the food is Michelin-level refined. The contrast is stunning.", source:"Google" },
  { name:"Daniel R.", init:"DR", color:"#5C2E0A", rating:5, text:"VIP booth on a Friday night — bottle service was flawless. Best night out in Miami, period.", source:"TripAdvisor" },
  { name:"Layla M.",  init:"LM", color:"#6B3520", rating:5, text:"The tasting menu was a 7-course revelation. Chef Marco is a genius. We will be back every month.", source:"Yelp" },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24"
      style={{backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover", backgroundAttachment:"fixed"}}>
      <div className="absolute inset-0" style={{background:"rgba(8,2,2,0.75)"}}/>
      <div className="relative z-10 section-inner">
        <div className="text-center mb-14">
          <span className="section-label-light">Guest Reviews</span>
          <div className="divider-white mx-auto"/>
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_,i)=><Star key={i} size={22} style={{color:"#C41E3A"}} fill="#C41E3A"/>)}
          </div>
          <p className="font-serif text-5xl" style={{color:"#fff"}}>4.8<span style={{color:"#C41E3A",fontSize:"2rem"}}>/5</span></p>
          <p className="font-sans text-xs tracking-widest uppercase mt-2" style={{color:"rgba(255,255,255,0.45)"}}>Based on 800+ verified reviews</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r,i)=>(
            <motion.div key={i}
              whileInView={{opacity:1,y:0}} initial={{opacity:0,y:30}}
              viewport={{once:true}} transition={{delay:i*0.12}}
              className="card-on-brick p-7 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_,j)=><Star key={j} size={14} style={{color:"#C41E3A"}} fill="#C41E3A"/>)}
              </div>
              <p className="font-sans text-sm leading-relaxed mb-6 italic" style={{color:"rgba(255,255,255,0.72)"}}>
                "{r.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold font-sans"
                    style={{backgroundColor:r.color}}>{r.init}</div>
                  <span className="font-sans text-sm" style={{color:"#fff"}}>{r.name}</span>
                </div>
                <span className="font-sans text-xs" style={{color:"rgba(255,255,255,0.4)"}}>{r.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
