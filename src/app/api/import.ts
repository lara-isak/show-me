import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.method !== "POST" ||
    req.headers.authorization !== `Bearer ${process.env.API_SECRET_KEY}`
  ) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { artist, date, venue } = req.body;

  try {
    await addDoc(collection(db, "concerts"), {
      artist,
      date,
      venue,
      isPast: new Date(date) < new Date(),
      createdAt: new Date().toISOString(),
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: "Failed to save concert" });
  }
}
