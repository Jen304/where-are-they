import { ReactElement } from "react";
import { CharacterType } from "../types/game";
import CharacterItem from "./character-item";

type PropsType = {
  characters: CharacterType[];
};

/**
 * Contain a list of character information item
 */
const CharacterItemList = ({ characters }: PropsType): ReactElement => {
  return (
    <div>
      {characters.map((character) => (
        <CharacterItem
          key={character.name}
          name={character.name}
          image={character.image}
        />
      ))}
    </div>
  );
};

export default CharacterItemList;
