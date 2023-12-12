/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        8: "repeat(8, 100px)",
        footer: "200px minmax(900px, 1fr) 100px",
      },
      gridTemplateRows: {
        8: "repeat(8, 100px)",
        footer: "200px minmax(900px, 1fr) 100px",
      },
      spacing: {
        special: "calc(50%-150px)",
      },
    },
  },
  plugins: [],
};
