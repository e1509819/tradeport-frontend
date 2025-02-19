module.exports = {
  darkMode: "class", // Use class-based dark mode, so that we can toggle it with a class on the body element
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      colors: {
        xploreSGDark: "hsl(221, 83%, 53%)",
        xploreSG: "hsl(221, 83%, 53%)",
        xploreSGLight: "hsl(221, 83%, 53%)",
        xploreSGVeryLight: "hsl(221, 83%, 53%)",
        xploreSGAccent: "hsl(221, 83%, 53%)",
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        lightGray: "hsl(208, 11%, 53%)",
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
