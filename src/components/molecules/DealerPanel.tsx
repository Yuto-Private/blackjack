import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Card from "../atoms/Card";
import { CardType } from "../../domain/types/types";
import { formatHandsValue } from "../../domain/logics/formatHandsValue";

interface Props {
  playerHands: Array<CardType>;
  dealerHands: Array<CardType>;
  isPlayerStand: boolean;
  actionHit: () => void; // nits: hitやstandくらい短くしてしまうと、grepするときにノイズが混じりそうなので、一旦このままでも良いかなと思っておりますが、いかがでしょう？？
  actionStand: () => void;
}

const DealerPanel: FC<Props> = props => {
  useEffect(() => {
    if (props.isPlayerStand) {
      formatHandsValue(props.dealerHands) <= 16 // nits: ここは再起処理になっている？
        ? props.actionHit()
        : props.actionStand();
    }
  }, [props.isPlayerStand, props.dealerHands]);

  return (
    <Component>
      <Position>Dealer</Position>
      <Hands>
        {props.dealerHands.map((value, index) => {
          const isHoleCard = Boolean(index);
          return (
            <Card
              key={index}
              value={value}
              isHidden={isHoleCard && !props.isPlayerStand}
            />
          );
        })}
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
