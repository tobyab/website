import prisma from "../../utils/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

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

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(403).send("Unauthorized");
  }

  if (req.method === "POST") {
    const newEntry = await prisma.guestbook.create({
      data: {
        email: session.user.email,
        body: (req.body.body || "").slice(0, 500),
        created_by: session.user.name,
      },
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at,
    });
  }

  return res.send("Hey! That method isn't allowed!");
}
