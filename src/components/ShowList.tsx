"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

interface Concert {
  id: string;
  artist: string;
  date: string;
  venue: string;
  isPast: boolean;
}

export default function ShowList() {
  const [concerts, setConcerts] = useState<Concert[]>([]);

  useEffect(() => {
    const fetchConcerts = async () => {
      const q = query(collection(db, "concerts"), orderBy("date", "desc"));
      const snapshot = await getDocs(q);
      const concertsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Concert[];
      setConcerts(concertsData);
    };
    fetchConcerts();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">My Concerts</h2>
      {concerts.map((concert) => (
        <div key={concert.id} className="p-4 border rounded-lg">
          <h3 className="font-bold text-lg">{concert.artist}</h3>
          <p>
            {concert.date} · {concert.venue}
          </p>
          <p className={concert.isPast ? "text-green-500" : "text-blue-500"}>
            {concert.isPast ? "✅ Attended" : "🎟️ Upcoming"}
          </p>
        </div>
      ))}
    </div>
  );
}
