import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";

// State Dispatchの型定義
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

// Reducerの統合
const reducer = combineReducers({
  user: userSlice.reducer
});

// Storeの作成
const store = configureStore({ reducer });

export default store;
