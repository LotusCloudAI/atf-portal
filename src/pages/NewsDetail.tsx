import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, collection, query, where, limit, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState<any | null>(null);
  const [related, setRelated] = useState<any[]>([]);

  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;
      const ref = doc(db, "news", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();
        setArticle(data);

        // Load related stories
        loadRelated(data.category, id);
      }
    }

    fetchArticle();
  }, [id]);

  function loadRelated(category: string, excludeId: string) {
    const q = query(
      collection(db, "news"),
      where("category", "==", category),
      limit(5)
    );

    onSnapshot(q, (snapshot) => {
      const items = snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((item) => item.id !== excludeId);

      setRelated(items);
    });
  }

  if (!article) {
    return (
      <div className="text-center py-20 text-gray-600">
        Loading news article...
      </div>
    );
  }

  return (
    <>
      {/* ----------------------------------------------
          HERO SECTION
      ---------------------------------------------- */}
      <div className="relative h-80 w-full">
        <img
          src={article.imageUrl || "/images/news-default.jpg"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-6 text-white">
          <h1 className="text-4xl font-bold max-w-4xl">{article.headline}</h1>
        </div>
      </div>

      {/* ----------------------------------------------
          ARTICLE CONTENT
      ---------------------------------------------- */}
      <div className="max-w-4xl mx-auto px-6 py-10">

        <p className="text-sm text-gray-500">
          Category: <span className="font-semibold">{article.category.toUpperCase()}</span>
        </p>

        <p className="text-sm text-gray-500 mt-1">
          Author: {article.author || "Chief Editor – Dr. Veera B. Dasari"}
        </p>

        <p className="text-sm text-gray-500 mt-1 mb-6">
          Published on: {article.createdAt?.toDate().toLocaleString()}
        </p>

        <p className="text-lg leading-relaxed text-gray-800 mb-10">
          {article.description}
        </p>

        {/* ----------------------------------------------
            OPTIONAL VIDEO EMBED
        ---------------------------------------------- */}
        {article.videoUrl && (
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-3 text-[#1E3A8A]">Related Video</h3>

            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={article.videoUrl}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* ----------------------------------------------
            RELATED STORIES
        ---------------------------------------------- */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#B91C1C] mb-6">Related News</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.length === 0 && (
              <p className="text-gray-600">No related articles found.</p>
            )}

            {related.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="rounded-xl shadow hover:shadow-lg transition bg-white"
              >
                <img
                  src={item.imageUrl || "/images/news-default.jpg"}
                  className="w-full h-40 object-cover rounded-t-xl"
                />

                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-1">{item.headline}</h4>
                  <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
