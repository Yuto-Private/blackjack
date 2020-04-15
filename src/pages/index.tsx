import React, { FC, useState } from "react";
import styled from "styled-components";
import Default from "../components/templates/Default";
import { getInitialCards } from "../domain/logics/cardInitialize";
import { CardType } from "../domain/const/cardNumbers";
import { shuffle } from "../domain/logics/shuffle";
import PlayerPanel from "../components/molecules/PlayerPanel";
import DealerPanel from "../components/molecules/DealerPanel";

const Home: FC = () => {
  const deck = shuffle(getInitialCards());
  const [playerHands, setPlayerHands] = useState<CardType>([deck[0]]);
  const [dealerHands, setDealerHands] = useState<CardType>([]);
  const [hitCount, setHitCount] = useState(1);

  return (
    <Default>
      <GameTable>
        <DealerPanel
          playerHands={playerHands}
          dealerHands={dealerHands}
          actionDealer={() => {
            setDealerHands([...dealerHands, deck[hitCount]]);
            setHitCount(hitCount + 1);
          }}
        />
        <PlayerPanel
          playerHands={playerHands}
          onClickHit={() => {
            setPlayerHands([...playerHands, deck[hitCount]]);
            setHitCount(hitCount + 1);
          }}
        />
      </GameTable>
    </Default>
  );
};

const GameTable = styled.div``;

export default Home;
