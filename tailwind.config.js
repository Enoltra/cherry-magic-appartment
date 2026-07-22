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
        gold: "#C79A56",
        santafe: {
          DEFAULT: "#5F7A5A",
          dark: "#46603F",
          light: "#8AA184",
          tint: "#E7EEE3"
        }
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
