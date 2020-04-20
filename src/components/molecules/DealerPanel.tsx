import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Card from "../atoms/Card";
import { CardType } from "../../domain/const/cardNumbers";
import { formatHandsValue } from "../../domain/logics/formatHandsValue";

interface Props {
  playerHands: CardType;
  dealerHands: CardType;
  isPlayerStand: boolean;
  actionHit: () => void;
  actionStand: () => void;
}

const DealerPanel: FC<Props> = props => {
  useEffect(() => {
    formatHandsValue(props.dealerHands) <= 16
      ? props.actionHit()
      : props.actionStand();
  }, [props.playerHands]);

  useEffect(() => {
    if (props.isPlayerStand) {
      formatHandsValue(props.dealerHands) <= 16
        ? props.actionHit()
        : props.actionStand();
    }
  }, [props.isPlayerStand, props.dealerHands]);

  return (
    <Component>
      <Position>Dealer</Position>
      <Hands>
        {props.dealerHands.map((value, index) => (
          <Card
            value={value}
            isHidden={Boolean(index) && !props.isPlayerStand}
          />
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
