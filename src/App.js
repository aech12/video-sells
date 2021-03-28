import React from "react";
import logo from "./logo.svg";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Containers/Main";
import TopVideos from "./Containers/TopVideos";
import Join from "./Containers/Join";
import Login from "./Containers/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Link to="/">home </Link>
        <Link to="/login">Link </Link>
        <Switch>
          <Route path="/" exact>
            <Main />
            <TopVideos />
            <Join />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
