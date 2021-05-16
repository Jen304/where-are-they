import { Menu } from "antd";
import { ReactElement } from "react";
import styles from "./character-name-menu.module.css";

/**
 * Display character option menu for player to choose
 */
const CharacterNameMenu = (): ReactElement => {
  return (
    <Menu className={styles.menuContainer}>
      <Menu.Item>Nekobasu</Menu.Item>
      <Menu.Item>Nekobasu</Menu.Item>
      <Menu.Item>Nekobasu</Menu.Item>
    </Menu>
  );
};

export default CharacterNameMenu;
