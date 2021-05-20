import { Menu } from "antd";
import { ReactElement } from "react";
import { CharacterStateListType } from "../../types/game";
import styles from "./character-name-menu.module.css";

type PropsType = {
  characters: CharacterStateListType;
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
  // return onClick handler with passed characterName
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
      {Object.keys(characters).map((key) => {
        if (!characters[key].isFound) {
          return (
            <Menu.Item
              key={key}
              className={styles.menuItem}
              onClick={getMenuItemClickHandler(key)}
            >
              {characters[key].name}
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
};

export default CharacterNameMenu;
