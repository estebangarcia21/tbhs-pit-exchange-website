const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./src/pages/**/*.tsx",
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
      purpleBlue: "#4B36F8",
      grayBlueTint: "#F6F9FC"
    }
  }
}
