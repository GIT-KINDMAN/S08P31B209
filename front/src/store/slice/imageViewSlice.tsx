import { createSlice } from "@reduxjs/toolkit";

export interface fileState {
  name: string;
  type: string;
  size: number;
  data: string;
}

export interface widgetState {
  idx: string;
  name: string;
  type: string;
  pos: { x: number; y: number };
  value: string;
  attributes: { font: string; fontSize: string };
}

interface viewState {
  idx: string | null;
  name: string;
  deadLine: Date;
  zoom: number;
  file: fileState | null;
  widgets: widgetState[];
  toSend: { email: string; name: string }[];
}

// 일주일 후 오후 6시를 기본 값으로 설정
const currentDate = new Date();
const deadLineDefault = new Date(
  Math.floor(
    (currentDate.getTime() + 7 * 24 * 60 * 60 * 1000) / (24 * 60 * 60 * 1000),
  ) *
    (24 * 60 * 60 * 1000) +
    9 * 60 * 60 * 1000,
);

const initialState: viewState = {
  idx: Math.random().toString(36),
  name: "Empty Document",
  deadLine: deadLineDefault,
  zoom: 100,
  file: null,
  widgets: [],
  toSend: [],
};

export const imageViewSlice = createSlice({
  name: "imageView",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload as string;
    },
    setFile: (state, action) => {
      state.file = action.payload as fileState | null;
      state.zoom = 100;
    },
    setZoom: (state, action) => {
      state.zoom =
        (action.payload as number) < 10
          ? 10
          : (action.payload as number) > 200
          ? 200
          : (action.payload as number);
    },
    setDeadLine: (state, action) => {
      state.deadLine = action.payload as Date;
    },
    addWidget: (state, action) => {
      state.widgets = [...state.widgets, action.payload as widgetState];
    },
    delWidget: (state, action) => {
      state.widgets = state.widgets.filter(
        (widget) => widget.idx !== (action.payload as widgetState).idx,
      );
    },
    updateWidget: (state, action) => {
      state.widgets = state.widgets.map((widget) =>
        widget.idx === (action.payload as widgetState).idx
          ? { ...widget, ...(action.payload as widgetState) }
          : widget,
      );
    },
  },
});

export const {
  setName,
  setFile,
  setZoom,
  setDeadLine,
  addWidget,
  delWidget,
  updateWidget,
} = imageViewSlice.actions;
export default imageViewSlice.reducer;
