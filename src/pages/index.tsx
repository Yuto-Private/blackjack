import React, { FC, useState } from "react";
import styled from "styled-components";
import Default from "../components/templates/Default";
import { getInitialCards } from "../domain/logics/cardInitialize";
import { CardType } from "../domain/const/cardNumbers";
import { shuffle } from "../domain/logics/shuffle";
import PlayerPanel from "../components/molecules/PlayerPanel";
import DealerPanel from "../components/molecules/DealerPanel";
import { isHandStatus } from "../domain/logics/isHandStatus";
import { formatHandsValue } from "../domain/logics/formatHandsValue";
import ShowDownPanel from "../components/molecules/ShowDownPanel";

const Home: FC = () => {
  const deck = shuffle(getInitialCards());
  const [playerHands, setPlayerHands] = useState<CardType>([deck[0]]);
  const [dealerHands, setDealerHands] = useState<CardType>([]);
  const [hitCount, setHitCount] = useState(1);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);

  return (
    <Default>
      <GameTable>
        {console.log(formatHandsValue(playerHands))}
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
        {isHandStatus(formatHandsValue(playerHands))}

        <ShowDownPanel playerHands={playerHands} dealerHands={dealerHands} />
      </GameTable>
    </Default>
  );
};

const GameTable = styled.div``;

export default Home;
