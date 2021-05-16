import { MouseEvent, ReactElement, useState } from "react";
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
  const [menuTimeout, setMenuTimeout] = useState<
    ReturnType<typeof setTimeout>[]
  >([]);
  const onImageClick = (e: MouseEvent) => {
    // clear the old menu time out
    clearTimeoutList(menuTimeout);
    setMenuTimeout([]);

    // set menu position
    const { pageX: x, pageY: y } = e;
    setMenuPosition({ x, y });
    setShowMenu(true);

    // set timeout for menu display time
    const newTimeoutList = [];
    // set menu display timeout
    const timeout = setTimeout(() => {
      setShowMenu(false);
    }, 3000);
    newTimeoutList.push(timeout);
    setMenuTimeout(newTimeoutList);
  };

  const clearTimeoutList = (list: ReturnType<typeof setTimeout>[]) => {
    list.forEach((item) => {
      clearTimeout(item);
    });
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
