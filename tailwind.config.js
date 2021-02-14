const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/styles/**/*.tsx"
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        500: "500px"
      },
      minWidth: {
        375: "375px",
        72: "18rem"
      },
      minHeight: {
        64: "16rem"
      }
    },
    colors: {
      ...colors,
      grayBlue: "#2c385a",
      grayBlueTint: "#f5f6fa",
      transparentBlue: "rgba(37,38,94,0.7)",
      lightGray: "#f9fafc"
    }
  }
}
