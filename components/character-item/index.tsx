import { ReactElement } from "react";
import { CharacterType } from "../../types/game";
import styles from "./character-item.module.css";

type PropsType = CharacterType;

/**
 * Display information about character: image, name
 */
const CharacterItem = ({ name, image }: PropsType): ReactElement => {
  return (
    <div className={styles.characterItemContainer}>
      <img className={styles.characterImage} src={image} alt={name} />
      <div>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default CharacterItem;
