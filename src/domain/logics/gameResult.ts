export const gameResult = (player: number, dealer: number) => {
  const playerScore = player <= 21 ? 21 - player : 0;
  const dealerScore = dealer <= 21 ? 21 - dealer : 0;

  if (playerScore < dealerScore) return "WIN";
  if (playerScore > dealerScore) return "LOSE";
  if (playerScore - dealerScore === 0) return "LOSE";
};
