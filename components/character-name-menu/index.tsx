import { Menu } from "antd";
import { ReactElement } from "react";
import { CharacterType } from "../../types/game";
import styles from "./character-name-menu.module.css";

type PropsType = {
  characters: CharacterType[];
  position: {
    x: number;
    y: number;
  };
};

/**
 * Display character option menu for player to choose
 */
const CharacterNameMenu = ({
  characters,
  position,
}: PropsType): ReactElement => {
  console.log(position);
  return (
    <Menu
      className={styles.menuContainer}
      // use calc to display exactly position of menu
      // container position is relative => make the y position higher to adjust accordingly
      style={{ top: `calc(${position.y}px - 3.5rem)`, left: `${position.x}px` }}
    >
      {characters.map((character) => (
        <Menu.Item key={character.name} className={styles.menuItem}>
          {character.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default CharacterNameMenu;
