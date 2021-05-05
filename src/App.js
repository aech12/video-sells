import React, { useState, useEffect } from "react";
// import logo from "./Files/logo.svg";
import axios from "axios";
import api from "./services/api";
import Navbar from "./Components/Navbar";
import Main from "./Containers/Main";
import Footer from "./Components/Footer";
import Payment from "./Containers/Pages/Payment";
import Signup from "./Containers/Pages/Signup";
// import Login from "./Containers/Login";
import Login from "./Components/LoginForm";
import Account from "./Components/Account";
import Video from "./Containers/Pages/Video";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserHistory
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // LOG IN
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      api.setToken(user.token);
    }
  }, []);
  const handleLogin = async (credentials) => {
    console.log("logging in with", credentials);
    try {
      // const response = await axios.post('/login', credentials)
      // const loggedUser = response.data

      // if (loggedUser) {
      //   api.setToken(loggedUser.token);
      //   window.localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      //   setUser(credentials);
      // }
      setUser(credentials);
    } catch (exception) {
      setErrorMessage("wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleSignup = async (credentials) => {
    console.log("logging in with", credentials);
    try {
      // const response = await axios.post('/login', credentials)
      // const loggedUser = response.data

      // if (loggedUser) {
      //   api.setToken(loggedUser.token);
      //   window.localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      //   setUser(credentials);
      // }
      setUser(credentials);
    } catch (exception) {
      setErrorMessage("wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <>
      <Router history={BrowserHistory}>
        <Navbar loggedIn={false} />
        <Link to="/login">Login </Link>
        <Link to="/sign-up">SignUp </Link>
        <Link to="/video">Video </Link>
        <Link to="/payment">Pay </Link>
        <Link to="/account">Acc </Link>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route
            path="/login"
            render={(props) => <Login {...props} handleLogin={handleLogin} />}
          />
          <Route
            path="/sign-up"
            component={Signup}
            render={(props) => (
              <Signup {...props} handleSignup={handleSignup} />
            )}
          />
          <Route path="/video" component={Video} />
          <Route path="/payment" component={Payment} />
          <Route path="/account" component={Account} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
