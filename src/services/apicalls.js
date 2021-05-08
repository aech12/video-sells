import axios from "axios";
const baseUrl = "http://localhost:3001";

// LOGIN / SIGN UP
const login = ({ username, password }) =>
  axios.post(`${baseUrl}/login`, { username, password });

const createUserAccount = ({ username, email, password, clientId }) =>
  axios.post(`${baseUrl}/signup`, { username, email, password, clientId });

// STRIPE
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

export { login, createStripeCustomer, createSubscription, createUserAccount };
