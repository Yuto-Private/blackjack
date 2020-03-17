export enum suitList {
  spade,
  club,
  dia,
  heart
}

const cardMarkimg = ["♠", "♣", "♥", "♦"];
const cardNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function getInitialCards() {
  return cardNumbers.map(data => {
    return cardMarkimg.map(e => [e, data]);
  });
}

console.log(getInitialCards());
