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

const cancelSub = ({ subscriptionId }) => {
  axios.post("/cancel-subscription", { subscriptionId });
};

// ACCOUNT
const changeAccEmail = (username, new_email) =>
  axios
    .post(`${baseUrl}/account/change_email`, { username, new_email })
    .then((r) => r.data);

const changeAccPass = (username, new_password) =>
  axios
    .post(`${baseUrl}/account/change_password`, { username, new_password })
    .then((r) => r.data);

const deleteAcc = (username) =>
  axios
    .post(`${baseUrl}/account/delete_account`, { username })
    .then((r) => r.data);

// ADMIN

// VIDEOS

// GIRLS

export {
  login,
  createStripeCustomer,
  createSubscription,
  createUserAccount,
  cancelSub,
  changeAccEmail,
  changeAccPass,
  deleteAcc
};
