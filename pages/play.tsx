import PlayHeader from "../components/play-header";
import DefaultLayout from "../components/layout";
import { ReactElement } from "react";
import GameImage from "../components/game-image";
import CharacterNameMenu from "../components/character-name-menu";
import PlayerRecordForm from "../components/player-record-form";


/**
 * Play room page
 */
const Play = (): ReactElement => {
  return (
    <DefaultLayout header={<PlayHeader />}>
      <GameImage />
      <CharacterNameMenu />
      <PlayerRecordForm />
    </DefaultLayout>
  );
};

export default Play;
