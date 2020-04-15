import React, { FC } from "react";
import styled from "styled-components";
import { CardType } from "../../domain/const/cardNumbers";
import Card from "../atoms/Card";

interface Props {
  playerHands: CardType;
  onClickHit: () => void;
}

const PlayerPanel: FC<Props> = ({ playerHands, onClickHit }) => {
  return (
    <Component>
      <Position>Player</Position>
      <Hands>
        {playerHands.map(value => (
          <Card value={value} />
        ))}
      </Hands>
      <button type="button" onClick={() => onClickHit()}>
        playerHit
      </button>
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
  margin-top: 10px;
`;

export default PlayerPanel;
