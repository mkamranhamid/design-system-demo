import { Typography } from "./variants";

const breakpoints = ["30em", "40em", "50em", "80em"]
const [sm, md, lg, xl] = breakpoints
const theme = {
    colors: {
        white: ['#ffffff'],
        blue: ['#f2f7f8', '#2a60e4'],
        black: [
            '#a6a6a6',
            '#808080',
            '#4d4d4d',
            '#1a1a1a',
        ],
    },
    fontSize: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontFamily: "'Sen', sans-serif",
    // custom breakpoints
    sm, md, lg, xl,
    gridTemplateColumns: {
        full: "repeat(auto-fill, minmax(100%, 1fr))",
        half: "repeat(auto-fill, minmax(45%, 1fr))",
        third: "repeat(auto-fill, minmax(25%, 1fr))",
    },
    Typography,
}

export { theme }