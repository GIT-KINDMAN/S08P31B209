import api from "./api";

export const saveAddress = (
  name: string,
  email: string,
  phone: string,
  group: string,
) => api.post("/api/address/save", { name, email, phone, group });

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

export const fetchEditorAddressList = () => api.get("/api/address/list/editor");

export const saveEditorAddress = (addressData: object) =>
  api.post("/api/address/save/editor", addressData);
