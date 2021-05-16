import PlayHeader from "../components/play-header";
import DefaultLayout from "../components/layout";
import { ReactElement, useState } from "react";
import PlayerRecordForm from "../components/player-record-form";
import { GameType } from "../types/game";
import { GetStaticPropsResult } from "next";
import GameRoom from "../components/game-room";

/**
 * Fetch game data from database and pass to the home page
 */
const getStaticProps = async (): Promise<
  GetStaticPropsResult<{
    game: GameType;
  }>
> => {
  try {
    const response = await fetch("http://localhost:3000/api/games");
    const gameData = await response.json();
    return {
      props: { game: { ...gameData } },
    };
  } catch (e) {
    console.log(e);
  }
};

type PropsType = {
  game: GameType;
};

/**
 * Play room page
 */
const Play = ({ game }: PropsType): ReactElement => {
  const [characterLeft, setCharacterLeft] = useState(game.characters.length);
  // this is the player record time to complete the game
  const [playerRecord, setPlayerRecord] = useState(0);
  return (
    <DefaultLayout
      header={
        <PlayHeader
          characters={game.characters}
          characterLeft={characterLeft}
          setPlayerRecord={setPlayerRecord}
        />
      }
    >
      <GameRoom game={game} />
    </DefaultLayout>
  );
};

export { getStaticProps };
export default Play;
