// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);
    try {
      const data = await prisma.argument.create({
        data: {
          name: req.body.name,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: "Error creating a new argument" });
    }
  }
}
