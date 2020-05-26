import React, { FC } from "react";
import styled from "styled-components";
import Card from "../atoms/Card";
import { CardType } from "../../domain/types/types";

interface Props {
  playerHands: CardType;
  onClickHit: () => void;
  onClickStand: () => void;
}

const PlayerPanel: FC<Props> = ({ playerHands, onClickHit, onClickStand }) => {
  return (
    <Component>
      <Position>Player</Position>
      <Hands>
        {playerHands.map((value, index) => (
          // TODO: keyにindex以外当てるものがないので一旦仮あて
          <Card key={index} value={value} />
        ))}
      </Hands>
      {/* nits: 前も話した通り、ここはonClick={onClickHit}を使ってもいいですよ */}
      <Button type="button" onClick={() => onClickHit()}>
        hit
      </Button>
      <Button type="button" onClick={() => onClickStand()}>
        stand
      </Button>
    </Component>
  );
};

const Component = styled.div`
  margin-top: 100px;
`;

const Position = styled.p`
  font-size: 20px;
`;

const Hands = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Button = styled.button`
  padding: 5px 20px;
  border: 1px solid #000;
  &:not(:first-of-type) {
    margin-left: 5px;
  }
`;

export default PlayerPanel;
