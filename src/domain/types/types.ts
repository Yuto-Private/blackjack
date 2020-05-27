import { CARD_NUMBERS } from "../const/cardNumbers";
import { CARD_SUITS } from "../const/cardSuits";

// imo: 型の名前は複数系である必要が無かったかも。今の自分だったらこう書くなというのを残しておきます
// Suit
// Number
// Card

export type CardSuits = typeof CARD_SUITS[keyof typeof CARD_SUITS];
export type CardNumbers = typeof CARD_NUMBERS[keyof typeof CARD_NUMBERS];
export type CardType = [CardSuits, CardNumbers]; // imo: CardTypeは[CardSuits, CardNumbers]としたほうがよい。Arrayの付与は使う側でやる
