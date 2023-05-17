import api from "./api";

export const saveAddress = (
  name: string,
  email: string,
  phone: string,
  group: string,
  position: string,
  token: string,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 추가
    },
  };
  return api.post(
    "/address/save",
    {
      name,
      email,
      phone,
      group,
      position,
    },
    config,
  );
};

export const fetchAddressList = (token: string, group: string) => {
  const params = {
    token,
    group,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };

  return api.get("/address/list", config);
};

export const fetchEditorAddressList = (name: string, token: string) => {
  const params = { name };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  return api.get("/address/list/editor", config);
};

export const saveEditorAddress = (addressData: object) =>
  api.post("/api/address/save/editor", addressData);

export const deleteAddress = (id: number, token: string) => {
  const params = {
    id,
    token,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  return api.delete("/address/delete", config);
};

export const deleteGroup = (group: string, token: string) => {
  const params = {
    group,
    token,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  return api.delete("/address/delete-group", config);
};
