import React from "react";
import logo from "./logo.svg";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Containers/Main";
import TopVideos from "./Containers/TopVideos";
import Join from "./Containers/Join";
import { Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Link to="Login">Login</Link>
        <Main />
        <TopVideos />
        <Join />
      </Router>
    </ChakraProvider>
  );
}

export default App;
