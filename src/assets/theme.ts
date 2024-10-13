import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        retroGreen: {
            50: "#e8f5e9",
            100: "#c8e6c9",
            200: "#a5d6a7",
            300: "#81c784",
            400: "#66bb6a",
            500: "#4caf50",
            600: "#43a047",
            700: "#388e3c",
            800: "#2e7d32",
            900: "#224923",
        },
    },
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
});

export default theme;
