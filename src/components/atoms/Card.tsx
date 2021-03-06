import React, { FC } from "react";
import { cardSuitScreen } from "../../domain/const/cardSuits";
import { cardNumberScreen } from "../../domain/const/cardNumbers";
import styled from "styled-components";

interface Props {
  value: Array<number>;
  isHidden?: boolean;
}

const Card: FC<Props> = ({ value, isHidden }) => {
  const [suit, number] = value;
  return (
    <Component>
      <Suit suitColor={suit} isHidden={isHidden}>
        {isHidden ? "?" : cardSuitScreen[suit]}
      </Suit>
      <Number suitColor={suit} isHidden={isHidden}>
        {isHidden ? "?" : cardNumberScreen[number]}
      </Number>
    </Component>
  );
};

const Component = styled.dl`
  border: 1px solid;
  padding: 25px 17px;
  position: relative;
  &:not(:first-of-type) {
    margin-left: 5px;
  }
`;

const Suit = styled.dt<{ suitColor: number; isHidden?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10px;
  color: ${({ suitColor, isHidden }) =>
    !isHidden && 2 < suitColor ? `#f00` : "#000"};
`;

const Number = styled.dd<{ suitColor: number; isHidden?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ suitColor, isHidden }) =>
    !isHidden && 2 < suitColor ? `#f00` : "#000"};
`;

export default Card;
