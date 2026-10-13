import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label:"Home",         to:"/" },
  { label:"About",        to:"/about" },
  { label:"Menu",         to:"/menu" },
  { label:"Reservations", to:"/reservations" },
  { label:"Contact",      to:"/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>60);
    window.addEventListener("scroll",fn); return ()=>window.removeEventListener("scroll",fn);
  },[]);

  const isHome = pathname==="/";
  const transparent = isHome && !scrolled;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      transparent
        ? "bg-transparent"
        : "backdrop-blur-md shadow-2xl"
    }`}
    style={!transparent ? {
      backgroundImage:"url('/textures/brick.jpg')",
      backgroundSize:"cover",
      boxShadow:"0 4px 32px rgba(0,0,0,0.75)"
    } : {}}>
      {/* Overlay for non-transparent state */}
      {!transparent && <div className="absolute inset-0" style={{background:"rgba(8,10,14,0.88)"}}/>}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-1.5 hover:opacity-90 transition-opacity group">
            <span className="font-display text-xl md:text-2xl font-bold tracking-[0.2em]"
              style={{color:"#FAF6EE", textShadow:"0 2px 14px rgba(0,0,0,0.8)"}}>
              BRICKS
            </span>
            <span className="font-script text-2xl md:text-3xl italic"
              style={{
                color:"#E5C378",
                textShadow:"0 2px 14px rgba(0,0,0,0.8), 0 0 16px rgba(229,195,120,0.4)"
              }}>
              Lounge
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(l=>(
              <NavLink key={l.label} to={l.to} end={l.to==="/"}
                className={({isActive})=>
                  `relative text-xs tracking-[0.25em] uppercase font-sans font-medium transition-all duration-200 py-1 ${
                    isActive ? "text-bl-gold" : "text-[#FAF6EE]/75 hover:text-[#FAF6EE]"
                  }`
                }
                style={({isActive})=>({
                  color: isActive ? "#E5C378" : "rgba(250,246,238,0.75)",
                  textShadow: isActive ? "0 0 14px rgba(229,195,120,0.4)" : "none"
                })}>
                {({isActive})=>(
                  <>
                    {l.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5C378] to-transparent"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/reservations" className="btn-ghost-white text-xs px-5 py-2.5">Reserve</Link>
            <Link to="/reservations" className="btn-brick text-xs px-5 py-2.5">Book VIP</Link>
          </div>

          <button onClick={()=>setOpen(o=>!o)} className="md:hidden p-2 text-[#FAF6EE]" aria-label="Menu">
            {open ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
            transition={{duration:0.2}}
            className="md:hidden relative"
            style={{backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover"}}>
            <div className="absolute inset-0" style={{background:"rgba(8,10,14,0.95)"}}/>
            <div className="relative z-10 px-4 py-6 flex flex-col gap-4">
              {navLinks.map(l=>(
                <NavLink key={l.label} to={l.to} end={l.to==="/"} onClick={()=>setOpen(false)}
                  style={({isActive})=>({color: isActive ? "#E5C378" : "rgba(250,246,238,0.85)"})}
                  className="text-sm tracking-[0.2em] uppercase font-sans py-1">
                  {l.label}
                </NavLink>
              ))}
              <hr style={{borderColor:"rgba(229,195,120,0.25)"}}/>
              <div className="flex gap-3 pt-2">
                <Link to="/reservations" onClick={()=>setOpen(false)} className="btn-ghost-white flex-1 text-center py-3">Reserve</Link>
                <Link to="/reservations" onClick={()=>setOpen(false)} className="btn-brick flex-1 text-center py-3">VIP</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
