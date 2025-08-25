module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0E1116',
          700: '#161B22',
        },
        accent: {
          copper: {
            500: '#B87A5C',
            600: '#9E644B',
          }
        }
      }
    },
  },
  plugins: [],
}
