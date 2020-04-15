import React, { FC, useState } from "react";
import styled from "styled-components";
import Default from "../components/templates/Default";
import { getInitialCards } from "../domain/logics/cardInitialize";
import { CardType } from "../domain/const/cardNumbers";
import { shuffle } from "../domain/logics/shuffle";
import PlayerPanel from "../components/molecules/PlayerPanel";
import DealerPanel from "../components/molecules/DealerPanel";
import { handsValue } from "../domain/logics/handsValue";
import { isHandStatus } from "../domain/logics/isHandStatus";

const Home: FC = () => {
  const deck = shuffle(getInitialCards());
  const [playerHands, setPlayerHands] = useState<CardType>([deck[0]]);
  const [dealerHands, setDealerHands] = useState<CardType>([]);
  const [hitCount, setHitCount] = useState(1);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);

  return (
    <Default>
      <GameTable>
        {console.log(handsValue(playerHands))}
        <DealerPanel
          playerHands={playerHands}
          dealerHands={dealerHands}
          actionDealer={() => {
            setTimeout(() => {
              setDealerHands([...dealerHands, deck[hitCount]]);
              setHitCount(hitCount + 1);
              setIsPlayerTurn(true);
            }, 500);
          }}
        />
        <PlayerPanel
          playerHands={playerHands}
          myTurn={isPlayerTurn}
          onClickHit={() => {
            setPlayerHands([...playerHands, deck[hitCount]]);
            setHitCount(hitCount + 1);
            setIsPlayerTurn(false);
          }}
        />
        {isHandStatus(handsValue(playerHands))}
      </GameTable>
    </Default>
  );
};

const GameTable = styled.div``;

export default Home;
