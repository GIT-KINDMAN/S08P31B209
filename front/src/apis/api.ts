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

export const memberAPI = {
  login: (email: string, password: string) =>
    api.post(`/member/login`, { email, password }),
  logout: () => api.delete(`/member/logout`),
  signup: (
    email: string,
    password: string,
    name: string,
    birth: string,
    gender: string,
    phone: string,
    address: string,
    group: string,
    position: string,
  ) =>
    api.post(`/member/sign`, {
      email,
      password,
      name,
      birth,
      gender,
      phone,
      address,
      group,
      position,
    }),
};
