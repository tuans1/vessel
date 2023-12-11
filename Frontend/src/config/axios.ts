"use client";
import { useUserContext } from "@/context/UserContext";
import createNotification from "@/utils/notify";
import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

axiosInstance.interceptors.request.use(function (config) {
  config.headers.token = cookies.get("token");
  config.headers.roleName = "admin";
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    const {} = response;
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // const { statusCode, message } = error.response.data;
    // createNotification("error", message);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
