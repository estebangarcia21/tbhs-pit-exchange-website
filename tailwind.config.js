const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./pages/**/*.tsx", "./components/**/*.tsx", "./styles/**/*.tsx"],
    darkMode: false,
    theme: {
        minWidth: {
            375: "375px",
        },
        colors: {
            ...colors,
            "light-blue": "#0ea5e9",
            cyan: "#22d3ee",
            "cyan-500": "#06b6d4",
        },
    },
};
