/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // jeśli używasz App Routera
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['new_rockerregular', 'cursive'], // defaultowy font dla Tailwindowej klasy font-sans
        rocker: ['new_rockerregular', 'cursive'],
        kaushan: ['kaushan_scriptregular', 'cursive'],
      },
    },
  },
  plugins: [],
};
