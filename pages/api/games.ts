import { NextApiRequest, NextApiResponse } from "next";
import db from "../../db";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const game = await db.getGames();
  res.status(200).json(game);
};
