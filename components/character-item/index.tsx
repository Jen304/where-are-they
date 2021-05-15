import { ReactElement } from "react";
import styles from "./character-item.module.css";

/**
 * Display information about character: image, name
 */
const CharacterItem = (): ReactElement => {
  return (
    <div className={styles.characterItemContainer}>
      <img
        className={styles.characterImage}
        src="character.jpg"
        alt="nekobasu"
      />
      <div>
        <h4>Nekobasu</h4>
      </div>
    </div>
  );
};

export default CharacterItem;
