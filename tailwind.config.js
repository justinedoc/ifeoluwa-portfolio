/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "purple-gradient": "linear-gradient(270deg, #E047FF 0%, #7856FE 100%)",
      },
    },
  },
  plugins: [],
};
