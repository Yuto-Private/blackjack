import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Card from "../atoms/Card";
import { CardType } from "../../domain/const/cardNumbers";

interface Props {
  playerHands: CardType;
  dealerHands: CardType;
  actionDealer: () => void;
}

const DealerPanel: FC<Props> = ({ playerHands, dealerHands, actionDealer }) => {
  useEffect(() => {
    actionDealer();
  }, [playerHands]);

  return (
    <Component>
      <Position>Dealer</Position>
      <Hands>
        {dealerHands.map(value => (
          <Card value={value} />
        ))}
      </Hands>
    </Component>
  );
};

const Component = styled.div``;

const Position = styled.p`
  font-size: 20px;
`;

const Hands = styled.div`
  display: flex;
  margin-top: 10px;
`;

export default DealerPanel;
