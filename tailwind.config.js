const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./pages/**/*.tsx", "./components/**/*.tsx", "./styles/**/*.tsx"],
    darkMode: "class",
    theme: {
        extend: {
            height: {
                500: "500px"
            },
            minWidth: {
                375: "375px"
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
