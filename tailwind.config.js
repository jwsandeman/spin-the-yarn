/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mycyberpunk: {
          primary: "#FDF500",
          secondary: "#9370DB",
          accent: "#CB1DCD",
          // Dark/neutral - 100: For body background color
          // Dark/neutral - 200: For cards background color
          // Dark/neutral - 300: For chips buttons, dropdowns background color
          // Dark/neutral - 400: For sidebars, navbar background color
          // Dark/neutral - 500: For modal, dialogs background color
          // Dark/neutral - 600: For on background texts color
          neutral: "#272932",
          "base-100": "#1B1C22",
          info: "#37EBF3",
          success: "#2CF6B3",
          warning: "#E55934",
          error: "#D62246",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  plugins: [require("daisyui")],
}
