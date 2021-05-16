import { ReactElement } from "react";
import styles from "./game-image.module.css";

const GameImage = (): ReactElement => {
  return <img className={styles.gameImage} src="game-picture.jpg"></img>;
};

export default GameImage;
