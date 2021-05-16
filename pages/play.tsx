import PlayHeader from "../components/play-header";
import DefaultLayout from "../components/layout";
import { ReactElement } from "react";
import GameImage from "../components/game-image";
import CharacterNameMenu from "../components/character-name-menu";

const Play = (): ReactElement => {
  return (
    <DefaultLayout header={<PlayHeader />}>
      <GameImage />
      <CharacterNameMenu />
    </DefaultLayout>
  );
};

export default Play;
