/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'rgb(var(--bg-primary-rgb) / <alpha-value>)',
          surface: 'rgb(var(--bg-secondary-rgb) / <alpha-value>)',
          card: 'rgb(var(--bg-card-rgb) / <alpha-value>)',
          cardHover: 'rgb(var(--bg-card-hover-rgb) / <alpha-value>)',
          border: 'rgb(var(--border-color-rgb) / <alpha-value>)',
          borderLight: 'rgb(var(--border-light-rgb) / <alpha-value>)',
          textPrimary: 'rgb(var(--text-primary-rgb) / <alpha-value>)',
          textSecondary: 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
          textMuted: 'rgb(var(--text-muted-rgb) / <alpha-value>)',
          accent: 'rgb(var(--accent-color-rgb) / <alpha-value>)',
          accentHover: 'rgb(var(--accent-hover-rgb) / <alpha-value>)',
          accentText: 'rgb(var(--accent-text-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'theme-neon': '0 0 25px rgba(var(--accent-color-rgb), 0.35)',
        'theme-card': 'var(--card-shadow)',
        'theme-subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'wider-athlete': '0.2em',
      }
    },
  },
  plugins: [],
}
