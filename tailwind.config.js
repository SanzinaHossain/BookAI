/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode using a CSS class
  theme: {
    extend: {
      colors: {
        header_bg: "#6366f1",
        primary: "#0f172a",
        secondary: "#1e293b",
        textColor: "#e2e8f0",
        borderColor: "#334155",
        SectionTitleColor: "#a5b4fc",

        light_header_bg: "#e0e7ff",
        light_primary: "#f1f5f9 ",
        light_secondary: "#f8fafc",
        light_textColor: "#1e293b",
        light_borderColor: "#cbd5e1",
        light_SectionTitleColor: "#4f46e5",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}
