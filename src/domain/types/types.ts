import { CARD_NUMBERS } from "../const/cardNumbers";
import { CARD_SUITS } from "../const/cardSuits";

export type CardSuits = typeof CARD_SUITS[keyof typeof CARD_SUITS];
export type CardNumbers = typeof CARD_NUMBERS[keyof typeof CARD_NUMBERS];
export type CardType = Array<[CardSuits, CardNumbers]>;
