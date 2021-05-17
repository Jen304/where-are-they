import { MouseEvent, ReactElement, useRef, useState } from "react";
import { GameType } from "../../types/game";
import CharacterNameMenu from "../character-name-menu";
import GameImage from "../game-image";
import styles from "./game-room.module.css";
import { notification } from "antd";

type PropsType = {
  game: GameType;
};

/**
 * A playable component
 */
const GameRoom = ({ game }: PropsType): ReactElement => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
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
    }, 5000);
    newTimeoutList.push(timeout);
    setMenuTimeout(newTimeoutList);
  };

  // clear all the timeout in the list
  const clearTimeoutList = (list: ReturnType<typeof setTimeout>[]) => {
    list.forEach((item) => {
      clearTimeout(item);
    });
  };

  // use imageRef to get image height and width
  const imageRef = useRef();

  const onPlayerOptionClick = (characterName) => {
    // get width and height of image
    const imageWidth = imageRef ? imageRef.current.offsetWidth : 0;
    const imageHeight = imageRef ? imageRef.current.offsetHeight : 0;

    const { x, y } = menuPosition;
    // get relative x and y position, so it will be independent from device screen
    const relX = x / imageWidth;
    // the header height is 64px
    const relY = (y - 64) / imageHeight;

    console.log("x" + relX);
    console.log("y" + relY);

    notification.open({
      message: "Opp! That's not correct.",
    });
    clearTimeoutList(menuTimeout);
    setMenuTimeout([]);
    setShowMenu(false);
  };

  return (
    <div className={styles.container} ref={imageRef}>
      <GameImage source={game.image} onClick={onImageClick} />
      {showMenu && (
        <CharacterNameMenu
          characters={game.characters}
          position={menuPosition}
          itemOnClickHandler={onPlayerOptionClick}
        />
      )}
    </div>
  );
};

export default GameRoom;
