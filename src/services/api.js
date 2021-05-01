import axios from "axios";
const baseUrl = "/api/notes";
let token = null;

const setToken = (loginToken) => (token = `bearer ${loginToken}`);
const getToken = () => token;

export default { token, setToken, getToken };
