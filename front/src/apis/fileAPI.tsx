import api from "./api";

// Define file-related functions here
export const downfile = (Uuid: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return api.get(`/file/docsfile/${Uuid}.png`, config);
};
