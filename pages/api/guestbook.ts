import prisma from "../../utils/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(403).send("Unauthorized");
  }

  if (req.method === "POST") {
    await prisma.guestbook.create({
      data: {
        email: session.user.email,
        body: (req.body.body || "").slice(0, 500),
        created_by: session.user.name,
      },
    });

    return res.status(200);
  }
}
