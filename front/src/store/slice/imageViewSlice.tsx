import { createSlice } from "@reduxjs/toolkit";

export interface fileState {
  name: string;
  type: string;
  size: number;
  data: string;
}

export interface widgetState {
  id: string;
  idx: number;
  type: string;
  pos: { x: number; y: number };
  value: string;
  attributes: { font: string; fontSize: string };
}

export interface sendState {
  idx: string;
  email?: string;
  name?: string;
  phone?: string;
  position?: string;
}

export interface viewState {
  id: string | null;
  name: string;
  file: fileState | null;
  zoom: number;
  widgets: widgetState[];
  sends: sendState[];
}

export interface addressState {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  group: string | null;
  isCheck: boolean;
}

const initialState: viewState = {
  id: Math.random().toString(36),
  name: "Empty Document",
  file: null,
  zoom: 100,
  widgets: [],
  sends: [],
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
    addWidget: (state, action) => {
      state.widgets = [...state.widgets, action.payload as widgetState];
    },
    delWidget: (state, action) => {
      state.widgets = state.widgets.filter(
        (widget) => widget.id !== (action.payload as widgetState).id,
      );
    },
    updateWidget: (state, action) => {
      state.widgets = state.widgets.map((widget) =>
        widget.id === (action.payload as widgetState).id
          ? { ...widget, ...(action.payload as widgetState) }
          : widget,
      );
    },
    addSend: (state, action) => {
      state.sends = [...state.sends, action.payload as sendState];
    },
    delSend: (state, action) => {
      state.sends = state.sends.filter(
        (send) => send.idx !== (action.payload as sendState).idx,
      );
    },
    updateSend: (state, action) => {
      state.sends = state.sends.map((send) =>
        send.idx === (action.payload as sendState).idx
          ? { ...send, ...(action.payload as sendState) }
          : send,
      );
    },
  },
});

export const {
  setName,
  setFile,
  setZoom,
  addWidget,
  delWidget,
  updateWidget,
  addSend,
  delSend,
  updateSend,
} = imageViewSlice.actions;
export default imageViewSlice.reducer;
