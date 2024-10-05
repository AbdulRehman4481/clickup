import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/(components)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-max-1390": { max: "1390px" },
        "custom-max-1286": { max: "1286px" },
        "custom-max-1200": { max: "1200px" },
        "custom-min-1200": { min: "1200px" },
        "custom-max-1180": { max: "1180px" },
        "custom-max-1177": { max: "1177px" },
        "custom-max-1150": { max: "1150px" },
        "custom-max-1138": { max: "1138px" },
        "custom-max-1135": { max: "1135px" },
        "custom-max-1112": { max: "1112px" },
        "custom-max-1082": { max: "1082px" },
        "custom-min-1012": { min: "1012px" },
        "custom-max-1000": { max: "1000px" },
        "custom-max-1050": { max: "1050px" },
        "custom-max-1060": { max: "1060px" },
        "custom-max-1045": { max: "1045px" },
        "custom-max-1040": { max: "1040px" },
        "custom-max-1012": { max: "1012px" },
        "custom-max-980": { max: "980px" },
        "custom-max-975": { max: "975px" },
        "custom-max-950": { max: "950px" },
        "custom-min-950": { min: "950px" },
        "custom-max-900": { max: "900px" },
        "custom-max-850": { max: "850px" },
        "custom-max-800": { max: "800px" },
        "custom-max-770": { max: "770px" },
        "custom-max-700": { max: "700px" },
        "custom-min-700": { min: "700px" },
        "custom-max-600": { max: "600px" },
        "custom-min-966": { min: "966px" },
        "custom-max-500": { max: "500px" },
      },
      boxShadow: {
        "custom-shadow": "0 3px 5px 0 rgba(67, 46, 134, 0.05)",
        "purple-shadow": "0px 3px 3px 0px rgba(119,18,252,0);",
      },
      fontFamily: {
        axiforma: ["Axiforma", "sans"],
      },
      backgroundImage: {
        "primary-image": "url('/assets/images/hOMQep.svg')",
        "ai-image": "url('/assets/images/ai-bg-asset.png')",
        "primary-gradient":
          "linear-gradient(56deg, #45c4f9, #7d09ff 50.33%, #ff0be5)",
        "grey-gradient":
          "background: linear-gradient(to right, #CECEEA, #FA12E3)",
        "secondary-gradient":
          "background: radial-gradient( #45c4f9 10%, #7d09ff 20.33%, #ffff)",
        "black-gradient":
          "radial-gradient(101.72% 63.11% at 69.09% 71.59%, #313741 0%, #252A31 100%)",
        "blue-gradient":
          "linear-gradient(352deg, #6731EC 1.65%, #44CFFF 118.4%)",
        "dark-blue-gradient":
          "linear-gradient(170deg, #6731EC 1.65%, #44CFFF 118.4%)",
        "purple-gradient":
          "linear-gradient(351deg, #5037E7 12.36%, #EB00FF 124.69%)",
        "orange-gradient":
          "linear-gradient(168deg, #D613EE -55.05%, #FF674E 64.52%)",
        "pink-blue-gradient":
          "linear-gradient(154deg, rgb(255, 120, 97) -38.54%, rgb(214, 19, 238) 99.56%)",
        "pink-blue-2-gradient":
          "linear-gradient(152deg, rgb(235, 0, 255) 6.96%, rgb(80, 55, 231) 107.25%)",
        "white-blue-gradient":
          "linear-gradient(154deg, rgb(103, 49, 236) -38.54%, rgb(80, 210, 255) 99.56%)",
        "small-pink-gradient":
          "linear-gradient(186.32deg, #ff22ca -92.99%, rgba(255, 34, 202, 0) 13.97%)",
        "small-green-gradient":
          "linear-gradient(186.32deg,#21c828 -92.99%,#fff 13.97%)",
        "task-purple-gradient":
          "linear-gradient(263deg, #FA12E3 -35%, #7612FA 41%, #12d0fa 135%);",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
