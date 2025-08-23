// src/theme.js
import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "gray.900",
        color: "whiteAlpha.900",
        fontFamily: "heading",
        lineHeight: "tall",
      },
    },
  },
  colors: {
    brand: {
      50: "#e3f2f9",
      100: "#c5e4f3",
      200: "#a2d4ec",
      300: "#7ac1e4",
      400: "#47a9da",
      500: "#0088cc",
      600: "#007ab8",
      700: "#006ba1",
      800: "#005885",
      900: "#003f5e",
    },
  },
  fonts: {
    heading: `"Segoe UI", sans-serif`,
    body: `"Inter", sans-serif`,
  },
});

export default theme;
