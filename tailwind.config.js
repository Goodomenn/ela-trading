/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF5EC',
          200: '#F5EFEB',
          300: '#ECE3D4',
          400: '#DFD2BE',
          500: '#C8BAA3',
        },
        terracotta: {
          400: '#EB755E',
          500: '#DC5D45',
          600: '#C04933',
        },
        ink: {
          600: '#34525A',
          700: '#233F46',
          800: '#193238',
          900: '#112226',
          950: '#0B171A',
        },
        sage: {
          300: '#A6B8A7',
          400: '#8A9E8B',
          500: '#718772',
          600: '#5A6F5B',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
        typewriter: ['"Courier Prime"', 'Courier', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
