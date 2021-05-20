import { useEffect, useState } from "react";
import {
  CharacterPositionsType,
  CharacterStateListType,
  CharacterType,
} from "../types/game";

type HookParamsType = {
  characterInfo: CharacterType[];
  characterPositions: CharacterPositionsType;
};

const useCharacterListController = ({
  characterInfo,
  characterPositions,
}: HookParamsType): {
  characterLeftCount: number;
  characterStateList: CharacterStateListType;
  onCharacterFound: (characterName: string) => void;
} => {
  const [characterLeftCount, setCharacterLeftCount] = useState(
    characterInfo.length
  );
  const [characterStateList, setCharacterStateList] = useState({});

  useEffect(() => {
    const stateList = {};
    characterInfo.forEach((item) => {
      const name = item.name;
      stateList[name] = {
        ...item,
        position: characterPositions[name],
        isFound: false,
      };
    });
    setCharacterStateList(stateList);
  }, []);

  const onCharacterFound = (characterName: string) => {
    const newCharacterStateList = { ...characterStateList };
    newCharacterStateList[characterName].isFound = true;
    setCharacterStateList(newCharacterStateList);
    setCharacterLeftCount(characterLeftCount - 1);
  };
  return {
    characterLeftCount,
    characterStateList,
    onCharacterFound,
  };
};

export default useCharacterListController;
