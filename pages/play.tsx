import PlayHeader from "../components/play-header";
import DefaultLayout from "../components/layout";
import { ReactElement, useState } from "react";
import PlayerRecordForm from "../components/player-record-form";
import { CharacterPositionsType, GameType } from "../types/game";
import { GetStaticPropsResult } from "next";
import GameRoom from "../components/game-room";

type PropsType = {
  game: GameType;
  characterPositions: CharacterPositionsType;
};

/**
 * Fetch game data from database and pass to the home page
 */
const getStaticProps = async (): Promise<GetStaticPropsResult<PropsType>> => {
  try {
    // fetch game data
    const response = await fetch("http://localhost:3000/api/games");
    const gameData = await response.json();

    // fetch character positions data
    const positionResponse = await fetch(
      "http://localhost:3000/api/character_positions"
    );
    const positionData = await positionResponse.json();
    return {
      props: { game: { ...gameData }, characterPositions: { ...positionData } },
    };
  } catch (e) {
    console.log(e);
  }
};

/**
 * Play room page
 */
const Play = ({ game, characterPositions }: PropsType): ReactElement => {
  const [characterLeft, setCharacterLeft] = useState(game.characters.length);
  // this is the player record time to complete the game
  const [playerRecord, setPlayerRecord] = useState(0);
  const onPlayerCorrect = () => {
    setCharacterLeft(characterLeft - 1);
  };
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
      <GameRoom
        game={game}
        characterPositions={characterPositions}
        onPlayerCorrect={onPlayerCorrect}
      />
      {characterLeft === 0 && <PlayerRecordForm />}
    </DefaultLayout>
  );
};

export { getStaticProps };
export default Play;
