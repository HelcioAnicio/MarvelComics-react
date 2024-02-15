/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/Components/**/*.{html,js,jsx}",
    "./src/Pages/**/*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",
    "./index.html",
  ],
  theme: {
    screens: {
      "3xl": { "min": "1800px" },
      "2xl": { "min": "1500px" },
      "xl": { "min": "1000px" },
      "lg": { "min": "800px" },
      "md": { "min": "600px" },
      "sm": { "min": "500px" },
      "xs": { "min": "340px" },
    },
    // extend: {},
  },
  plugins: [],
};
