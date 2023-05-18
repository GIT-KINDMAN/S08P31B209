import api from "./api";

// Define file-related functions here
// 문서 취합페이지 개별 문서 다운로드
export const downfile = (idx: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return api.get(`/file/docsfile/${idx}`, config);
};
