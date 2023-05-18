import AuthReducer from "./slice/authSlice";
import editStepReducer from "./slice/editStepSlice";
import imageViewReducer from "./slice/imageViewSlice";
import widgetSelectReducer from "./slice/widgetSelectSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const rootReducer = combineReducers({
  editStep: editStepReducer,
  auth: AuthReducer,
  imageView: imageViewReducer,
  widgetSelect: widgetSelectReducer,
});

const persistConfig = {
  key: "root",
  storage,

  // // persist제외하고 싶은 부분
  blacklist: ["editStep", "widgetSelect"],

  // 또는 persist를 적용하고 싶은 부분 따로 설정하지 않으면 모두다 저장된다.
  whitelist: ["auth" /*, "imageView"*/],
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

export default store;
