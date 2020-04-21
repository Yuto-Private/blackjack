import React, { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { formatHandsValue } from "../../domain/logics/formatHandsValue";
import { gameResult } from "../../domain/logics/gameResult";
import { CardType } from "../../domain/types/types";

interface Props {
  playerHands: CardType;
  dealerHands: CardType;
}

const ShowDownPanel: FC<Props> = ({ playerHands, dealerHands }) => {
  const router = useRouter();
  const playerScore = formatHandsValue(playerHands);
  const dealerScore = formatHandsValue(dealerHands);
  return (
    <Component>
      <Position>ShowDown</Position>
      <Result>
        <ResultItem>Player {playerScore}</ResultItem>
        <ResultItem>Dealer {dealerScore}</ResultItem>
        <ResultItem>{gameResult(playerScore, dealerScore)}</ResultItem>
      </Result>
      <Button type="button" onClick={() => router.reload()}>
        one more
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

const Result = styled.div`
  display: flex;
  margin: 10px 0;
`;

const ResultItem = styled.div`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 5px 20px;
  border: 1px solid #000;
  &:not(:first-of-type) {
    margin-left: 5px;
  }
`;

export default ShowDownPanel;
