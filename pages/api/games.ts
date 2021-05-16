import { NextApiRequest, NextApiResponse } from "next";
import db from "../../db";

/**
 * handler for /api/game endpoint
 * @note should it only allow for GET request?
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const game = await db.getGames();
  res.status(200).json(game);
};
