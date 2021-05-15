import { ReactElement } from "react";
import CharacterItem from "./character-item/character-item";

/**
 * Contain a list of character information item
 */
const CharacterItemList = (): ReactElement => {
  return (
    <div>
      <CharacterItem />
      <CharacterItem />
      <CharacterItem />
    </div>
  );
};

export default CharacterItemList;
