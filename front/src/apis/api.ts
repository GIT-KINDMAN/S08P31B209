import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

export const loginAPI = {
  login: (email: string, password: string) =>
    api.post(`/member/login`, { email, password }),
  logout: () => api.delete(`/member/logout`),
};
