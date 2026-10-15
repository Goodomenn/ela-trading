/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Luxury Gold & Champagne (harmonizes with stone & ambient lighting)
        "bl-gold":        "#E5C378",
        "bl-gold-light":  "#F3E5AB",
        "bl-gold-dark":   "#C5A059",
        "bl-champagne":   "#F5E6CA",
        "bl-ivory":       "#FAF6EE",

        // Replaced red palette with Warm Bronze & Antique Gold (NO RED)
        "bl-brick":       "#C5A059",
        "bl-brick-deep":  "#8E6E28",
        "bl-brick-light": "#E5C378",
        "bl-brick-bg":    "#080A0E",

        // Wood & Stone browns
        "bl-wood":        "#15181E",
        "bl-wood-mid":    "#242A35",
        "bl-wood-light":  "#3B4454",
        "bl-wood-warm":   "#2C2218",

        // Plaster whites & creams
        "bl-plaster":     "#F0ECE6",
        "bl-plaster-mid": "#D8D2C8",
        "bl-plaster-dark":"#B8B0A6",

        // Text
        "bl-cream":       "#F7F2E7",
        "bl-offwhite":    "#EDE8E0",
        "bl-muted":       "#A8A09A",
        "bl-dimmed":      "#736C65",

        // Cards / surfaces (luxury obsidian & bronze borders)
        "bl-surface":     "#0F1217",
        "bl-card":        "#13171F",
        "bl-elevated":    "#1A202C",
        "bl-border":      "rgba(229,195,120,0.30)",
        "bl-border-wood": "rgba(197,160,89,0.35)",
        "bl-border-light":"rgba(229,195,120,0.45)",
      },
      fontFamily: {
        display: ["'Cinzel'", "'Playfair Display'", "Georgia", "serif"],
        serif:   ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        script:  ["'Pinyon Script'", "'Playfair Display'", "cursive", "serif"],
        sans:    ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brick-texture":   "url('/textures/brick.jpg')",
        "wood-texture":    "url('/textures/wood.jpg')",
        "plaster-texture": "url('/textures/plaster.png')",
        "brick-gradient":  "linear-gradient(135deg, #ECC880 0%, #C59B4E 50%, #8E6E28 100%)",
        "wood-gradient":   "linear-gradient(180deg, #15181E 0%, #242A35 50%, #15181E 100%)",
        "gold-gradient":   "linear-gradient(135deg, #FFF6E5 0%, #E5C378 40%, #ECC880 70%, #C59B4E 100%)",
      },
    },
  },
  plugins: [],
};
