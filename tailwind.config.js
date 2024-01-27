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
      md: { max: "767px" },
    },
    // extend: {},
  },
  plugins: [],
};
