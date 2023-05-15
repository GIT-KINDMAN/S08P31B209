import api from "./api";

import { AxiosRequestConfig } from "axios";

export const login = (email: string, password: string) =>
  api.post(`/member/login`, { email, password });

export const logout = (token: string) =>
  api.post(`/member/logout`, {
    headers: {
      Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 추가
    },
  });

export const signup = (
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
  });

export const fetchUserInfo = (config: AxiosRequestConfig) =>
  api.get(`/member`, config);

export const reIssue = () => api.post(`/member/auth/reissue`);

export const emailVerification = (email: string) =>
  api.post(`/member/email/confirm`, { email });

export const updateUserInfo = (
  phone: string,
  address: string,
  group: string,
  position: string,
  token: string | null,
) =>
  api.put(
    `/member`,
    { phone, address, group, position },
    {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 추가
      },
    },
  );
