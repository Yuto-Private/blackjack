import { CARD_NUMBERS } from "../const/cardNumbers";
import { CARD_SUITS } from "../const/cardSuits";

export const getInitialCards = () => {
  return Object.values(CARD_NUMBERS).flatMap(data =>
    Object.values(CARD_SUITS).map(e => [e, data])
  );
};
