import { CARD_NUMBERS, CardType } from "../const/cardNumbers";
import { CARD_ARRAY_ROLE } from "../const/cardArrayRole";

const formatSoftCount = (result: number) => {
  return result <= 10 ? 11 : 1;
};

const formatFaceCard = (cardValue: number) => {
  return Math.min(10, cardValue);
};

export const formatHandsValue = (hands: CardType) => {
  const handsValue = hands.map(hands => hands[CARD_ARRAY_ROLE.NUMBER]);
  return handsValue.reduce((result, cardValue) => {
    const formatValue =
      cardValue === CARD_NUMBERS.ACE
        ? formatSoftCount(result)
        : formatFaceCard(cardValue);
    result += formatValue;
    return result;
  }, 0);
};
