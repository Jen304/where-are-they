import PlayHeader from "../components/play-header";
import DefaultLayout from "../components/layout";
import { ReactElement } from "react";
import GameImage from "../components/game-image";
import CharacterNameMenu from "../components/character-name-menu";
import PlayerRecordForm from "../components/player-record-form";
import { GameType } from "../types/game";
import { GetStaticPropsResult } from "next";

/**
 * Fetch game data from database and pass to the home page
 */
const getStaticProps = async (): Promise<
  GetStaticPropsResult<{
    games: GameType;
  }>
> => {
  try {
    const response = await fetch("http://localhost:3000/api/games");
    const gameData = await response.json();
    return {
      props: { games: { ...gameData } },
    };
  } catch (e) {
    console.log(e);
  }
};

type PropsType = {
  games: GameType;
};

/**
 * Play room page
 */
const Play = ({ games }: PropsType): ReactElement => {
  return (
    <DefaultLayout header={<PlayHeader characters={games.characters} />}>
      <GameImage source={games.image} />
      <CharacterNameMenu />
      <PlayerRecordForm />
    </DefaultLayout>
  );
};

export { getStaticProps };
export default Play;
