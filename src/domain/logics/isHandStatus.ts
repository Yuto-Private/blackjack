export const isHandStatus = (handValue: number) => {
  if (21 > handValue) {
    if (12 <= handValue && handValue <= 16) return `${handValue} stiff...`;
    return `${handValue}`;
  }
  if (21 === handValue) return "BLACKJACK!";
  if (21 < handValue) return "BUST";
};
