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

export type { CharacterType, GameType, CharacterPositionsType };
