import React, { useState } from "react";
import BackHome from "../../components/BackHome";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AdminTV() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("news");
  const [type, setType] = useState("recorded");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const storage = getStorage();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    let thumbnailUrl = "";

    try {
      // Upload image thumbnail
      if (thumbnail) {
        const fileRef = ref(storage, `tv_thumbnails/${Date.now()}_${thumbnail.name}`);
        await uploadBytes(fileRef, thumbnail);
        thumbnailUrl = await getDownloadURL(fileRef);
      }

      // Save to Firestore
      await addDoc(collection(db, "tv_programs"), {
        title,
        desc,
        category,
        type, // live or recorded
        thumbnail: thumbnailUrl,
        videoUrl,
        createdAt: serverTimestamp(),
      });

      setSuccess("TV program uploaded successfully.");

      // Reset form
      setTitle("");
      setDesc("");
      setCategory("news");
      setType("recorded");
      setThumbnail(null);
      setVideoUrl("");

    } catch (error) {
      console.error("Error uploading TV program:", error);
      setSuccess("Error occurred while uploading.");
    }

    setLoading(false);
  }

  return (
    <>
      <BackHome />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#B91C1C] mb-2">
          Upload TV Program
        </h1>
        <p className="text-gray-700 mb-6">
          Add recorded episodes or live stream links for ATF TV.
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
          {/* Title */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Program Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="e.g., ATF Women Empowerment Episode 1"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Description
            </label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={4}
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Write program description..."
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
              <option value="news">News</option>
              <option value="events">Events</option>
              <option value="interviews">Interviews</option>
              <option value="women">Women</option>
              <option value="youth">Youth</option>
              <option value="community">Community Highlights</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Program Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="recorded">Recorded Episode</option>
              <option value="live">Live Stream</option>
            </select>
          </div>

          {/* Video URL */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Video URL (YouTube, Vimeo, ATF-TV)
            </label>
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="https://youtube.com/live/..."
            />
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Upload Thumbnail (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-[#1E3A8A] text-white rounded-lg hover:bg-[#142966]"
          >
            {loading ? "Uploading..." : "Upload Program"}
          </button>
        </form>
      </div>
    </>
  );
}
