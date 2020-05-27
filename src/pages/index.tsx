import React, { FC, useState } from "react";
import styled from "styled-components";
import Default from "../components/templates/Default";
import { getInitialCards } from "../domain/logics/getInitialCards";
import { CardType } from "../domain/types/types";
import { shuffle } from "../domain/logics/shuffle";
import PlayerPanel from "../components/molecules/PlayerPanel";
import DealerPanel from "../components/molecules/DealerPanel";
import { judgeHandStatus } from "../domain/logics/judgeHandStatus";
import { formatHandsValue } from "../domain/logics/formatHandsValue";
import ShowDownPanel from "../components/molecules/ShowDownPanel";

const Home: FC = () => {
  const deck = shuffle(getInitialCards());
  // TODO: マジックナンバーなんとかしたい
  // imo: deck.shift() が使えるかと。そうすればhitCountの管理は不要になる
  const [playerHands, setPlayerHands] = useState<Array<CardType>>([deck[0]]);
  const [dealerHands, setDealerHands] = useState<Array<CardType>>([
    deck[1],
    deck[2]
  ]);
  const [hitCount, setHitCount] = useState(3);
  const [isPlayerStand, setIsPlayerStand] = useState(false);
  const [isDealerStand, setIsDealerStand] = useState(false);

  return (
    <Default>
      <GameTable>
        <DealerPanel
          playerHands={playerHands}
          dealerHands={dealerHands}
          isPlayerStand={isPlayerStand}
          actionHit={() => {
            setDealerHands([...dealerHands, deck[hitCount]]);
            setHitCount(hitCount + 1);
          }}
          actionStand={() => setIsDealerStand(true)}
        />

        <PlayerPanel
          playerHands={playerHands}
          onClickHit={() => {
            setPlayerHands([...playerHands, deck[hitCount]]);
            setHitCount(hitCount + 1);
          }}
          onClickStand={() => setIsPlayerStand(true)}
        />

        {judgeHandStatus(formatHandsValue(playerHands))}

        {isPlayerStand && isDealerStand && (
          <ShowDownPanel playerHands={playerHands} dealerHands={dealerHands} />
        )}
      </GameTable>
    </Default>
  );
};

const GameTable = styled.div``;

export default Home;
