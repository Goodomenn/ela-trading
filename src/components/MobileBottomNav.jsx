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
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50"
      style={{backgroundImage:"url('/textures/brick.jpg')", backgroundSize:"cover", paddingBottom:"env(safe-area-inset-bottom)"}}
      aria-label="Mobile navigation">
      <div className="absolute inset-0" style={{background:"rgba(5,0,0,0.90)"}}/>
      <div style={{position:"relative", borderTop:"1px solid rgba(196,30,58,0.35)", display:"flex"}}>
        {items.map(({icon:Icon,label,to,vip})=>(
          <NavLink key={label} to={to}
            style={({isActive})=>({
              flex:1, display:"flex", flexDirection:"column", alignItems:"center",
              justifyContent:"center", padding:"10px 0", gap:4,
              color: vip ? "#fff" : isActive ? "#C41E3A" : "rgba(255,255,255,0.5)",
              background: vip ? "#C41E3A" : "transparent",
              transition:"all 0.2s"
            })}>
            <Icon size={20} fill={vip?"currentColor":"none"}/>
            <span style={{fontSize:"10px", letterSpacing:"0.15em", textTransform:"uppercase", fontFamily:"Inter,sans-serif"}}>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
