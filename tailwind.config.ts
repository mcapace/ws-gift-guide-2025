import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Wine Spectator Brand Colors - Sophisticated & Elegant
        wine: {
          burgundy: '#6B1F3A',
          dark: '#3D1119',
          medium: '#8B2E48',
          light: '#A84A63',
          rose: '#D4A5B0',
        },
        gold: {
          deep: '#B8860B',
          elegant: '#D4AF37',
          champagne: '#F7E7CE',
          shimmer: '#FFD700',
        },
        neutral: {
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          slate: '#2D2D2D',
          silver: '#C0C0C0',
          cream: '#FAF9F6',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-1': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-3': ['clamp(2rem, 4vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-wine': 'linear-gradient(135deg, #6B1F3A 0%, #3D1119 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
        'shimmer-gold': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
