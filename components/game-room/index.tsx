import { MouseEvent, ReactElement, useRef, useState } from "react";
import { CharacterPositionsType, GameType } from "../../types/game";
import CharacterNameMenu from "../character-name-menu";
import GameImage from "../game-image";
import styles from "./game-room.module.css";
import { notification } from "antd";
import useTimeout from "../../hooks/use-timeout";

type PropsType = {
  game: GameType;
  characterPositions: CharacterPositionsType;
  onPlayerCorrect: () => void;
};

/**
 * A playable component.
 * Player can click and choose character options to choose
 */
const GameRoom = ({
  game,
  characterPositions,
  onPlayerCorrect,
}: PropsType): ReactElement => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const { startTimeout, clearTimeout } = useTimeout();
  const onImageClick = (e: MouseEvent) => {
    // clear the old menu time out
    clearTimeout();
    // set menu position
    const { pageX: x, pageY: y } = e;
    setMenuPosition({ x, y });
    setShowMenu(true);

    startTimeout(() => {
      setShowMenu(false);
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
    const position = characterPositions[characterName];
    const disX = Math.abs(position.x - relX) < 0.084;
    const disY = Math.abs(position.y - relY) < 0.01;
    let notificationMes;
    if (disX && disY) {
      notificationMes = {
        message: "Yay! It's correct!",
      };
      onPlayerCorrect();
    } else {
      notificationMes = {
        message: "Opps! That's not correct.",
      };
    }

    notification.open(notificationMes);
    clearTimeout();
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
