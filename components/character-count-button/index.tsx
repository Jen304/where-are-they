import { ReactElement } from "react";
import { Button } from "antd";
import styles from "./character-count-button.module.css";

type PropsType = {
  characterLeft: number;
};

const CharacterCountButton = ({ characterLeft }: PropsType): ReactElement => {
  return (
    <Button shape="circle" className={styles.button}>
      {characterLeft}
    </Button>
  );
};

export default CharacterCountButton;
