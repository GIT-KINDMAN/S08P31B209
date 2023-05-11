// import { AppDispatch, RootState } from "../store";

// import axios from "axios";
// import { useDispatch } from "react-redux";

// const BASE_URL = "https://K8b209.p.ssafy.io/api/";

// export const api = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// api.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("accessToken");
//   config.headers.Authorization = token;

//   return config;
// });

// export default api;

// export const AuthAPI = {
//   // 로그인
//   login: (email: string, password: string) =>
//     api.post(`/member/login`, { email, password }),
//   // 회원가입
//   signup: () => api.post(`/member/sign`),
// };
