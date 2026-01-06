import React, { useState } from "react";
import BackHome from "../../components/BackHome";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";

export default function AdminNews() {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("atf");
  const [image, setImage] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const storage = getStorage();
  const auth = getAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    let imageUrl = "";

    try {
      // Upload news image
      if (image) {
        const fileRef = ref(storage, `news/${Date.now()}_${image.name}`);
        await uploadBytes(fileRef, image);
        imageUrl = await getDownloadURL(fileRef);
      }

      // Determine author (default to Chief Editor)
      const user = auth.currentUser;
      const author =
        user?.email || "Chief Editor – Dr. Veera B. Dasari";

      // Save article to Firestore
      await addDoc(collection(db, "news"), {
        headline,
        description,
        imageUrl,
        videoUrl: videoUrl || "",
        category,
        author,
        createdAt: serverTimestamp(),
      });

      setSuccess("News published successfully.");

      // Reset form
      setHeadline("");
      setDescription("");
      setImage(null);
      setCategory("atf");
      setVideoUrl("");

    } catch (err) {
      console.error("Error publishing news:", err);
      setSuccess("Error publishing news.");
    }

    setLoading(false);
  }

  return (
    <>
      <BackHome />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#B91C1C] mb-2">Publish News</h1>
        <p className="text-gray-700 mb-6">
          Create official news updates, community stories, and press releases.
        </p>

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            {success}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 space-y-6"
        >
          {/* Headline */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Headline
            </label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter headline"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Description / Full Article
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Write the article..."
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="atf">ATF Announcements</option>
              <option value="local">Local News (USA Cities)</option>
              <option value="usa">USA National</option>
              <option value="india">India – AP & Telangana</option>
              <option value="international">
                International Telugu Community
              </option>
            </select>
          </div>

          {/* Video Link (optional) */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Video URL (optional – YouTube, Vimeo, ATF-TV)
            </label>
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="https://youtube.com/..."
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Upload Image (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-[#1E3A8A] text-white rounded-lg hover:bg-[#142966]"
          >
            {loading ? "Publishing..." : "Publish News"}
          </button>
        </form>
      </div>
    </>
  );
}
