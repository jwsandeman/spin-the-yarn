/** @type {import('tailwindcss').Config} */

const hexToRgb = (hex) => {
  // Remove the hash at the beginning of the hex color string
  hex = hex.replace(/^#/, "")

  // Parse the hex color string to an integer and extract the RGB components
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  // Return the RGB color as a string
  return `${r}, ${g}, ${b}`
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // neumorphic: ({ theme }) => {
        //   // Fetch the primary and secondary colors from the theme as hex values
        //   const primaryHex = theme("colors.primary")
        //   const secondaryHex = theme("colors.secondary")

        //   // Convert hex colors to RGB
        //   const primaryRgb = hexToRgb(primaryHex)
        //   const secondaryRgb = hexToRgb(secondaryHex)

        //   // Return the boxShadow value using the RGB colors
        //   return `4px 4px 6px 0 rgba(${primaryRgb}, 0.1), -4px -4px 6px 0 rgba(${secondaryRgb}, 0.7)`
        // },
        neumorphic: `4px 4px 6px 0 rgba(253, 245, 0, 0.1), -4px -4px 6px 0 rgba(147, 112, 219, 0.7)`, // Direct RGB values from your mycyberpunk theme
      },
    },
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
