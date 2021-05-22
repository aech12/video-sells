// import React from "react";
// import ReactDOM from "react-dom";
// // import theme from "./services/theme";
// import {
//   ChakraProvider,
//   ColorModeScript,
//   DarkMode,
//   extendTheme
// } from "@chakra-ui/react";
// import App from "./App2";
// import reportWebVitals from "./reportWebVitals";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("pk_test_XWrOTD8OWaSHcs3sUxtFZ7664");

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Elements stripe={stripePromise}> */}
//     <ChakraProvider
//       theme={extendTheme({
//         config: { useSystemColorMode: false, initialColorMode: "dark" }
//       })}
//     >
//       <ColorModeScript initialColorMode="dark" />
//       <App />
//     </ChakraProvider>
//     {/* </Elements> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

import App from "./App2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider
      theme={extendTheme({
        config: { useSystemColorMode: false, initialColorMode: "dark" }
      })}
    >
      <ColorModeScript initialColorMode="dark" />
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
