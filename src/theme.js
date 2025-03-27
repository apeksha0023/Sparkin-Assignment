import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
        fontFamily: "Arial, sans-serif",
      },
    },
  },
});

export default theme;