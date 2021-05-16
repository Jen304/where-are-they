import { Menu } from "antd";
import { ReactElement } from "react";
import { CharacterType } from "../../types/game";
import styles from "./character-name-menu.module.css";

type PropsType = {
  characters: CharacterType[];
};

/**
 * Display character option menu for player to choose
 */
const CharacterNameMenu = ({ characters }: PropsType): ReactElement => {
  return (
    <Menu className={styles.menuContainer}>
      {characters.map((character) => (
        <Menu.Item key={character.name}>{character.name}</Menu.Item>
      ))}
    </Menu>
  );
};

export default CharacterNameMenu;
