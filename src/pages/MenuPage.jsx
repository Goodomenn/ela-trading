import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarCheck, Star } from "lucide-react";

const tabs = ["Starters", "Mains", "Desserts", "Cocktails", "Wine"];

const menuData = {
  Starters: [
    { name: "Burrata & Heirloom Tomato",  price: "$22",      desc: "House-made burrata, vine-ripened heirloom tomatoes, aged balsamic, micro basil.",              badge: null },
    { name: "Wagyu Beef Tataki",           price: "$38",      desc: "Thinly seared A5 wagyu, ponzu, toasted sesame, pickled daikon, crispy shallots.",              badge: null },
    { name: "Seared Scallops",             price: "$34",      desc: "Day-boat scallops, roasted cauliflower purée, pancetta crisp, caper brown butter.",             badge: "Seasonal" },
    { name: "Truffle Arancini",            price: "$26",      desc: "Crispy saffron risotto balls, black truffle, fontina, smoked tomato coulis.",                  badge: null },
    { name: "Tuna Tartare",               price: "$32",      desc: "Yellowfin tuna, avocado, lime zest, sesame oil, wonton crisps, chilli oil.",                   badge: null },
    { name: "Foie Gras Torchon",           price: "$44",      desc: "House-cured foie gras, brioche toast, Sauternes gel, pickled cherry, fleur de sel.",           badge: "Signature" },
  ],
  Mains: [
    { name: "Dry-Aged Ribeye 14oz",        price: "$88",      desc: "45-day dry-aged prime ribeye, bone marrow butter, roasted shallot, pomme purée.",              badge: "Signature" },
    { name: "Mediterranean Sea Bass",      price: "$56",      desc: "Line-caught sea bass, saffron broth, charred fennel, olive tapenade, micro herbs.",            badge: null },
    { name: "Duck Breast Confit",          price: "$62",      desc: "48-hour confit duck, cherry jus, roasted beetroot, pistachio, fresh thyme.",                   badge: "Chef Pick" },
    { name: "Wild Mushroom Risotto",       price: "$44",      desc: "Arborio rice, porcini, shiitake, truffle oil, aged parmesan, chive oil. (V)",                  badge: "Veg" },
    { name: "Lamb Rack Two Bone",          price: "$72",      desc: "Herb-crusted Colorado lamb, harissa jus, roasted aubergine, mint gremolata.",                  badge: null },
    { name: "Lobster Linguine",            price: "$68",      desc: "Whole Maine lobster, house linguine, nduja butter, cherry tomatoes, fresh tarragon.",          badge: "Seasonal" },
  ],
  Desserts: [
    { name: "Valrhona Chocolate Fondant", price: "$18",      desc: "Warm Valrhona 72% fondant, salted caramel centre, Madagascan vanilla ice cream.",             badge: "Signature" },
    { name: "Yuzu Cheesecake",            price: "$16",      desc: "Silky yuzu cheesecake, yuzu curd, compressed mango, toasted sesame crumble.",                 badge: null },
    { name: "Tasting Cheese Board",       price: "$28",      desc: "Selection of five artisan cheeses, honeycomb, fig preserve, walnut bread, quince paste.",     badge: null },
    { name: "Mango Coconut Panna Cotta",  price: "$15",      desc: "Coconut milk panna cotta, fresh mango coulis, lime zest, toasted coconut.",                   badge: null },
    { name: "Soufflé du Jour",            price: "$20",      desc: "Our pastry chef's daily soufflé — light, airy, unmissable. Ask your server for today's flavour.", badge: "Must Try" },
  ],
  Cocktails: [
    { name: "Bricks Noir",               price: "$22",      desc: "Aged rum, cold-brew coffee, activated charcoal, vanilla, dark cacao bitters.",                  badge: "Signature" },
    { name: "24K Gold Rush",             price: "$28",      desc: "Rémy Martin XO, edible 24K gold flakes, honey shrub, fresh lemon, Champagne float.",            badge: "VIP Exclusive" },
    { name: "Midnight Garden",           price: "$19",      desc: "Hendrick's gin, elderflower, cucumber, fresh basil, lime, tonic water.",                        badge: null },
    { name: "Zero-Proof Bloom",          price: "$14",      desc: "Seedlip Spice, jasmine syrup, pink grapefruit, rosemary, sparkling water. (N/A)",               badge: "N/A" },
    { name: "Old Fashioned",             price: "$24",      desc: "Buffalo Trace bourbon, house-made demerara syrup, Angostura bitters, expressed orange peel.",   badge: null },
    { name: "The Socialite",             price: "$26",      desc: "Grey Goose vodka, St-Germain, lychee purée, lime, Champagne, edible shimmer.",                  badge: null },
  ],
  Wine: [
    { name: "Blanc de Blancs — Krug",        price: "$420 / btl", desc: "Champagne, France. Ethereal bubbles, brioche, white peach, toasted hazelnut. Prestige cuvée.", badge: "Prestige" },
    { name: "Chardonnay — Aubert CIX",       price: "$180 / btl", desc: "Sonoma Coast, California. Creamy texture, Meyer lemon, subtle oak, remarkable length.",        badge: null },
    { name: "Pinot Noir — Screaming Eagle",  price: "$260 / btl", desc: "Napa Valley, California. Silky tannins, dark cherry, violets, cassis. Cult Napa icon.",         badge: "Signature" },
    { name: "Malbec — Achaval Ferrer",       price: "$95 / btl",  desc: "Mendoza, Argentina. Plush blueberry, mocha, smooth finish. Outstanding value.",                  badge: null },
    { name: "Sancerre — H. Bourgeois",       price: "$88 / btl",  desc: "Loire Valley, France. Crisp Sauvignon Blanc, gooseberry, flint, zesty citrus.",                 badge: null },
  ],
};

function badgeClass(badge) {
  if (!badge) return null;
  if (badge === "Veg" || badge === "N/A") return "text-green-600 border border-green-600/30 bg-green-600/10";
  return "text-bl-brick border border-bl-brick/30 bg-bl-brick/10";
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("Starters");

  return (
    <main className="bg-bl-brick-bg text-bl-cream min-h-screen">
      <Helmet>
        <title>Culinary &amp; Cocktail Menu | Bricks Lounge Miami</title>
        <meta
          name="description"
          content="Explore the exquisite dining and beverage offerings at Bricks Lounge Miami. Dry-aged steaks, fresh seafood, artisan desserts, prestige wines, and craft cocktails."
        />
        <meta
          name="keywords"
          content="Bricks Lounge menu, Miami restaurant menu, dry aged steak Miami, craft cocktails Miami, fine dining menu"
        />
        <link rel="canonical" href="https://www.brickslounge.com/menu" />
        <meta property="og:title" content="Culinary &amp; Cocktail Menu | Bricks Lounge Miami" />
        <meta
          property="og:description"
          content="Dry-aged steaks, fresh seafood, artisan desserts, and bespoke cocktails crafted with passion at Bricks Lounge."
        />
        <meta property="og:url" content="https://www.brickslounge.com/menu" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.brickslounge.com/textures/brick.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Culinary &amp; Cocktail Menu | Bricks Lounge Miami" />
        <meta
          name="twitter:description"
          content="Dry-aged steaks, fresh seafood, artisan desserts, and bespoke cocktails crafted with passion at Bricks Lounge."
        />
        <meta name="twitter:image" content="https://www.brickslounge.com/textures/brick.jpg" />
      </Helmet>
      {/* ─── HERO ─── */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-bl-brick/30">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/textures/brick.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/70 to-black/82" />
        <div className="section-inner relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="section-label mb-4">
            The Menu
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            What We&apos;re Serving
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65, delay: 0.25 }} className="text-bl-muted text-lg max-w-xl mx-auto">
            Seasonally inspired, meticulously crafted, and always worth the night out.
          </motion.p>
        </div>
      </div>

      {/* ─── MENU SECTION ─── */}
      <section className="relative py-20">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/textures/wood.jpg')", backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="section-inner relative z-10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab ? "bg-bl-brick text-white shadow-lg shadow-bl-brick/30" : "text-bl-muted hover:text-bl-cream bg-bl-card border border-bl-brick/20"}`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
              <motion.div initial="hidden" animate="show" variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {menuData[activeTab].map((item) => (
                  <motion.div key={item.name} variants={fadeUp} className="bg-black/60 p-7 rounded-xl border border-bl-brick/15 hover:bg-black/80 transition-colors group">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <Star className="text-bl-brick mt-0.5 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" size={14} />
                        <h3 className="font-semibold text-bl-cream leading-snug">{item.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {item.badge && (
                          <span className={`text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${badgeClass(item.badge)}`}>
                            {item.badge}
                          </span>
                        )}
                        <span className="text-bl-brick font-bold whitespace-nowrap">{item.price}</span>
                      </div>
                    </div>
                    <p className="text-bl-muted text-sm leading-relaxed pl-5">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-bl-brick-bg">
        <div className="section-inner text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">Reserve Your Table</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Dine?</h2>
            <p className="text-bl-muted max-w-md mx-auto mb-10">Tables fill quickly — especially on weekends. Book ahead and let us take care of the rest.</p>
            <Link to="/reservations" className="btn-brick inline-flex items-center gap-2">
              <CalendarCheck size={18} /> Reserve a Table
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}