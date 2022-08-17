import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import queryString from "query-string";

const baseUrl = "http://localhost:182002/api/";

const getToken = () => localStorage.getItem("accessToken");

const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken}`,
    },
  };
});
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    if (!err.response) return alert(err);
    throw err.response;
  }
);

export default axiosClient;
