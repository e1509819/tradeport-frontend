/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Use class-based dark mode, so that we can toggle it with a class on the body element
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
