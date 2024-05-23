import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://usw1-fitting-swine-33716.upstash.io',
  token: process.env.UPSTASH_TOKEN,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);

 if (!session) {
    return res.status(403).send("Unauthorized");
  }

  if (req.method === "POST") {
    await redis.set(`guestbook:${Date.now()}`, {
      body: (req.body.body || "").slice(0, 500),
      created_by: session.user.name,
      created_at: new Date().toISOString(),
    })

    return res.status(200).json("Success!");
  }


  return res.status(200).json("POST PLS!");
}
