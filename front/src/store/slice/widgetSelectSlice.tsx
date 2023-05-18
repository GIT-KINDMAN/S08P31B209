import { createSlice } from "@reduxjs/toolkit";

export interface selectedWidgetState {
  idx: string | null;
}

const initialState: selectedWidgetState = {
  idx: null,
};

export const widgetSelectSlice = createSlice({
  name: "widgetSelect",
  initialState,
  reducers: {
    setSelectedWidget: (state, action) => {
      state.idx = action.payload as string;
    },
  },
});

export const { setSelectedWidget } = widgetSelectSlice.actions;
export default widgetSelectSlice.reducer;
