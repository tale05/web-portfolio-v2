/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        playwrite: ['"Playwrite BE VLG"', "serif"],
        inter: ["Inter", "sans-serif"],
        notosans: ["Noto Sans", "sans-serif"],
      },
      backgroundImage: {
        "green-glow": `
          radial-gradient(circle at top left, rgba(34,197,94,0.25), transparent 70%),
          radial-gradient(circle at bottom right, rgba(22,163,74,0.2), transparent 70%),
          radial-gradient(circle at center, rgba(132,204,22,0.15), transparent 80%)
        `,
        "color-for-tilte":
          "linear-gradient(to right, #10b981, #16a34a, #047857)",
        "text-tilte": "linear-gradient(to right, #38ba1c, #5fbd4a, #38ba1c)",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0,0,0,0.5)",
        DEFAULT: "2px 2px 4px rgba(0,0,0,0.5)",
        lg: "4px 4px 10px rgba(0,0,0,0.6)",
      },
      zIndex: (() => {
        const obj = {};
        for (let i = 0; i <= 20; i++) {
          obj[i] = i;
        }
        return obj;
      })(),
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
