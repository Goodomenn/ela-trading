import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Utensils, Wine, Star } from "lucide-react";

const cards = [
  {
    icon: Utensils,
    title: "Heritage Tasting Journey",
    desc: "A masterfully curated multi-course exploration harmonizing slow-simmered berbere profiles and injera craftsmanship with refined French culinary techniques.",
    tag: "Chef Curated",
    href: "/menu"
  },
  {
    icon: Star,
    title: "Signature À La Carte",
    desc: "Prime dry-aged beef cuts, kitfo tartare, roasted lamb shanks, and fresh coastal seafood infused with rosemary, cardamom, and artisanal niter kibbeh.",
    tag: "Authentic & Refined",
    href: "/menu"
  },
  {
    icon: Wine,
    title: "Artisanal Cocktail & Tej Bar",
    desc: "Craft mixology fusing house-crafted spiced honey wine (Tej) infusions, Ethiopian single-origin cold brews, and rare international spirits until close.",
    tag: "Craft Mixology",
    href: "/reservations"
  },
];

export default function DiningSection() {
  return (
    <section id="dining" className="relative py-24 border-y border-[#E5C378]/20"
      style={{backgroundColor: "#1E2729", backgroundImage:"url('/textures/plaster.png')", backgroundBlendMode: "multiply", backgroundSize:"cover"}}>
      <div className="absolute inset-0" style={{background:"rgba(30, 39, 41, 0.94)"}}/>
      <div className="relative z-10 section-inner">
        <div className="mb-14 max-w-3xl">
          <span className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-3 block">
            The Restaurant
          </span>
          <div className="w-12 h-0.5 bg-[#C5A059] mb-6"/>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-[#FAF6EE]">
            The Art of <span className="font-script text-5xl md:text-6xl font-normal italic" style={{color:"#E5C378", textShadow:"0 0 16px rgba(229,195,120,0.35)"}}>Fine Dining</span>
          </h2>
          <p className="font-sans text-sm md:text-base mt-4 leading-relaxed font-normal text-[#FAF6EE]/80">
            Step into a dining experience where time-honored Ethiopian culinary traditions meet world-class international gastronomy. Our chefs artfully harmonize vibrant local spices and authentic recipes with refined global techniques to deliver an unforgettable feast for the senses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c,i)=>(
            <motion.div key={i}
              whileInView={{opacity:1,y:0}} initial={{opacity:0,y:30}}
              viewport={{once:true}} transition={{duration:0.5,delay:i*0.12}}
              className="p-8 transition-all duration-300 rounded-sm relative overflow-hidden group hover:-translate-y-1 shadow-2xl"
              style={{
                backgroundColor: "#172022",
                border: "1.5px solid rgba(229,195,120,0.50)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4), 0 0 15px rgba(229,195,120,0.12)"
              }}>
              <div className="w-12 h-12 flex items-center justify-center mb-5 rounded-full transition-transform group-hover:scale-110"
                style={{
                  border: "1.5px solid #C5A059",
                  background: "rgba(197,160,89,0.18)",
                  color: "#E5C378"
                }}>
                <c.icon size={20}/>
              </div>
              <span className="text-xs tracking-widest uppercase font-sans font-semibold text-[#E5C378]">
                {c.tag}
              </span>
              <h3 className="font-display font-bold text-xl mt-2 mb-3 tracking-wide text-[#FAF6EE]">
                {c.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed mb-6 font-normal text-[#FAF6EE]/75">
                {c.desc}
              </p>
              <Link to={c.href} className="font-sans text-xs tracking-widest uppercase font-semibold transition-colors flex items-center gap-1.5 text-[#E5C378] hover:text-[#FAF6EE]">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
