import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative"
      style={{backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover"}}>
      <div className="absolute inset-0" style={{background:"rgba(8,1,1,0.92)"}}/>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top accent bar */}
        <div className="w-full h-[1.5px] mb-14" style={{background:"linear-gradient(90deg,transparent,rgba(229,195,120,0.7),transparent)"}}/>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-baseline gap-1.5 hover:opacity-85 transition-opacity">
              <span className="font-display text-2xl font-bold tracking-[0.18em]" style={{color:"#FAF6EE"}}>
                BRICKS
              </span>
              <span className="font-script text-3xl italic" style={{color:"#E5C378"}}>
                Lounge
              </span>
            </Link>
            <p className="font-sans text-sm mt-4 leading-relaxed" style={{color:"rgba(250,246,238,0.65)"}}>
              Miami's Premier Restaurant &amp; VIP Lounge.<br/>Where raw brick meets refined cuisine.
            </p>
          </div>
          {[
            { title:"Explore",  links:[["Home","/"],["About Us","/about"],["Menu","/menu"]] },
            { title:"Reserve",  links:[["Table Reservation","/reservations"],["VIP Service","/reservations"],["Private Events","/contact"]] },
            { title:"Company",  links:[["About Us","/about"],["Press","/contact"],["Careers","/contact"],["Gift Cards","/contact"]] },
          ].map(({title,links})=>(
            <div key={title}>
              <h5 className="font-sans text-xs tracking-[0.25em] uppercase mb-5 pb-2"
                style={{color:"#E5C378", borderBottom:"1px solid rgba(229,195,120,0.20)"}}>
                {title}
              </h5>
              <div className="flex flex-col gap-3">
                {links.map(([l,h])=>(
                  <Link key={l} to={h} className="font-sans text-sm transition-colors"
                    style={{color:"rgba(250,246,238,0.65)"}}
                    onMouseEnter={e=>e.target.style.color="#E5C378"}
                    onMouseLeave={e=>e.target.style.color="rgba(250,246,238,0.65)"}>
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{borderTop:"1px solid rgba(229,195,120,0.15)"}}>
          <p className="font-sans text-xs" style={{color:"rgba(250,246,238,0.45)"}}>
            &copy; {year} Bricks Lounge. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy","Terms of Service","Accessibility"].map(l=>(
              <a key={l} href="#" className="font-sans text-xs transition-colors hover:text-[#E5C378]" style={{color:"rgba(250,246,238,0.45)"}}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
