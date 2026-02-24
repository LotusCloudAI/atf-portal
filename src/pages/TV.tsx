import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";
import { db } from "../services/firebase";

export default function TV() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [category, setCategory] = useState("all");
  const [liveProgram, setLiveProgram] = useState<any | null>(null);

  const categories = [
    { key: "all", label: "All" },
    { key: "news", label: "News" },
    { key: "events", label: "Events" },
    { key: "interviews", label: "Interviews" },
    { key: "women", label: "Women" },
    { key: "youth", label: "Youth" },
    { key: "community", label: "Community" },
  ];

  useEffect(() => {
    const base = collection(db, "tv_videos");

    // Load LIVE videos
    const liveQuery = query(base, where("type", "==", "live"));
    onSnapshot(liveQuery, (snapshot) => {
      const live = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setLiveProgram(live.length > 0 ? live[0] : null);
    });

    // Load recorded programs based on category
    let q;
    if (category === "all") {
      q = query(base, where("type", "==", "recorded"), orderBy("createdAt", "desc"));
    } else {
      q = query(
        base,
        where("category", "==", category),
        where("type", "==", "recorded"),
        orderBy("createdAt", "desc")
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPrograms(list);
    });

    return () => unsubscribe();
  }, [category]);

  return (
    <>
      {/* ----------------------------------------------------
          ATF TV HERO BANNER
      ---------------------------------------------------- */}
      <div className="relative h-72 w-full bg-black text-white flex items-center justify-center">
        <img
          src="/images/tv-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <h1 className="text-5xl font-bold z-10">ATF TV</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* ----------------------------------------------------
            LIVE STREAM SECTION
        ---------------------------------------------------- */}
        {liveProgram ? (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#B91C1C] mb-4">LIVE NOW</h2>

            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={liveProgram.videoUrl}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>

            <h3 className="text-2xl font-semibold mt-4">{liveProgram.title}</h3>
            <p className="text-gray-700">{liveProgram.desc}</p>
          </div>
        ) : (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">Live Stream</h2>

            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-lg flex items-center justify-center text-white">
              <p className="text-lg">Live streaming will appear here</p>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            CATEGORY FILTERS
        ---------------------------------------------------- */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`px-4 py-2 rounded-full border ${
                category === c.key
                  ? "bg-[#1E3A8A] text-white border-[#1E3A8A]"
                  : "border-gray-400 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* ----------------------------------------------------
            RECORDED PROGRAMS GRID
        ---------------------------------------------------- */}
        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Programs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((item) => (
            <Link
              key={item.id}
              to={`/tv/programs/${item.id}`}
              className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.thumbnail || "/images/tv-default.jpg"}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>

                <p className="text-xs text-gray-500 mt-2">
                  Category: {item.category.toUpperCase()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
