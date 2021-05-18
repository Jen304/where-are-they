import { MouseEvent, ReactElement, useRef, useState } from "react";
import { CharacterPositionsType, GameType } from "../../types/game";
import CharacterNameMenu from "../character-name-menu";
import gameImageHelper from "../../helpers/game-image";
import styles from "./game-room.module.css";
import useTimeout from "../../hooks/use-timeout";
import { openErrorMessage, openSuccessMessage } from "../notification";
import GameImage from "../game-image";

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
    // clear the old menu timeout if it has
    clearTimeout();
    // set menu position
    const { pageX: x, pageY: y } = e;
    setMenuPosition({ x, y });
    setShowMenu(true);

    // set the menu timeout to un-display
    startTimeout(() => {
      setShowMenu(false);
    });
  };

  // use imageRef to get image height and width
  const imageRef = useRef();

  const onPlayerOptionClick = (characterName) => {
    // get width and height of image
    const isCorrect = gameImageHelper.checkPlayerChoice({
      imageRef,
      playerPosition: menuPosition,
      correctPosition: characterPositions[characterName],
    });
    displayResultMessage(isCorrect);

    clearTimeout();
    setShowMenu(false);
  };

  // should I move to game-image helper?
  const displayResultMessage = (isCorrect) => {
    if (isCorrect) {
      openSuccessMessage({
        message: "Yay! You're correct",
      });
      onPlayerCorrect();
    } else {
      openErrorMessage({
        message: "Opp! It's not correct",
      });
    }
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
