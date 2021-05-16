import { Popover } from "antd";
import { ReactElement } from "react";
import { CharacterType } from "../../types/game";
import CharacterItemList from "../character-item-list";

type PropsType = {
  // item that is hovered to display the card
  children: ReactElement;
  characters: CharacterType[];
};

/**
 * A popover card contains a lost of character information
 */
const CharacterListPopoverCard = ({ children, characters }: PropsType): ReactElement => {
  return (
    <Popover
      placement="bottomRight"
      content={<CharacterItemList characters={characters} />}
    >
      {children}
    </Popover>
  );
};

export default CharacterListPopoverCard;
