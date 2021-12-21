import { NextApiRequest, NextApiResponse } from "next";
import { serverApi } from "../../../services/serverApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { genre } = req.query;
  const movies = await serverApi.get("/discover/movie", { params: { with_genres: genre } });
  return res.json(movies.data);
}
