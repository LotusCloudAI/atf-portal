import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebase";

export default function MediaGallery() {
  const [albums, setAlbums] = useState<any[]>([]);
  const [filteredAlbums, setFilteredAlbums] = useState<any[]>([]);

  const [tagsList, setTagsList] = useState<string[]>([]);
  const [yearsList, setYearsList] = useState<number[]>([]);

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  /* ------------------------------------------------------------
     LOAD ALL ALBUMS
  ------------------------------------------------------------ */
  useEffect(() => {
    const q = query(collection(db, "media_albums"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAlbums(list);
      setFilteredAlbums(list);
      extractFilters(list);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  /* ------------------------------------------------------------
     EXTRACT TAGS AND YEARS FROM ALBUMS
  ------------------------------------------------------------ */
  function extractFilters(list: any[]) {
    const tags = new Set<string>();
    const years = new Set<number>();

    list.forEach((album) => {
      if (album.tags) album.tags.forEach((t: string) => tags.add(t));

      if (album.eventDate) {
        const y = album.eventDate.toDate().getFullYear();
        years.add(y);
      }
    });

    setTagsList(Array.from(tags));
    setYearsList(Array.from(years).sort((a, b) => b - a));
  }

  /* ------------------------------------------------------------
     APPLY FILTERS
  ------------------------------------------------------------ */
  useEffect(() => {
    let result = [...albums];

    if (activeTag) {
      result = result.filter((a) => a.tags?.includes(activeTag));
    }

    if (activeYear) {
      result = result.filter(
        (a) => a.eventDate?.toDate().getFullYear() === activeYear
      );
    }

    if (search.trim() !== "") {
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(search.toLowerCase()) ||
          a.tags?.some((t: string) =>
            t.toLowerCase().includes(search.toLowerCase())
          )
      );
    }

    setFilteredAlbums(result);
  }, [activeTag, activeYear, search, albums]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold text-[#1E3A8A] mb-6">
        ATF Media Gallery
      </h1>

      {/* ------------------------------------------------------------
         SEARCH BOX
      ------------------------------------------------------------ */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search albums..."
          className="w-full px-4 py-3 border rounded-lg shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ------------------------------------------------------------
         TAG FILTERS
      ------------------------------------------------------------ */}
      {tagsList.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tagsList.map((tag, i) => (
            <button
              key={i}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-3 py-1 rounded-full text-sm shadow ${
                activeTag === tag
                  ? "bg-[#B91C1C] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}

      {/* ------------------------------------------------------------
         YEAR FILTERS
      ------------------------------------------------------------ */}
      {yearsList.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {yearsList.map((year, i) => (
            <button
              key={i}
              onClick={() => setActiveYear(activeYear === year ? null : year)}
              className={`px-3 py-1 rounded-full text-sm shadow ${
                activeYear === year
                  ? "bg-[#1E3A8A] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      )}

      {loading && <p className="text-gray-600">Loading albums...</p>}

      {/* ------------------------------------------------------------
         MAGAZINE-LAYOUT ALBUM GRID
      ------------------------------------------------------------ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredAlbums.map((album) => (
          <Link
            key={album.id}
            to={`/media/${album.id}`}
            className="group block rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >
            {/* Cover Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={album.coverImage}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
            </div>

            {/* Info */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#B91C1C]">
                {album.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {album.eventDate?.toDate().toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}

        {filteredAlbums.length === 0 && !loading && (
          <p className="text-gray-600 text-center col-span-full">
            No albums found for selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
