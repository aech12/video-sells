import React, { useState, useEffect } from "react";
// import logo from "./Files/logo.svg";
import axios from "axios";
import api from "./services/utils";
import Navbar from "./Components/Navbar";
import Main from "./Containers/Main";
import Footer from "./Components/Footer";
import { Admin, Video, Girl, Girls } from "./Containers/Content/exporter";
import { Payment, Signup, Login, Account } from "./Containers/Pages/exporter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { createBrowserHistory } from "history";

import { useColorMode } from "@chakra-ui/react";

const history = createBrowserHistory();
// check navbar 153 r.hook can only be called inside react func comp

function App() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [pics, setpics] = useState([]);

  useEffect(() => {
    const isUserLoggedIn = window.localStorage.getItem("loggedUser");
    if (isUserLoggedIn) {
      setUser(isUserLoggedIn);
    }
  }, []);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </button>
      <Router history={history}>
        <Navbar loggedIn={user} />
        <Link to="/login">Login </Link>
        <Link to="/sign-up">SignUp </Link>
        <Link to="/video">Video </Link>
        <Link to="/payment">Pay </Link>
        <Link to="/account">Acc </Link>
        <Link to="/admin">Admin </Link>
        <Link to="/models">Models </Link>
        <Link
          to={{
            pathname: "/model/Anastasia",
            state: {
              name: "Anastasia Sophia",
              age: "Date ()",
              picture: "pic.jpg"
            }
          }}
        >
          Model
        </Link>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} user={user} setUser={setUser} />
            )}
          />
          <Route path="/sign-up" component={Signup} />
          <Route path="/video" component={Video} />
          <Route path="/payment" component={Payment} />
          <Route
            path="/account"
            render={(props) => (
              <Account {...props} user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/admin"
            render={(props) => (
              <Admin {...props} user={user} setUser={setUser} />
            )}
          />
        </Switch>
        <Route path="/models" exact component={Girls} />
        <Route path="/model/:id" component={Girl} />
        <Footer />
      </Router>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
      />
    </>
  );
}

export default App;
