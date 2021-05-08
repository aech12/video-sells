import axios from "axios";
let token = null;

const setToken = (loginToken) => {
  console.log("GET", getToken());
  token = `bearer ${loginToken}`;
};
const getToken = () => token;

export { setToken, getToken };
