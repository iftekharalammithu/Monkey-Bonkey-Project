/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(2rem, 5vw, 5rem)", //2rem is minimum 5vw is default 5rem is maximum
      },
      fontFamily: {
        "abril-fatface": ['"Abril Fatface"', "serif"],
      },
    },
  },
  plugins: [],
};
