import { NextApiRequest, NextApiResponse } from "next";
import { serverApi } from "../../services/serverApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const toprated = await serverApi.get("/movie/top_rated");
  return res.json(toprated.data);
}
