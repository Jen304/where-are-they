type CharacterType = {
  name: string;
  image: string;
};

type GameType = {
  characters: CharacterType[];
  image: string;
};

export type { CharacterType, GameType };
