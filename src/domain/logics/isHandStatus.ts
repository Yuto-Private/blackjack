export const isHandStatus = (handValue: number) => {
  if (21 > handValue) return `${handValue}`;
  if (21 === handValue) return "BLACKJACK!";
  if (21 < handValue) return "BUST";
};
