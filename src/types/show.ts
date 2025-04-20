export interface Show {
  id?: string; // Firestore auto-generates this
  artist: string;
  date: string; // ISO format (e.g., "2025-06-15")
  venue: string;
  location: string;
  isPast: boolean;
  notes?: string;
  imageUrl?: string;
}
