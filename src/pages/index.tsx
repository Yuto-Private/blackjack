import React, { FC, useReducer, Dispatch } from "react";
import Default from "../components/templates/Default";
import {
  setDeckInitialize,
  initialState,
  reducer,
  State
} from "../domain/store/blackjack";
import getInitialCard from "../domain/logics/cardInitialize"

export const Store = React.createContext<{
  state: State;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: (value: any) => value
});

const Home: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Default>
        <p onClick={() => setDeckInitialize()}>blackjack</p>
        <p onClick={() => {
          getInitialCard(2)
        }}>hogehgoe</p>
      </Default>
    </Store.Provider>
  );
};

export default Home;
