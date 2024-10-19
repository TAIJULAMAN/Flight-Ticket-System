import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  corePlugins: {
    preflight: false,
  },
  darkMode: "class",
  important: "#__next",
  plugins: [require("tailwindcss-logical"), require("./src/@core/tailwind/plugin")],
  theme: {
    extend: {},
  },
};

export default config;
