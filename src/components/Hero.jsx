import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarCheck, Star, ChevronDown } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.5+0.5, vy: -Math.random()*0.4-0.1, a: Math.random()
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      pts.forEach(p => {
        p.y += p.vy; p.a -= 0.0015;
        if (p.y<0||p.a<=0) { p.y=H; p.a=Math.random()*0.8+0.2; p.x=Math.random()*W; }
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${p.a*0.35})`; ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { W=canvas.width=canvas.offsetWidth; H=canvas.height=canvas.offsetHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize",onResize); };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-bleed brick background */}
      <div className="absolute inset-0"
        style={{ backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover", backgroundPosition:"center" }} />
      {/* Layered gradient overlay - lighter so brick shows through */}
      <div className="absolute inset-0"
        style={{ background:"linear-gradient(160deg, rgba(0,0,0,0.72) 0%, rgba(80,5,5,0.55) 50%, rgba(0,0,0,0.80) 100%)" }} />
      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
          <span className="section-label-light">Fine Dining &amp; VIP Lounge · Miami</span>
        </motion.div>

        {/* Large display name */}
        <motion.h1 initial={{opacity:0,scale:0.94}} animate={{opacity:1,scale:1}} transition={{delay:0.4,duration:0.8}}
          className="font-serif leading-none mb-2"
          style={{fontSize:"clamp(4rem,12vw,9rem)", color:"#fff", textShadow:"0 4px 32px rgba(0,0,0,0.5)"}}>
          BRICKS
          <span className="sr-only"> Lounge - Fine Dining &amp; VIP Lounge Miami</span>
        </motion.h1>
        <motion.div initial={{opacity:0,scale:0.94}} animate={{opacity:1,scale:1}} transition={{delay:0.6,duration:0.8}}
          className="font-serif italic leading-none mb-8"
          aria-hidden="true"
          style={{fontSize:"clamp(2.5rem,8vw,6rem)", color:"#C41E3A", textShadow:"0 4px 32px rgba(196,30,58,0.4)"}}>
          Lounge
        </motion.div>

        {/* Thin white line separator */}
        <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:0.9, duration:0.6}}
          className="w-24 h-px bg-white/40 mx-auto mb-8" />

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.0}}
          className="font-sans text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed"
          style={{color:"rgba(255,255,255,0.75)"}}>
          Where raw brick walls meet refined cuisine. An evening here is not just dinner — it is an experience carved in stone.
        </motion.p>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.1}}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/reservations" className="btn-brick px-10 py-4">
            <CalendarCheck size={16}/> Reserve a Table
          </Link>
          <Link to="/reservations" className="btn-ghost-white px-10 py-4">
            <Star size={14} fill="currentColor"/> Book VIP Service
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.3}}
          className="mt-16 pt-8 flex justify-center gap-12"
          style={{borderTop:"1px solid rgba(255,255,255,0.15)"}}>
          {[["4.8★","Guest Rating"],["300+","Events Hosted"],["7 Yrs","In Miami"]].map(([v,l])=>(
            <div key={l} className="text-center">
              <p className="font-serif text-2xl" style={{color:"#C41E3A"}}>{v}</p>
              <p className="font-sans text-xs tracking-widest uppercase mt-1" style={{color:"rgba(255,255,255,0.5)"}}>{l}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-xs tracking-widest uppercase" style={{color:"rgba(255,255,255,0.4)"}}>Scroll</span>
        <motion.div animate={{y:[0,8,0]}} transition={{repeat:Infinity,duration:1.8}}>
          <ChevronDown size={20} style={{color:"rgba(255,255,255,0.4)"}}/>
        </motion.div>
      </motion.div>
    </section>
  );
}
