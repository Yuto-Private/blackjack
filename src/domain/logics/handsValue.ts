import { CardType } from "../const/cardNumbers";
import { CARD_VALUE_NUMBER } from "../const/cardValueRole";

export const handsValue = (hands: CardType) => {
  const values = hands.map(n => n[CARD_VALUE_NUMBER]);
  return values.reduce((a, x) => a + x, 0);
};
