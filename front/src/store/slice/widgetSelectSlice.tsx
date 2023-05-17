import { createSlice } from "@reduxjs/toolkit";

export interface selectedWidgetState {
  id: string | null;
}

const initialState: selectedWidgetState = {
  id: null,
};

export const widgetSelectSlice = createSlice({
  name: "widgetSelect",
  initialState,
  reducers: {
    setSelectedWidget: (state, action) => {
      state.id = action.payload as string;
    },
  },
});

export const { setSelectedWidget } = widgetSelectSlice.actions;
export default widgetSelectSlice.reducer;
