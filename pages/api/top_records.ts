import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../db";

const ALLOW_METHOD = {
  GET: "GET",
  POST: "POST",
};

// the main handler for /player-records endpoint
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { body, method } = req;

  switch (method) {
    case ALLOW_METHOD.GET:
      const records = await db.getTopRecords();
      res.status(200).json(records);
      break;
    case ALLOW_METHOD.POST:
      const recordID = await db.savePlayerRecord(body);
      console.log(recordID);
      res.status(201).json({
        recordID,
      });
      break;
    default:
      res.setHeader("Allow", Object.values(ALLOW_METHOD));
      res.status(405).end(`${method} not allowed.`);
  }
};
