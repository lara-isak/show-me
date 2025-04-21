import { NextResponse } from "next/server";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../lib/firebase";

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.API_SECRET_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { artist, date, displayDate, venue } = body;

  try {
    await addDoc(collection(db, "concerts"), {
      artist,
      date,
      displayDate,
      venue,
      isPast: new Date(date) < new Date(),
      createdAt: new Date().toISOString(),
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to save concert" },
      { status: 500 }
    );
  }
}
