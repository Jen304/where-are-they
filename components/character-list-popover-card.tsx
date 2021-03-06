import { Popover } from "antd";
import { ReactElement } from "react";
import { CharacterStateType } from "../types/game";
import CharacterItemList from "./character-item-list";

type PropsType = {
  // item that is hovered to display the card
  children: ReactElement;
  characters: CharacterStateType[];
};

/**
 * A popover card contains a lost of character information
 */
const CharacterListPopoverCard = ({
  children,
  characters,
}: PropsType): ReactElement => {
  return (
    <Popover
      placement="bottomRight"
      content={<CharacterItemList characters={characters} />}
    >
      <div>{children}</div>
    </Popover>
  );
};

export default CharacterListPopoverCard;
