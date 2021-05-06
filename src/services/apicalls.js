import axios from "axios";

const baseUrl = "http://localhost:3001";

const createUserAccount = ({ username, email, password }) =>
  axios.post(`${baseUrl}/signup`, { username, email, password });
// .then((r) => r.data.customer)
// .catch((e) => e);

const createStripeCustomer = async (email) =>
  axios.post(`${baseUrl}/stripe/create-customer`, { email });

const createSubscription = async ({ customerId, priceKey, paymentMethodId }) =>
  axios
    .post(`${baseUrl}/stripe/create-subscription`, {
      customerId,
      priceKey,
      paymentMethodId
    })
    .then((r) => r.data.customer)
    .catch((e) => console.error(e));

export { createStripeCustomer, createSubscription, createUserAccount };
