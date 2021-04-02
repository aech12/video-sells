import React from "react";
import logo from "./logo.svg";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Containers/Main";
import TopVideos from "./Containers/TopVideos";
import Join from "./Containers/Join";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserHistory
} from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router history={BrowserHistory}>
        <Navbar />
        <Link to="/"> home </Link>
        <Link to="/login">Login </Link>
        <Link to="/sign-up">Register </Link>
        <Switch>
          <Route path="/" exact>
            <Main />
            <TopVideos />
            {/* <Join /> */}
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
