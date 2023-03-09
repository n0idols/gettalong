import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      console.log(req.body);
      try {
        const data = await prisma.incident.create({
          data: {
            name: req.body.name,
            argumentId: req.body.argumentId,
            intensityId: req.body.intensityId,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error creating a new appointment" });
      }
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
}
