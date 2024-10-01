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
      fontFamily: {
        axiforma: ['Axiforma', 'sans-serif'],
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
