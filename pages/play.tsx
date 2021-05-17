import PlayHeader from "../components/play-header";
import DefaultLayout from "../components/layout";
import { ReactElement, useEffect, useState } from "react";
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
  const [showForm, setShowForm] = useState(false);
  const onPlayerCorrect = () => {
    setCharacterLeft(characterLeft - 1);
  };

  useEffect(() => {
    if (characterLeft == 0) {
      setTimeout(() => {
        setShowForm(true);
      }, 1000);
    }
  }, [characterLeft]);

  const onPlayerRecordFormSubmit = async (name) => {
    const playerData = {
      name,
      time: playerRecord,
      timestamp: Date.now(),
    };
    console.log(playerData);

    // send data to backend
    const options = {
      method: "POST",
      body: JSON.stringify(playerData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await fetch(
        "http://localhost:3000/api/player_records",
        options
      );
      const resData = await res.json();
      // save last player record to database
      localStorage.setItem("playerRecord", resData);
    } catch (e) {
      console.log(e);
    }
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
      {showForm && <PlayerRecordForm submit={onPlayerRecordFormSubmit} />}
    </DefaultLayout>
  );
};

export { getStaticProps };
export default Play;
