import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        button: {
          primary: {
            DEFAULT: '#009129',
            hover: '#056A21',
          }
        },
      },
      textColor: {
        primary: {
          titles: '#939393',
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '280px', 
        'sm': '684px',
        'md': '703px', 
        'lg': '900px',
        'xl': '1220px',
      },
    },
  },
  plugins: [],
};
export default config;
