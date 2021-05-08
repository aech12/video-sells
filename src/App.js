import React, { useState, useEffect } from "react";
// import logo from "./Files/logo.svg";
import axios from "axios";
import api from "./services/utils";
import Navbar from "./Components/Navbar";
import Main from "./Containers/Main";
import Footer from "./Components/Footer";
import Payment from "./Containers/Pages/Payment";
import Signup from "./Containers/Pages/Signup";
import Login from "./Containers/Pages/Login";
import Account from "./Components/Account";
import Video from "./Containers/Pages/Video";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserHistory
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // useEffect(() => {
  // }, []);

  return (
    <>
      <Router history={BrowserHistory}>
        <Navbar loggedIn={user} />
        <Link to="/login">Login </Link>
        <Link to="/sign-up">SignUp </Link>
        <Link to="/video">Video </Link>
        <Link to="/payment">Pay </Link>
        <Link to="/account">Acc </Link>
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
          <Route path="/account" component={Account} />
        </Switch>
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
