import { MouseEventHandler, ReactElement } from "react";
import styles from "./game-image.module.css";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

type PropsType = {
  source: string;
  onClick: MouseEventHandler;
};

/**
 * Game image for play room, so user can click on and find characters
 */
const GameImage = ({ source, onClick }: PropsType): ReactElement => {
  return (
    <>
      <img className={styles.gameImage} src={source} onClick={onClick}></img>
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
      </>
  );
};

export default GameImage;
