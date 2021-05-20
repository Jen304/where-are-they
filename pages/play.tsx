import PlayHeader from "../components/play-header";
import DefaultLayout from "../components/layout";
import { ReactElement, useState } from "react";
import PlayerRecordForm from "../components/player-record-form";
import { CharacterPositionsType, GameType } from "../types/game";
import { GetStaticPropsResult } from "next";
import GameRoom from "../components/game-room";
import { useRouter } from "next/dist/client/router";
import useCharacterListController from "../hooks/use-character-list-controller";
import useDisplayController from "../hooks/use-display-controller";
import submitPlayerRecord from "../helpers/submit-player-record";
import db from "../db";

type PropsType = {
  game: GameType;
  characterPositions: CharacterPositionsType;
};

/**
 * Fetch game data from database and pass to page component
 */
const getStaticProps = async (): Promise<GetStaticPropsResult<PropsType>> => {
  let result = {
    props: {
      game: null,
      characterPositions: null,
    },
  };
  try {
    // get data from database
    const gameData = await db.getGames();
    const positionData = await db.getCharacterPositions();

    result = {
      props: { game: { ...gameData }, characterPositions: { ...positionData } },
    };
  } catch (e) {
    console.log(e);
  }
  return result;
};

/**
 * Play room page
 */
const Play = ({ game, characterPositions }: PropsType): ReactElement => {
  // init custom hook to control characterStateList and characterLeftCount
  const { characterLeftCount, characterStateList, onCharacterFound } =
    useCharacterListController({
      characterInfo: game.characters,
      characterPositions,
    });
  // this is the player record (time) to complete the current play
  const [playerRecord, setPlayerRecord] = useState(0);

  const showFormCondition = () => {
    return characterLeftCount == 0;
  };

  const { isDisplay: showForm } = useDisplayController({
    defaultDisplay: false,
    changeDisplayCondition: showFormCondition,
    triggerChangeValue: characterLeftCount,
  });

  const router = useRouter();

  const onPlayerRecordFormSubmit = async (name: string) => {
    const playerData = {
      name,
      time: playerRecord,
      timestamp: Date.now(),
    };

    const resData = await submitPlayerRecord(playerData);
    if (resData) {
      localStorage.setItem("playerRecord", JSON.stringify(resData.recordID));
      router.push("/leaderboard");
    }
  };
  return (
    <DefaultLayout
      header={
        <PlayHeader
          characters={characterStateList}
          characterLeft={characterLeftCount}
          setPlayerRecord={setPlayerRecord}
        />
      }
    >
      <GameRoom
        game={game}
        characterStateList={characterStateList}
        onPlayerCorrect={onCharacterFound}
      />
      {showForm && <PlayerRecordForm submit={onPlayerRecordFormSubmit} />}
    </DefaultLayout>
  );
};

export { getStaticProps };
export default Play;
