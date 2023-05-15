import api from "./api";

// Define box-related functions here
export const sentbox = (
  keywords: string,
  nameSort: string,
  createdDateSort: string,
  updatedDateSort: string,
  deadlineSort: string,
  token: string,
) => {
  const params = {
    keywords,
    nameSort,
    createdDateSort,
    updatedDateSort,
    deadlineSort,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  return api.get(`box/sent-templates`, config);
};

export const receivedbox = (
  keywords: string,
  nameSort: string,
  createdDateSort: string,
  updatedDateSort: string,
  deadlineSort: string,
  token: string,
) => {
  const params = {
    keywords,
    nameSort,
    createdDateSort,
    updatedDateSort,
    deadlineSort,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  return api.get(`box/received-templates`, config);
};
