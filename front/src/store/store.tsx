import editStepReducer from "./slice/editStepSlice";
import metaDocReducer from "./slice/metaDocSlice";

import {
  PayloadAction,
  combineReducers,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

export interface MemberInfoType {
  accessToken: string;
  email?: string;
  name?: string;
  birth?: string;
  gender?: string;
  phone?: string;
  address?: string;
  group?: string;
  position?: string;
}
const memberInfoSlice = createSlice({
  name: "memberInfo",
  initialState: null as MemberInfoType | null,
  reducers: {
    setMemberInfo: (state, action: PayloadAction<MemberInfoType | null>) => {
      console.log("state", state);
      return action.payload;
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      console.log("state", state);
      return action.payload;
    },
  },
});

const rootReducer = combineReducers({
  editStep: editStepReducer,
  metaDoc: metaDocReducer,
  memberInfo: memberInfoSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,

  // // persist제외하고 싶은 부분
  blacklist: ["editStep"],

  // 또는 persist를 적용하고 싶은 부분 따로 설정하지 않으면 모두다 저장된다.
  whitelist: ["metaDoc"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export const { setLogin } = loginSlice.actions;
export const { setMemberInfo } = memberInfoSlice.actions;

export default store;
