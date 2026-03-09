
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0a1628',
          800: '#0f2240',
          700: '#142d54',
          600: '#1a3a6b',
        },
        red: {
          600: '#cc0000',
          700: '#b30000',
        },
        blue: {
          800: '#003087',
          700: '#003da6',
          600: '#0050c8',
        }
      }
    }
  },
  plugins: []
};
