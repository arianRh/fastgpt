import axios from "axios";
import { getCookie } from "cookies-next";

const API = axios.create({
  baseURL: "https://www.fastgpt.ir/",
});
API.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");
    if (token === null) {
      return config;
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
