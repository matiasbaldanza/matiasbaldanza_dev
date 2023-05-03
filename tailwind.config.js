/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
/*   theme: {
    colors: {
      primary: "#570df8",
      "primary-content": "#ffffff",
      secondary: "#f000b8",
      "secondary-content": "#ffffff",
      accent: "#37cdbe",
      "accent-content": "#163835",
      neutral: "#3d4451",
      "neutral-content": "#ffffff",
      "base-100": "#ffffff",
      "base-200": "#F2F2F2",
      "base-300": "#E5E6E6",
      "base-content": "#1f2937",  
    },
  }, */
}

/* {
  light: {
    primary: "#570df8",
    "primary-content": "#ffffff",
    secondary: "#f000b8",
    "secondary-content": "#ffffff",
    accent: "#37cdbe",
    "accent-content": "#163835",
    neutral: "#3d4451",
    "neutral-content": "#ffffff",
    "base-100": "#ffffff",
    "base-200": "#F2F2F2",
    "base-300": "#E5E6E6",
    "base-content": "#1f2937",
  },
  dark: {
    primary: "#ffffff",
    secondary: "#152747",
    accent: "#513448",
    neutral: "#171618",
    "neutral-content": "#dca54c",
    "base-100": "#09090b",
    "base-200": "#171618",
    "base-300": "#2e2d2f",
    "base-content": "#dca54c",
    info: "#66c6ff",
    success: "#87d039",
    warning: "#e2d562",
    error: "#ff6f6f",
  } */
