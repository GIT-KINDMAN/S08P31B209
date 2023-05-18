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

export const deleteSend = (idx: number, token: string) => {
  const params = {
    idx,
    token,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  return api.delete(`box/sent/${idx}`, config);
};

export const deleteReceive = (idx: number, token: string) => {
  const params = {
    idx,
    token,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  return api.delete(`box/received/${idx}`, config);
};

// 다운로드
export const downloadDocs = (idx: number) => api.get(`file/template/${idx}`);

// 문서취합페이지
export const progressDocs = (idx: number, token: string) => {
  const params = {
    idx,
    token,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };

  return api.get(`box/progress/${idx}`, config);
};
