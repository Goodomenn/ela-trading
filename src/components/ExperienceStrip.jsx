export default function ExperienceStrip() {
  return (
    <div className="relative py-5" style={{backgroundImage:"url('/textures/plaster.png')",backgroundSize:"cover"}}>
      <div className="absolute inset-0" style={{background:"rgba(245,240,232,0.90)"}}/>
      <div className="relative z-10 section-inner flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-center">
        <div>
          <span className="font-sans text-xs tracking-[0.35em] uppercase" style={{color:"#C41E3A"}}>Fine Dining</span>
          <span className="font-serif text-base ml-3" style={{color:"#1a0505"}}>Tue – Sun · 5 PM – 10 PM</span>
        </div>
        <div className="hidden sm:block w-px h-7" style={{background:"rgba(196,30,58,0.3)"}}/>
        <div className="font-serif text-xl hidden sm:block" style={{color:"rgba(196,30,58,0.4)"}}>|</div>
        <div className="hidden sm:block w-px h-7" style={{background:"rgba(196,30,58,0.3)"}}/>
        <div>
          <span className="font-sans text-xs tracking-[0.35em] uppercase" style={{color:"#C41E3A"}}>VIP Lounge</span>
          <span className="font-serif text-base ml-3" style={{color:"#1a0505"}}>Fri – Sat · 10 PM – 3 AM</span>
        </div>
      </div>
    </div>
  );
}
