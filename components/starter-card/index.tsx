import { ReactElement } from "react";
import CharacterItemList from "../character-item-list";
import { CharacterType } from "../../types/game";
import Card from "../card";

type PropsType = {
  characters: CharacterType[];
};

/**
 * A card displays the game information before player start the game
 */
const StarterCard = ({ characters }: PropsType): ReactElement => {
  return (
    <Card title="Find these characters" buttonLink="/play" buttonLabel="Start">
      <CharacterItemList characters={characters} />
    </Card>
  );
};

export default StarterCard;
