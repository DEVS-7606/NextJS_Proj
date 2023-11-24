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
        errorRed: "#ef4444",
        shirtBlue: "#f6f6f6",
      },
      fontSize: {
        44: "44px",
        74: "74px",
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
        326: "326px",
        720: "720px",
      },
      height: {
        446: "446px",
        437: "437px",
        198: "198px",
      },
      maxWidth: {
        1200: "1200px",
      },
      padding: {
        sm: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
