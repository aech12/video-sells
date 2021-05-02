import React, { useState, useEffect } from "react";
// import logo from "./Files/logo.svg";
import axios from "axios";
import api from "./services/api";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import StripeCheckout from "./Components/StripeCheckout";
import Payment from "./Components/Payment";
import Main from "./Containers/Main";
import TopVideos from "./Containers/TopVideos";
import Signup from "./Containers/Signup";
// import Login from "./Containers/Login";
import Login from "./Components/LoginForm";
import Video from "./Containers/Video";
import Register from "./Containers/Register";
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

  // const stripeComp = () => {
  //   const stripe = useStripe();
  // const elements = useElements();
  //   return (
  //     <button
  //       onClick={() => {
  //         async function some() {
  //           // Call Stripe.js method to redirect to the new Checkout page
  //           // const stripe = await stripePromise
  //           stripe
  //             .redirectToCheckout({
  //               sessionId:
  //                 "cs_test_a1qvJuk0dEuCuR1O227zBr7fBzYN3W6YgNAEq7X52ez3ppomMzbHnU41DU"
  //             })
  //             .then((res) => console.log(res));
  //         }
  //         some();
  //       }}
  //     >
  //       STRIPE
  //     </button>
  //   );
  // };

  return (
    <>
      <Router history={BrowserHistory}>
        {/* {
          <button
            onClick={() => {
              // Call Stripe.js method to redirect to the new Checkout page
              // const stripe = useStripe();
              stripe
                .redirectToCheckout({
                  sessionId:
                    "cs_test_a1qvJuk0dEuCuR1O227zBr7fBzYN3W6YgNAEq7X52ez3ppomMzbHnU41DU"
                })
                .then((res) => console.log("res", res));
              console.log("on some");
            }}
          >
            STRIPE
          </button>
        } */}
        {/* <Elements stripe={stripePromise}> */}
        {/* <ElementsConsumer> */}
        {/* <StripeCheckout /> */}
        {/* </ElementsConsumer> */}
        {/* </Elements> */}
        <Navbar />
        <Link to="/"> home </Link>
        <Link to="/login">Login </Link>
        <Link to="/sign-up">SignUp </Link>
        <Link to="/video">Video </Link>
        <Link to="/payment">Pay </Link>
        <Switch>
          <Route path="/" exact>
            <Main />
            <TopVideos />
            <Route
              path="/sign-up"
              render={(props) => (
                <Signup {...props} handleSignup={handleSignup} />
              )}
            />
          </Route>
          <Route
            path="/login"
            render={(props) => <Login {...props} handleLogin={handleLogin} />}
          />
          <Route path="/sign-up" component={Signup} />
          <Route path="/video" component={Video} />
          <Route path="/payment" component={Payment} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
