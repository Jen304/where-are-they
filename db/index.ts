import { CharacterPositionsType, GameType } from "../types/game";
import PlayerRecordType from "../types/player";
import db from "./connection";

/**
 * get the game information from database
 * @note should change return type to Promise<GameType> later on
 */
const getGames = async (): Promise<GameType> => {
  // get a list of game and get the first one just in case there will have more game rooms in the future
  const collectionSnapshot = await db.collection("game").get();
  const gameList = [];
  collectionSnapshot.forEach((game) => {
    gameList.push(game.data());
  });
  // eliminate error by checking gameList length
  if (gameList.length > 0) {
    // at this time, just return the first one as there is only one game in the database
    // assume that it should have at least one game in the database;
    return gameList[0];
  } else {
    return {} as GameType;
  }
};

const getCharacterPositions = async (): Promise<CharacterPositionsType> => {
  const collectionSnapshot = await db.collection("character-positions").get();
  const gameList = [];
  collectionSnapshot.forEach((game) => {
    gameList.push(game.data());
  });
  if (gameList.length > 0) {
    return gameList[0];
  } else {
    return {} as CharacterPositionsType;
  }
};

// save player record to database
const savePlayerRecord = async (
  playerRecord: PlayerRecordType
): Promise<string> => {
  const res = await db.collection("player-records").add(playerRecord);
  return res.id;
};

export default {
  getGames,
  getCharacterPositions,
  savePlayerRecord,
};
