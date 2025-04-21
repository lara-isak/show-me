"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function AddShow() {
  const [artist, setArtist] = useState("");
  const [date, setDate] = useState("");
  const [displayDate, setDisplayDate] = useState("");
  const [venue, setVenue] = useState("");
  const [isPast, setIsPast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, "concerts"), {
      artist,
      date,
      displayDate,
      venue,
      isPast,
    });
    alert("Concert added!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Display Date"
        value={displayDate}
        onChange={(e) => setDisplayDate(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isPast}
          onChange={(e) => setIsPast(e.target.checked)}
          className="mr-2"
        />
        Past Concert?
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Concert
      </button>
    </form>
  );
}
