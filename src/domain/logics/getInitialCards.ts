import { CARD_NUMBERS } from "../const/cardNumbers";
import { CARD_SUITS } from "../const/cardSuits";
import { CardType } from "../types/types";

export const getInitialCards = () => {
  return Object.values(CARD_NUMBERS).flatMap(
    (
      data // nits: flatMapは必要？
    ) => Object.values(CARD_SUITS).map(e => [e, data]) // imo: もう少し分かりやすい名前を付けてほしい (suit => [suit, number]) となると分かりやすい
  ) as Array<CardType>;
};
