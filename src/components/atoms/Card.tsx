import React, { FC } from "react";
import { cardSuitScreen } from "../../domain/const/cardSuits";
import { cardNumberScreen } from "../../domain/const/cardNumbers";

interface Props {
  value: Array<number>;
}

const Card: FC<Props> = ({ value }) => {
  const [suit, number] = value;
  return (
    <dl>
      <dt>{cardSuitScreen[suit]}</dt>
      <dd>{cardNumberScreen[number]}</dd>
    </dl>
  );
};

export default Card
