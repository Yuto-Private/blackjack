import React, { FC } from "react";
import Default from "../components/templates/Default";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch
} from 'react-redux'
import { RootState, AppDispatch } from "../domain/stores"
import userSlice from "../domain/stores/user"

// TODO 調べる
const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

const Home: FC = () => {
  const { setName } = userSlice.actions
  const name = useSelector(state => state.user.name);
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Default>
      <p onClick={() => dispatch(setName('fuga'))}>{name}</p>
    </Default>
  );
};

export default Home;
