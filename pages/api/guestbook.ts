import prisma from "../../utils/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        updated_at: "desc",
      },
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        created_by: entry.created_by,
        updated_at: entry.updated_at,
      }))
    );
  }

  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(403).send("Unauthorized");
  }

  const email = session.user.email as string;
  const name = session.user.name as string;

  if (req.method === "POST") {
    await prisma.guestbook.create({
      data: {
        email,
        body: (req.body || "").slice(0, 500),
        created_by: name,
      },
    });

    return res.status(200).json({ error: null });
  }

  return res.send("Hey! That method isn't allowed!");
}
