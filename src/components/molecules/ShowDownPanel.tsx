import React, { FC } from "react";
import styled from "styled-components";
import { CardType } from "../../domain/const/cardNumbers";
import { useRouter } from "next/router";
import { formatHandsValue } from "../../domain/logics/formatHandsValue";
import { gameResult } from "../../domain/logics/gameResult";

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
      <button type="button" onClick={() => router.reload()}>
        one more
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

const Result = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ResultItem = styled.div`
  margin-right: 10px;
`;

export default ShowDownPanel;
