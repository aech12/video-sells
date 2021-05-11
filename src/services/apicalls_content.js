import axios from "axios";
const baseUrl = "http://localhost:3001";

// ADMIN
const addGirl = ({ name, birthday, picture, videos }) =>
  axios
    .post(`${baseUrl}/admin/add-girl`, { name, birthday, picture, videos })
    .then((r) => r.data);

const addVideo = ({ name, birthday, picture, videos }) =>
  axios
    .post(`${baseUrl}/admin/add-video`, { name, birthday, picture, videos })
    .then((r) => r.data);
// VIDEOS

// GIRLS

export { addGirl, addVideo };
