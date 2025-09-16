/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom breakpoints here
      screens: {
        xs: "550px",
        "3xl": "1600px",
        // or override completely
      },
    },
  },
  plugins: [],
};
