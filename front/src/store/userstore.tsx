// import {
//   PayloadAction,
//   combineReducers,
//   configureStore,
//   createSlice,
// } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// export interface MemberInfoType {
//   accessToken: string;
//   email?: string;
//   name?: string;
//   birth?: string;
//   gender?: string;
//   phone?: string;
//   address?: string;
//   group?: string;
//   position?: string;
// }

// const memberInfoSlice = createSlice({
//   name: "memberInfo",
//   initialState: null as MemberInfoType | null,
//   reducers: {
//     setMemberInfo: (state, action: PayloadAction<MemberInfoType | null>) => {
//       return action.payload;
//     },
//   },
// });

// const loginSlice = createSlice({
//   name: "login",
//   initialState: false,
//   reducers: {
//     setLogin: (state, action: PayloadAction<boolean>) => {
//       return action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: "root",
//   storage: storage,
// };

// const rootReducer = combineReducers({
//   login: loginSlice.reducer,
//   memberInfo: memberInfoSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const { setLogin } = loginSlice.actions;
// export const { setMemberInfo } = memberInfoSlice.actions;
