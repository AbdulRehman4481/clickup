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
      boxShadow: {
        'custom-shadow': '0 3px 5px 0 rgba(67, 46, 134, 0.05)',
        'purple-shadow': '0px 3px 3px 0px rgba(119,18,252,0);',
      },
      fontFamily: {
        axiforma: ['Axiforma',"sans"],
      },
      backgroundImage: {
        'primary-image': "url('/assets/images/hOMQep.svg')",
        'ai-image': "url('/assets/images/ai-bg-asset.png')",
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
