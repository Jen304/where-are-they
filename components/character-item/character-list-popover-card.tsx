import { Popover } from "antd";
import { ReactElement } from "react";
import CharacterItemList from "../character-item-list";

type PropsType = {
  // item that is hovered to display the card
  children: ReactElement;
};

/**
 * A popover card contains a lost of character information
 */
const CharacterListPopoverCard = ({ children }: PropsType): ReactElement => {
  return (
    <Popover placement="bottomRight" content={<CharacterItemList />}>
      {children}
    </Popover>
  );
};

export default CharacterListPopoverCard;
