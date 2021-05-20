type CharacterType = {
  name: string;
  image: string;
};

type GameType = {
  characters: CharacterType[];
  image: string;
};

type CharacterPositionsType = {
  [name: string]: {
    x: number;
    y: number;
  };
};

/**
 * This type is for object to check character information and current state (isFound or not)
 */
type CharacterStateType = {
  isFound: boolean;
} & CharacterType &
  CharacterPositionsType;

type CharacterStateListType = {
  [name: string]: CharacterStateType;
};

export type {
  CharacterType,
  GameType,
  CharacterPositionsType,
  CharacterStateType,
  CharacterStateListType,
};
