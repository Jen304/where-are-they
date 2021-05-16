import { ReactElement } from "react";
import styles from "./game-image.module.css";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

const GameImage = (): ReactElement => {
  return (
    <div className={styles.gameImageContainer}>
      <img className={styles.gameImage} src="game-picture.jpg"></img>
      <CustomCursor
        targets={[".link", ".your-css-selector"]}
        customClass="custom-cursor"
        dimensions={120}
        fill="#FFF"
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.3,
        }}
        targetOpacity={0.5}
      />
    </div>
  );
};

export default GameImage;
