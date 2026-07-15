/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cherry: {
          DEFAULT: "#B3273D",
          dark: "#8A1D2E",
          light: "#D65F71"
        },
        cream: "#FAF3EC",
        charcoal: "#2B2320",
        gold: "#C79A56"
      },
      fontFamily: {
        script: ["var(--font-script)"],
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      }
    }
  },
  plugins: []
};
