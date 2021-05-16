import { ReactElement, useState } from "react";
import { GameType } from "../../types/game";
import CharacterNameMenu from "../character-name-menu";
import GameImage from "../game-image";
import styles from "./game-room.module.css";

type PropsType = {
  game: GameType;
};

/**
 * A playable component
 */
const GameRoom = ({ game }: PropsType): ReactElement => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({});
  const onImageClick = (e) => {
    const { pageX: x, pageY: y } = e;
    setMenuPosition({ x, y });
    setShowMenu(true);
  };
  return (
    <div onClick={onImageClick} className={styles.container}>
      <GameImage source={game.image} />
      {showMenu && (
        <CharacterNameMenu
          characters={game.characters}
          position={menuPosition}
        />
      )}
    </div>
  );
};

export default GameRoom;
