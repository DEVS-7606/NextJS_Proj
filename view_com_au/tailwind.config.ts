import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "425px",
      xxs: "375px",
      "1200px": "1200px",
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
        220: "220px",
        350: "350px",
        300: "300px",
        326: "326px",
        720: "720px",
        90: "90px",
        190: "190px",
      },
      height: {
        446: "446px",
        437: "437px",
        198: "198px",
        "120px": "120px",
        99: "99px",
      },
      minHeight: {
        192: "192px",
        108: "108px",
      },
      maxWidth: {
        1200: "1200px",
      },
      padding: {
        sm: "14px",
      },
      spacing: {
        52: "52px",
        68: "68px",
      },
    },
  },
  plugins: [],
};
export default config;
