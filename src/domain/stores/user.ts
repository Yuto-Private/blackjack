import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit";

interface InitialState {
  name: string;
}

// Stateの初期状態
const initialState: InitialState = {
  name: "hoge"
};

const setName: CaseReducer<InitialState, PayloadAction<string>> = (
  state,
  action
) => {
  return Object.assign({}, state, { name: action.payload });
};

// Sliceを生成する
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName
  }
});

export default userSlice;
