import { Stack } from "@chakra-ui/react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

export default function StripeCheckout() {
  const stripe = useStripe();
  const elements = useElements();

  const redirectToStripe = () => {
    stripe
      .redirectToCheckout({
        sessionId:
          "cs_test_a1G0rRb8WXAjlisr5Bs25ehlhNwviioJfe3miTA2Sh5C7x5b6krdsDS7Jz"
      })
      .then((r) => console.log(r));
  };

  function createCustomer() {
    //CHANGE TEST EMAIL
    let billingEmail = "TEST@test.com";
    return fetch("/create-customer", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: billingEmail
      })
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // result.customer.id is used to map back to the customer object
        return result;
      });
  }

  //   <form id="payment-form">
  //   <div id="card-element">
  //     <!-- Elements will create input elements here -->
  //   </div>

  //   <!-- We'll put the error messages in this element -->
  //   <div id="card-element-errors" role="alert"></div>
  //   <button type="submit">Subscribe</button>
  // </form>

  return (
    <Stack>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4"
              }
            },
            invalid: {
              color: "#9e2146"
            }
          }
        }}
      />
      <button onClick={createCustomer}>Stripe</button>
    </Stack>
  );
}
