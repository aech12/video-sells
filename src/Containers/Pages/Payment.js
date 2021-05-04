import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import PaymentForm from "../../Components/PaymentForm";
import { Redirect, withRouter } from "react-router-dom";
import { createSubscription } from "../apicalls";

const Payment = ({ location }) => {
  const { username, password, email, priceKey, StripeClientId } =
    location.state || {};
  const [message, setMessage] = useState("");
  const [subscription, setSubscription] = useState();
  const [userForDB, setUserForDB] = useState({ username, password, email });

  const stripe = useStripe();
  const elements = useElements();

  if (!stripe || !elements) {
    // Stripe.js has not loaded yet. Make sure to disable
    // form submission until Stripe.js has loaded.
    return "";
  }

  // const handleSubmit = (v) => console.log("vak", v);

  const handleSubmit = async ({ cardElement, name }) => {
    let { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name
      }
    });
    if (error) {
      // show error and collect new card details.
      setMessage(error.message);
      return;
    }
    console.log("!!!!", paymentMethod, message);

    let { subError, subscription } = await createSubscription({
      customerId: StripeClientId,
      priceKey,
      paymentMethodId: paymentMethod.id
    });
    if (subError) {
      // show error and collect new card details.
      setMessage(subError.message);
      return;
    }

    setMessage(`Subscription created with status: ${subscription.status}`);
    setSubscription(subscription);

    switch (subscription.status) {
      case "active":
        // Redirect to account page
        setMessage("Success! Redirecting to your account.");
        break;

      case "incomplete":
        setMessage("Please confirm the payment.");

        // Handle next actions
        //
        // If the status of the subscription is `incomplete` that means
        // there are some further actions required by the customer. In
        // the case of upfront payment (not trial) the payment is confirmed
        // by passing the client_secret of the subscription's latest_invoice's
        // payment_intent.
        const { error } = await stripe.confirmCardPayment(
          subscription.latest_invoice.payment_intent.client_secret
        );

        if (error) {
          setMessage(error.message);
        } else {
          setMessage("Success! Redirecting to your account.");
          setSubscription({ status: "active" });
        }
        break;

      default:
        setMessage(`Unknown Subscription status: ${subscription.status}`);
    }
  };

  if (subscription && subscription.status === "active") {
    console.log("sub", subscription.status);
    return (
      <Redirect
        to={{ pathname: "/", state: { subscription: subscription.status } }}
      />
    );
  }
  return (
    <>
      <button onClick={() => setSubscription({ status: "active" })}>SUB</button>
      <PaymentForm handleSubmit={handleSubmit} />
    </>
  );
};

export default withRouter(Payment);
