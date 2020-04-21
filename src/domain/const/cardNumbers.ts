export const CARD_NUMBERS = {
  ACE: 1,
  TWO: 2,
  THREE: 3,
  FOW: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13
} as const;

export const cardNumberScreen: { [key in number]: string } = {
  [CARD_NUMBERS.ACE]: "A",
  [CARD_NUMBERS.TWO]: "2",
  [CARD_NUMBERS.THREE]: "3",
  [CARD_NUMBERS.FOW]: "4",
  [CARD_NUMBERS.FIVE]: "5",
  [CARD_NUMBERS.SIX]: "6",
  [CARD_NUMBERS.SEVEN]: "7",
  [CARD_NUMBERS.EIGHT]: "8",
  [CARD_NUMBERS.NINE]: "9",
  [CARD_NUMBERS.TEN]: "10",
  [CARD_NUMBERS.JACK]: "J",
  [CARD_NUMBERS.QUEEN]: "Q",
  [CARD_NUMBERS.KING]: "K"
};
