import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";

export default function AdminMedia() {
  const addSample = async () => {
    await addDoc(collection(db, "media"), {
      title: "Sample Media",
      description: "ATF event media",
      type: "image",
      category: "general",
      thumbnailUrl: "",
      mediaUrl: "",
      isFeatured: false,
      status: "draft",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    alert("Media added");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Admin Media</h1>
      <button onClick={addSample} className="bg-blue-600 text-white px-4 py-2">
        Add Sample Media
      </button>
    </div>
  );
}
