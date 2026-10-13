import { NavLink } from "react-router-dom";
import { UtensilsCrossed, CalendarCheck, Star, MapPin } from "lucide-react";

const items = [
  { icon:UtensilsCrossed, label:"Menu",    to:"/menu",         vip:false },
  { icon:CalendarCheck,   label:"Reserve", to:"/reservations", vip:false },
  { icon:Star,            label:"VIP",     to:"/reservations", vip:true  },
  { icon:MapPin,          label:"Contact", to:"/contact",      vip:false },
];

export default function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 backdrop-blur-lg"
      style={{backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover", paddingBottom:"env(safe-area-inset-bottom)"}}
      aria-label="Mobile navigation">
      <div className="absolute inset-0" style={{background:"rgba(8,1,1,0.94)"}}/>
      <div style={{position:"relative", borderTop:"1px solid rgba(229,195,120,0.25)", display:"flex"}}>
        {items.map(({icon:Icon,label,to,vip})=>(
          <NavLink key={label} to={to}
            style={({isActive})=>({
              flex:1, display:"flex", flexDirection:"column", alignItems:"center",
              justifyContent:"center", padding:"10px 0", gap:4,
              color: vip ? "#FAF6EE" : isActive ? "#E5C378" : "rgba(250,246,238,0.55)",
              background: vip ? "linear-gradient(135deg, #991428, #750A19)" : "transparent",
              transition:"all 0.2s"
            })}>
            <Icon size={20} fill={vip?"currentColor":"none"} style={{color: vip ? "#FAF6EE" : "inherit"}}/>
            <span style={{fontSize:"10px", letterSpacing:"0.15em", textTransform:"uppercase", fontFamily:"Inter,sans-serif"}}>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
