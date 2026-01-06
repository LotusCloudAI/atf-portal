import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../services/firebase";

export default function News() {
  const [news, setNews] = useState<any[]>([]);
  const [category, setCategory] = useState("all");
  const [featured, setFeatured] = useState<any | null>(null);

  const categories = [
    { key: "all", label: "All" },
    { key: "atf", label: "ATF" },
    { key: "local", label: "Local" },
    { key: "usa", label: "USA" },
    { key: "india", label: "India" },
    { key: "international", label: "International" },
  ];

  useEffect(() => {
    let q;

    if (category === "all") {
      q = query(collection(db, "news"), orderBy("createdAt", "desc"));
    } else {
      q = query(
        collection(db, "news"),
        where("category", "==", category),
        orderBy("createdAt", "desc")
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNews(articles);

      // Set featured article (first item)
      if (articles.length > 0) {
        setFeatured(articles[0]);
      }
    });

    return () => unsubscribe();
  }, [category]);

  return (
    <>
      {/* ----------------------------------------------------
          PAGE HEADER
      ---------------------------------------------------- */}
      <div className="bg-[#1E3A8A] text-white py-10 text-center">
        <h1 className="text-4xl font-bold">ATF News</h1>
        <p className="text-blue-100 mt-2">Latest updates from the Telugu community worldwide</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* ----------------------------------------------------
            LEFT SECTION (NEWS CONTENT)
        ---------------------------------------------------- */}
        <div className="lg:col-span-3 space-y-10">

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={`px-4 py-2 rounded-full border ${
                  category === c.key
                    ? "bg-[#B91C1C] text-white border-[#B91C1C]"
                    : "border-gray-400 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* ----------------------------------------------------
              FEATURED ARTICLE (HERO SECTION)
          ---------------------------------------------------- */}
          {featured && (
            <Link to={`/news/${featured.id}`}>
              <div className="rounded-2xl shadow-lg overflow-hidden relative">
                <img
                  src={featured.imageUrl || "/images/news-default.jpg"}
                  alt="Featured"
                  className="w-full h-80 object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{featured.headline}</h2>
                  <p className="text-gray-200 line-clamp-2">{featured.description}</p>
                </div>
              </div>
            </Link>
          )}

          {/* ----------------------------------------------------
              MSN STYLE NEWS GRID
          ---------------------------------------------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {news.slice(1).map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="rounded-xl shadow hover:shadow-lg transition bg-white"
              >
                <img
                  src={item.imageUrl || "/images/news-default.jpg"}
                  className="w-full h-48 object-cover rounded-t-xl"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{item.headline}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>

                  <p className="text-xs text-gray-500 mt-3">
                    Category: {item.category.toUpperCase()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ----------------------------------------------------
            RIGHT SIDEBAR (TRENDING)
        ---------------------------------------------------- */}
        <aside className="space-y-6">

          <h3 className="text-2xl font-bold text-[#1E3A8A]">Trending Now</h3>

          <div className="space-y-4">
            {news.slice(0, 5).map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="block p-3 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                <p className="font-medium text-sm">{item.headline}</p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
