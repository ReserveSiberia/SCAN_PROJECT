import axios from "axios";
import { BASE_URL, LOGIN_URL, LOGIN_INFO_URL } from "../utils/constants.js";

async function logIn(userName, password) {
  return await axios({
    baseURL: BASE_URL,
    url: LOGIN_URL,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      login: userName,
      password: password,
    },
  })
    .then((res) => {
      console.log("Setting up Token...");
      localStorage.setItem("TOKEN", res.data.accessToken);
      localStorage.setItem("EXPIRE", res.data.expire);
      return res.data.accessToken;
    })
    .catch((e) => {
      console.log("Authorization issues...", e);
    })
    .finally(console.log("Successful logging in..."));
}

async function accountInfo(token) {
  try {
    return await axios({
      baseURL: BASE_URL,
      url: LOGIN_INFO_URL,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("Getting account info...");
        return res.data.eventFiltersInfo;
      })
      .catch((e) => console.log("Receiving data is failed..."));
  } catch (error) {
    console.log("Account error details", error);
  }
}

export { logIn, accountInfo };
