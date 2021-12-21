import { NextApiRequest, NextApiResponse } from "next";
import { serverApi } from "../../services/serverApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const originals = await serverApi.get("/discover/tv?with_networks=213");
  return res.json(originals.data);
}
