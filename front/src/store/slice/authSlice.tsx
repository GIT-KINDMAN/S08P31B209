import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  authToken: string | null;
}

const initialState: authState = {
  authToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.authToken = action.payload as string;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
