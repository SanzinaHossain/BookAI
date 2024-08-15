/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header_bg: "#6366f1",
        primary: "#0f172a",
        secondary: "#1e293b",
        textColor: "#e2e8f0",
        borderColor: "#334155",
        SectionTitleColor: "#a5b4fc",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}
