import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import BackHome from "../components/BackHome";

interface EventType {
  title: string;
  description: string;
  date: any; // can be string or Firestore Timestamp
  location: string;
  imageUrl?: string;
}

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState<EventType | null>(null);
  const [loading, setLoading] = useState(true);

  // Safe date formatting
  function formatDate(d: any) {
    if (!d) return "TBD";

    // Firestore Timestamp
    if (typeof d === "object" && d.toDate) {
      return d.toDate().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    // "YYYY-MM-DD" string
    return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  async function loadEventDetails() {
    if (!id) return;

    const ref = doc(db, "events", id);
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      setEvent(snapshot.data() as EventType);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadEventDetails();
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p>Loading event details...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div classname="max-w-5xl mx-auto px-6 py-12">
        <p className="text-red-600">Event not found.</p>
      </div>
    );
  }

  return (
    <>
      <BackHome />

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#B91C1C] mb-6">
          {event.title}
        </h1>

        {/* EVENT IMAGE */}
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full max-h-[420px] object-cover rounded-xl shadow-md"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 rounded-xl" />
        )}

        {/* DETAILS */}
        <div className="mt-6 space-y-4">
          <p className="text-lg text-gray-800">
            <strong>Date:</strong> {formatDate(event.date)}
          </p>

          <p className="text-lg text-gray-800">
            <strong>Location:</strong> {event.location}
          </p>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line mt-4">
            {event.description}
          </p>
        </div>
      </div>
    </>
  );
}
