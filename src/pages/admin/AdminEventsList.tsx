import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ref, deleteObject, getStorage } from "firebase/storage";
import { db } from "../../services/firebase";
import BackHome from "../../components/BackHome";
import { Link } from "react-router-dom";

export default function AdminEventsList() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const storage = getStorage();

  async function loadEvents() {
    setLoading(true);

    const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    const list: any[] = [];
    snapshot.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));

    setEvents(list);
    setLoading(false);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  // Safely format date from Firestore (string or Timestamp)
  function formatDate(evt: any) {
    const d = evt.date || evt.eventDate;
    if (!d) return "";

    if (d.toDate) return d.toDate().toDateString();
    return new Date(d + "T00:00:00").toDateString();
  }

  // Extract storage path from downloadURL
  function extractStoragePath(url: string) {
    try {
      const decoded = decodeURIComponent(url);
      const pathStart = decoded.indexOf("/o/") + 3; 
      const pathEnd = decoded.indexOf("?"); 
      return decoded.substring(pathStart, pathEnd);
    } catch (err) {
      return "";
    }
  }

  // DELETE EVENT
  async function deleteEvent(evt: any) {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the event: "${evt.title}"?`
    );
    if (!confirmDelete) return;

    try {
      // Delete image from Firebase Storage
      if (evt.imageUrl) {
        const storagePath = extractStoragePath(evt.imageUrl);
        if (storagePath) {
          const imageRef = ref(storage, storagePath);
          await deleteObject(imageRef).catch(() => {});
        }
      }

      // Delete Firestore document
      await deleteDoc(doc(db, "events", evt.id));

      alert("Event deleted successfully.");
      loadEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Error deleting event.");
    }
  }

  return (
    <>
      <BackHome />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#B91C1C]">Manage Events</h1>

          <Link
            to="/admin/events/create"
            className="px-4 py-2 bg-[#1E3A8A] text-white rounded hover:bg-[#142966]"
          >
            + Create Event
          </Link>
        </div>

        {loading && <p className="mt-4">Loading events...</p>}

        {!loading && events.length === 0 && (
          <p className="text-gray-600 mt-4">No events found.</p>
        )}

        {/* EVENTS TABLE */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border rounded-xl bg-white shadow">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border w-40">Actions</th>
              </tr>
            </thead>

            <tbody>
              {events.map((evt) => (
                <tr key={evt.id} className="border-t">
                  <td className="p-3 border">
                    {evt.imageUrl ? (
                      <img
                        src={evt.imageUrl}
                        className="h-16 w-24 object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-500">No Image</span>
                    )}
                  </td>

                  <td className="p-3 border font-semibold">{evt.title}</td>

                  <td className="p-3 border">{formatDate(evt)}</td>

                  <td className="p-3 border">{evt.location}</td>

                  <td className="p-3 border">
                    <div className="flex gap-3">
                      {/* EDIT */}
                      <Link
                        to={`/admin/events/edit/${evt.id}`}
                        className="px-3 py-1 bg-[#1E3A8A] text-white rounded hover:bg-[#142966]"
                      >
                        Edit
                      </Link>

                      {/* DELETE */}
                      <button
                        onClick={() => deleteEvent(evt)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </>
  );
}
