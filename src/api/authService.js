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
      localStorage.setItem("TOKEN", res.data.accessToken);
      localStorage.setItem("EXPIRE", res.data.expire);
      return res.data.accessToken;
    })
    .catch((e) => {
      console.log(e);
    });
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
    }).then((res) => {
      return res.data.eventFiltersInfo;
    });
  } catch (error) {
    console.log("Account error details", error);
  }
}

export { logIn, accountInfo };
