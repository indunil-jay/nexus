import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const withOpacity = (variableName: string) => {
  return ({ opacityValue }: { opacityValue?: number }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}),${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--color-primary") as any,
        "primary-darker": withOpacity("--color-primary-darker") as any,
        "primary-lighter": withOpacity("--color-primary-lighter") as any,
        "dark-0": withOpacity("--color-dark-0") as any,
        "dark-50": withOpacity("--color-dark-50") as any,
        "dark-100": withOpacity("--color-dark-100") as any,
        "dark-200": withOpacity("--color-dark-200") as any,
        "dark-300": withOpacity("--color-dark-300") as any,
        "dark-400": withOpacity("--color-dark-400") as any,
        "dark-500": withOpacity("--color-dark-500") as any,
        "dark-600": withOpacity("--color-dark-600") as any,
        "dark-700": withOpacity("--color-dark-700") as any,
        "dark-800": withOpacity("--color-dark-800") as any,
        "dark-900": withOpacity("--color-dark-900") as any,
        "dark-950": withOpacity("--color-dark-950") as any,
      },
      fontFamily: {
        AllertaStencil: ["var(--font-AllertaStencil)"],
      },
    },
  },
};

export default config;
