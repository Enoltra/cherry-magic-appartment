/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf3ec",
        charcoal: "#2b2320",
        cherry: "#b3273d",
        "cherry-dark": "#8a1d2e",
        "cherry-light": "#e07a8b",
        gold: "#c79a56",
        sage: "#353f2a"
      }
    }
  },
  plugins: []
};
