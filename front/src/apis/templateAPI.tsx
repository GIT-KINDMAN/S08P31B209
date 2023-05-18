import { templateSaveState } from "@/store/slice/imageViewSlice";

import api, { setAuthConfig } from "./api";

// export const templateSave = (template: viewState, token: string) => {
//   const config = setAuthConfig(token, {});
//   return api.post(`template/save`, template, config);
// };

export const templateSave = (data: templateSaveState, token: string) => {
  const config = setAuthConfig(token, {});
  return api.post("template/save", data, config);
};
