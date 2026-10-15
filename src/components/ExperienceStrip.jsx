export default function ExperienceStrip() {
  return (
    <div className="relative py-5 border-y border-[#E5C378]/30"
      style={{backgroundColor: "#1E2729", backgroundImage:"url('/textures/plaster.png')", backgroundBlendMode: "multiply", backgroundSize:"cover"}}>
      <div className="absolute inset-0" style={{background:"rgba(30, 39, 41, 0.95)"}}/>
      <div className="relative z-10 section-inner flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-center">
        <div>
          <span className="font-sans text-xs tracking-[0.35em] uppercase font-semibold text-[#E5C378]">Fine Dining</span>
          <span className="font-display text-base ml-3 text-[#FAF6EE] font-semibold tracking-wide">Tue – Sun · 5 PM – 10 PM</span>
        </div>
        <div className="hidden sm:block w-px h-7" style={{background:"rgba(197,160,89,0.4)"}}/>
        <div className="font-serif text-xl hidden sm:block text-[#E5C378]">✦</div>
        <div className="hidden sm:block w-px h-7" style={{background:"rgba(197,160,89,0.4)"}}/>
        <div>
          <span className="font-sans text-xs tracking-[0.35em] uppercase font-semibold text-[#E5C378]">VIP Lounge</span>
          <span className="font-display text-base ml-3 text-[#FAF6EE] font-semibold tracking-wide">Fri – Sat · 10 PM – 3 AM</span>
        </div>
      </div>
    </div>
  );
}
