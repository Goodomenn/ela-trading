/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brick reds
        "bl-brick":       "#C41E3A",
        "bl-brick-deep":  "#8B0000",
        "bl-brick-light": "#E03050",
        "bl-brick-bg":    "#120303",
        // Wood browns
        "bl-wood":        "#2C1008",
        "bl-wood-mid":    "#5C2E0A",
        "bl-wood-light":  "#8B4513",
        "bl-wood-warm":   "#6B3520",
        // Plaster whites
        "bl-plaster":     "#F0ECE6",
        "bl-plaster-mid": "#D8D2C8",
        "bl-plaster-dark":"#B8B0A6",
        // Text
        "bl-cream":       "#F5F0E8",
        "bl-offwhite":    "#EDE8E0",
        "bl-muted":       "#A8A09A",
        "bl-dimmed":      "#6A625C",
        // Cards / surfaces
        "bl-surface":     "#1E0808",
        "bl-card":        "#261010",
        "bl-elevated":    "#301515",
        "bl-border":      "rgba(196,30,58,0.2)",
        "bl-border-wood": "rgba(139,69,19,0.3)",
        "bl-border-light":"rgba(180,170,160,0.4)",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brick-texture":   "url('/textures/brick.jpg')",
        "wood-texture":    "url('/textures/wood.jpg')",
        "plaster-texture": "url('/textures/plaster.png')",
        "brick-gradient":  "linear-gradient(135deg, #8B0000 0%, #C41E3A 50%, #8B0000 100%)",
        "wood-gradient":   "linear-gradient(180deg, #2C1008 0%, #5C2E0A 50%, #2C1008 100%)",
      },
    },
  },
  plugins: [],
};
