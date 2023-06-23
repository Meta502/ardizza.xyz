/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cornflower-blue': {
          DEFAULT: '#8B5CF6',
          50: '#FFFFFF',
          100: '#F9F7FF',
          200: '#DED0FC',
          300: '#C2A9FA',
          400: '#A783F8',
          500: '#8B5CF6',
          600: '#6527F3',
          700: '#4A0CD6',
          800: '#3709A1',
          900: '#25066C',
          950: '#1C0451'
        },
        "pale-gray": {
          DEFAULT: '#6B7280',
          50: '#E6E8EA',
          100: '#D8DADF',
          200: '#BDC0C7',
          300: '#A1A6B0',
          400: '#858C99',
          500: '#6B7280',
          600: '#4F545F',
          700: '#33373D',
          800: '#17191C',
          900: '#000000',
          950: '#000000'
        }
      },
      fontFamily: {
        "mono": ["Inconsolata", "Courier New", "monospace"],
        "inter": ["Inter"],
      }
    },
  },
  plugins: [],
}

