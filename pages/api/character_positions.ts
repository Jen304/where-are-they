import { NextApiRequest, NextApiResponse } from "next";
import db from "../../db";

/**
 * handler for /api/character_position endpoint
 * @note should it only allow for GET request?
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const characterPositions = await db.getCharacterPositions();
  res.status(200).json(characterPositions);
};
