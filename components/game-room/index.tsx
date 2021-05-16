import { ReactElement } from "react";
import { GameType } from "../../types/game";
import CharacterNameMenu from "../character-name-menu";
import GameImage from "../game-image";

type PropsType = {
  game: GameType;
};

/**
 * A playable component
 */
const GameRoom = ({ game }: PropsType): ReactElement => {
  return (
    <div>
      <GameImage source={game.image} />
      <CharacterNameMenu characters={game.characters} />
    </div>
  );
};

export default GameRoom;
