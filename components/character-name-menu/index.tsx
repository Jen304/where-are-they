import { Menu, notification } from "antd";
import { ReactElement } from "react";
import { CharacterType } from "../../types/game";
import styles from "./character-name-menu.module.css";

type PropsType = {
  characters: CharacterType[];
  position: {
    x: number;
    y: number;
  };
  itemOnClickHandler: (characterName: string) => void;
};

/**
 * Display character option menu for player to choose
 */
const CharacterNameMenu = ({
  characters,
  position,
  itemOnClickHandler,
}: PropsType): ReactElement => {
  const getMenuItemClickHandler = (characterName: string) => {
    const onClick = () => {
      itemOnClickHandler(characterName);
    };
    return onClick;
  };
  return (
    <Menu
      className={styles.menuContainer}
      // use calc to display exactly position of menu
      // container position is relative => make the y position higher to adjust accordingly
      style={{ top: `calc(${position.y}px - 3.5rem)`, left: `${position.x}px` }}
    >
      {characters.map((character) => (
        <Menu.Item
          key={character.name}
          className={styles.menuItem}
          onClick={getMenuItemClickHandler(character.name)}
        >
          {character.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default CharacterNameMenu;
