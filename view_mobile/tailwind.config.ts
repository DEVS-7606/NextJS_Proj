import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "425px",
      xxs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        grayType: "#444343",
        lightGray: "#666666",
        almostBlack: "#333333",
        saltWhite: "#E8F4FD",
        seaBlue: "#0073cf",
        darkerSeaBlue: "#0464b0",
      },
      fontSize: {
        44: "44px",
      },
      lineHeight: {
        52: "52px",
        82: "82px",
      },
      width: {
        76: "76px",
        150: "150px",
        140: "140px",
        130: "130px",
        120: "120px",
        350: "350px",
        300: "300px",
      },
    },
  },
  plugins: [],
};
export default config;
