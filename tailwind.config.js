// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { height: "6px" },
          "50%": { height: "24px" },
        },
      },
      animation: {
        wave: "wave 1.3s ease-in-out infinite",
      },
    },
  },
};
