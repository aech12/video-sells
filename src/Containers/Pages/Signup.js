import { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import SignupForm from "../../Components/SignupForm";
import { createStripeCustomer } from "../apicalls";

const Signup = () => {
  const [priceKey, setPriceKey] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({});

  const handleSubmit2 = async ({ username, email, password }) => {
    const clientId = await createStripeCustomer();
    setUser({ username, email, password, clientId });
    // console.log(values);
    // setRedirect(true);
  };

  const handleSubmit = ({ username, email, password }) => {
    setUser({ username, password });
    // console.log(values);
    setRedirect(true);
  };

  return (
    <>
      {!redirect ? (
        <SignupForm setPriceKey={setPriceKey} handleSubmit={handleSubmit} />
      ) : (
        <Redirect
          to={{
            pathname: "/payment",
            state: {
              username: user.username,
              password: user.password,
              email: user.email,
              priceKey: "basic",
              StripeClientId: user.clientId
            }
          }}
        />
      )}
    </>
  );
};

export default withRouter(Signup);
