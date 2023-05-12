import { createSlice } from "@reduxjs/toolkit";

interface fileState {
  file: File;
  fileUrl: string;
}

interface metaDocState {
  id: number;
  name: string;
  file: fileState | null;
}

const initialState: metaDocState = {
  id: 0,
  name: "meta Document",
  file: null,
};

export const metaDocSlice = createSlice({
  name: "metaDoc",
  initialState,
  reducers: {
    fileUpload: (state, action) => {
      const uploadFile: fileState = {
        file: action.payload as File,
        fileUrl: URL.createObjectURL(action.payload as File),
      };
      state.file = uploadFile;
    },
    fileDelete: (state) => {
      state.file = null;
    },
    setMetaDocName: (state, action) => {
      state.name = action.payload as string;
    },
  },
});

export const { fileUpload, fileDelete, setMetaDocName } = metaDocSlice.actions;
export default metaDocSlice.reducer;
