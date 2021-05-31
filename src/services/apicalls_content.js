import axios from "axios";
import {baseUrl} from "./utils";

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
const getTopVideos = ({ limit, offset }) =>
  axios
    .post(`${baseUrl}/video/top_videos`, { limit, offset })
    .then((r) => r.data);
const getRecentVideos = ({ limit, offset }) =>
  axios
    .post(`${baseUrl}/video/recent_videos`, { limit, offset })
    .then((r) => r.data);

    const getVideo = (id) =>
  axios.get(`${baseUrl}/video/:${id}`).then((r) => r.data);

// GIRLS
const getAllGirls = ({ limit, offset }) =>
  axios
    .post(`${baseUrl}/models/all_models`, { limit, offset })
    .then((r) => r.data);

const getGirl = (id) =>
  axios.get(`${baseUrl}/models/:${id}`).then((r) => r.data);

export {
  addGirl,
  addVideo,
  getTopVideos,
  getRecentVideos,
  getVideo,
  getAllGirls,
  getGirl
};
