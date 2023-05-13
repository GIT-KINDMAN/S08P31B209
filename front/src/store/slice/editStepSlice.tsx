import { createSlice } from "@reduxjs/toolkit";

interface editStepState {
  /**
   * 현재 단계
   */
  step: number;
  /**
   * 최대 단계
   */
  maxStep: number;
}

const initialState: editStepState = {
  step: 1,
  maxStep: 4, // 현재 문서 생성, 편집, 발송, 완료 4 단계로 구성되어 있음
};

export const editStepSlice = createSlice({
  name: "editStep",
  initialState,
  reducers: {
    move: (state, action) => {
      state.step = action.payload as number;
    },
    moveNext: (state) => {
      state.step = state.step < state.maxStep ? state.step + 1 : state.step;
    },
    movePrev: (state) => {
      state.step = 1 < state.step ? state.step - 1 : state.step;
    },
  },
});

export const { move, moveNext, movePrev } = editStepSlice.actions;
export default editStepSlice.reducer;
