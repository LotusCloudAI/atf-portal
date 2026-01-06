import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  doc,
  getDoc
} from "firebase/firestore";
import { db } from "../../services/firebase";

export default function MediaAlbum() {
  const { id } = useParams();
  const [album, setAlbum] = useState<any>(null);
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fullscreen viewer
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ----------------------------
     LOAD ALBUM META
  ----------------------------- */
  useEffect(() => {
    async function loadAlbum() {
      if (!id) return;

      const ref = doc(db, "media_albums", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setAlbum({ id: snap.id, ...snap.data() });
      }
    }

    loadAlbum();
  }, [id]);

  /* ----------------------------
     LOAD MEDIA FILES
  ----------------------------- */
  useEffect(() => {
    if (!id) return;

    const q = query(
      collection(db, "media_files"),
      where("albumId", "==", id),
      orderBy("createdAt", "asc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMedia(list);
      setLoading(false);
    });

    return () => unsub();
  }, [id]);

  /* ----------------------------
     VIEWER HANDLERS
  ----------------------------- */
  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => setViewerOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev < media.length - 1 ? prev + 1 : prev
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {album && (
        <>
          <h1 className="text-3xl font-bold text-[#1E3A8A]">
            {album.title}
          </h1>

          <p className="text-gray-600 mt-1">
            {album.eventDate?.toDate?.().toLocaleDateString()}
          </p>

          <p className="text-gray-700 mt-3">{album.description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {album.tags?.map((tag: string, i: number) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </>
      )}

      {loading && <p className="text-gray-600 mt-6">Loading media...</p>}

      {/* ------------------------------------------
           MASONRY GRID
      ------------------------------------------- */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mt-10">
        {media.map((item, index) => (
          <div key={item.id} className="mb-4 break-inside-avoid">

            {/* IMAGE */}
            {item.type === "image" && (
              <img
                src={item.url}
                className="w-full rounded-lg shadow cursor-pointer hover:opacity-80"
                onClick={() => openViewer(index)}
              />
            )}

            {/* VIDEO (Firebase Storage mp4 support) */}
            {item.type === "video" && (
              <video
                controls
                className="w-full rounded-lg shadow bg-black"
              >
                <source src={item.url} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {/* ------------------------------------------
           FULLSCREEN VIEWER
      ------------------------------------------- */}
      {viewerOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={closeViewer}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ×
          </button>

          {media[currentIndex]?.type === "image" && (
            <img
              src={media[currentIndex].url}
              className="max-w-4xl max-h-[90vh] object-contain rounded"
              alt=""
            />
          )}

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            disabled={currentIndex === 0}
            className="absolute left-10 text-white text-4xl"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            disabled={currentIndex === media.length - 1}
            className="absolute right-10 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
