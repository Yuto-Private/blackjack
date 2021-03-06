import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Card from "../atoms/Card";
import { CardType } from "../../domain/types/types";
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
          // TODO: keyにindex以外当てるものがないので一旦仮あて
          <Card
            key={index}
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
