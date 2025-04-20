"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Show } from "../types/show";

export default function ConcertList() {
  const [concerts, setConcerts] = useState<Show[]>([]);

  useEffect(() => {
    const fetchConcerts = async () => {
      const querySnapshot = await getDocs(collection(db, "concerts"));
      const concertsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Show[];
      setConcerts(concertsData);
    };
    fetchConcerts();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">My Concerts</h2>
      {concerts.map((concert) => (
        <div key={concert.id} className="p-4 border rounded">
          <h3 className="font-bold">{concert.artist}</h3>
          <p>
            {concert.venue} - {new Date(concert.date).toLocaleDateString()}
          </p>
          <p>{concert.isPast ? "✅ Attended" : "🎟️ Upcoming"}</p>
        </div>
      ))}
    </div>
  );
}
