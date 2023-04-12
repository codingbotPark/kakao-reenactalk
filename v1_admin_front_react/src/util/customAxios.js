import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:9000/api`,
  timeout: 3000,
});

api.interceptors.request.use(
  function (config) {
    // 로그인 되있을 때 access_token
    // const accessToken = localStorage.getItem("access_token");
    // if (accessToken) {
    //   config.headers = {
    //     Authorization: accessToken,
    //   };
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;