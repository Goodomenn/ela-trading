import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative"
      style={{backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover"}}>
      <div className="absolute inset-0" style={{background:"rgba(6,1,1,0.88)"}}/>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top accent bar */}
        <div className="w-full h-0.5 mb-14" style={{background:"linear-gradient(90deg,transparent,#C41E3A,transparent)"}}/>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest hover:opacity-75 transition-opacity" style={{color:"#fff"}}>
              BRICKS<span style={{color:"#C41E3A"}}> Lounge</span>
            </Link>
            <p className="font-sans text-sm mt-4 leading-relaxed" style={{color:"rgba(255,255,255,0.5)"}}>
              Miami's Premier Restaurant &amp; VIP Lounge.<br/>Where raw meets refined.
            </p>
          </div>
          {[
            { title:"Explore",  links:[["Home","/"],["About Us","/about"],["Menu","/menu"]] },
            { title:"Reserve",  links:[["Table Reservation","/reservations"],["VIP Service","/reservations"],["Private Events","/contact"]] },
            { title:"Company",  links:[["About Us","/about"],["Press","/contact"],["Careers","/contact"],["Gift Cards","/contact"]] },
          ].map(({title,links})=>(
            <div key={title}>
              <h5 className="font-sans text-xs tracking-[0.3em] uppercase mb-5 pb-2"
                style={{color:"rgba(255,255,255,0.35)", borderBottom:"1px solid rgba(196,30,58,0.2)"}}>
                {title}
              </h5>
              <div className="flex flex-col gap-3">
                {links.map(([l,h])=>(
                  <Link key={l} to={h} className="font-sans text-sm transition-colors"
                    style={{color:"rgba(255,255,255,0.5)"}}
                    onMouseEnter={e=>e.target.style.color="#C41E3A"}
                    onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.5)"}>
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{borderTop:"1px solid rgba(255,255,255,0.08)"}}>
          <p className="font-sans text-xs" style={{color:"rgba(255,255,255,0.3)"}}>
            &copy; {year} Bricks Lounge. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy","Terms of Service","Accessibility"].map(l=>(
              <a key={l} href="#" className="font-sans text-xs" style={{color:"rgba(255,255,255,0.3)"}}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
