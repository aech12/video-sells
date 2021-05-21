import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark"
    // useSystemColorMode: false
  },
  colors: {
    primary: "#eb237a",
    secondary: "#23eb58",
    dark: "",
    light: ""
  }
});

export default theme;
