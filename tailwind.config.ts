import { type Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      black: "#000000",
      blackAccent: {
        "100": "#F2F2F2",
        "200": "#E5E5E5",
        "300": "#B2B2B2",
        "400": "#666666",
      },
      primary: {
        "100": "#FEFDF7",
        "200": "#FDFCEF",
        "300": "#FAF9E5",
        "400": "#F6F3DC",
        "500": "#F0EDCF",
        "600": "#CEC897",
        "700": "#ACA568",
        "800": "#8B8242",
        "900": "#736927",
        DEFAULT: "#F0EDCF",
        foreground: "#0B60B0",
      },
      secondary: {
        "100": "#CBEDFB",
        "200": "#9AD8F7",
        "300": "#65B5E7",
        "400": "#3D90CF",
        "500": "#0B60B0",
        "600": "#084A97",
        "700": "#05377E",
        "800": "#032766",
        "900": "#021B54",
        DEFAULT: "#40A2D8",
        foreground: "#F0EDCF",
      },
      third: "#40A2D8",
    },
    fontFamily: {
      cairo: ["Cairo", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
    extend: {
      borderRadius: {
        "3xl": "4rem",
        "4xl": "6rem",
        "5xl": "8rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#F0EDCF", // or 50 to 900 DEFAULT
            primary: {
              "100": "#FEFDF7",
              "200": "#FDFCEF",
              "300": "#FAF9E5",
              "400": "#F6F3DC",
              "500": "#F0EDCF",
              "600": "#CEC897",
              "700": "#ACA568",
              "800": "#8B8242",
              "900": "#736927",
              DEFAULT: "#F0EDCF",
              foreground: "#0B60B0",
            },
            secondary: {
              "100": "#CBEDFB",
              "200": "#9AD8F7",
              "300": "#65B5E7",
              "400": "#3D90CF",
              "500": "#0B60B0",
              "600": "#084A97",
              "700": "#05377E",
              "800": "#032766",
              "900": "#021B54",
              DEFAULT: "#40A2D8",
              foreground: "#F0EDCF",
            },
            third: "#40A2D8",
          },
        },
      },
    }),
  ],
} satisfies Config;
