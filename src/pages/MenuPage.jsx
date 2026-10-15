import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarCheck, Star } from "lucide-react";

const tabs = ["Starters", "Mains", "Desserts", "Cocktails", "Wine"];

const menuData = {
  Starters: [
    { name: "Kitfo Steak Tartare",          price: "$28",      desc: "Hand-minced prime beef tenderloin, infused mitmita spiced ghee (niter kibbeh), house ayib cheese, crispy injera chips.", badge: "Signature" },
    { name: "Sambusa de Canard",           price: "$24",      desc: "Confit duck leg, caramelized shallots, cardamom-berbere glaze, cilantro-lime herb purée.", badge: "Chef Pick" },
    { name: "Artisanal Burrata & Beets",   price: "$22",      desc: "Imported burrata, spiced Ethiopian wild honey reduction, roasted golden beets, toasted pistachios, micro basil.", badge: null },
    { name: "Truffled Arancini & Ayib",    price: "$26",      desc: "Crispy saffron risotto spheres, fontina core, whipped spiced ayib cream, shaved black winter truffle.", badge: "Signature" },
    { name: "Yellowfin Tuna Crudo",        price: "$32",      desc: "Sashimi-grade tuna, korarima pepper citrus vinaigrette, avocado mousse, toasted sesame, crispy teff wafer.", badge: null },
    { name: "Foie Gras & Doro Glaze",      price: "$44",      desc: "Pan-seared Hudson Valley foie gras, brioche toast, caramelized shallot & berbere gastrique, pomegranate pearls.", badge: "Prestige" },
  ],
  Mains: [
    { name: "Berbere Dry-Aged Ribeye 14oz", price: "$88",     desc: "45-day dry-aged prime ribeye, berbere compound butter, bone marrow jus, roasted garlic pomme purée.", badge: "Signature" },
    { name: "Doro Wat Confit",             price: "$58",      desc: "Slow-confit heritage chicken, 12-hour spiced sweet onion reduction, soft organic quail egg, artisanal teff crisps.", badge: "Heritage" },
    { name: "Pan-Seared Chilean Sea Bass", price: "$64",      desc: "Wild line-caught sea bass, cardamom lemongrass fumet, wilted spiced gomen greens, saffron basmati.", badge: "Chef Pick" },
    { name: "Rosemary Lamb Shank Tibs",    price: "$68",      desc: "Slow-braised Colorado lamb shank, rosemary niter kibbeh jus, caramelized peppers, creamy polenta cake.", badge: "Signature" },
    { name: "Wild Forest Mushroom Risotto", price: "$44",     desc: "Acquerello carnaroli rice, porcini, shiitake, korarima brown butter, 24-month Parmigiano-Reggiano, chive oil. (V)", badge: "Veg" },
    { name: "Butter-Poached Lobster Tibs", price: "$76",      desc: "Whole Maine lobster tail, spiced clarified butter, sweet blistered cherry tomatoes, fresh tarragon, teff blinis.", badge: "Seasonal" },
  ],
  Desserts: [
    { name: "Yirgacheffe Coffee Tiramisu", price: "$18",      desc: "Espresso-soaked ladyfingers, whipped mascarpone, dark cocoa, single-origin Ethiopian Yirgacheffe coffee reduction.", badge: "Signature" },
    { name: "Valrhona Chocolate Fondant",  price: "$18",      desc: "Warm 72% dark chocolate fondant, cardamom salted caramel centre, Madagascan vanilla bean gelato.", badge: "Must Try" },
    { name: "Tej Honey Wine Panna Cotta",  price: "$16",      desc: "Silky coconut cream panna cotta, house Tej (honey wine) reduction, compressed ripe mango, roasted pistachios.", badge: null },
    { name: "Artisan Fromage Board",       price: "$28",      desc: "Five curated European cheeses, raw Ethiopian wild acacia honeycomb, spiced fig preserve, walnut sourdough.", badge: null },
    { name: "Soufflé du Jour",             price: "$20",      desc: "Pastry chef's daily rising soufflé served with warm spiced ginger crème anglaise.", badge: "Chef Pick" },
  ],
  Cocktails: [
    { name: "Addis Nights Old Fashioned",  price: "$24",      desc: "Small-batch bourbon, house-spiced date reduction, Ethiopian coffee bitters, expressed orange peel.", badge: "Signature" },
    { name: "The Queen of Sheba",          price: "$28",      desc: "Grey Goose vodka, artisanal Tej honey wine, passion fruit liqueur, fresh lime, Champagne float, 24K edible gold.", badge: "VIP Exclusive" },
    { name: "Highland Botanist",           price: "$22",      desc: "Hendrick's gin, elderflower liqueur, fresh cucumber, crushed rosemary, fever-tree tonic, korarima aroma mist.", badge: null },
    { name: "Smoked Berbere Margarita",    price: "$24",      desc: "Clase Azul reposado, artisanal mezcal mist, cold-pressed lime juice, organic blue agave, mild berbere smoked rim.", badge: "Must Try" },
    { name: "Zero-Proof Queen",            price: "$16",      desc: "Seedlip Spice, hibiscus flower infusion, cold-pressed lime, sparkling water, crushed mint sprig. (N/A)", badge: "N/A" },
  ],
  Wine: [
    { name: "Blanc de Blancs — Krug",       price: "$420 / btl", desc: "Champagne, France. Ethereal bubbles, toasted brioche, white peach, roasted hazelnut finish.", badge: "Prestige" },
    { name: "Chardonnay — Aubert CIX",      price: "$180 / btl", desc: "Sonoma Coast, California. Creamy texture, Meyer lemon curd, delicate French oak, remarkable length.", badge: null },
    { name: "Pinot Noir — Screaming Eagle", price: "$260 / btl", desc: "Napa Valley, California. Silky tannins, dark cherry, dried violets, cassis. Cult icon.", badge: "Signature" },
    { name: "Rift Valley Syrah Reserve",    price: "$120 / btl", desc: "Volcanic Rift Valley terroir, Ethiopia. Ripe dark blackberry, cracked black pepper, elegant oak.", badge: "Exclusive" },
    { name: "Sancerre — H. Bourgeois",      price: "$88 / btl",  desc: "Loire Valley, France. Crisp Sauvignon Blanc, gooseberry, wet flint, refreshing citrus.", badge: null },
  ],
};

function badgeClass(badge) {
  if (!badge) return null;
  if (badge === "Veg" || badge === "N/A") return "text-emerald-700 border border-emerald-600/30 bg-emerald-600/10";
  return "text-[#8E6E28] border border-[#C5A059]/40 bg-[#E5C378]/15";
}

const fadeUp = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("Starters");

  return (
    <main className="bg-[#080A0E] text-[#FAF6EE] min-h-screen">
      <Helmet>
        <title>Culinary &amp; Cocktail Menu | Bricks Lounge Miami</title>
        <meta
          name="description"
          content="Explore the exquisite Ethiopian culinary heritage and world-class international gastronomy menu at Bricks Lounge Miami. Prime steaks, fresh seafood, and craft cocktails."
        />
        <meta
          name="keywords"
          content="Bricks Lounge menu, Ethiopian fine dining Miami, dry aged steak Miami, craft cocktails Miami, luxury dining"
        />
        <link rel="canonical" href="https://www.brickslounge.com/menu" />
        <meta property="og:title" content="Culinary &amp; Cocktail Menu | Bricks Lounge Miami" />
        <meta
          property="og:description"
          content="Where time-honored Ethiopian culinary traditions meet world-class international gastronomy. Experience our chef-curated dining in Miami."
        />
        <meta property="og:url" content="https://www.brickslounge.com/menu" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.brickslounge.com/textures/brick.jpg" />
      </Helmet>

      {/* ─── HERO ─── */}
      <div className="relative pt-36 pb-20 overflow-hidden border-b border-[#E5C378]/25"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.85)" }} />
        <div className="section-inner relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-4 block">
            The Culinary Experience
          </motion.span>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-wide mb-6 max-w-3xl mx-auto leading-tight text-[#FAF6EE]">
            What We&apos;re <span className="font-script text-5xl md:text-7xl font-normal italic" style={{ color: "#E5C378", textShadow: "0 0 18px rgba(229,195,120,0.35)" }}>Serving</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans text-sm md:text-base text-[#FAF6EE]/75 max-w-2xl mx-auto leading-relaxed font-normal">
            Time-honored Ethiopian culinary traditions harmonized with refined international gastronomy. Artfully spiced, meticulously plated, and crafted for an unforgettable evening.
          </motion.p>
        </div>
      </div>

      {/* ─── MENU SECTION ─── */}
      <section className="relative py-20"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.88)" }} />
        <div className="section-inner relative z-10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-sans text-xs tracking-widest uppercase font-semibold px-7 py-3 rounded-sm transition-all duration-300 ${
                  activeTab === tab
                    ? "text-[#1a0505] shadow-lg shadow-[#E5C378]/25"
                    : "text-[#FAF6EE]/75 hover:text-[#FAF6EE] bg-black/40 border border-[#E5C378]/30 hover:border-[#E5C378]/60"
                }`}
                style={activeTab === tab ? {
                  background: "linear-gradient(135deg, #ECC880 0%, #C59B4E 100%)",
                  border: "1.5px solid #E5C378"
                } : {}}>
                {tab}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
              <motion.div initial="hidden" animate="show" variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuData[activeTab].map((item) => (
                  <motion.div
                    key={item.name}
                    variants={fadeUp}
                    className="p-7 rounded-sm transition-all duration-300 group hover:-translate-y-0.5 shadow-xl"
                    style={{
                      backgroundColor: "#172022",
                      border: "1.5px solid rgba(229,195,120,0.50)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.45), 0 0 15px rgba(229,195,120,0.10)"
                    }}>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <Star className="text-[#E5C378] mt-1 flex-shrink-0 opacity-90 group-hover:scale-110 transition-transform" size={15} fill="#E5C378" />
                        <h3 className="font-display font-bold text-lg text-[#FAF6EE] leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {item.badge && (
                          <span className={`text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${badgeClass(item.badge)}`}>
                            {item.badge}
                          </span>
                        )}
                        <span className="font-serif font-bold text-[#E5C378] text-lg whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    <p className="font-sans text-xs md:text-sm leading-relaxed pl-7 text-[#FAF6EE]/75 font-normal">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-20 border-t border-[#E5C378]/25"
        style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(8,10,14,0.92)" }} />
        <div className="section-inner text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs tracking-[0.35em] uppercase font-sans text-[#E5C378] font-semibold mb-3 block">
              Reserve Your Table
            </span>
            <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-5" />
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#FAF6EE]">
              Ready to <span className="font-script text-4xl md:text-6xl font-normal italic" style={{ color: "#E5C378" }}>Dine?</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-[#FAF6EE]/75 max-w-md mx-auto mb-8 font-medium">
              Tables fill quickly for dinner service and late-night lounge seating. Reserve ahead and let our team curate your evening.
            </p>
            <Link to="/reservations" className="btn-brick inline-flex items-center gap-2.5">
              <CalendarCheck size={18} /> Reserve a Table
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}