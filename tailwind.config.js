const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./pages/**/*.tsx", "./components/**/*.tsx", "./styles/**/*.tsx"],
    darkMode: "class",
    theme: {
        minWidth: {
            375: "375px",
        },
        colors: {
            ...colors,
            purpleBlue: "#4B36F8",
        },
    },
};
