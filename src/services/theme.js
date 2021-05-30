import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },
  colors: {
    primary: "#ff0634",
    secondary: "#23eb58",
    dark: "",
    light: ""
  },
  global: {
    "#react-paginate": {
      // display: "flex",
      // justifyContent: "center",
      li: {
        display: "block",
        background: "red"
      }
    }
  }
});

export default theme;
