import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import SignupForm from "../Components/SignupForm";

const Signup = () => {
  const [price, setPrice] = useState("");
  const [StripeClientId, setStripeClientId] = useState("");
  const [redirect, setRed] = useState(true);

  async function createStripeCustomer(email) {
    // get customer.created
    // axios
    //   .post("/sign-up", { email })
    //   .then((r) => console.log(r))
    //   .catch((e) => console.error(e));
  }
  const handleSubtmit = () => {
    const clientId = createStripeCustomer();
    setStripeClientId(clientId);
    setRed(false);
  };

  return (
    <>
      {redirect ? (
        <SignupForm setPrice={setPrice} handleSubtmit={handleSubtmit} />
      ) : (
        <Redirect
          to={{
            pathname: "/payment",
            state: {
              username: "user10",
              password: "10101010",
              email: "user10@mail.com",
              price: "basic",
              StripeClientId: "somestate"
            }
          }}
        />
      )}
    </>
  );
};

export default withRouter(Signup);
