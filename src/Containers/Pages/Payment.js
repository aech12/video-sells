import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import PaymentForm from "../../Components/Pages/PaymentForm";
import { Redirect, withRouter } from "react-router-dom";
import { createSubscription } from "../../services/apicalls";
import {
  notifyErr,
  notifySuccess,
  notifyInfo,
  notifyWarn
} from "../../services/notify";

const Payment = ({ location }) => {
  let { priceKey, StripeClientId } = location.state || {};
  const [subscription, setSubscription] = useState();

  priceKey = "price_1IfwDLCxlsK8q03c3GGKCEwP";
  StripeClientId = "secondUser";

  const stripe = useStripe();
  const elements = useElements();

  if (!stripe || !elements) {
    // Stripe.js has not loaded yet. Make sure to disable
    // form submission until Stripe.js has loaded.
    return "";
  }

  // const handleSubmit = (v) => console.log("vak", v);
  const handleSubmit = async ({ cardElement, name }) => {
    // console.log(cardElement, name);
    let { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name
      }
    });
    if (error) {
      // show error and collect new card details.
      notifyErr(error.message);
      return;
    }
    // console.log("!!!!", paymentMethod, message);

    let { subError, subscription } = await createSubscription({
      customerId: StripeClientId,
      priceKey,
      paymentMethodId: paymentMethod.id
    });
    if (subError) {
      // show error and collect new card details.
      notifyErr(subError.message);
      return;
    }

    notifySuccess(`Subscription created with status: ${subscription.status}`);
    setSubscription(subscription);

    switch (subscription.status) {
      case "active":
        // Redirect to account page
        notifySuccess("Success! Redirecting to your account.");
        break;

      case "incomplete":
        notifyInfo("Please confirm the payment.");

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
          notifyErr(error.message);
        } else {
          notifySuccess("Success! Redirecting to your account.");
          setSubscription({ status: "active" });
        }
        break;

      default:
        notifyWarn(`Unknown Subscription status: ${subscription.status}`);
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
