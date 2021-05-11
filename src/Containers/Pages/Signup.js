import { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import SignupForm from "../../Components/SignupForm";
import {
  createUserAccount,
  createStripeCustomer
} from "../../services/apicalls";
import { notifyErr, notifySuccess } from "../../services/notify";

const Signup = () => {
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({ clientId: "" });
  const [active, setActive] = useState("");
  const [clientId, setClientId] = useState();

  const handleSubmit = async ({ username, email, password }) => {
    switch (active) {
      case "plan 1":
        setActive("price_1IfwBvCxlsK8q03cgGixs6My");
        break;
      case "plan 2":
        setActive("price_1IfwExCxlsK8q03chdBGFhvY");
        break;
      case "plan 3":
        setActive("price_1IfwDLCxlsK8q03c3GGKCEwP");
        break;
      default:
        notifyErr("You need to select a plan!");
        return;
    }

    const clientId = await createStripeCustomer(email)
      .then((r) => r.data)
      .catch((e) => {
        notifyErr(e.response.data);
        console.error("Error on Stripe Client Creation", e);
      });
    // console.log("new", clientId);

    if (clientId) {
      // console.log(clientId);
      const newUser = await createUserAccount({
        username,
        email,
        password,
        clientId
      })
        .then((r) => r.data)
        .catch((e) => {
          notifyErr(e.response.data);
          console.error("Error on Sign up", e);
        });
      setClientId(newUser.clientId);
      notifySuccess("Account created!");
      // console.log("u2", newUser, user, "id", clientId);
      if (clientId) setRedirect(true);
    } else {
      return;
    }
  };

  return (
    <>
      {!redirect ? (
        <>
          <SignupForm
            handleSubmit={handleSubmit}
            setActive={setActive}
            active={active}
          />
        </>
      ) : (
        <Redirect
          to={{
            pathname: "/payment",
            state: {
              priceKey: active,
              StripeClientId: clientId
            }
          }}
        />
      )}
    </>
  );
};

export default withRouter(Signup);
