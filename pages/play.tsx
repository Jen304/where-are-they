import PlayHeader from "../components/play-header";
import DefaultLayout from "../components/layout";
import { ReactElement } from "react";
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
  return (
    <DefaultLayout header={<PlayHeader characters={game.characters} />}>
      <GameRoom game={game} />
    </DefaultLayout>
  );
};

export { getStaticProps };
export default Play;
