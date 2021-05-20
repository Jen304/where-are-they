import { ReactElement } from "react";
import { CharacterStateType, CharacterType } from "../types/game";
import CharacterItem from "./character-item";

type PropsType = {
  characters: CharacterType[] | CharacterStateType[];
};

/**
 * Contain a list of character information item
 */
const CharacterItemList = ({ characters }: PropsType): ReactElement => {
  return (
    <div>
      {characters.map((character) => {
        if (character.isFound == undefined || !character.isFound) {
          return (
            <CharacterItem
              key={character.name}
              name={character.name}
              image={character.image}
            />
          );
        }
      })}
    </div>
  );
};

export default CharacterItemList;
