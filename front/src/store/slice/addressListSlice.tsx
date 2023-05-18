import { createSlice } from "@reduxjs/toolkit";

interface AddressListState {
  count: number;
}

const initialState: AddressListState = {
  count: 1,
};

export interface addressState {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  position: string | null;
  isCheck?: boolean;
}

export const addressListSlice = createSlice({
  name: "addressList",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = addressListSlice.actions;

export default addressListSlice.reducer;
