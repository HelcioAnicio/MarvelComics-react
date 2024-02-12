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
      "2xl": { "min": "1800px" },
      "xl": { "min": "1500px" },
      "lg": { "min": "1000px" },
      "md": { "min": "600px" },
      "sm": { "min": "500px" },
      "xs": { "min": "340px" },
    },
    // extend: {},
  },
  plugins: [],
};
