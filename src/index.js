import React from "react";
import ReactDOM from "react-dom";
// import theme from "./services/theme";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_XWrOTD8OWaSHcs3sUxtFZ7664");

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark"
};

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <ChakraProvider
        theme={extendTheme({
          config: { useSystemColorMode: false, initialColorMode: "dark" }
        })}
      >
        <ColorModeScript initialColorMode="dark" />
        <App />
      </ChakraProvider>
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
