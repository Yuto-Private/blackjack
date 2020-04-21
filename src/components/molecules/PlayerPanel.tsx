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
        {playerHands.map(value => (
          <Card value={value} />
        ))}
      </Hands>
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
