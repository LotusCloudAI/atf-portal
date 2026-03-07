import { useParams } from "react-router-dom";
import { useState } from "react";
import { mockNews } from "../data/mockNews";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase";

const EditNews = () => {
  const { slug } = useParams();
  const article = mockNews.find(n => n.slug === slug);

  const [title, setTitle] = useState(article?.title || "");

  if (!article) return <p>Article not found</p>;

  const handleUpdate = async () => {
    if (!article?.id) return;

    try {
        const ref = doc(db, "news", article.id);
        await updateDoc(ref, { title });
        alert("Updated Successfully");
    } catch (error) {
      console.error(error);
      alert("Update Failed");
    }
};


  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit News</h2>

      <input
        className="border p-2 w-full mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </div>
  );
};

export default EditNews;