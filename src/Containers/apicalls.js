import axios from "axios";

const baseUrl = "http://localhost:3001";

const createStripeCustomer = async (email) =>
  axios
    .post(`${baseUrl}/stripe/create-customer`, { email })
    .then((r) => r.data.customer)
    .catch((e) => console.error(e));

const createSubscription = async ({ customerId, priceKey, paymentMethodId }) =>
  axios
    .post(`${baseUrl}/stripe/create-subscription`, {
      customerId,
      priceKey,
      paymentMethodId
    })
    .then((r) => r.data.customer)
    .catch((e) => console.error(e));

export { createStripeCustomer, createSubscription };
