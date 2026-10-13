export default function ExperienceStrip() {
  return (
    <div className="relative py-5 border-y border-bl-gold/20" style={{backgroundImage:"url('/textures/plaster.png')",backgroundSize:"cover"}}>
      <div className="absolute inset-0" style={{background:"rgba(247,242,231,0.92)"}}/>
      <div className="relative z-10 section-inner flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-center">
        <div>
          <span className="font-sans text-xs tracking-[0.35em] uppercase font-semibold text-[#8B0000]">Fine Dining</span>
          <span className="font-serif text-base ml-3 text-[#1a0505] font-medium">Tue – Sun · 5 PM – 10 PM</span>
        </div>
        <div className="hidden sm:block w-px h-7" style={{background:"rgba(139,0,0,0.25)"}}/>
        <div className="font-serif text-xl hidden sm:block text-[#C5A059]">✦</div>
        <div className="hidden sm:block w-px h-7" style={{background:"rgba(139,0,0,0.25)"}}/>
        <div>
          <span className="font-sans text-xs tracking-[0.35em] uppercase font-semibold text-[#8B0000]">VIP Lounge</span>
          <span className="font-serif text-base ml-3 text-[#1a0505] font-medium">Fri – Sat · 10 PM – 3 AM</span>
        </div>
      </div>
    </div>
  );
}
