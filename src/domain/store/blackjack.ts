import { produce } from "immer";

// Actions
const SET_DECK_INITIALIZE = "scenario/setDisplayType";

// Action Creators
export function setDeckInitialize() {
  return { type: SET_DECK_INITIALIZE, payload: { initialState } };
}

// Initial State
export interface State {
  deck: Array<{
    mark: string;
    num: 1 | 2 | 3;
  }>;
}

export const initialState: State = {
  deck: [
    {
      mark: "hart",
      num: 1
    },
    {
      mark: "hart",
      num: 2
    }
  ]
};

// Reducer
export const reducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DECK_INITIALIZE:
      draft.deck = payload.initialState.deck;
      return;
  }
});
