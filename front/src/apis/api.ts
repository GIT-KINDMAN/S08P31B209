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
  fetchUserInfo: () => api.get(`/member`),
  reIssue: () => api.post(`/member/auth/reissue`),
  emailVerification: (email: string) =>
    api.post(`/member/email/confirm`, { email }),
  updateUserInfo: (
    phone: string,
    address: string,
    group: string,
    position: string,
  ) => api.put(`/member`, { phone, address, group, position }),
};

export const addressAPI = {
  saveAddress: (name: string, email: string, phone: string, group: string) =>
    api.post("/api/address/save", { name, email, phone, group }),
  fetchAddressList: () => api.get("/api/address/list"),
  fetchEditorAddressList: () => api.get("/api/address/list/editor"),
  saveEditorAddress: (addressData: object) =>
    api.post("/api/address/save/editor", addressData),
};

export const boxAPI = {};
export const templateAPI = {};
export const fileAPI = {};
