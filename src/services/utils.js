import axios from "axios";
import { useState } from "react";
let token = null;
const baseUrl = "http://localhost:3001";

const setToken = (loginToken) => {
  console.log("GET", getToken());
  token = `bearer ${loginToken}`;
};
const getToken = () => token;

// CUSTOM HOOKS (useInput)
const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = (input) => {
    setValue(input.target.value);
  };
  return {
    value,
    onChange
  };
};

const usePageinfo = () => {
  const [data, setdata] = useState({
    pageElements: [
      { picture: "1 One" },
      { picture: "2 Two" },
      { picture: "3 Three" },
      { picture: "4 Four" },
      { picture: "5 Five" },
      { picture: "6 Six" },
      { picture: "7 Seven" },
      { picture: "8 Eight" },
      { picture: "9 Nine" },
      { picture: "10 Ten" },
      { picture: "11 El" },
      { picture: "12 Tw" }
    ]
  });
  return {
    data,
    setdata
  };
};

export { setToken, getToken, useInput, usePageinfo, baseUrl };
