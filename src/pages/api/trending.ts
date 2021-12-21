import { NextApiRequest, NextApiResponse } from "next";
import { serverApi } from "../../services/serverApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const trending = await serverApi.get("/trending/all/week");
  return res.json(trending.data);
}
