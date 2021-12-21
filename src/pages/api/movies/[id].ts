import { NextApiRequest, NextApiResponse } from "next";
import { serverApi } from "../../../services/serverApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const movie = await serverApi.get(`/movie/${id}}`);
  return res.json(movie.data);
}
