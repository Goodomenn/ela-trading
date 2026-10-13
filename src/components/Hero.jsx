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
        ctx.fillStyle = `rgba(229,195,120,${p.a*0.35})`; ctx.fill();
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
      {/* Full-bleed stone background */}
      <div className="absolute inset-0"
        style={{ backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover", backgroundPosition:"center" }} />
      {/* Layered vignette gradient overlay - dark slate & warm amber atmosphere letting the stone texture shine through */}
      <div className="absolute inset-0"
        style={{ background:"linear-gradient(160deg, rgba(8,10,14,0.78) 0%, rgba(18,20,24,0.52) 50%, rgba(8,10,14,0.84) 100%)" }} />
      {/* Golden particle embers */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
        <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mb-4">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-sans text-xs tracking-[0.35em] uppercase"
            style={{
              border: "1px solid rgba(229,195,120,0.35)",
              background: "rgba(12,2,2,0.60)",
              backdropFilter: "blur(8px)",
              color: "#E5C378",
              boxShadow: "0 2px 20px rgba(0,0,0,0.5)"
            }}>
            Fine Dining &amp; VIP Lounge · Miami
          </span>
        </motion.div>

        {/* Large display name: Sculpted Architectural "BRICKS" + Fluid Champagne "Lounge" */}
        <motion.h1 initial={{opacity:0,scale:0.94}} animate={{opacity:1,scale:1}} transition={{delay:0.4,duration:0.8}}
          className="font-display font-bold leading-none mb-1 tracking-[0.08em]"
          style={{
            fontSize: "clamp(4.2rem, 13vw, 9.5rem)",
            color: "#FAF6EE",
            textShadow: "0 6px 36px rgba(0,0,0,0.92), 0 2px 10px rgba(0,0,0,0.95), 0 0 50px rgba(229,195,120,0.18)"
          }}>
          BRICKS
          <span className="sr-only"> Lounge - Fine Dining &amp; VIP Lounge Miami</span>
        </motion.h1>

        <motion.div initial={{opacity:0,scale:0.94}} animate={{opacity:1,scale:1}} transition={{delay:0.6,duration:0.8}}
          className="font-script leading-none mb-6"
          aria-hidden="true"
          style={{
            fontSize: "clamp(3.8rem, 12vw, 8.5rem)",
            background: "linear-gradient(135deg, #FFF6E5 0%, #E5C378 40%, #ECC880 70%, #C59B4E 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "#E5C378",
            filter: "drop-shadow(0 6px 25px rgba(0,0,0,0.85)) drop-shadow(0 0 25px rgba(229,195,120,0.35))",
            marginTop: "-1.2rem"
          }}>
          Lounge
        </motion.div>

        {/* Champagne gradient accent separator */}
        <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:0.9, duration:0.6}}
          className="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5C378]/70 to-transparent mx-auto mb-8" />

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.0}}
          className="font-sans text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed"
          style={{
            color: "rgba(250,246,238,0.85)",
            textShadow: "0 2px 12px rgba(0,0,0,0.9)"
          }}>
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
          style={{borderTop:"1px solid rgba(229,195,120,0.20)"}}>
          {[["4.8★","Guest Rating"],["300+","Events Hosted"],["7 Yrs","In Miami"]].map(([v,l])=>(
            <div key={l} className="text-center">
              <p className="font-display font-semibold text-2xl md:text-3xl"
                style={{
                  color:"#E5C378",
                  textShadow:"0 2px 14px rgba(0,0,0,0.8), 0 0 16px rgba(229,195,120,0.3)"
                }}>{v}</p>
              <p className="font-sans text-xs tracking-[0.25em] uppercase mt-1"
                style={{color:"rgba(250,246,238,0.60)"}}>{l}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-xs tracking-[0.25em] uppercase" style={{color:"rgba(229,195,120,0.65)"}}>Scroll</span>
        <motion.div animate={{y:[0,8,0]}} transition={{repeat:Infinity,duration:1.8}}>
          <ChevronDown size={20} style={{color:"rgba(229,195,120,0.65)"}}/>
        </motion.div>
      </motion.div>
    </section>
  );
}
